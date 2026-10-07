import * as THREE from 'three';

// Render path: scene A / scene B (HDR) -> ink dissolve mix -> dual-kawase bloom -> grade,
// ACES, chromatic fringe, grain, vignette -> sRGB on screen.

const VS = /* glsl */`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const NOISE = /* glsl */`
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),u.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x), u.y); }
float fbm(vec2 p){ float a=0., w=.5; for(int i=0;i<5;i++){ a+=w*vn(p); p=p*2.03+17.1; w*=.5; } return a; }
`;

function quad(mat) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  m.frustumCulled = false;
  const s = new THREE.Scene(); s.add(m);
  return { scene: s, mesh: m };
}

export const DEFAULT_GRADE = {
  exposure: 1.0, contrast: 1.05, sat: 1.0, bloom: 0.6, threshold: 0.8,
  shadows: [1, 1, 1], highlights: [1, 1, 1], vignette: 0.55, grain: 0.06, ca: 0.0025, lift: 0.0,
};

export class Pipeline {
  constructor(renderer, { msaa = 4 } = {}) {
    this.r = renderer;
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const hf = { type: THREE.HalfFloatType, depthBuffer: true };
    this.rtA = new THREE.WebGLRenderTarget(4, 4, { ...hf, samples: msaa });
    this.rtB = new THREE.WebGLRenderTarget(4, 4, { ...hf, samples: msaa });
    this.rtMix = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: false });
    this.levels = [];
    for (let i = 0; i < 6; i++) this.levels.push(new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: false }));

    this.mixQ = quad(new THREE.ShaderMaterial({
      vertexShader: VS, depthTest: false, depthWrite: false,
      uniforms: { tA: { value: null }, tB: { value: null }, t: { value: 0 }, time: { value: 0 }, aspect: { value: 1 }, glowCol: { value: new THREE.Color(1, 0.82, 0.66) } },
      fragmentShader: /* glsl */`
        varying vec2 vUv; uniform sampler2D tA, tB; uniform float t, time, aspect; uniform vec3 glowCol;
        ${NOISE}
        void main(){
          vec2 uv = vUv;
          if (t <= 0.0) { gl_FragColor = texture2D(tA, uv); return; }
          if (t >= 1.0) { gl_FragColor = texture2D(tB, uv); return; }
          float n = fbm(vec2(uv.x*aspect, uv.y)*2.6 + vec2(0.0, time*0.04));
          n = n*0.85 + (1.0-length(uv-0.5))*0.15;
          float edge = mix(-0.08, 1.02, t);
          float m = smoothstep(edge-0.05, edge+0.05, n);           // 1 = still A
          float bell = sin(t*3.14159);
          vec2 disp = vec2(n-0.5, fbm(uv*3.1+5.0)-0.5) * 0.035 * bell;
          vec3 a = texture2D(tA, uv + disp*(1.0-m)).rgb;
          vec3 b = texture2D(tB, uv - disp*m).rgb;
          float rim = exp(-abs(n-edge)*55.0) * bell;
          gl_FragColor = vec4(mix(b, a, m) + rim*glowCol*1.4, 1.0);
        }`,
    }));

    this.preQ = quad(new THREE.ShaderMaterial({
      vertexShader: VS, depthTest: false, depthWrite: false,
      uniforms: { tSrc: { value: null }, threshold: { value: 0.8 }, texel: { value: new THREE.Vector2() } },
      fragmentShader: /* glsl */`varying vec2 vUv; uniform sampler2D tSrc; uniform float threshold; uniform vec2 texel;
        void main(){
          vec3 c = texture2D(tSrc, vUv+texel*vec2(-1,-1)).rgb + texture2D(tSrc, vUv+texel*vec2(1,-1)).rgb
                 + texture2D(tSrc, vUv+texel*vec2(-1,1)).rgb + texture2D(tSrc, vUv+texel*vec2(1,1)).rgb;
          c *= 0.25;
          float br = max(c.r, max(c.g, c.b));
          float k = 0.5; float soft = clamp(br - threshold + k, 0.0, 2.0*k); soft = soft*soft/(4.0*k+1e-4);
          float w = max(soft, br - threshold) / max(br, 1e-4);
          gl_FragColor = vec4(min(c*w, vec3(40.0)), 1.0);
        }`,
    }));
    this.downQ = quad(new THREE.ShaderMaterial({
      vertexShader: VS, depthTest: false, depthWrite: false,
      uniforms: { tSrc: { value: null }, texel: { value: new THREE.Vector2() } },
      fragmentShader: /* glsl */`varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 texel;
        void main(){ vec2 o = texel;
          vec3 s = texture2D(tSrc, vUv).rgb*4.0 + texture2D(tSrc, vUv+vec2(-o.x,-o.y)).rgb + texture2D(tSrc, vUv+vec2(o.x,-o.y)).rgb
                 + texture2D(tSrc, vUv+vec2(-o.x,o.y)).rgb + texture2D(tSrc, vUv+vec2(o.x,o.y)).rgb;
          gl_FragColor = vec4(s/8.0, 1.0); }`,
    }));
    this.upQ = quad(new THREE.ShaderMaterial({
      vertexShader: VS, depthTest: false, depthWrite: false, transparent: true,
      blending: THREE.AdditiveBlending,
      uniforms: { tSrc: { value: null }, texel: { value: new THREE.Vector2() }, w: { value: 1 } },
      fragmentShader: /* glsl */`varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 texel; uniform float w;
        void main(){ vec2 o = texel;
          vec3 s = texture2D(tSrc, vUv+vec2(-o.x*2.0,0.)).rgb + texture2D(tSrc, vUv+vec2(o.x*2.0,0.)).rgb
                 + texture2D(tSrc, vUv+vec2(0.,-o.y*2.0)).rgb + texture2D(tSrc, vUv+vec2(0.,o.y*2.0)).rgb
                 + (texture2D(tSrc, vUv+vec2(-o.x,-o.y)).rgb + texture2D(tSrc, vUv+vec2(o.x,-o.y)).rgb
                 +  texture2D(tSrc, vUv+vec2(-o.x,o.y)).rgb + texture2D(tSrc, vUv+vec2(o.x,o.y)).rgb)*2.0;
          gl_FragColor = vec4(s/12.0*w, 1.0); }`,
    }));

    this.finalQ = quad(new THREE.ShaderMaterial({
      vertexShader: VS, depthTest: false, depthWrite: false,
      uniforms: {
        tScene: { value: null }, tBloom: { value: null }, res: { value: new THREE.Vector2(1, 1) },
        time: { value: 0 }, bloom: { value: 0.6 }, exposure: { value: 1 }, contrast: { value: 1 }, sat: { value: 1 },
        shadows: { value: new THREE.Vector3(1, 1, 1) }, highlights: { value: new THREE.Vector3(1, 1, 1) },
        vignette: { value: 0.5 }, grain: { value: 0.05 }, ca: { value: 0.002 }, fade: { value: 0 }, invert: { value: 0 },
        lift: { value: 0 }, flash: { value: 0 },
      },
      fragmentShader: /* glsl */`
        varying vec2 vUv;
        uniform sampler2D tScene, tBloom; uniform vec2 res; uniform float time, bloom, exposure, contrast, sat, vignette, grain, ca, fade, invert, lift, flash;
        uniform vec3 shadows, highlights;
        ${NOISE}
        vec3 aces(vec3 x){ const float a=2.51, b=0.03, c=2.43, d=0.59, e=0.14; return clamp((x*(a*x+b))/(x*(c*x+d)+e), 0.0, 1.0); }
        vec3 toSRGB(vec3 c){ return mix(c*12.92, 1.055*pow(c, vec3(1.0/2.4))-0.055, step(0.0031308, c)); }
        void main(){
          vec2 uv = vUv; vec2 d = uv - 0.5; d.x *= res.x/res.y; float r2 = dot(d, d);
          vec2 off = (uv-0.5) * ca * (0.4 + r2*2.0);
          vec3 col = vec3(texture2D(tScene, uv - off).r, texture2D(tScene, uv).g, texture2D(tScene, uv + off).b);
          col += texture2D(tBloom, uv).rgb * bloom;
          col *= exposure;
          col += flash;
          col = aces(col);
          col = toSRGB(col);
          float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
          col = mix(vec3(l), col, sat);
          col = (col - 0.5) * contrast + 0.5;
          col *= mix(shadows, highlights, smoothstep(0.05, 0.85, l));
          col = col*(1.0-lift) + lift*vec3(0.06,0.055,0.05);
          col *= 1.0 - vignette * smoothstep(0.15, 0.95, r2*1.6);
          float g = h21(uv*res + vec2(fract(time*7.13)*311.0, fract(time*3.71)*173.0)) - 0.5;
          col += g * grain * (1.15 - l*0.7);
          col = mix(col, 1.0 - col, invert);
          col *= 1.0 - fade;
          gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
        }`,
    }));
    this.grade = { ...DEFAULT_GRADE };
    this.w = this.h = 0;
  }

  // scale < 1 renders the 3D layers below output resolution; the final pass upsamples
  setSize(outW, outH, scale = 1) {
    const w = Math.round(outW * scale), h = Math.round(outH * scale);
    if (w === this.w && h === this.h && outW === this.ow) return;
    this.w = w; this.h = h; this.ow = outW; this.oh = outH;
    this.rtA.setSize(w, h); this.rtB.setSize(w, h); this.rtMix.setSize(w, h);
    let lw = Math.max(1, w >> 1), lh = Math.max(1, h >> 1);
    for (const l of this.levels) { l.setSize(lw, lh); lw = Math.max(1, lw >> 1); lh = Math.max(1, lh >> 1); }
    this.finalQ.mesh.material.uniforms.res.value.set(outW, outH);
    this.mixQ.mesh.material.uniforms.aspect.value = w / h;
  }

  _pass(q, target) { this.r.setRenderTarget(target); this.r.render(q.scene, this.cam); }

  // a: {scene,camera}, b: {scene,camera} or null, t: 0..1 transition
  render(a, b, t, time, grade, extra = {}) {
    const r = this.r;
    r.autoClear = true;
    if (t < 1 || !b) { r.setRenderTarget(this.rtA); r.clear(); r.render(a.scene, a.camera); }
    if (b && t > 0) { r.setRenderTarget(this.rtB); r.clear(); r.render(b.scene, b.camera); }
    let src;
    if (b && t > 0 && t < 1) {
      const mu = this.mixQ.mesh.material.uniforms;
      mu.tA.value = this.rtA.texture; mu.tB.value = this.rtB.texture; mu.t.value = t; mu.time.value = time;
      this._pass(this.mixQ, this.rtMix); src = this.rtMix.texture;
    } else src = (b && t >= 1) ? this.rtB.texture : this.rtA.texture;

    const g = grade;
    const pu = this.preQ.mesh.material.uniforms;
    pu.tSrc.value = src; pu.threshold.value = g.threshold; pu.texel.value.set(1 / this.w, 1 / this.h);
    this._pass(this.preQ, this.levels[0]);
    const du = this.downQ.mesh.material.uniforms;
    for (let i = 1; i < this.levels.length; i++) {
      du.tSrc.value = this.levels[i - 1].texture; du.texel.value.set(1 / this.levels[i - 1].width, 1 / this.levels[i - 1].height);
      this._pass(this.downQ, this.levels[i]);
    }
    const uu = this.upQ.mesh.material.uniforms;
    r.autoClear = false;
    for (let i = this.levels.length - 1; i > 0; i--) {
      uu.tSrc.value = this.levels[i].texture; uu.texel.value.set(1 / this.levels[i].width, 1 / this.levels[i].height); uu.w.value = 1.0;
      this._pass(this.upQ, this.levels[i - 1]);
    }
    r.autoClear = true;

    const fu = this.finalQ.mesh.material.uniforms;
    fu.tScene.value = src; fu.tBloom.value = this.levels[0].texture; fu.time.value = time;
    fu.bloom.value = g.bloom; fu.exposure.value = g.exposure; fu.contrast.value = g.contrast; fu.sat.value = g.sat;
    fu.shadows.value.fromArray(g.shadows); fu.highlights.value.fromArray(g.highlights);
    fu.vignette.value = g.vignette; fu.grain.value = g.grain; fu.ca.value = g.ca; fu.lift.value = g.lift ?? 0;
    fu.fade.value = extra.fade ?? 0; fu.invert.value = extra.invert ?? 0; fu.flash.value = extra.flash ?? 0;
    this._pass(this.finalQ, null);
  }
}

export function mixGrade(a, b, t) {
  const o = {};
  for (const k of Object.keys(DEFAULT_GRADE)) {
    const va = a[k] ?? DEFAULT_GRADE[k], vb = b[k] ?? DEFAULT_GRADE[k];
    o[k] = Array.isArray(va) ? va.map((x, i) => x + (vb[i] - x) * t) : va + (vb - va) * t;
  }
  return o;
}
