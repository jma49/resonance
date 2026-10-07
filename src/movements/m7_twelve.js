import * as THREE from 'three';
import { Movement, softPoints } from './base.js';
import { clamp, smooth, lerp, midiName } from '../util.js';
import { TWELVE } from '../audio/composers.js';

// Twelve rings under a real night sky (Poly Haven "Dikhololo Night", CC0). Each ring is one
// pitch; struck, it brightens and then takes a long time to go dark, the way a piano note does.
export class Twelve extends Movement {
  build() {
    this.addEnv('night', { exposure: 0.17, sat: 0.7, blur: 1.0, tint: [0.7, 0.82, 1.2], floorDark: 0.85, yaw: 0.4, contrast: 1.6 });
    this.stars = softPoints(2600, () => { const v = new THREE.Vector3().randomDirection(); v.y = Math.abs(v.y) * 0.9 + 0.08; v.normalize().multiplyScalar(300); return [v.x, v.y, v.z]; }, { size: 0.9, color: [0.9, 0.93, 1.0], opacity: 0.7 });
    this.scene.add(this.stars);
    this.parallax = 0.8;
    this.rings = []; this.hits = [];
    this.group = new THREE.Group(); this.group.position.set(0, 3.2, -2); this.scene.add(this.group);
    for (let i = 0; i < 12; i++) {
      const r = 0.7 + i * 0.42;
      const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.012 + i * 0.0012, 8, 220), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      const tilt = new THREE.Group(); tilt.add(m); tilt.userData = { i, ax: (i % 2 ? 1 : -1) * (0.06 + i * 0.012), ph: i * 0.7 };
      this.group.add(tilt); this.rings.push(m);
      const hit = new THREE.Mesh(new THREE.TorusGeometry(r, 0.16, 6, 64), new THREE.MeshBasicMaterial({ visible: false })); hit.userData.i = i; tilt.add(hit); this.hits.push(hit);
    }
    this.core = softPoints(1, () => [0, 0, 0], { size: 1.6, color: [1.0, 0.95, 0.85], opacity: 0.8 }); this.group.add(this.core);
    this.embers = softPoints(700, () => [(Math.random() - 0.5) * 18, Math.random() * 12 - 2, -8 + Math.random() * 12], { size: 0.06, color: [0.9, 0.92, 1.0], opacity: 0.4 });
    this.embers.material.uniforms.drift.value.set(0, 0.06, 0);
    this.scene.add(this.embers);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(60, 64), new THREE.MeshBasicMaterial({ color: 0x020305 })); floor.rotation.x = -Math.PI / 2; floor.position.y = -1.2; this.scene.add(floor);
  }
  pose(t, c) {
    if (c && c.film) {
      const u = smooth(0, 1, t / (c.dur || 26));
      return { pos: new THREE.Vector3(lerp(-3, 0.5, u), lerp(1.6, 3.0, u), lerp(16, 9.5, u)), tgt: new THREE.Vector3(0, lerp(3.6, 3.2, u), -2), fov: lerp(42, 38, u) };
    }
    return { pos: new THREE.Vector3(Math.sin(t * 0.05) * 3, 2.8, 12), tgt: new THREE.Vector3(0, 3.2, -2), fov: 42 };
  }
  update(t, dt, c) {
    const amp = new Array(12).fill(0);
    let last = null;
    for (const e of c.ev.recent(c.abs, 30, 'piano')) {
      const i = e.ring ?? TWELVE.indexOf(Math.round(e.midi)); if (i < 0) continue;
      const age = c.abs - e.t; amp[i] += (e.vel ?? 0.5) * Math.exp(-age / 5.5) * clamp(age * 20); last = e;
    }
    this.rings.forEach((m, i) => {
      const a = clamp(amp[i] * 1.8);
      m.material.color.setRGB(0.05 + a * 1.5, 0.055 + a * 1.4, 0.07 + a * 1.25);
      const tilt = m.parent; const u = tilt.userData;
      tilt.rotation.x = Math.sin(t * 0.07 + u.ph) * u.ax * 3 + 1.25; tilt.rotation.y = Math.cos(t * 0.05 + u.ph) * u.ax * 2;
      m.scale.setScalar(1 + a * 0.015 * Math.sin(t * 30 + i));
    });
    const tot = amp.reduce((a, b) => a + b, 0);
    this.core.material.uniforms.opacity.value = 0.25 + clamp(tot * 0.25) * 0.8; this.core.material.uniforms.time.value = t;
    this.core.material.uniforms.pxr.value = c.pxr; this.embers.material.uniforms.pxr.value = c.pxr;
    this.embers.material.uniforms.time.value = t; this.stars.material.uniforms.time.value = t * 0.3; this.embers.material.uniforms.boost.value = c.ev.pulse(c.abs, 0.8, 'breath') * 2;
    c.hud([last ? `${midiName(last.midi)}  ·  ring ${(last.ring ?? 0) + 1} / 12` : '12', 'sustain pedal down', '2023.01.17']);
  }
  down(p, c) {
    const hit = c.raycast(p, this.hits);
    if (hit) c.play('ring', hit.object.userData.i);
    else c.play('ring', Math.floor(clamp((Math.hypot(p.x, p.y - 0.1)) / 0.9) * 11.99));
  }
}
