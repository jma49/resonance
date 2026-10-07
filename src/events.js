// Musical events drive the visuals. Live, the audio engine pushes events as it schedules
// them; in the film, the full list comes from the offline render. Visuals only ever ask
// "what happened up to time t", so both paths look identical.

export class EventTrack {
  constructor() { this.ev = []; this.sorted = true; }
  clear() { this.ev.length = 0; }
  push(e) {
    if (this.ev.length && e.t < this.ev[this.ev.length - 1].t) this.sorted = false;
    this.ev.push(e);
    if (this.ev.length > 6000 && !this.film) this.ev.splice(0, 2000);
  }
  load(list) { this.ev = list.slice().sort((a, b) => a.t - b.t); this.sorted = true; this.film = true; }
  _sort() { if (!this.sorted) { this.ev.sort((a, b) => a.t - b.t); this.sorted = true; } }
  _lower(t) { // first index with ev.t >= t
    let lo = 0, hi = this.ev.length;
    while (lo < hi) { const m = (lo + hi) >> 1; if (this.ev[m].t < t) lo = m + 1; else hi = m; }
    return lo;
  }
  // events in (t - win, t], optionally filtered by instrument tag(s)
  recent(t, win, tag) {
    this._sort();
    const out = [];
    const i0 = this._lower(t - win), i1 = this._lower(t + 1e-6);
    for (let i = i0; i < i1; i++) { const e = this.ev[i]; if (!tag || e.tag === tag || (Array.isArray(tag) && tag.includes(e.tag))) out.push(e); }
    return out;
  }
  // exponentially decaying sum of velocities: a smooth "how much is happening" signal
  pulse(t, tau, tag) {
    let s = 0;
    for (const e of this.recent(t, tau * 6, tag)) s += (e.vel ?? 1) * Math.exp(-(t - e.t) / tau);
    return s;
  }
  last(t, tag) {
    const r = this.recent(t, 30, tag); return r.length ? r[r.length - 1] : null;
  }
}
