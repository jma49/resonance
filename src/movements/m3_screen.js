import * as THREE from 'three';
import { Movement, softPoints } from './base.js';
import { clamp, smooth, lerp, midiName } from '../util.js';

// Ribbons of 35 mm film drift through a real desert (Poly Haven "Quarry 01", CC0); their
// frames are cut from real photographed panoramas. A projector throws the current frame on
// a far screen; each melody note advances the reel.
const FRAMES = ['canal', 'city', 'forest', 'sunset', 'dawn', 'night', 'desert', 'dark'];

function filmAtlas(assets) {
  const fw = 384, fh = 280; const c = document.createElement('canvas'); c.width = fw * FRAMES.length; c.height = fh;
  const g = c.getContext('2d');
  FRAMES.forEach((k, i) => {
    const img = assets.images[k]; const W = img.width, H = img.height;
    const sx = W * (0.18 + (i * 0.11) % 0.5), sy = H * 0.3, sw = W * 0.2, sh = sw * fh / fw;
    g.drawImage(img, sx, sy, sw, Math.min(sh, H * 0.5), i * fw, 0, fw, fh);
  });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

const FILM_FS = /* glsl */`
  uniform sampler2D atlas; uniform float time, scroll, nFrames, warm, glow; varying vec2 vUv; varying float vFade;
  float h(float x){ return fract(sin(x*91.7)*43758.5); }
  void main(){
    float u = vUv.x + scroll; float fi = floor(u); float fu = fract(u); float v = vUv.y;
    vec3 base = vec3(0.012, 0.008, 0.006);
    float inImg = step(0.14, v)*step(v, 0.86)*step(0.03, fu)*step(fu, 0.97);
    float idx = mod(fi, nFrames);
    vec2 iuv = vec2((idx + (fu-0.03)/0.94)/nFrames, (v-0.14)/0.72);
    vec3 img = texture2D(atlas, iuv).rgb;
    float l = dot(img, vec3(0.3,0.59,0.11));
    img = mix(vec3(l), img, 0.55) * mix(vec3(1.0), vec3(1.15,0.95,0.7), warm);
    img *= 0.75 + 0.5*smoothstep(0.0, 0.25, min(fu, 1.0-fu));
    float scratch = step(0.9965, h(floor(fu*300.0) + fi*7.0)) * 0.4;
    img += scratch;
    // perforations: four per frame on each edge
    float pu = fract(fu*4.0); float edge = step(v, 0.11) + step(0.89, v);
    float pv = abs(fract(v*9.0)-0.5);
    float hole = edge * step(0.3, pu) * step(pu, 0.7) * step(abs(v - (v < 0.5 ? 0.055 : 0.945)), 0.03);
    vec3 col = mix(base, img*glow, inImg) + hole*vec3(1.2, 1.05, 0.85)*glow*0.3;
    float a = (0.88 + 0.12*inImg) * vFade;
    gl_FragColor = vec4(col*vFade, 1.0);
  }`;

function ribbon(curve, width, segs, mat) {
  const pos = [], uv = [], idx = [];
  const frames = curve.computeFrenetFrames(segs, false);
  const len = curve.getLength();
  for (let i = 0; i <= segs; i++) {
    const p = curve.getPointAt(i / segs); const b = frames.binormals[i];
    for (const s of [-0.5, 0.5]) { pos.push(p.x + b.x * width * s, p.y + b.y * width * s, p.z + b.z * width * s); uv.push(i / segs * len / (width * 0.73), s + 0.5); }
    if (i < segs) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
  g.computeVertexNormals();
  return new THREE.Mesh(g, mat);
}

export class Screen extends Movement {
  build() {
    this.addEnv('desert', { exposure: 0.5, sat: 0.7, blur: 2.2, tint: [1.12, 0.94, 0.74], floorDark: 0.25, yaw: 0.9, contrast: 1.1 });
    this.parallax = 1.0;
    this.atlas = filmAtlas(this.app.assets);
    this.ribbons = [];
    const curves = [
      [[-14, 1.5, 4], [-6, 3.5, 0], [0, 2.2, -2], [6, 4.5, -5], [14, 3.0, -9]],
      [[-12, 6.5, -8], [-4, 5.0, -3], [3, 6.8, 1], [9, 5.2, 3], [16, 7.0, 0]],
      [[-16, -0.5, -4], [-7, 0.8, -7], [1, -0.2, -10], [8, 1.2, -6], [15, 0.4, -2]],
    ];
    curves.forEach((pts, k) => {
      const curve = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)), false, 'centripetal');
      const mat = new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        uniforms: { atlas: { value: this.atlas }, time: { value: 0 }, scroll: { value: 0 }, nFrames: { value: FRAMES.length }, warm: { value: 0.6 + k * 0.15 }, glow: { value: 0.95 } },
        vertexShader: `varying vec2 vUv; varying float vFade; void main(){ vUv=uv; vec4 w=modelMatrix*vec4(position,1.0); vFade = 1.0 - smoothstep(9.0, 17.0, abs(w.x)); gl_Position=projectionMatrix*viewMatrix*w; }`,
        fragmentShader: FILM_FS,
      });
      const m = ribbon(curve, 1.9, 260, mat); m.userData.k = k; m.userData.len = curve.getLength();
      this.scene.add(m); this.ribbons.push(m);
    });
    // far screen + beam
    this.screenMat = new THREE.ShaderMaterial({
      uniforms: { atlas: { value: this.atlas }, a: { value: 0 }, b: { value: 1 }, mixv: { value: 0 }, flick: { value: 1 }, n: { value: FRAMES.length } },
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `uniform sampler2D atlas; uniform float a, b, mixv, flick, n; varying vec2 vUv;
        void main(){ vec3 ca = texture2D(atlas, vec2((a+vUv.x)/n, vUv.y)).rgb; vec3 cb = texture2D(atlas, vec2((b+vUv.x)/n, vUv.y)).rgb;
          vec3 c = mix(ca, cb, mixv); float l = dot(c, vec3(0.3,0.59,0.11)); c = mix(vec3(l), c, 0.75)*vec3(1.08,0.98,0.86);
          vec2 d = vUv-0.5; c *= 1.0 - dot(d,d)*1.4; gl_FragColor = vec4(c*flick*0.62, 1.0); }`,
    });
    this.screen = new THREE.Mesh(new THREE.PlaneGeometry(16, 11.6), this.screenMat); this.screen.position.set(0, 6, -26); this.scene.add(this.screen);
    const beamGeo = new THREE.CylinderGeometry(7.5, 0.15, 44, 48, 1, true); beamGeo.rotateX(Math.PI / 2); beamGeo.translate(0, 0, 0);
    this.beamMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: { time: { value: 0 }, power: { value: 0.12 } },
      vertexShader: `varying vec3 vN; varying vec3 vV; varying float vZ; varying vec3 vP; void main(){ vec4 w=modelMatrix*vec4(position,1.0); vN=normalize(mat3(modelMatrix)*normal); vV=normalize(cameraPosition-w.xyz); vZ=uv.y; vP=position; gl_Position=projectionMatrix*viewMatrix*w; }`,
      fragmentShader: `uniform float time, power; varying vec3 vN; varying vec3 vV; varying float vZ; varying vec3 vP;
        float h21(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
        void main(){ float f = pow(abs(dot(vN, vV)), 1.6); float s = 0.85 + 0.15*sin(vP.z*0.9 + time*1.7)*sin(atan(vP.y,vP.x)*7.0 + time);
          gl_FragColor = vec4(vec3(1.0,0.86,0.62)*f*power*s*(0.4+0.6*vZ), 1.0); }`,
    });
    this.beam = new THREE.Mesh(beamGeo, this.beamMat); this.beam.position.set(0, 6, -4); this.beam.lookAt(0, 6, -26); this.scene.add(this.beam);
    this.dust = softPoints(1600, () => { const z = -24 + Math.random() * 40; const r = Math.random() * (7.5 * (1 - (z + 26) / 44)); const a = Math.random() * 6.28; return [Math.cos(a) * r, 6 + Math.sin(a) * r, z]; }, { size: 0.06, color: [1.0, 0.85, 0.6], opacity: 0.45 });
    this.scene.add(this.dust);
    // a red silk ribbon
    const silkGeo = new THREE.PlaneGeometry(36, 0.5, 300, 6);
    this.silkMat = new THREE.ShaderMaterial({
      side: THREE.DoubleSide, uniforms: { time: { value: 0 }, swell: { value: 0 } },
      vertexShader: `uniform float time, swell; varying vec3 vN; varying vec3 vW; varying vec2 vUv;
        vec3 P(vec2 q){ float x=q.x; float y=q.y + sin(x*0.35+time*0.6)*1.2 + sin(x*0.13-time*0.3)*0.8*(1.0+swell); float z=sin(x*0.22+time*0.45)*2.5 + q.y*sin(x*0.5+time)*0.6; return vec3(x, y, z); }
        void main(){ vUv=uv; vec3 p=P(position.xy); vec3 px=P(position.xy+vec2(0.05,0.0)); vec3 py=P(position.xy+vec2(0.0,0.05));
          vN=normalize(cross(px-p, py-p)); vec4 w=modelMatrix*vec4(p,1.0); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,
      fragmentShader: `varying vec3 vN; varying vec3 vW; varying vec2 vUv;
        void main(){ vec3 N=normalize(vN); vec3 V=normalize(cameraPosition-vW); if(dot(N,V)<0.0) N=-N; vec3 L=normalize(vec3(0.3,0.6,0.7));
          float sheen = pow(1.0-abs(dot(N,V)), 2.0); float d = max(dot(N,L),0.0); float spec = pow(max(dot(reflect(-L,N),V),0.0), 24.0);
          vec3 red = vec3(0.3, 0.02, 0.016); vec3 c = red*(0.25+0.9*d) + vec3(1.0,0.35,0.25)*sheen*0.5 + vec3(1.0,0.75,0.6)*spec*0.6;
          float edge = smoothstep(0.0,0.08,vUv.y)*smoothstep(1.0,0.92,vUv.y); float fade = 1.0 - smoothstep(10.0, 18.0, abs(vW.x));
          gl_FragColor = vec4(c*edge*fade, 1.0); }`,
    });
    this.silk = new THREE.Mesh(silkGeo, this.silkMat); this.silk.position.set(0, 8.8, -12); this.scene.add(this.silk);
    this.scrollV = 0; this.scrollX = 0;
  }
  pose(t, c) {
    if (c && c.film) {
      const u = smooth(0, 1, t / (c.dur || 26));
      return { pos: new THREE.Vector3(lerp(-6, 4, u), lerp(2.5, 4.8, u), lerp(14, 5, u)), tgt: new THREE.Vector3(lerp(-1, 0.5, u), lerp(3.2, 5.0, u), lerp(-4, -18, u)), fov: lerp(46, 38, u) };
    }
    const a = Math.sin(t * 0.06) * 0.35;
    return { pos: new THREE.Vector3(Math.sin(a) * 15, 4.2, Math.cos(a) * 14), tgt: new THREE.Vector3(0, 3.5, -8), fov: 46 };
  }
  update(t, dt, c) {
    const mel = c.ev.recent(c.abs, 60, 'melody');
    const n = mel.length; const last = mel[n - 1];
    const sinceLast = last ? c.abs - last.t : 9;
    const su = this.screenMat.uniforms;
    su.a.value = (n + FRAMES.length - 1) % FRAMES.length; su.b.value = n % FRAMES.length; su.mixv.value = clamp(sinceLast / 0.35);
    const shutter = 0.94 + 0.06 * Math.sin(t * 2 * Math.PI * 24);
    const strings = c.ev.pulse(c.abs, 1.5, 'strings');
    su.flick.value = shutter * (0.85 + 0.25 * clamp(strings * 0.3));
    this.beamMat.uniforms.time.value = t; this.beamMat.uniforms.power.value = 0.09 + 0.05 * clamp(strings * 0.25) + 0.05 * Math.exp(-sinceLast * 2);
    this.scrollV = lerp(this.scrollV, 0, 1 - Math.exp(-dt * 1.5));
    this.scrollX += dt * (0.12 + this.scrollV);
    this.ribbons.forEach((m, k) => { m.material.uniforms.scroll.value = this.scrollX * (k % 2 ? -1 : 1) * (0.8 + k * 0.2) + k * 3.3; m.material.uniforms.time.value = t; });
    this.silkMat.uniforms.time.value = t; this.silkMat.uniforms.swell.value = clamp(strings * 0.15);
    this.dust.material.uniforms.time.value = t;
    const cello = c.ev.last(c.abs, 'cello');
    c.hud(['♩ = 66   3/4   D 小调五声 minor pentatonic', last ? `melody ${midiName(last.midi)}` : '', cello ? `cello ${midiName(cello.midi)}` : '', '24 fps']);
  }
  down(p, c) {
    this.drag = { x: p.x, moved: 0 };
    const hit = c.raycast(p, this.ribbons);
    if (hit && hit.uv) {
      const m = hit.object; const u = hit.uv.x + m.material.uniforms.scroll.value;
      const fi = ((Math.floor(u) % FRAMES.length) + FRAMES.length) % FRAMES.length;
      c.play('phrase', fi);
    }
  }
  move(p) { if (this.drag) { this.scrollV += (p.x - this.drag.x) * 6; this.drag.x = p.x; } }
  up() { this.drag = null; }
}
