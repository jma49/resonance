import * as THREE from 'three';
import { Pipeline, mixGrade } from './pipeline.js';
import { Assets, TEXTURES } from './env.js';
import { EventTrack } from './events.js';
import { AudioEngine, loadSamples } from './audio/engine.js';
import { COMPOSERS } from './audio/composers.js';
import { MOVEMENTS, CREDITS } from './content.js';
import { CLASSES, collectPxr } from './scenes.js';
import { clamp, easeInOut, damp } from './util.js';

const $ = (s) => document.querySelector(s);
const AUTO_SECONDS = 55;
const TRANSITION = 2.6;

class App {
  constructor() {
    this.canvas = $('#stage');
    const coarse = matchMedia('(pointer: coarse)').matches;
    this.dpr = Math.min(window.devicePixelRatio || 1, coarse ? 1.5 : 1.75);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.setPixelRatio(1);
    this.pipe = new Pipeline(this.renderer, { msaa: coarse ? 2 : 4 });
    this.assets = new Assets('assets/');
    this.events = new EventTrack();
    this.movements = MOVEMENTS.map(() => null);
    this.cur = 0; this.trans = null; this.started = false; this.auto = true; this.muted = false;
    this.pointer = { x: 0, y: 0, down: false };
    this.perf0 = performance.now();
    this.bucket = 0; this.bucketTarget = 0;
    this.lang = 'both';
    this.hudLines = '';
    this.raycaster = new THREE.Raycaster();
  }
  now() { return this.started && this.clock ? this.clock() : (performance.now() - this.perf0) / 1000; }

  async load() {
    const bar = $('#load-bar'); let pt = 0, ps = 0;
    const upd = () => { bar.style.transform = `scaleX(${(pt * 0.45 + ps * 0.55).toFixed(3)})`; };
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC({ latencyHint: 'interactive' });
    const [_, samples] = await Promise.all([
      this.assets.loadTextures(TEXTURES, (p) => { pt = p; upd(); }),
      loadSamples(this.ctx, 'assets/', (p) => { ps = p; upd(); }),
    ]);
    this.samples = samples;
    this.engine = new AudioEngine(this.ctx, samples, this.events);
    this.build(0);
    this.resize();
    $('#intro').classList.add('ready');
    $('#enter').disabled = false; $('#enter').focus({ preventScroll: true });
    setTimeout(() => this.build(1), 300);
  }

  build(i) {
    if (this.movements[i]) return this.movements[i];
    const meta = MOVEMENTS[i];
    const m = new CLASSES[meta.id](this, meta);
    m.build();
    m.pxr = collectPxr(m.scene);
    m.setAspect(this.w / this.h || 16 / 9);
    m.start = this.now();
    this.movements[i] = m;
    return m;
  }

  async enter() {
    $('#enter').disabled = true;
    try { await Promise.race([this.ctx.resume(), new Promise((r) => setTimeout(r, 1500))]); } catch (e) { /* ignore */ }
    this.audioOK = this.ctx.state === 'running';
    this.started = true;
    this.clock = this.audioOK ? () => this.ctx.currentTime : () => (performance.now() - this.perf0) / 1000;
    if (!this.audioOK) $('#load-msg').textContent = '声音未能启动，画面仍会回应 · Sound could not start; visuals still respond';
    $('#intro').classList.add('gone'); document.body.classList.add('started');
    setTimeout(() => { $('#intro').hidden = true; }, 1200);
    this.events.clear();
    this.startMusic(this.cur, 0.2);
    for (const m of this.movements) if (m) m.start = this.now();
    this.lastTouch = this.now();
    this.sched = setInterval(() => this.tick(), 50);
    document.addEventListener('visibilitychange', () => { if (!this.audioOK) return; if (document.hidden) this.ctx.suspend(); else this.ctx.resume(); });
  }

  startMusic(i, delay = 0) {
    const id = MOVEMENTS[i].id; const t = this.now() + delay;
    if (this.composer) { const old = this.composer; old.stopAt = t; this.engine.fadeBus(old.bus, t, 0, 2.8); }
    this.engine.bus(id); this.engine.setBusLowpass(id, t, 20000, 0.01);
    this.engine.fadeBus(id, t, 0, 0.01); this.engine.fadeBus(id, t + 0.02, 1, 1.6);
    const C = COMPOSERS[id];
    this.composer = new C(this.engine, id, 1000 + Math.floor(Math.random() * 1e6));
    this.composer.start(t);
  }

  tick() { if (this.composer) this.composer.schedule(this.now() + 0.35); }

  go(i) {
    i = (i + MOVEMENTS.length) % MOVEMENTS.length;
    if (i === this.cur || this.trans) return;
    const m = this.build(i);
    m.start = this.now();
    this.trans = { from: this.cur, to: i, t0: this.now() };
    if (this.started) this.startMusic(i, 0.15);
    this.cur = i;
    this.caption(i);
    if (i + 1 < MOVEMENTS.length) setTimeout(() => this.build(i + 1), 1500);
  }

  caption(i) {
    const m = MOVEMENTS[i];
    const cap = $('#caption'); cap.classList.remove('in'); void cap.offsetWidth;
    $('#c-roman').textContent = m.roman; $('#c-years').textContent = m.years;
    $('#c-cn').textContent = m.cn; $('#c-en').textContent = m.en;
    $('#c-dcn').textContent = m.dcn; $('#c-den').textContent = m.den;
    $('#c-hcn').textContent = m.hcn; $('#c-hen').textContent = m.hen; $('#c-mat').textContent = m.mat;
    cap.classList.add('in');
    document.querySelectorAll('#nav button').forEach((b, k) => { b.setAttribute('aria-current', k === i ? 'true' : 'false'); });
  }

  hud(lines) {
    const s = lines.filter(Boolean).join('\n');
    if (s !== this.hudLines) { this.hudLines = s; this.hudEl.textContent = s; }
  }

  context(m, abs) {
    return {
      ev: this.events, abs, film: false, pointer: this.pointer, pxr: this.h / 900, now: abs,
      composer: m === this.movements[this.cur] ? this.composer : null, bucket: m.meta.id === 'nature' ? this.bucket : 0,
      hud: m === this.movements[this.cur] ? (l) => this.hud(l) : () => {},
      raycast: (p, objs) => { this.raycaster.setFromCamera(new THREE.Vector2(p.x, p.y), m.camera); return this.raycaster.intersectObjects(objs, true)[0] || null; },
      play: (action, ...args) => this.play(action, ...args),
    };
  }

  play(action, ...args) {
    if (!this.started || !this.composer) return;
    const t = this.now() + 0.02; const c = this.composer;
    this.lastTouch = this.now();
    const map = { tap: 'tap', key: 'key', phrase: 'phrase', pluck: 'pluck', string: 'stringPluck', strum: 'strum', drop: 'drop', ring: 'ring' };
    if (action === 'toggle') { c.toggle && c.toggle(args[0]); return; }
    const fn = map[action]; if (fn && c[fn]) c[fn](t, ...args);
  }

  gradeOf(m) {
    const g = { ...m.meta.grade };
    if (m.fx) { if (m.fx.vignette) g.vignette = (g.vignette ?? 0.5) + m.fx.vignette; if (m.fx.exposure) g.exposure = (g.exposure ?? 1) * (1 + m.fx.exposure); }
    return g;
  }

  frame() {
    const abs = this.now();
    const dt = Math.min(0.05, abs - (this.lastAbs ?? abs)); this.lastAbs = abs;
    // bucket (movement VI): hold to muffle the world, like listening to rain under a bucket
    const isNature = this.movements[this.cur]?.meta.id === 'nature';
    const want = isNature && this.pointer.down && this.downAt != null && abs - this.downAt > 0.35 ? 1 : 0;
    if (this.started && want !== (this._bucketOn || 0)) { this._bucketOn = want; this.engine.setBusLowpass('nature', abs, want ? 420 : 20000, 0.12); }
    this.bucket = damp(this.bucket, want, 6, dt);

    const cur = this.movements[this.cur];
    let a = cur, b = null, tt = 0;
    if (this.trans) {
      const p = (abs - this.trans.t0) / TRANSITION;
      if (p >= 1) { this.trans = null; }
      else { a = this.movements[this.trans.from]; b = cur; tt = easeInOut(clamp(p)); }
    }
    for (const m of b ? [a, b] : [a]) {
      const c = this.context(m, abs);
      const t = abs - m.start;
      m.update(t, dt, c); m.applyCamera(t, dt, c);
      for (const u of m.pxr) u.value = c.pxr;
    }
    const grade = b ? mixGrade(this.gradeOf(a), this.gradeOf(b), tt) : this.gradeOf(a);
    const fxA = a.fx || {}, fxB = (b && b.fx) || {};
    const extra = { invert: b ? 0 : (fxA.invert || 0), flash: (fxA.flash || 0) * (1 - tt) + (fxB.flash || 0) * tt, fade: this.started ? 0 : 0.35 };
    this.pipe.render(a, b, tt, abs, grade, extra);

    if (this.started && this.auto && !this.trans && abs - cur.start > AUTO_SECONDS && abs - this.lastTouch > 18) this.go(this.cur + 1);
    const prog = clamp((abs - cur.start) / AUTO_SECONDS);
    this.progEl.style.transform = `scaleX(${this.auto ? prog.toFixed(3) : 0})`;
    requestAnimationFrame(() => this.frame());
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.w = w; this.h = h;
    this.canvas.style.width = w + 'px'; this.canvas.style.height = h + 'px';
    this.renderer.setSize(Math.round(w * this.dpr), Math.round(h * this.dpr), false);
    this.pipe.setSize(Math.round(w * this.dpr), Math.round(h * this.dpr));
    for (const m of this.movements) if (m) m.setAspect(w / h);
  }

  bind() {
    this.hudEl = $('#hud'); this.progEl = $('#nav-progress'); document.body.dataset.lang = 'both';
    window.addEventListener('resize', () => this.resize());
    const ndc = (e) => { const r = this.canvas.getBoundingClientRect(); return { x: ((e.clientX - r.left) / r.width) * 2 - 1, y: -((e.clientY - r.top) / r.height) * 2 + 1 }; };
    this.canvas.addEventListener('pointerdown', (e) => {
      const p = ndc(e); Object.assign(this.pointer, p, { down: true }); this.downAt = this.now();
      this.canvas.setPointerCapture(e.pointerId);
      const m = this.movements[this.cur]; if (m && this.started && !this.trans) m.down(p, this.context(m, this.now()));
    });
    this.canvas.addEventListener('pointermove', (e) => {
      const p = ndc(e); Object.assign(this.pointer, p);
      const m = this.movements[this.cur]; if (m && this.started && this.pointer.down) m.move(p, this.context(m, this.now()));
    });
    const up = (e) => {
      this.pointer.down = false; this.downAt = null;
      const m = this.movements[this.cur]; if (m && this.started) m.up(ndc(e), this.context(m, this.now()));
    };
    this.canvas.addEventListener('pointerup', up); this.canvas.addEventListener('pointercancel', up);
    $('#enter').addEventListener('click', () => this.enter());
    const nav = $('#nav');
    MOVEMENTS.forEach((m, k) => {
      const b = document.createElement('button'); b.type = 'button'; b.id = `nav-${m.id}`;
      b.innerHTML = `<span class="r">${m.roman}</span><span class="y">${m.years.split(' ')[0]}</span>`;
      b.setAttribute('aria-label', `${m.cn} ${m.en}`);
      b.addEventListener('click', () => { this.lastTouch = this.now(); this.go(k); });
      nav.appendChild(b);
    });
    $('#prev').addEventListener('click', () => { this.lastTouch = this.now(); this.go(this.cur - 1); });
    $('#next').addEventListener('click', () => { this.lastTouch = this.now(); this.go(this.cur + 1); });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') this.go(this.cur + 1);
      if (e.key === 'ArrowLeft') this.go(this.cur - 1);
    });
    const langBtn = $('#lang');
    const langs = ['both', 'cn', 'en']; const labels = { both: '中 / EN', cn: '中文', en: 'EN' };
    langBtn.addEventListener('click', () => {
      this.lang = langs[(langs.indexOf(this.lang) + 1) % 3]; document.body.dataset.lang = this.lang; langBtn.textContent = labels[this.lang];
    });
    const autoBtn = $('#auto');
    autoBtn.addEventListener('click', () => { this.auto = !this.auto; autoBtn.setAttribute('aria-pressed', String(this.auto)); this.movements[this.cur].start = this.now(); });
    const muteBtn = $('#mute');
    muteBtn.addEventListener('click', () => {
      this.muted = !this.muted; muteBtn.setAttribute('aria-pressed', String(!this.muted));
      if (this.engine) this.engine.master.gain.setTargetAtTime(this.muted ? 0 : 0.9, this.ctx.currentTime, 0.08);
    });
    $('#info').addEventListener('click', () => { $('#credits').hidden = false; });
    $('#close-credits').addEventListener('click', () => { $('#credits').hidden = true; });
    const list = $('#credit-list');
    for (const [k, v] of CREDITS) { const dt = document.createElement('dt'); dt.textContent = k; const dd = document.createElement('dd'); dd.textContent = v; list.append(dt, dd); }
  }
}

const app = new App();
window.__app = app;
app.bind();
app.caption(0);
app.load().then(() => app.frame()).catch((e) => { console.error(e); $('#load-msg').textContent = '载入失败，请刷新页面 · Loading failed — please reload'; });
