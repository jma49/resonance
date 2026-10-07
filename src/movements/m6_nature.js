import * as THREE from 'three';
import { Movement, buildKeyboard, waterMaterial } from './base.js';
import { clamp, smooth, lerp, midiName, hash1 } from '../util.js';

// Greenland's ice sheet, lifted from NASA Blue Marble imagery into relief, rises out of a
// rain-dark lake inside a real photographed forest (Poly Haven "Forest Slope", CC0). A piano
// lies half in the water, its keys knocked out of line: every note it plays is out of tune.
export class Nature extends Movement {
  build() {
    const YAW = 0.6;
    this.addEnv('forest', { exposure: 0.36, sat: 0.5, blur: 2.6, tint: [0.82, 0.95, 1.08], floorDark: 0.8, yaw: YAW, contrast: 1.1 });
    this.useEnvMap('forest', 0.8);
    this.parallax = 0.9;
    this.waterMat = waterMaterial(this.app.assets.tex.forest, { yaw: YAW, exposure: 0.7, deep: [0.006, 0.012, 0.014], tint: [0.8, 0.95, 1.05], sat: 0.55, waveAmp: 0.35, fog: [0.02, 0.03, 0.035], fogFar: 90 });
    this.water = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), this.waterMat); this.water.rotation.x = -Math.PI / 2; this.scene.add(this.water);

    // Greenland relief
    const px = this.app.assets.pixels('greenland', 296, 114);
    const geo = new THREE.PlaneGeometry(15, 15 * 114 / 296, 295, 113);
    const P = geo.attributes.position;
    for (let i = 0; i < P.count; i++) {
      const ix = i % 296, iy = Math.floor(i / 296); const o = (iy * 296 + ix) * 4;
      const r = px.data[o] / 255, g = px.data[o + 1] / 255, b = px.data[o + 2] / 255;
      const lum = 0.3 * r + 0.59 * g + 0.11 * b; const sea = b - r > 0.15 && lum < 0.45;
      const h = sea ? -0.12 : 0.02 + Math.pow(clamp((lum - 0.3) / 0.7), 1.3) * 0.42;
      P.setZ(i, h);
    }
    // soften the relief so coasts slope instead of standing as walls
    for (let pass = 0; pass < 6; pass++) { const z = new Float32Array(P.count); for (let i = 0; i < P.count; i++) z[i] = P.getZ(i);
      for (let iy = 1; iy < 113; iy++) for (let ix = 1; ix < 295; ix++) { const i = iy * 296 + ix; P.setZ(i, (z[i] * 4 + z[i - 1] + z[i + 1] + z[i - 296] + z[i + 296]) / 8); } }
    geo.computeVertexNormals();
    const tex = this.app.assets.tex.greenland; tex.anisotropy = 4;
    this.ice = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6, metalness: 0, envMapIntensity: 0.35, color: 0xa9b6c4 }));
    this.ice.rotation.x = -Math.PI / 2; this.ice.position.set(1.5, 0.06, -7.5); this.scene.add(this.ice);
    const sun = new THREE.DirectionalLight(0xdfeaff, 0.75); sun.position.set(-6, 9, 4); this.scene.add(sun);
    this.scene.add(new THREE.HemisphereLight(0x8899aa, 0x101010, 0.35));

    // the drowned piano
    this.kb = buildKeyboard({ first: 48, last: 84, chaos: 1, seed: 7, ivory: 0xd9d2c0 });
    this.kb.group.position.set(-3.6, 0.02, 3.2); this.kb.group.rotation.set(0.05, 0.55, -0.1); this.kb.group.scale.setScalar(1.15);
    this.scene.add(this.kb.group);

    // rain
    const R = 5200, rp = new Float32Array(R * 2 * 3), seed = new Float32Array(R * 2 * 3), end = new Float32Array(R * 2);
    for (let i = 0; i < R; i++) { const s = [Math.random(), Math.random(), Math.random()]; for (let k = 0; k < 2; k++) { seed.set(s, (i * 2 + k) * 3); end[i * 2 + k] = k; } }
    const rg = new THREE.BufferGeometry(); rg.setAttribute('position', new THREE.BufferAttribute(rp, 3)); rg.setAttribute('aSeed', new THREE.BufferAttribute(seed, 3)); rg.setAttribute('aEnd', new THREE.BufferAttribute(end, 1));
    this.rainMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { time: { value: 0 }, amt: { value: 1 } },
      vertexShader: `attribute vec3 aSeed; attribute float aEnd; uniform float time; varying float vE;
        void main(){ float H = 16.0; float sp = 9.0 + aSeed.z*5.0; float y = mod(aSeed.y*H - time*sp, H) - 1.0;
          vec3 p = vec3((aSeed.x-0.5)*44.0, y, -30.0 + aSeed.z*44.0); p.x += y*0.06; p.y -= aEnd*(0.25+aSeed.z*0.3); p.x -= aEnd*0.02;
          vE = aEnd; gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }`,
      fragmentShader: `uniform float amt; varying float vE; void main(){ gl_FragColor = vec4(vec3(0.55,0.65,0.75)*(1.0-vE)*0.32*amt, 1.0); }`,
    });
    this.rain = new THREE.LineSegments(rg, this.rainMat); this.rain.frustumCulled = false; this.scene.add(this.rain);
    this.lastDrop = -1; this.lastNote = -1; this.fx = { vignette: 0, exposure: 0 };
  }
  pose(t, c) {
    if (c && c.film) {
      const u = smooth(0, 1, t / (c.dur || 26));
      return { pos: new THREE.Vector3(lerp(-1.0, 3.5, u), lerp(1.6, 9.5, u), lerp(8.0, 7.5, u)), tgt: new THREE.Vector3(lerp(-3.4, 1.0, u), lerp(0.2, 0.0, u), lerp(2.6, -6.5, u)), fov: lerp(34, 46, u) };
    }
    const a = 0.25 + Math.sin(t * 0.045) * 0.3;
    return { pos: new THREE.Vector3(Math.sin(a) * 9 + 0.5, 10.5, Math.cos(a) * 8 + 3.5), tgt: new THREE.Vector3(0, 0, -4.2), fov: 46 };
  }
  update(t, dt, c) {
    this.waterMat.uniforms.time.value = t; this.rainMat.uniforms.time.value = t;
    const bucket = c.bucket || 0;
    this.rainMat.uniforms.amt.value = 1 - bucket * 0.6;
    this.fx.vignette = bucket * 1.6; this.fx.exposure = -bucket * 0.35;
    // drops → ripples (one in three), piano notes → ripples at their keys
    for (const e of c.ev.recent(c.abs, 0.5, 'drop')) if (e.t > this.lastDrop) {
      this.lastDrop = e.t; if (hash1(e.t * 91.3) > 0.66) continue;
      this.waterMat.userData.addRipple((hash1(e.t * 3.3) - 0.5) * 18, -hash1(e.t * 5.1) * 14 + 4, e.t - c.abs + t, 0.35);
    }
    const kb = this.kb; for (const k of kb.keys) k.press = 0;
    let last = null;
    for (const e of c.ev.recent(c.abs, 6, 'piano')) {
      const age = c.abs - e.t;
      const k = kb.byMidi.get(Math.round(e.midi)) || kb.byMidi.get(48 + ((Math.round(e.midi) % 12) + 12)); if (!k) continue;
      k.press = Math.max(k.press, clamp(age / 0.03) * (1 - smooth(0.6, 0.9, age)));
      if (e.t > this.lastNote) {
        this.lastNote = e.t;
        const wp = new THREE.Vector3(k.x, 0, 0.2); kb.group.localToWorld(wp);
        this.waterMat.userData.addRipple(e.user ? (e.px ?? wp.x) : wp.x + (hash1(e.t) - 0.5) * 3, e.user ? (e.pz ?? wp.z) : wp.z - 1 - hash1(e.t * 2) * 3, e.t - c.abs + t, 1.3);
      }
      last = e;
    }
    kb.sync();
    c.hud(['async · 7.3 s · 11.1 s · 13.7 s · 17.9 s', last ? `${midiName(last.midi)}  ${last.detune > 0 ? '+' : '−'}${Math.abs(last.detune || 0).toFixed(0)} ¢` : '', '72°N 40°W · Greenland', bucket > 0.5 ? '水桶 bucket · lowpass 420 Hz' : '']);
  }
  down(p, c) {
    this.holdStart = c.now; this.downP = p;
    const hit = c.raycast(p, [this.water]);
    c.play('drop', p.x, p.y, hit ? { px: hit.point.x, pz: hit.point.z } : {});
  }
  up() { this.holdStart = null; }
}
