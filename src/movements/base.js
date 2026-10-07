import * as THREE from 'three';
import { envSphere } from '../env.js';
import { damp } from '../util.js';

export class Movement {
  constructor(app, meta) {
    this.app = app; this.meta = meta;
    this.scene = new THREE.Scene(); this.scene.background = new THREE.Color(0x000000);
    this.camera = new THREE.PerspectiveCamera(42, 16 / 9, 0.05, 900);
    this.par = new THREE.Vector2(); // smoothed pointer parallax
    this.camPos = new THREE.Vector3(); this.camTgt = new THREE.Vector3();
  }
  addEnv(key, opts) { this.envMesh = envSphere(this.app.assets.tex[key], opts); this.envU = this.envMesh.userData.u; this.scene.add(this.envMesh); return this.envMesh; }
  useEnvMap(key, intensity = 1) { this.scene.environment = this.app.assets.envMap(this.app.renderer, key); this.scene.environmentIntensity = intensity; }
  setAspect(a) { this.camera.aspect = a; this.camera.updateProjectionMatrix(); this._f = null; }
  // base camera pose for time t; movements override
  pose(t) { return { pos: new THREE.Vector3(0, 0, 10), tgt: new THREE.Vector3() }; }
  applyCamera(t, dt, c) {
    const { pos, tgt, fov } = this.pose(t, c);
    // Framing: in portrait widen the lens and lift the subject above the caption; on wide
    // screens push it right of the caption. The film keeps a centred frame.
    const cam = this.camera, a = cam.aspect, baseFov = fov || this.baseFov || cam.fov;
    this.baseFov = baseFov;
    let f = baseFov, sx = 0, sy = 0;
    if (!c.film) {
      if (a < 1.2) { const k = Math.min(2.0, Math.sqrt(1.78 / a)); f = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(baseFov) / 2) * k)); sy = 0.42 * (this.liftPortrait ?? 1); }
      else { sx = 0.16 * (this.shiftWide ?? 1); sy = 0.06; }
    }
    if (f !== this._f || sx !== this._sx || sy !== this._sy) {
      cam.fov = f; cam.updateProjectionMatrix();
      cam.projectionMatrix.elements[8] = -sx; cam.projectionMatrix.elements[9] = -sy;
      cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();
      this._f = f; this._sx = sx; this._sy = sy;
    }
    if (!c.film) {
      this.par.x = damp(this.par.x, c.pointer.x, 2.2, dt); this.par.y = damp(this.par.y, c.pointer.y, 2.2, dt);
      const s = this.parallax ?? 0.6;
      const right = new THREE.Vector3().subVectors(tgt, pos).cross(new THREE.Vector3(0, 1, 0)).normalize();
      pos.addScaledVector(right, this.par.x * s).add(new THREE.Vector3(0, this.par.y * s * 0.5, 0));
    }
    this.camera.position.copy(pos); this.camera.lookAt(tgt);
  }
  build() {}
  update() {}
  down() {} move() {} up() {}
}

/* ─ piano keyboard (88 keys), shared by I and VI ─ */
const WHITE = new Set([0, 2, 4, 5, 7, 9, 11]);
const BOFF = { 1: -0.12, 3: 0.12, 6: -0.14, 8: 0, 10: 0.14 };
export function buildKeyboard({ first = 21, last = 108, keyW = 0.235, ivory = 0xeae2d0, ebony = 0x060606, chaos = 0, seed = 1 } = {}) {
  const group = new THREE.Group();
  const keys = []; let wi = 0;
  for (let m = first; m <= last; m++) {
    const pc = m % 12;
    if (WHITE.has(pc)) { keys.push({ m, white: true, x: wi * keyW }); wi++; }
    else keys.push({ m, white: false, x: (wi - 0.5 + (BOFF[pc] || 0)) * keyW });
  }
  const width = wi * keyW;
  keys.forEach((k) => { k.x -= width / 2 - keyW / 2; });
  const wGeo = new THREE.BoxGeometry(keyW * 0.94, 0.22, 1.5); wGeo.translate(0, -0.11, 0.75);
  const bGeo = new THREE.BoxGeometry(keyW * 0.55, 0.24, 0.95); bGeo.translate(0, 0.06, 0.475);
  const wMat = new THREE.MeshStandardMaterial({ color: ivory, roughness: 0.3 });
  const bMat = new THREE.MeshStandardMaterial({ color: ebony, roughness: 0.14 });
  const whites = keys.filter((k) => k.white), blacks = keys.filter((k) => !k.white);
  const wMesh = new THREE.InstancedMesh(wGeo, wMat, whites.length);
  const bMesh = new THREE.InstancedMesh(bGeo, bMat, blacks.length);
  wMesh.userData.keys = whites; bMesh.userData.keys = blacks;
  group.add(wMesh, bMesh);
  let s = seed; const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647 - 0.5; };
  keys.forEach((k) => { k.press = 0; k.jy = chaos * rnd() * 0.18; k.jr = chaos * rnd() * 0.12; k.jz = chaos * rnd() * 0.12; k.jt = chaos * rnd() * 0.08; });
  const byMidi = new Map(keys.map((k) => [k.m, k]));
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
  function sync() {
    for (const [mesh, list] of [[wMesh, whites], [bMesh, blacks]]) {
      list.forEach((k, i) => {
        e.set(-k.press * 0.075 + k.jr, k.jt, 0); q.setFromEuler(e);
        v.set(k.x, k.jy, -0.75 + k.jz + (k.white ? 0 : -0.0));
        m4.compose(v, q, one); mesh.setMatrixAt(i, m4);
      });
      mesh.instanceMatrix.needsUpdate = true;
    }
  }
  sync();
  return {
    group, keys, byMidi, width, wMesh, bMesh, sync,
    keyAt(hit) { if (!hit || hit.instanceId == null) return null; return hit.object.userData.keys[hit.instanceId]; },
  };
}

/* ─ water that reflects a real photographed panorama ─ */
export function waterMaterial(tex, opts = {}) {
  const N = 16;
  const ripples = []; for (let i = 0; i < N; i++) ripples.push(new THREE.Vector4(0, 0, -100, 0));
  const mat = new THREE.ShaderMaterial({
    transparent: false,
    uniforms: {
      map: { value: tex }, time: { value: 0 }, ripples: { value: ripples }, yaw: { value: opts.yaw ?? 0 },
      deep: { value: new THREE.Color(...(opts.deep ?? [0.01, 0.02, 0.03])) }, exposure: { value: opts.exposure ?? 1.4 },
      tint: { value: new THREE.Color(...(opts.tint ?? [1, 1, 1])) }, sat: { value: opts.sat ?? 1 },
      waveAmp: { value: opts.waveAmp ?? 1 }, fogCol: { value: new THREE.Color(...(opts.fog ?? [0, 0, 0])) }, fogFar: { value: opts.fogFar ?? 80 },
    },
    vertexShader: /* glsl */`varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,
    fragmentShader: /* glsl */`
      varying vec3 vW; uniform sampler2D map; uniform float time, yaw, exposure, sat, waveAmp, fogFar; uniform vec3 deep, tint, fogCol; uniform vec4 ripples[${N}];
      // height gradient in one pass (analytic), cheaper than finite differences
      vec2 grad(vec2 p){
        vec2 g = vec2(0.0);
        vec2 k1 = vec2(0.80, 0.60)*1.6;  g += 0.030*cos(dot(p,k1) + time*1.10)*k1;
        vec2 k2 = vec2(-0.50, 0.85)*2.3; g += 0.022*cos(dot(p,k2) + time*1.45)*k2;
        vec2 k3 = vec2(0.95, -0.30)*4.1; g += 0.012*cos(dot(p,k3) + time*2.10)*k3;
        vec2 k4 = vec2(-0.20, -0.98)*7.3; g += 0.007*cos(dot(p,k4) + time*2.90)*k4;
        vec2 k5 = vec2(0.60, -0.80)*13.0; g += 0.004*cos(dot(p,k5) + time*3.70)*k5;
        g *= waveAmp;
        for (int i = 0; i < ${N}; i++) {
          vec4 r = ripples[i]; float age = time - r.z; if (age < 0.0 || age > 6.0) continue;
          vec2 dv = p - r.xy; float d = length(dv) + 1e-4; float x = d - age*1.6; if (abs(x) > 1.6) continue;
          float env = r.w * 0.06 * exp(-age*0.7) * exp(-x*x*3.0); float ph = d*9.0 - age*14.0;
          float dWd = env * (-6.0*x*sin(ph) + 9.0*cos(ph));
          g += dWd * dv / d;
        }
        return g;
      }
      vec3 sampleEnv(vec3 d, float lod){
        float c = cos(yaw), s = sin(yaw); d = vec3(c*d.x - s*d.z, d.y, s*d.x + c*d.z);
        vec2 uv = vec2(atan(d.z, d.x)*0.15915494 + 0.5, asin(clamp(d.y,-1.0,1.0))*0.31830989 + 0.5);
        return textureLod(map, uv, lod).rgb;
      }
      void main(){
        vec2 g = grad(vW.xz);
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
        vec3 V = normalize(cameraPosition - vW);
        vec3 R = reflect(-V, N); R.y = abs(R.y);
        vec3 refl = sampleEnv(R, 1.5);
        float l = dot(refl, vec3(0.2126,0.7152,0.0722)); refl = mix(vec3(l), refl, sat) * tint * exposure;
        refl += pow(max(l - 0.8, 0.0), 2.0) * 2.5 * tint; // let bright sky glints bloom
        float fres = 0.03 + 0.97*pow(1.0 - max(dot(N, V), 0.0), 5.0);
        vec3 col = mix(deep, refl, clamp(fres*1.25, 0.0, 1.0));
        float dist = length(vW - cameraPosition);
        col = mix(col, fogCol, smoothstep(fogFar*0.35, fogFar, dist));
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  let ri = 0;
  mat.userData.addRipple = (x, z, t, amp = 1) => { ripples[ri % N].set(x, z, t, amp); ri++; };
  return mat;
}

/* ─ soft points ─ */
export function softPoints(count, fill, { size = 0.05, color = [1, 1, 1], opacity = 0.6, additive = true } = {}) {
  const pos = new Float32Array(count * 3), seed = new Float32Array(count);
  for (let i = 0; i < count; i++) { const p = fill(i); pos.set(p, i * 3); seed[i] = Math.random(); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    uniforms: { time: { value: 0 }, size: { value: size }, color: { value: new THREE.Color(...color) }, opacity: { value: opacity }, drift: { value: new THREE.Vector3(0, 0.02, 0) }, boost: { value: 0 }, pxr: { value: 1 } },
    vertexShader: /* glsl */`attribute float seed; uniform float time, size, boost, pxr; uniform vec3 drift; varying float vA;
      void main(){ vec3 p = position + drift*time + vec3(sin(time*0.3+seed*40.0), cos(time*0.23+seed*17.0), sin(time*0.19+seed*9.0))*0.15;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        float tw = 0.55 + 0.45*sin(time*(0.7+seed*1.7) + seed*60.0);
        vA = tw*(1.0+boost*seed); gl_PointSize = size*pxr*(300.0/-mv.z)*(0.6+seed*0.8); }`,
    fragmentShader: /* glsl */`uniform vec3 color; uniform float opacity; varying float vA;
      void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(color*a*opacity*vA, a*opacity*vA); }`,
  });
  const pts = new THREE.Points(g, m); pts.frustumCulled = false; return pts;
}

/* ─ hairline helper ─ */
export function hairline(points, color = 0xffffff, opacity = 1) {
  const g = new THREE.BufferGeometry().setFromPoints(points);
  const m = new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending });
  return new THREE.Line(g, m);
}
