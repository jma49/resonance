import * as THREE from 'three';
import { Movement, softPoints } from './base.js';
import { midiName, mtof, clamp } from '../util.js';

// A single tone. The bright line is an oscilloscope of the real Salamander recording,
// read sample by sample at the moment you are hearing it.
export class Prelude extends Movement {
  build() {
    this.addEnv('dark', { exposure: 0.22, sat: 0.5, blur: 2.5, tint: [0.75, 0.85, 1.1], floorDark: 0.5, skyDark: 0.55, yaw: 1.2 });
    const N = this.N = 1400;
    const g = new THREE.BufferGeometry();
    this.wpos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) this.wpos[i * 3] = (i / (N - 1) - 0.5) * 14;
    g.setAttribute('position', new THREE.BufferAttribute(this.wpos, 3));
    this.wave = new THREE.Line(g, new THREE.LineBasicMaterial({ color: new THREE.Color(1.6, 1.5, 1.35), transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.wave.position.y = 1.0; this.scene.add(this.wave);
    // ghost copies make a soft afterimage of the waveform
    this.ghosts = [];
    for (let k = 0; k < 3; k++) {
      const gl = new THREE.Line(g, new THREE.LineBasicMaterial({ color: new THREE.Color(0.5, 0.62, 0.9), transparent: true, opacity: 0.18 / (k + 1), blending: THREE.AdditiveBlending, depthWrite: false }));
      gl.position.set(0, 1.0, -0.15 * (k + 1)); gl.scale.y = 1 + 0.25 * (k + 1); this.scene.add(gl); this.ghosts.push(gl);
    }
    // rings on the ground: the sound spreading out
    const cg = new THREE.BufferGeometry().setFromPoints(Array.from({ length: 257 }, (_, i) => { const a = i / 256 * Math.PI * 2; return new THREE.Vector3(Math.cos(a), 0, Math.sin(a)); }));
    this.rings = [];
    for (let i = 0; i < 14; i++) {
      const l = new THREE.Line(cg, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
      l.position.y = -0.6; this.scene.add(l); this.rings.push(l);
    }
    // a hairline horizon grid, very faint
    const grid = new THREE.GridHelper(80, 80, 0x223040, 0x111820); grid.position.y = -0.62; grid.material.transparent = true; grid.material.opacity = 0.25; this.scene.add(grid);
    this.dust = softPoints(900, () => [(Math.random() - 0.5) * 30, Math.random() * 8 - 1, (Math.random() - 0.5) * 30], { size: 0.035, color: [0.8, 0.85, 1], opacity: 0.35 });
    this.scene.add(this.dust);
    // envelope tables of the actual piano samples, to drive brightness by real decay
    this.tables = new Map();
  }
  sampleFor(m) {
    const set = this.app.samples?.piano; if (!set) return null;
    let best = set[0]; for (const s of set) if (Math.abs(s.midi - m) < Math.abs(best.midi - m)) best = s; return best;
  }
  rms(s) {
    if (this.tables.has(s)) return this.tables.get(s);
    const d = s.buf.getChannelData(0), hop = 1024, out = new Float32Array(Math.ceil(d.length / hop));
    for (let i = 0; i < out.length; i++) { let a = 0; for (let j = 0; j < hop; j++) { const x = d[i * hop + j] || 0; a += x * x; } out[i] = Math.sqrt(a / hop); }
    this.tables.set(s, out); return out;
  }
  pose(t, c) {
    const z = 10.5 - Math.min(t, 30) * 0.06;
    // the film keeps the tone line low in frame, under the titles
    if (c && c.film) return { pos: new THREE.Vector3(Math.sin(t * 0.05) * 0.8, 0.95, z + 1.5), tgt: new THREE.Vector3(0, 2.75, 0), fov: 42 };
    return { pos: new THREE.Vector3(Math.sin(t * 0.05) * 0.8, 1.7, z), tgt: new THREE.Vector3(0, 0.5, 0) };
  }
  update(t, dt, c) {
    const ev = c.ev.recent(c.abs, 14, ['piano', 'bass', 'melody']);
    const N = this.N, w = this.wpos;
    for (let i = 0; i < N; i++) w[i * 3 + 1] = 0;
    let energy = 0, lastNote = null;
    for (const e of ev) {
      const s = this.sampleFor(e.midi); if (!s) continue;
      const rate = Math.pow(2, ((e.midi - s.midi) * 100 + (e.detune || 0)) / 1200);
      const sr = s.buf.sampleRate, d = s.buf.getChannelData(0);
      const age = c.abs - e.t; if (age < 0) continue;
      const p0 = age * rate * sr;
      const span = 0.03 * sr * rate;
      const amp = (e.vel ?? 0.6) * 3.2;
      const env = this.rms(s); const ei = Math.floor(p0 / 1024);
      energy += (env[ei] || 0) * (e.vel ?? 0.6);
      for (let i = 0; i < N; i++) {
        const idx = Math.floor(p0 + (i / N) * span);
        const win = Math.sin(Math.PI * i / (N - 1));
        w[i * 3 + 1] += (d[idx] || 0) * amp * (0.35 + 0.65 * win);
      }
      lastNote = e;
    }
    this.wave.geometry.attributes.position.needsUpdate = true;
    const glow = clamp(energy * 6, 0, 1.5);
    this.wave.material.color.setRGB(0.5 + glow * 1.4, 0.5 + glow * 1.3, 0.5 + glow * 1.15);
    // rings
    this.rings.forEach((r) => (r.material.opacity = 0));
    ev.slice(-this.rings.length).forEach((e, i) => {
      const age = c.abs - e.t, r = this.rings[i];
      r.scale.setScalar(0.3 + age * 1.6);
      r.material.opacity = clamp(Math.exp(-age * 0.32) * (e.vel ?? 0.6) * 1.4 * Math.min(1, age * 8), 0, 1);
    });
    this.dust.material.uniforms.time.value = t;
    this.envU.exposure.value = (c.film ? 0.13 : 0.18) + glow * 0.12;
    const hud = [];
    if (lastNote) {
      const age = c.abs - lastNote.t;
      hud.push(`${midiName(lastNote.midi)}  ${mtof(lastNote.midi).toFixed(2)} Hz`, `t + ${age.toFixed(2)} s`, `${(20 * Math.log10(Math.max(energy, 1e-5) / 0.08)).toFixed(1)} dB`);
    }
    c.hud(hud);
  }
  down(p, c) { c.play('tap', p.x); }
}
