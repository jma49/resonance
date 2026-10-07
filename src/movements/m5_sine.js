import * as THREE from 'three';
import { Movement } from './base.js';
import { clamp, smooth, lerp, midiName, hash1 } from '../util.js';

// The real Salamander A4 recording, opened up: its short-time spectrum is laid out as a
// field of points (time × log-frequency × magnitude). Sine blips draw oscilloscope traces;
// clicks print barcodes. Black, white, nothing else.
function spectrum(buf, frames = 180, bins = 90) {
  const d = buf.getChannelData(0), sr = buf.sampleRate, N = 1024;
  const hop = Math.floor(Math.min(d.length - N, sr * 7) / frames);
  const out = new Float32Array(frames * bins);
  const fLo = 60, fHi = 9000;
  const freqs = Array.from({ length: bins }, (_, b) => fLo * Math.pow(fHi / fLo, b / (bins - 1)));
  const win = new Float32Array(N); for (let i = 0; i < N; i++) win[i] = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / (N - 1));
  for (let f = 0; f < frames; f++) {
    const o = f * hop;
    for (let b = 0; b < bins; b++) {
      const w = 2 * Math.PI * freqs[b] / sr; let re = 0, im = 0;
      // Goertzel-style single-bin DFT
      const cw = Math.cos(w), sw = Math.sin(w); let cr = 1, ci = 0;
      for (let i = 0; i < N; i++) { const x = d[o + i] * win[i]; re += x * cr; im -= x * ci; const nr = cr * cw - ci * sw; ci = cr * sw + ci * cw; cr = nr; }
      out[f * bins + b] = Math.sqrt(re * re + im * im);
    }
  }
  let mx = 0; for (const v of out) mx = Math.max(mx, v);
  for (let i = 0; i < out.length; i++) out[i] = Math.max(0, (20 * Math.log10(out[i] / mx + 1e-6) + 72) / 72);
  return { out, frames, bins };
}

export class Sine extends Movement {
  build() {
    this.parallax = 0.35;
    const set = this.app.samples.piano; const s = set.find((x) => x.midi === 69) || set[Math.floor(set.length / 2)];
    const { out, frames, bins } = spectrum(s.buf);
    const pos = [], aV = [], aF = [];
    for (let f = 0; f < frames; f++) for (let b = 0; b < bins; b++) {
      const v = out[f * bins + b];
      pos.push((f / (frames - 1) - 0.5) * 22, v * 3.2, (b / (bins - 1) - 0.5) * 9); aV.push(v); aF.push(f / (frames - 1));
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('aV', new THREE.Float32BufferAttribute(aV, 1)); g.setAttribute('aF', new THREE.Float32BufferAttribute(aF, 1));
    this.specMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { scan: { value: -1 }, lift: { value: 1 }, pxr: { value: 1 }, time: { value: 0 } },
      vertexShader: `attribute float aV, aF; uniform float scan, lift, pxr, time; varying float vB;
        void main(){ vec3 p = position; float near = exp(-pow((aF - scan)*24.0, 2.0)); p.y *= lift*(0.65 + 0.6*near);
          vB = aV*aV*(0.7 + 2.5*near) + 0.1; vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; gl_PointSize = pxr*(2.0 + 3.0*aV*near + 1.5*aV)*(26.0/-mv.z); }`,
      fragmentShader: `varying float vB; void main(){ vec2 d=gl_PointCoord-0.5; if(dot(d,d)>0.25) discard; gl_FragColor = vec4(vec3(vB), 1.0); }`,
    });
    this.spec = new THREE.Points(g, this.specMat); this.spec.frustumCulled = false; this.scene.add(this.spec);
    // ridge lines every 6th bin
    const lp = [];
    for (let b = 0; b < bins; b += 6) for (let f = 0; f < frames - 1; f++) {
      for (const ff of [f, f + 1]) lp.push((ff / (frames - 1) - 0.5) * 22, out[ff * bins + b] * 3.2, (b / (bins - 1) - 0.5) * 9);
    }
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3));
    this.ridgeMat = new THREE.LineBasicMaterial({ color: 0x9a9a9a, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false });
    this.ridges = new THREE.LineSegments(lg, this.ridgeMat); this.scene.add(this.ridges);
    // oscilloscope traces
    this.traces = [];
    for (let k = 0; k < 4; k++) {
      const n = 1600; const tg = new THREE.BufferGeometry(); const tp = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) tp[i * 3] = (i / (n - 1) - 0.5) * 30;
      tg.setAttribute('position', new THREE.BufferAttribute(tp, 3));
      const l = new THREE.Line(tg, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
      l.position.set(0, 4.6 + k * 0.5, -3); this.scene.add(l); this.traces.push(l);
    }
    // barcode wall
    this.barMat = new THREE.ShaderMaterial({
      uniforms: { seed: { value: 0 }, amt: { value: 0 }, time: { value: 0 } },
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `uniform float seed, amt, time; varying vec2 vUv; float h(float x){ return fract(sin(x*12.9898+seed*78.233)*43758.5453); }
        void main(){ float x = vUv.x*420.0; float b = step(0.55, h(floor(x))) * step(0.3, h(floor(x*0.25)+3.0)); float band = step(abs(vUv.y-0.5), 0.5);
          float row = step(0.5, h(floor(vUv.y*18.0)+floor(x*0.05)));
          gl_FragColor = vec4(vec3(b*mix(1.0,row,0.35)*amt*band), 1.0); }`,
    });
    this.bars = new THREE.Mesh(new THREE.PlaneGeometry(60, 2.2), this.barMat); this.bars.position.set(0, -2.6, -6); this.scene.add(this.bars);
    // thin frame lines and a reference grid
    const grid = new THREE.GridHelper(40, 40, 0x1c1c1c, 0x111111); grid.position.y = -0.02; this.scene.add(grid);
    this.fx = { invert: 0, flash: 0 };
  }
  pose(t, c) {
    if (c && c.film) {
      const u = smooth(0, 1, t / (c.dur || 20));
      return { pos: new THREE.Vector3(lerp(-13, 9, u), lerp(8.5, 6.0, u), lerp(23, 25, u)), tgt: new THREE.Vector3(lerp(-3, 2, u), 1.4, 0), fov: 28 };
    }
    return { pos: new THREE.Vector3(Math.sin(t * 0.04) * 9, 8.5, 24), tgt: new THREE.Vector3(0, 1.0, 0), fov: 30 };
  }
  update(t, dt, c) {
    const lastP = c.ev.last(c.abs, 'piano');
    const age = lastP ? c.abs - lastP.t : 99;
    this.specMat.uniforms.scan.value = age < 5 ? age / 5 : -1;
    this.specMat.uniforms.lift.value = 0.7 + 0.5 * Math.exp(-age * 0.4);
    this.specMat.uniforms.pxr.value = c.pxr;
    this.ridgeMat.opacity = 0.35 + 0.4 * Math.exp(-age * 0.5);
    const blips = c.ev.recent(c.abs, 1.2, ['blip', 'tone']);
    this.traces.forEach((l, k) => {
      const e = blips[blips.length - 1 - k];
      if (!e) { l.material.opacity = 0; return; }
      const a = c.abs - e.t, f = e.freq || e.midi || 1000;
      const p = l.geometry.attributes.position.array, n = p.length / 3;
      const cyc = Math.min(f / 160, 60), dec = Math.exp(-a * (e.tag === 'tone' ? 1.5 : 6));
      for (let i = 0; i < n; i++) { const x = i / (n - 1); p[i * 3 + 1] = Math.sin(x * cyc * 2 * Math.PI + a * 40) * 0.22 * dec * Math.sin(Math.PI * x); }
      l.geometry.attributes.position.needsUpdate = true; l.material.opacity = clamp(dec * 1.4);
    });
    const clicks = c.ev.pulse(c.abs, 0.05, 'click'), bl = c.ev.pulse(c.abs, 0.08, 'blip');
    const lc = c.ev.last(c.abs, 'click');
    this.barMat.uniforms.seed.value = lc ? Math.floor(lc.t * 1000) % 997 : 0;
    this.barMat.uniforms.amt.value = clamp(clicks * 0.6 + bl * 0.2);
    const sub = c.ev.pulse(c.abs, 0.25, 'sub');
    this.fx.flash = clamp(clicks * 0.04, 0, 0.12) + sub * 0.02;
    this.fx.invert = clicks > 2.2 ? 1 : 0;
    const last = blips[blips.length - 1];
    const ts = c.abs.toFixed(3).padStart(8, '0');
    c.hud([`${ts} s`, last ? `${Math.round(last.freq || last.midi)} Hz  sine` : 'sine', lastP ? `${midiName(lastP.midi)} · t + ${age.toFixed(2)} s` : '', 'A4 · 1024-pt STFT · 60 Hz – 9 kHz']);
  }
  down(p, c) { c.play('tap', p.x, p.y); }
}
