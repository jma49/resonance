// One generative composer per movement. All material is original and written "in the
// manner of" each period; none of it quotes Sakamoto's own melodies.
// A composer schedules notes ahead of time: live via a lookahead timer, offline all at once.

import { rng, mtof } from '../util.js';

class Composer {
  constructor(eng, bus, seed) { this.e = eng; this.bus = bus; this.r = rng(seed); this.cursor = 0; this.t0 = 0; this.p = {}; this.stopAt = Infinity; }
  start(t0) { this.t0 = t0; this.cursor = t0 + (this.lead ?? 0.25); this.init && this.init(); }
  schedule(until) { let guard = 0; while (this.cursor < until && this.cursor < this.stopAt && guard++ < 400) this.step(this.cursor); }
  pn(midi, t, o = {}) { return this.e.sample(this.bus, 'piano', midi, t, { gain: 0.95, rev: 0.35, ...o }); }
}

/* ── Prelude / Coda ─────────────────────────────────────────────────────────── */
export class PreludeC extends Composer {
  constructor(e, bus, seed = 1, opts = {}) { super(e, bus, seed); this.coda = !!opts.coda; this.lead = opts.lead ?? 0.8; this.n = 0; }
  step(t) {
    const seq = this.coda ? [[69, 0.55], [57, 0.4], [64, 0.3]] : [[69, 0.6], [57, 0.42], [76, 0.3], [64, 0.36], [71, 0.32], [73, 0.28]];
    const [m, v] = seq[this.n % seq.length];
    this.pn(m, t, { vel: v, rev: 0.5 });
    // a glassy partial that lingers after the hammer, like listening closer to the string
    this.e.synth(this.bus, t + 0.05, { freq: mtof(m) * 2, dur: 3.5, attack: 1.2, release: 5, vel: 0.12, gain: 0.25, pan: this.r.range(-0.3, 0.3), rev: 0.8 });
    this.n++;
    this.cursor = t + (this.coda ? 7.5 : this.r.range(8.5, 10.5));
  }
  tap(t, x) {
    const pool = [57, 61, 64, 66, 69, 71, 73, 76, 78, 81];
    const m = pool[Math.max(0, Math.min(pool.length - 1, Math.floor((x * 0.5 + 0.5) * pool.length)))];
    this.pn(m, t, { vel: 0.55, rev: 0.5 });
  }
}

/* ── I · Debussy's Child ───────────────────────────────────────────────────── */
const DEB_CHORDS = [
  [37, 44, 53, 60, 63], [37, 46, 55, 63, 65], [36, 43, 51, 58, 65], [41, 48, 51, 58, 60],
  [42, 49, 53, 56, 60], [44, 51, 53, 58, 60], [34, 41, 49, 56, 60], [39, 46, 53, 60, 67],
];
const DEB_PENTA = [61, 63, 65, 68, 70]; // D♭ major pentatonic, upper register
export class DebussyC extends Composer {
  constructor(e, bus, seed = 11) { super(e, bus, seed); this.bar = 0; this.beat = 60 / 62; this.lead = 0.3; }
  get chord() { return DEB_CHORDS[this.bar % DEB_CHORDS.length]; }
  step(t) {
    const r = this.r, ch = DEB_CHORDS[this.bar % DEB_CHORDS.length], barLen = this.beat * 3;
    const ped = barLen * 1.7;
    this.pn(ch[0] - (this.bar % 4 === 0 ? 12 : 0), t, { vel: 0.5, dur: ped, release: 1.5, tag: 'bass' });
    // rolled chord, unhurried
    let tt = t + this.beat * r.range(0.4, 0.7);
    const up = ch.slice(1);
    up.forEach((m, i) => { this.pn(m, tt, { vel: 0.42 - i * 0.03 + r.range(-0.03, 0.03), dur: ped, release: 1.4, pan: -0.3 + i * 0.15 }); tt += r.range(0.07, 0.13); });
    if (this.bar % 4 === 3) {
      // planing: a quartal shape gliding up by whole steps (parallel chords)
      let base = 72 + r.int(0, 2) * 2;
      for (let k = 0; k < 4; k++) {
        const at = t + this.beat * (1.0 + k * 0.5);
        [0, 5, 10].forEach((iv, j) => this.pn(base + iv, at + j * 0.012, { vel: 0.34 + k * 0.03, dur: this.beat * 0.9, release: 1.2, tag: 'melody', pan: 0.2 }));
        base += 2;
      }
    } else {
      const n = r.int(2, 4);
      const pool = ch.slice(2).map((m) => m + 12).concat(DEB_PENTA.map((m) => m + 12)).filter((m) => m >= 70 && m <= 89);
      let at = t + this.beat * r.range(1.0, 1.3);
      for (let k = 0; k < n; k++) {
        const m = r.pick(pool);
        this.pn(m, at, { vel: r.range(0.35, 0.5), dur: this.beat * 1.4, release: 1.3, tag: 'melody', pan: r.range(-0.2, 0.4) });
        at += this.beat * r.pick([0.5, 0.75, 1.0]) * r.range(0.95, 1.1);
      }
    }
    this.bar++;
    this.cursor = t + barLen * this.r.range(0.98, 1.06);
  }
  key(t, m) {
    this.pn(m, t, { vel: 0.55, dur: 2.5, release: 1.5, tag: 'melody' });
    const ch = DEB_CHORDS[(this.bar + 7) % DEB_CHORDS.length];
    const under = ch.slice(1).map((x) => x + 12 * Math.round((m - 7 - x) / 12)).find((x) => x < m && x > m - 9);
    if (under) this.pn(under, t + 0.03, { vel: 0.35, dur: 2.5, release: 1.5 });
  }
}

/* ── II · Yellow Magic ─────────────────────────────────────────────────────── */
const YMO_ROOTS = [33, 29, 31, 28];            // A  F  G  E
const YMO_ARP = [[57, 60, 64, 69, 72, 76], [53, 57, 60, 65, 69, 72], [55, 59, 62, 67, 71, 74], [52, 55, 59, 64, 67, 71]];
const YMO_HOOK = [ // [16th position, midi] — original pentatonic hook over 2 bars
  [0, 76], [3, 79], [6, 81], [8, 79], [10, 76], [12, 74], [14, 76],
  [16, 72], [20, 74], [22, 76], [24, 79], [27, 81], [30, 84],
];
export class YmoC extends Composer {
  constructor(e, bus, seed = 21) {
    super(e, bus, seed); this.bpm = 116; this.s16 = 60 / this.bpm / 4; this.i = 0; this.lead = 0.1;
    this.mask = [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1];
    this.cut = 1800; this.intro = 0;
  }
  init() { this.i = 0; }
  step(t) {
    const i = this.i, st = i % 16, bar = Math.floor(i / 16), ci = bar % 4, root = YMO_ROOTS[ci];
    const e = this.e, B = this.bus;
    const sw = (st % 2 === 1) ? this.s16 * 0.08 : 0; // a little shuffle
    const tt = t + sw;
    const build = Math.min(1, bar / 2);
    // drums
    if (st % 4 === 0) e.synth(B, tt, { freq: 46, glideFrom: 160, glide: 0.06, dur: 0.18, release: 0.2, vel: 0.95, gain: 1.0, tag: 'kick' });
    if ((st === 4 || st === 12) && bar >= 1) {
      e.noise(B, tt, { dur: 0.09, release: 0.16, vel: 0.6, gain: 0.55, filters: [['bandpass', 1900, 0.8]], rev: 0.25, tag: 'snare' });
      e.synth(B, tt, { freq: 190, glideFrom: 240, glide: 0.03, dur: 0.05, release: 0.08, vel: 0.5, gain: 0.35 });
    }
    e.noise(B, tt, { dur: st % 4 === 2 ? 0.07 : 0.018, release: 0.03, vel: (st % 4 === 2 ? 0.45 : 0.25) * build, gain: 0.35, filters: [['highpass', 7500, 0.7]], pan: 0.25, tag: 'hat' });
    // bass: octave jumps on 16ths
    const bpat = [0, null, 12, 0, null, 0, 12, null, 0, null, 12, 0, null, 7, 12, 0];
    if (bpat[st] != null && bar >= 0) {
      const m = root + 12 + bpat[st];
      e.synth(B, tt, { freq: mtof(m), midi: m, types: ['sawtooth', 'square'], spread: 9, dur: this.s16 * 0.8, release: 0.06, vel: 0.62, gain: 0.32, cutoff: 260, env: 1400, envTime: 0.06, q: 6, tag: 'bass' });
    }
    // arpeggio (sequencer mask can be edited by the viewer)
    if (this.mask[st] && bar >= 1) {
      const arp = YMO_ARP[ci]; const idx = [0, 1, 2, 3, 4, 5, 4, 3][st % 8] + (st >= 8 ? 0 : 0);
      const m = arp[idx % arp.length] + (st >= 8 ? 12 : 0);
      e.synth(B, tt, { freq: mtof(m), midi: m, type: 'square', dur: this.s16 * 0.55, release: 0.05, vel: 0.5, gain: 0.16, cutoff: this.cut, env: 2500, envTime: 0.05, q: 4, dly: 0.35, pan: st % 2 ? 0.35 : -0.35, rev: 0.1, tag: 'arp', step: st });
    }
    // hook, every other 2-bar phrase from bar 4
    if (bar >= 4 && (Math.floor(bar / 2) % 2 === 0)) {
      const pos = (bar % 2) * 16 + st;
      for (const [p, m] of YMO_HOOK) if (p === pos) e.synth(B, tt, { freq: mtof(m), midi: m, types: ['square', 'sawtooth'], spread: 12, glideFrom: mtof(m - 2), glide: 0.04, dur: this.s16 * 1.7, release: 0.15, vel: 0.55, gain: 0.2, cutoff: 2600, env: 1800, envTime: 0.12, q: 2, dly: 0.25, rev: 0.25, tag: 'lead' });
    }
    // chord stab pad at bar start
    if (st === 0 && bar >= 2) YMO_ARP[ci].slice(0, 4).forEach((m, k) => e.synth(B, tt, { freq: mtof(m), midi: m, types: ['sawtooth', 'sawtooth'], spread: 14, attack: 0.02, dur: this.s16 * 14, release: 0.4, vel: 0.35, gain: 0.07, cutoff: 900, q: 1, rev: 0.35, pan: -0.4 + k * 0.27 }));
    this.i++;
    this.cursor = t + this.s16;
  }
  toggle(st) { this.mask[st] = this.mask[st] ? 0 : 1; }
}

/* ── III · Melodies for the Screen ─────────────────────────────────────────── */
const SCR_CH = [ // [bass, strings voicing]
  [38, [57, 62, 65, 69, 76]], [34, [58, 62, 65, 69, 74]], [31, [58, 62, 65, 69, 74]], [33, [57, 62, 64, 67, 73]],
  [29, [57, 60, 65, 69, 72]], [28, [55, 60, 64, 67, 72]], [38, [57, 60, 65, 69, 74]], [33, [57, 61, 64, 67, 76]],
];
const SCR_SCALE = [74, 77, 79, 81, 84, 86, 89]; // D minor pentatonic, singing register
export class ScreenC extends Composer {
  constructor(e, bus, seed = 31) { super(e, bus, seed); this.beat = 60 / 66; this.bar = 0; this.lead = 0.2; this.mel = 2; }
  step(t) {
    const r = this.r, [bass, voic] = SCR_CH[this.bar % SCR_CH.length], barLen = this.beat * 3;
    const e = this.e, B = this.bus;
    e.sample(B, 'cello', bass + 12, t, { vel: 0.55, attack: 0.25, dur: barLen * 0.98, release: 1.2, gain: 0.9, rev: 0.4, tag: 'cello' });
    voic.slice(1).forEach((m, k) => e.sample(B, 'violin', m, t + k * 0.04, { vel: 0.42, attack: 1.1, dur: barLen * 1.02, release: 1.8, gain: 0.55, rev: 0.55, pan: -0.5 + k * 0.33, tag: 'strings' }));
    // left-hand piano: broken chord in eighths, very quiet
    [bass + 24, voic[1], voic[2], voic[1] + 12, voic[2], voic[1]].forEach((m, k) => this.pn(m, t + k * this.beat * 0.5, { vel: 0.22, dur: this.beat * 1.2, release: 0.9, pan: -0.25 }));
    // melody: four-bar phrases, the second answering the first
    if (this.bar % 8 >= 2 || this.bar >= 8) {
      const rhythms = [[0, 1.5, 2], [0, 1, 2], [0, 2], [0.5, 1, 1.5, 2]];
      const rh = r.pick(rhythms);
      for (const b of rh) {
        this.mel = Math.max(0, Math.min(SCR_SCALE.length - 1, this.mel + r.pick([-2, -1, -1, 1, 1, 2, 0])));
        const m = SCR_SCALE[this.mel];
        this.pn(m, t + b * this.beat, { vel: r.range(0.48, 0.62), dur: this.beat * 1.6, release: 1.0, tag: 'melody', pan: 0.1 });
        if (this.bar % 4 === 3) this.pn(m - 12, t + b * this.beat + 0.01, { vel: 0.3, dur: this.beat * 1.6, release: 1.0 });
      }
    }
    this.bar++;
    this.cursor = t + barLen;
  }
  phrase(t, i) {
    let idx = i % SCR_SCALE.length;
    for (let k = 0; k < 4; k++) { this.pn(SCR_SCALE[idx], t + k * this.beat * 0.75, { vel: 0.55, dur: 1.2, release: 1.0, tag: 'melody' }); idx = Math.max(0, Math.min(6, idx + this.r.pick([-1, 1, 2, -2]))); }
  }
}

/* ── IV · Casa / bossa nova ────────────────────────────────────────────────── */
const BOS = [ // [bass, voicing]
  [48, [52, 59, 62, 67]], [45, [55, 61, 65]], [50, [53, 60, 64, 69]], [43, [53, 59, 64]],
  [40, [55, 62, 64, 71]], [45, [55, 58, 61, 64]], [50, [53, 60, 64, 69]], [49, [53, 59, 63, 67]],
];
export class BossaC extends Composer {
  constructor(e, bus, seed = 41) { super(e, bus, seed); this.e8 = 60 / 132 / 2; this.i = 0; this.lead = 0.2; }
  get chordIdx() { return Math.floor(this.i / 8) % BOS.length; }
  step(t) {
    const r = this.r, e = this.e, B = this.bus, i = this.i, pos = i % 8, bar = Math.floor(i / 8);
    const [bass, v] = BOS[bar % BOS.length];
    const hum = () => r.range(-0.008, 0.012);
    if (pos === 0 || pos === 4) e.sample(B, 'guitar', pos === 0 ? bass : bass + 7 - (bass + 7 > 55 ? 12 : 0), t + hum(), { vel: 0.62, gain: 1.15, dur: this.e8 * 3.2, release: 0.4, pan: -0.15, rev: 0.25, tag: 'bass' });
    const comp = (bar % 2 === 0) ? [0, 3, 5] : [2, 4, 7];
    if (comp.includes(pos)) v.forEach((m, k) => e.sample(B, 'guitar', m, t + k * 0.011 + hum(), { vel: 0.5 + r.range(-0.05, 0.05), gain: 1.1, dur: this.e8 * 1.7, release: 0.25, pan: 0.15, rev: 0.28, tag: 'guitar' }));
    // shaker and rim
    for (let k = 0; k < 2; k++) e.noise(B, t + k * this.e8 / 2, { dur: 0.03, release: 0.04, vel: (k ? 0.32 : 0.18) + r.range(0, 0.06), gain: 0.18, filters: [['highpass', 5200, 0.6]], pan: 0.45 });
    const clave = (bar % 2 === 0) ? [0, 3, 6] : [2, 4];
    if (clave.includes(pos)) e.noise(B, t, { dur: 0.012, release: 0.03, vel: 0.28, gain: 0.3, filters: [['bandpass', 2300, 6]], pan: -0.4, tag: 'rim' });
    // cello: one long, singing tone per bar from the colour notes
    if (pos === 0 && bar >= 2) {
      const tones = v.filter((m) => m >= 52).map((m) => m - 12 * (m > 62 ? 1 : 0));
      const m = r.pick(tones);
      e.sample(B, 'cello', m, t + 0.05, { vel: 0.55, attack: 0.35, dur: this.e8 * 7.5, release: 1.0, gain: 0.95, rev: 0.45, pan: 0.05, tag: 'cello' });
    }
    // piano, now and then: a high answer
    if (pos === 5 && bar % 4 === 3) [v[v.length - 1] + 12, v[v.length - 2] + 12].forEach((m, k) => this.pn(m, t + k * this.e8, { vel: 0.4, dur: 1.2, release: 1.0, tag: 'melody', pan: 0.35 }));
    this.i++;
    this.cursor = t + this.e8 * (pos % 2 === 1 ? 0.96 : 1.04);
  }
  strum(t, dir = 1) {
    const [, v] = BOS[this.chordIdx];
    const notes = dir > 0 ? v : v.slice().reverse();
    notes.forEach((m, k) => this.e.sample(this.bus, 'guitar', m + 12, t + k * 0.025, { vel: 0.6, gain: 1.1, dur: 2.0, release: 0.6, rev: 0.4, tag: 'guitar' }));
  }
  stringPluck(t, k) { const [bass, v] = BOS[this.chordIdx]; const notes = [bass, bass + 7].concat(v).sort((a, b) => a - b); const m = notes[Math.min(notes.length - 1, Math.round(k / 5 * (notes.length - 1)))]; this.e.sample(this.bus, 'guitar', m + (k > 2 ? 12 : 0), t, { vel: 0.6, gain: 1.1, dur: 2.2, release: 0.7, rev: 0.4, tag: 'guitar', pan: -0.4 + k * 0.16 }); }
  pluck(t, x, extra = {}) { const [, v] = BOS[this.chordIdx]; const m = v[Math.floor((x * 0.5 + 0.5) * v.length) % v.length] + 12; this.e.sample(this.bus, 'guitar', m, t, { vel: 0.65, gain: 1.1, dur: 2.5, release: 0.8, rev: 0.45, tag: 'guitar', user: 1, ...extra }); }
}

/* ── V · Sine and Noise ────────────────────────────────────────────────────── */
export class SineC extends Composer {
  constructor(e, bus, seed = 51) { super(e, bus, seed); this.lead = 0.4; this.nextPiano = 0; this.nextSub = 0; this.grid = 0.125; }
  init() { this.nextPiano = this.t0 + 1.2; this.nextSub = this.t0 + 0.5; }
  step(t) {
    const r = this.r, e = this.e, B = this.bus;
    if (t >= this.nextPiano) {
      const m = r.pick([60, 64, 71, 74, 67, 78, 55, 62]);
      this.pn(m, t, { vel: r.range(0.38, 0.55), rev: 0.55, tag: 'piano' });
      if (r.chance(0.3)) this.pn(m + r.pick([7, 11, 14]), t + r.range(0.6, 1.4), { vel: 0.3, rev: 0.55, tag: 'piano' });
      this.nextPiano = t + r.range(3.5, 6.5);
    }
    if (t >= this.nextSub) { e.synth(B, t, { freq: 48, dur: 0.5, release: 0.6, vel: 0.7, gain: 0.55, tag: 'sub' }); this.nextSub = t + this.grid * 16 * r.pick([1, 2]); }
    // micro-patterns of sine blips and clicks
    if (r.chance(0.55)) {
      const n = r.int(2, 7), f = r.pick([1000, 2000, 4000, 8000, 3150, 6300, 12500]);
      const sub = r.pick([this.grid / 2, this.grid / 4, this.grid]);
      for (let k = 0; k < n; k++) {
        const at = t + k * sub;
        if (r.chance(0.65)) e.synth(B, at, { freq: Math.min(16000, f * (r.chance(0.2) ? 2 : 1)), dur: r.pick([0.012, 0.02, 0.04]), attack: 0.0005, release: 0.004, vel: 0.35, gain: 0.12, pan: r.range(-0.9, 0.9), rev: 0.05, tag: 'blip', midi: f });
        else e.noise(B, at, { dur: 0.004, release: 0.002, vel: 0.6, gain: 0.35, filters: [['highpass', 2500, 0.5]], pan: r.range(-0.9, 0.9), tag: 'click' });
      }
    }
    if (r.chance(0.07)) e.synth(B, t, { freq: r.pick([440, 880, 1000]), dur: r.range(0.4, 1.4), attack: 0.002, release: 0.01, vel: 0.25, gain: 0.08, pan: r.range(-0.5, 0.5), tag: 'tone' });
    this.cursor = t + this.grid * this.r.pick([2, 4, 4, 6, 8]);
  }
  tap(t, x, y) {
    const f = 400 * Math.pow(2, (x * 0.5 + 0.5) * 5);
    for (let k = 0; k < 4; k++) this.e.synth(this.bus, t + k * 0.03, { freq: f * (1 + k * 0.5), dur: 0.02, attack: 0.0005, release: 0.005, vel: 0.45, gain: 0.14, pan: x, tag: 'blip', midi: f });
    this.e.noise(this.bus, t, { dur: 0.004, release: 0.002, vel: 0.7, gain: 0.4, filters: [['highpass', 2500, 0.5]], pan: x, tag: 'click' });
    if (y > 0.3) this.pn(this.r.pick([71, 74, 76, 79]), t, { vel: 0.45, rev: 0.6, tag: 'piano' });
  }
}

/* ── VI · Ice · Flood · Forest (async) ─────────────────────────────────────── */
export class NatureC extends Composer {
  constructor(e, bus, seed = 61) {
    super(e, bus, seed); this.lead = 0.2;
    this.loops = [
      { per: 7.3, notes: [45, 52, 59], det: [-35, -10], vel: 0.42, off: 0.3 },
      { per: 11.1, notes: [78, 85], det: [5, 25], vel: 0.3, off: 2.2 },
      { per: 13.7, notes: [37], det: [-25, -15], vel: 0.48, off: 4.0 },
      { per: 17.9, notes: [64, 66], det: [-20, -5], vel: 0.32, off: 6.5 },
    ];
    this.bucket = 0; this.rain = 1;
  }
  init() {
    this.loops.forEach((l) => { l.next = this.t0 + l.off; });
    this.nDrone = this.t0; this.nWind = this.t0 + 1; this.nRain = this.t0; this.nBed = this.t0; this.nBub = this.t0 + 0.5;
  }
  step(t) {
    const r = this.r, e = this.e, B = this.bus;
    for (const l of this.loops) if (t >= l.next) {
      l.notes.forEach((m, k) => this.pn(m, l.next + k * r.range(0.05, 0.25), { vel: l.vel, detune: r.range(l.det[0], l.det[1]), rev: 0.55, tag: 'piano', pan: r.range(-0.5, 0.5) }));
      l.next += l.per;
    }
    if (t >= this.nDrone) {
      [33, 40, 45.07].forEach((m, k) => e.synth(B, t, { freq: mtof(m), types: ['triangle', 'sine'], spread: 7, attack: 4, dur: 9, release: 5, vel: 0.5, gain: 0.12, cutoff: 700, pan: -0.3 + k * 0.3, rev: 0.6 }));
      this.nDrone = t + 9;
    }
    if (t >= this.nWind) { e.noise(B, t, { dur: 7, attack: 3, release: 3, vel: 0.4, gain: 0.08, filters: [['bandpass', 500, 0.8]], sweepTo: 900, pan: r.range(-0.6, 0.6), rev: 0.3 }); this.nWind = t + 8; }
    if (t >= this.nBed) { e.noise(B, t, { dur: 4.5, attack: 1, release: 1.5, vel: 0.5 * this.rain, gain: 0.085, filters: [['highpass', 1800, 0.5], ['lowpass', 9000, 0.5]], pan: r.range(-0.3, 0.3) }); this.nBed = t + 4; }
    while (this.nRain < t + 0.25) {
      const at = this.nRain;
      const f = r.range(1800, 4800);
      e.synth(B, at, { freq: f, sweepTo: f * 0.55, dur: 0.018, attack: 0.0008, release: 0.01, vel: r.range(0.08, 0.2) * this.rain, gain: 0.25, pan: r.range(-1, 1), rev: 0.2, tag: 'drop', midi: f });
      this.nRain += -Math.log(1 - r()) / (6 * this.rain + 0.5);
    }
    while (this.nBub < t + 0.25) {
      const at = this.nBub, f = r.range(280, 700);
      e.synth(B, at, { freq: f, sweepTo: f * r.range(1.6, 2.4), dur: 0.035, attack: 0.002, release: 0.01, vel: r.range(0.1, 0.2), gain: 0.22, pan: r.range(-0.6, 0.6), rev: 0.35, tag: 'bubble', midi: f });
      this.nBub += -Math.log(1 - r()) / 1.6;
    }
    this.cursor = t + 0.25;
  }
  drop(t, x, y, extra = {}) {
    const pool = [57, 59, 61, 64, 66, 69, 71, 73, 76];
    const m = pool[Math.max(0, Math.min(pool.length - 1, Math.floor((y * 0.5 + 0.5) * pool.length)))];
    this.pn(m, t, { vel: 0.55, detune: this.r.range(-38, 22), rev: 0.55, tag: 'piano', pan: x * 0.6, user: 1, ...extra });
  }
}

/* ── VII · 12 ──────────────────────────────────────────────────────────────── */
export const TWELVE = [45, 52, 57, 59, 61, 64, 66, 69, 71, 73, 76, 81];
export class TwelveC extends Composer {
  constructor(e, bus, seed = 71) { super(e, bus, seed); this.lead = 1.0; this.k = 0; this.nPad = 0; }
  init() { this.nPad = this.t0; }
  step(t) {
    const r = this.r, e = this.e, B = this.bus;
    if (t >= this.nPad) { [45, 52].forEach((m) => e.synth(B, t, { freq: mtof(m), types: ['sine', 'triangle'], spread: 4, attack: 5, dur: 10, release: 6, vel: 0.4, gain: 0.07, rev: 0.7 })); this.nPad = t + 12; }
    if (r.chance(0.35)) e.noise(B, t - 0.7, { dur: 0.5, attack: 0.45, release: 0.5, vel: 0.35, gain: 0.08, filters: [['bandpass', 900, 0.7]], tag: 'breath' });
    const order = [7, 4, 9, 2, 11, 5, 0, 8, 3, 10, 6, 1];
    const i = order[this.k % 12];
    this.pn(TWELVE[i], t, { vel: r.range(0.36, 0.52), rev: 0.6, tag: 'piano', ring: i });
    if (r.chance(0.3)) { const j = order[(this.k + 5) % 12]; this.pn(TWELVE[j], t + r.range(0.4, 1.1), { vel: 0.3, rev: 0.6, tag: 'piano', ring: j }); }
    this.k++;
    this.cursor = t + r.range(2.6, 5.2);
  }
  ring(t, i) { this.pn(TWELVE[i], t, { vel: 0.55, rev: 0.6, tag: 'piano', ring: i }); }
}

export const COMPOSERS = { prelude: PreludeC, debussy: DebussyC, ymo: YmoC, screen: ScreenC, casa: BossaC, sine: SineC, nature: NatureC, twelve: TwelveC };
