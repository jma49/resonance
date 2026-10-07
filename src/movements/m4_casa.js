import * as THREE from 'three';
import { Movement, waterMaterial, softPoints } from './base.js';
import { clamp, smooth, lerp, midiName, hash1 } from '../util.js';

// Six nylon strings stretched over water at sunset. The sea is a shader mirror of a real
// photographed Venetian sunset (Poly Haven, CC0); the guitar rosette stands on the horizon.
const STR_MIDI = [40, 45, 50, 55, 59, 64];

export class Casa extends Movement {
  build() {
    const YAW = 3.55;
    this.addEnv('sunset', { exposure: 0.34, sat: 0.95, blur: 1.6, tint: [1.05, 0.95, 0.9], floorDark: 0.7, yaw: YAW });
    this.parallax = 0.7;
    this.waterMat = waterMaterial(this.app.assets.tex.sunset, { yaw: YAW, exposure: 0.5, deep: [0.012, 0.02, 0.03], tint: [1.05, 0.95, 0.9], fog: [0.25, 0.2, 0.2], fogFar: 140 });
    const water = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), this.waterMat); water.rotation.x = -Math.PI / 2; this.scene.add(water);
    this.water = water;
    // strings: thin quads displaced in the shader
    this.strings = [];
    for (let s = 0; s < 6; s++) {
      const g = new THREE.PlaneGeometry(22, 0.016 + (5 - s) * 0.004, 220, 1);
      const m = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
        uniforms: { amp: { value: 0 }, time: { value: 0 }, f: { value: 9 + s * 3.1 }, glow: { value: 0 } },
        vertexShader: `uniform float amp, time, f; varying float vU; void main(){ vec3 p=position; float u=(p.x+11.0)/22.0; vU=u; p.y += amp*0.22*sin(3.14159*u)*sin(time*f*6.0) + amp*0.05*sin(6.2832*u*3.0)*sin(time*f*13.0); gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0); }`,
        fragmentShader: `uniform float glow; varying float vU; void main(){ float e = smoothstep(0.0,0.08,vU)*smoothstep(1.0,0.92,vU); vec3 c = mix(vec3(0.55,0.5,0.45), vec3(2.2,1.6,1.1), clamp(glow,0.0,1.0)); gl_FragColor = vec4(c*e*(0.35+glow*1.6), 1.0); }`,
      });
      const mesh = new THREE.Mesh(g, m); mesh.position.set(0, 1.25 + s * 0.17, 3.2 - s * 0.02); mesh.userData.s = s;
      this.scene.add(mesh); this.strings.push(mesh);
    }
    // rosette on the horizon
    this.roseMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { time: { value: 0 }, glow: { value: 0 } },
      vertexShader: `varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `uniform float time, glow; varying vec2 vP;
        void main(){ float r = length(vP); float a = atan(vP.y, vP.x);
          float band = smoothstep(4.0,4.05,r)*smoothstep(5.6,5.55,r);
          float rings = 0.5+0.5*cos(r*40.0); float tiles = step(0.5, fract(a*48.0/6.2832 + floor(r*6.0)*0.5));
          float pat = mix(rings, tiles, step(4.5, r)*step(r, 5.1));
          float inner = smoothstep(3.95,4.0,r)*smoothstep(4.1,4.05,r) + smoothstep(5.55,5.6,r)*smoothstep(5.7,5.65,r);
          vec3 c = vec3(1.0,0.72,0.45)*(band*pat*0.35 + inner*1.2)*(0.6+glow);
          gl_FragColor = vec4(c, 1.0); }`,
    });
    this.rose = new THREE.Mesh(new THREE.CircleGeometry(6, 128), this.roseMat); this.rose.position.set(0, 4.2, -38); this.scene.add(this.rose);
    this.motes = softPoints(500, () => [(Math.random() - 0.5) * 40, 0.3 + Math.random() * 6, -30 + Math.random() * 34], { size: 0.05, color: [1.0, 0.8, 0.6], opacity: 0.35 });
    this.scene.add(this.motes);
    this.lastRipple = -1;
  }
  pose(t, c) {
    const bob = Math.sin(t * 0.7) * 0.05;
    if (c && c.film) {
      const u = smooth(0, 1, t / (c.dur || 24));
      return { pos: new THREE.Vector3(lerp(-2.5, 1.5, u), lerp(1.2, 2.6, u) + bob, lerp(9.5, 7.5, u)), tgt: new THREE.Vector3(lerp(0.5, 0, u), lerp(1.8, 2.6, u), -20), fov: lerp(34, 40, u) };
    }
    return { pos: new THREE.Vector3(Math.sin(t * 0.05) * 1.5, 2.0 + bob, 8.5), tgt: new THREE.Vector3(0, 2.0, -20), fov: 40 };
  }
  update(t, dt, c) {
    const u = this.waterMat.uniforms; u.time.value = t;
    const ev = c.ev.recent(c.abs, 4, ['guitar', 'bass']);
    const amps = [0, 0, 0, 0, 0, 0];
    for (const e of ev) {
      let s = 0; for (let k = 0; k < 6; k++) if (e.midi >= STR_MIDI[k] - 1) s = k;
      const age = c.abs - e.t; if (age < 0) continue;
      amps[s] += (e.vel ?? 0.5) * Math.exp(-age * 2.2) * clamp(age * 40);
    }
    this.strings.forEach((m, k) => { m.material.uniforms.amp.value = Math.min(amps[k], 1.6); m.material.uniforms.glow.value = Math.min(amps[k] * 1.4, 1.2); m.material.uniforms.time.value = t; });
    // ripples: bass notes and user plucks touch the water
    const rip = c.ev.recent(c.abs, 0.6, ['bass', 'guitar']).filter((e) => e.tag === 'bass' || e.user);
    for (const e of rip) if (e.t > this.lastRipple) {
      this.lastRipple = e.t;
      const x = e.px ?? (hash1(e.t * 3.1) - 0.5) * 10, z = e.pz ?? (-2 - hash1(e.t * 7.7) * 10);
      this.waterMat.userData.addRipple(x, z, e.t - c.abs + t, e.user ? 1.4 : 0.8);
    }
    const cello = c.ev.pulse(c.abs, 1.2, 'cello');
    this.roseMat.uniforms.glow.value = clamp(cello * 0.6) + c.ev.pulse(c.abs, 0.4, 'melody') * 0.4;
    this.motes.material.uniforms.time.value = t;
    const g = c.ev.last(c.abs, 'guitar'), ce = c.ev.last(c.abs, 'cello');
    c.hud(['♩ = 132   bossa nova', g ? `guitar ${midiName(g.midi)}` : '', ce ? `cello ${midiName(ce.midi)}` : '', '22.9°S 43.2°W']);
  }
  stringY() { return this.strings.map((m) => m.position.clone().project(this.camera).y); }
  down(p, c) {
    this.prev = { x: p.x, y: p.y };
    const ys = this.stringY(); const lo = Math.min(...ys) - 0.08, hi = Math.max(...ys) + 0.08;
    if (p.y < lo || p.y > hi) {
      const hit = c.raycast(p, [this.water]);
      if (hit) c.play('pluck', p.x, { px: hit.point.x, pz: hit.point.z });
    }
  }
  move(p, c) {
    if (!this.prev) return;
    const ys = this.stringY();
    const order = p.y < this.prev.y ? [5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5];
    for (const k of order) if ((this.prev.y - ys[k]) * (p.y - ys[k]) < 0) c.play('string', k);
    this.prev = { x: p.x, y: p.y };
  }
  up() { this.prev = null; }
}
