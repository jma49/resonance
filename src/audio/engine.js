import { assetURL } from '../util.js';
// Audio engine shared by the live piece (AudioContext) and the film score (OfflineAudioContext).
// Real recorded instruments (Salamander grand, nylon guitar, cello, violin) are played as
// samplers; everything else is synthesized. Every note is also published as an event so the
// visuals can answer to it.

export const SAMPLE_SETS = {
  piano: ['A0', 'C1', 'Ds1', 'Fs1', 'A1', 'C2', 'Ds2', 'Fs2', 'A2', 'C3', 'Ds3', 'Fs3', 'A3', 'C4', 'Ds4', 'Fs4', 'A4', 'C5', 'Ds5', 'Fs5', 'A5', 'C6', 'Ds6', 'Fs6', 'A6', 'C7', 'Ds7', 'Fs7', 'A7', 'C8'],
  cello: ['C2', 'G2', 'C3', 'G3', 'C4', 'G4', 'C5'],
  guitar: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4', 'A4', 'E5'],
  violin: ['A3', 'C4', 'E4', 'G4', 'C5', 'E5', 'A5', 'C6'],
};

export function nameToMidi(n) {
  const m = /^([A-G])(s?)(-?\d)$/.exec(n);
  const base = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[m[1]];
  return 12 * (parseInt(m[3], 10) + 1) + base + (m[2] ? 1 : 0);
}

export async function loadSamples(ctx, base, onProgress, sets = SAMPLE_SETS) {
  const out = {}; const jobs = [];
  let done = 0, total = 0;
  for (const [inst, names] of Object.entries(sets)) {
    out[inst] = [];
    for (const n of names) {
      total++;
      jobs.push((async () => {
        const res = await fetch(assetURL(`${base}aud/${inst}/${n}.mp3`));
        const ab = await res.arrayBuffer();
        const buf = await ctx.decodeAudioData(ab);
        out[inst].push({ midi: nameToMidi(n), buf });
        done++; onProgress && onProgress(done / total);
      })());
    }
  }
  await Promise.all(jobs);
  for (const k in out) out[k].sort((a, b) => a.midi - b.midi);
  return out;
}

function makeIR(ctx, seconds, decay, bright = 0.6, seed = 7) {
  const sr = ctx.sampleRate, len = Math.floor(sr * seconds);
  const ir = ctx.createBuffer(2, len, sr);
  let s = seed;
  const rnd = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296 * 2 - 1; };
  for (let c = 0; c < 2; c++) {
    const d = ir.getChannelData(c); let lp = 0;
    for (let i = 0; i < len; i++) {
      const t = i / sr;
      const env = Math.pow(1 - i / len, decay) * Math.exp(-t * 1.2);
      const a = bright * Math.exp(-t * 0.9) + 0.05; // high frequencies die first
      lp = lp + a * (rnd() - lp);
      d[i] = lp * env * (t < 0.012 ? t / 0.012 : 1);
    }
  }
  return ir;
}

export class AudioEngine {
  constructor(ctx, samples, events) {
    this.ctx = ctx; this.samples = samples; this.events = events;
    const c = ctx;
    this.master = c.createGain(); this.master.gain.value = 0.9;
    this.comp = c.createDynamicsCompressor();
    this.comp.threshold.value = -16; this.comp.knee.value = 12; this.comp.ratio.value = 3; this.comp.attack.value = 0.01; this.comp.release.value = 0.25;
    this.limiter = c.createDynamicsCompressor();
    this.limiter.threshold.value = -2; this.limiter.knee.value = 0; this.limiter.ratio.value = 20; this.limiter.attack.value = 0.002; this.limiter.release.value = 0.1;
    this.master.connect(this.comp); this.comp.connect(this.limiter); this.limiter.connect(c.destination);
    this.analyser = c.createAnalyser(); this.analyser.fftSize = 2048; this.limiter.connect(this.analyser);

    this.reverb = c.createConvolver(); this.reverb.buffer = makeIR(c, 5.5, 2.2, 0.55);
    this.revIn = c.createGain(); this.revIn.gain.value = 1; this.revIn.connect(this.reverb);
    this.revOut = c.createGain(); this.revOut.gain.value = 0.55; this.reverb.connect(this.revOut); this.revOut.connect(this.master);

    this.delay = c.createDelay(2.0); this.delay.delayTime.value = 0.387;
    this.fb = c.createGain(); this.fb.gain.value = 0.38;
    this.dlp = c.createBiquadFilter(); this.dlp.type = 'lowpass'; this.dlp.frequency.value = 3200;
    this.delIn = c.createGain(); this.delIn.connect(this.delay); this.delay.connect(this.dlp); this.dlp.connect(this.fb); this.fb.connect(this.delay);
    this.delOut = c.createGain(); this.delOut.gain.value = 0.5; this.dlp.connect(this.delOut); this.delOut.connect(this.master); this.delOut.connect(this.revIn);

    const nb = c.createBuffer(1, c.sampleRate * 3, c.sampleRate); const nd = nb.getChannelData(0);
    let s = 99; for (let i = 0; i < nd.length; i++) { s = (s * 1664525 + 1013904223) >>> 0; nd[i] = s / 4294967296 * 2 - 1; }
    this.noiseBuf = nb;
    this.buses = {};
  }

  bus(name, gain = 1) {
    if (this.buses[name]) return this.buses[name];
    const c = this.ctx;
    const input = c.createGain();
    const filter = c.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 20000; filter.Q.value = 0.7;
    const out = c.createGain(); out.gain.value = gain;
    input.connect(filter); filter.connect(out); out.connect(this.master);
    // per-voice effect sends pass through the bus filter, then through their own faders,
    // which fadeBus moves together with the dry fader
    const wf = c.createBiquadFilter(); wf.type = 'lowpass'; wf.frequency.value = 20000;
    const wet = c.createGain(); wet.gain.value = gain; wf.connect(wet); wet.connect(this.revIn);
    const df = c.createBiquadFilter(); df.type = 'lowpass'; df.frequency.value = 20000;
    const dly = c.createGain(); dly.gain.value = gain; df.connect(dly); dly.connect(this.delIn);
    const b = { name, input, filter, out, wet: wf, wetGain: wet, dly: df, dlyGain: dly, filters: [filter, wf, df] };
    this.buses[name] = b; return b;
  }

  emit(tag, t, midi, vel, extra) { if (this.events) this.events.push({ t, tag, midi, vel, ...(extra || {}) }); }

  _voiceOut(bus, t, { pan = 0, rev = 0.25, dly = 0 }) {
    const c = this.ctx;
    const g = c.createGain();
    let node = g;
    if (pan) { const p = c.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); g.connect(p); node = p; }
    node.connect(bus.input);
    if (rev > 0) { const s = c.createGain(); s.gain.value = rev; node.connect(s); s.connect(bus.wet); }
    if (dly > 0) { const s = c.createGain(); s.gain.value = dly; node.connect(s); s.connect(bus.dly); }
    return g;
  }

  sample(busName, inst, midi, t, o = {}) {
    const set = this.samples[inst]; if (!set || !set.length) return;
    const bus = this.bus(busName);
    let best = set[0];
    for (const s of set) if (Math.abs(s.midi - midi) < Math.abs(best.midi - midi)) best = s;
    const c = this.ctx;
    const src = c.createBufferSource(); src.buffer = best.buf;
    const cents = (midi - best.midi) * 100 + (o.detune || 0);
    src.playbackRate.value = Math.pow(2, cents / 1200);
    const vel = o.vel ?? 0.7;
    const g = this._voiceOut(bus, t, o);
    const amp = (o.gain ?? 1) * vel * vel;
    const att = o.attack ?? 0.003;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(amp, t + att);
    const playable = best.buf.duration / src.playbackRate.value;
    let end = t + playable;
    if (o.dur != null) {
      const rel = o.release ?? 0.6;
      const tOff = t + Math.max(att + 0.01, o.dur);
      g.gain.setValueAtTime(amp, tOff); g.gain.setTargetAtTime(0, tOff, rel / 4);
      end = Math.min(end, tOff + rel * 1.6);
    } else if (o.fadeEnd) {
      g.gain.setValueAtTime(amp, Math.max(t + att, end - 1.2)); g.gain.linearRampToValueAtTime(0, end);
    }
    if (o.lowpass) { /* per-voice tone colour */
      const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = o.lowpass; src.connect(f); f.connect(g);
    } else src.connect(g);
    src.start(t, o.offset || 0); src.stop(end + 0.05);
    if (!o.silent) this.emit(o.tag || inst, t, midi, vel, { dur: o.dur ?? playable, detune: o.detune || 0, pan: o.pan || 0, ring: o.ring, user: o.user, px: o.px, pz: o.pz, inst });
    return src;
  }

  // simple subtractive voice
  synth(busName, t, o = {}) {
    const c = this.ctx; const bus = this.bus(busName);
    const freq = o.freq ?? 440; const dur = o.dur ?? 0.2;
    const g = this._voiceOut(bus, t, o);
    const vel = o.vel ?? 0.5;
    const att = o.attack ?? 0.005, rel = o.release ?? 0.12, dec = o.decay ?? 0;
    const peak = vel * (o.gain ?? 0.25);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + att);
    if (dec) g.gain.setTargetAtTime(peak * (o.sustain ?? 0.3), t + att, dec / 3);
    g.gain.setValueAtTime(dec ? peak * (o.sustain ?? 0.3) : peak, t + Math.max(dur, att + 0.001));
    g.gain.setTargetAtTime(0, t + Math.max(dur, att + 0.001), rel / 4);
    let dest = g;
    if (o.cutoff) {
      const f = c.createBiquadFilter(); f.type = o.ftype || 'lowpass'; f.Q.value = o.q ?? 1;
      f.frequency.setValueAtTime(o.cutoff, t);
      if (o.env) { f.frequency.setValueAtTime(o.cutoff + o.env, t); f.frequency.setTargetAtTime(o.cutoff, t + 0.002, o.envTime ?? 0.08); }
      f.connect(g); dest = f;
    }
    const oscs = [];
    const types = o.types || [o.type || 'sine'];
    const det = o.spread ?? 0;
    types.forEach((ty, i) => {
      const osc = c.createOscillator(); osc.type = ty;
      osc.frequency.setValueAtTime(o.glideFrom ?? freq, t);
      if (o.glideFrom) osc.frequency.exponentialRampToValueAtTime(freq, t + (o.glide ?? 0.05));
      if (o.sweepTo) osc.frequency.exponentialRampToValueAtTime(o.sweepTo, t + dur);
      osc.detune.value = (i - (types.length - 1) / 2) * det + (o.detune || 0);
      const og = c.createGain(); og.gain.value = 1 / types.length;
      osc.connect(og); og.connect(dest);
      osc.start(t); osc.stop(t + dur + rel * 2 + 0.05); oscs.push(osc);
    });
    if (o.tag) this.emit(o.tag, t, o.midi ?? 0, vel, { dur, freq, pan: o.pan || 0, step: o.step });
    return oscs;
  }

  noise(busName, t, o = {}) {
    const c = this.ctx; const bus = this.bus(busName);
    const src = c.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true;
    const dur = o.dur ?? 0.05; const vel = o.vel ?? 0.5;
    const g = this._voiceOut(bus, t, o);
    const peak = vel * (o.gain ?? 0.3);
    const att = o.attack ?? 0.001, rel = o.release ?? 0.05;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + att);
    g.gain.setValueAtTime(peak, t + Math.max(dur, att));
    g.gain.setTargetAtTime(0, t + Math.max(dur, att), rel / 4);
    let node = src;
    const filters = o.filters || (o.ftype ? [[o.ftype, o.freq ?? 1000, o.q ?? 1]] : []);
    for (const [ty, f, q] of filters) { const bf = c.createBiquadFilter(); bf.type = ty; bf.frequency.setValueAtTime(f, t); if (o.sweepTo && ty !== 'highpass') bf.frequency.exponentialRampToValueAtTime(o.sweepTo, t + dur); bf.Q.value = q; node.connect(bf); node = bf; }
    node.connect(g);
    src.start(t, (o.offset ?? ((t * 7.919) % 2.5))); src.stop(t + dur + rel * 2 + 0.05);
    if (o.tag) this.emit(o.tag, t, o.midi ?? 0, vel, { dur, pan: o.pan || 0 });
  }

  _params(name) { const b = this.bus(name); return [b.out.gain, b.wetGain.gain, b.dlyGain.gain]; }
  // live fades: start from the current value
  fadeBus(name, t, to, time) {
    for (const p of this._params(name)) { p.cancelScheduledValues(t); p.setValueAtTime(p.value, t); p.linearRampToValueAtTime(to, t + time); }
  }
  // offline automation: explicit points
  setBusGain(name, t, v) { for (const p of this._params(name)) p.setValueAtTime(v, t); }
  rampBusGain(name, t, v) { for (const p of this._params(name)) p.linearRampToValueAtTime(v, t); }
  // muffling (the "bucket" in movement VI)
  setBusLowpass(name, t, hz, tc = 0.15) { for (const f of this.bus(name).filters) f.frequency.setTargetAtTime(hz, t, tc); }
}
