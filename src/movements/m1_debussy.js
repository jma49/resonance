import * as THREE from 'three';
import { Movement, buildKeyboard } from './base.js';
import { midiName, mtof, clamp, smooth, lerp } from '../util.js';

// A grand piano in black lacquer. The lacquer and the keys reflect a real photographed dawn
// (Poly Haven, CC0); 88 strings glow and tremble when their notes sound.
export class Debussy extends Movement {
  build() {
    this.addEnv('dawn', { exposure: 0.62, sat: 0.8, blur: 2.2, tint: [1.0, 0.92, 0.95], floorDark: 0.35, yaw: 2.4 });
    this.useEnvMap('dawn', 1.0);
    this.parallax = 0.9;
    const kb = this.kb = buildKeyboard({});
    this.scene.add(kb.group);

    // case outline (top view) of a grand piano; z goes away from the player
    const W = kb.width / 2 + 0.7;
    const sh = new THREE.Shape();
    sh.moveTo(-W, 0.9); sh.lineTo(W, 0.9); sh.lineTo(W, 7.5);
    sh.bezierCurveTo(W, 13, 1.5, 15, -0.5, 20.5);
    sh.bezierCurveTo(-1.6, 23.5, -3.8, 25.2, -W, 25.2); sh.lineTo(-W, 0.9);
    const lacquer = new THREE.MeshStandardMaterial({ color: 0x060606, roughness: 0.07, metalness: 0.0, envMapIntensity: 1.9 });
    const inner = new THREE.MeshStandardMaterial({ color: 0x2a1a10, roughness: 0.55, envMapIntensity: 0.5 });
    // rim: a hollow wall following the outline
    const rimShape = sh.clone();
    const hole = new THREE.Path(); const pts = sh.getPoints(80);
    const cx = pts.reduce((a, p) => a + p.x, 0) / pts.length, cy = pts.reduce((a, p) => a + p.y, 0) / pts.length;
    pts.slice().reverse().forEach((p, i) => { const q = new THREE.Vector2(lerp(p.x, cx, 0.035), lerp(p.y, cy, 0.03)); if (i === 0) hole.moveTo(q.x, q.y); else hole.lineTo(q.x, q.y); });
    rimShape.holes.push(hole);
    const rim = new THREE.Mesh(new THREE.ExtrudeGeometry(rimShape, { depth: 3.0, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 2, curveSegments: 40 }), lacquer);
    rim.rotation.x = -Math.PI / 2; rim.position.y = 0.15 - 3.0; this.scene.add(rim);
    const soundboard = new THREE.Mesh(new THREE.ShapeGeometry(sh, 60), inner);
    soundboard.rotation.x = -Math.PI / 2; soundboard.position.y = -1.4; this.scene.add(soundboard);
    // lid, hinged along the spine and propped open toward the bentside
    const lid = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.12, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.03, bevelSegments: 2, curveSegments: 60 }), lacquer);
    lid.rotation.x = -Math.PI / 2; lid.position.x = W;
    const hinge = new THREE.Group(); hinge.position.set(-W, 0.24, 0); hinge.add(lid);
    hinge.rotation.z = 0.62; this.scene.add(hinge);
    // keyslip / cheek blocks
    const slip = new THREE.Mesh(new THREE.BoxGeometry(kb.width + 1.6, 0.55, 0.35), lacquer); slip.position.set(0, -0.35, 0.95); this.scene.add(slip);
    const fall = new THREE.Mesh(new THREE.BoxGeometry(kb.width + 0.4, 0.7, 0.5), lacquer); fall.position.set(0, 0.2, -1.05); this.scene.add(fall);

    // 88 strings, bass along the spine (longest), treble toward the bentside
    const S = 88, SEG = 24; const pos = [], aU = [], aI = [];
    this.strX = []; this.strLen = [];
    for (let i = 0; i < S; i++) {
      const k = kb.keys[i]; const x = k.x * 0.96; const len = 4.2 + 18.5 * Math.pow(1 - i / 87, 1.25);
      this.strX.push(x); this.strLen.push(len);
      const z0 = -1.6, z1 = z0 - len, xb = x - (1 - i / 87) * 1.6; // bass strings fan a little
      for (let s = 0; s < SEG; s++) {
        for (const u of [s / SEG, (s + 1) / SEG]) { pos.push(lerp(x, xb, u), -0.25, lerp(z0, z1, u)); aU.push(u); aI.push(i); }
      }
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    sg.setAttribute('aU', new THREE.Float32BufferAttribute(aU, 1)); sg.setAttribute('aI', new THREE.Float32BufferAttribute(aI, 1));
    this.ampData = new Float32Array(128 * 4);
    this.ampTex = new THREE.DataTexture(this.ampData, 128, 1, THREE.RGBAFormat, THREE.FloatType); this.ampTex.needsUpdate = true;
    this.strMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { amp: { value: this.ampTex }, time: { value: 0 } },
      vertexShader: /* glsl */`attribute float aU, aI; uniform sampler2D amp; uniform float time; varying float vA; varying float vU;
        void main(){ float a = texture2D(amp, vec2((aI+0.5)/128.0, 0.5)).r; vec3 p = position;
          float f = 30.0 + aI*2.2; p.y += a*0.09*sin(3.14159*aU)*sin(time*f + aI);
          vA = a; vU = aU; gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }`,
      fragmentShader: /* glsl */`varying float vA; varying float vU;
        void main(){ vec3 steel = vec3(0.32, 0.30, 0.28); vec3 hot = vec3(2.4, 1.6, 0.85);
          float edge = smoothstep(0.0, 0.04, vU)*smoothstep(1.0, 0.96, vU);
          gl_FragColor = vec4((steel*0.35 + hot*vA)*edge, 1.0); }`,
    });
    this.strings = new THREE.LineSegments(sg, this.strMat); this.strings.frustumCulled = false; this.scene.add(this.strings);
    // felt dampers line
    const felt = new THREE.Mesh(new THREE.BoxGeometry(kb.width, 0.12, 0.3), new THREE.MeshStandardMaterial({ color: 0x5a1712, roughness: 0.9 }));
    felt.position.set(0, -0.12, -1.75); this.scene.add(felt);

    // motes released by melody notes
    const MN = 160; const mg = new THREE.BufferGeometry(); this.mpos = new Float32Array(MN * 3); this.ma = new Float32Array(MN);
    mg.setAttribute('position', new THREE.BufferAttribute(this.mpos, 3)); mg.setAttribute('aA', new THREE.BufferAttribute(this.ma, 1));
    this.motes = new THREE.Points(mg, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { pxr: { value: 1 } },
      vertexShader: `attribute float aA; varying float vA; uniform float pxr; void main(){ vA=aA; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv; gl_PointSize=pxr*(10.0+40.0*aA)*(6.0/-mv.z); }`,
      fragmentShader: `varying float vA; void main(){ float d=length(gl_PointCoord-0.5); float a=smoothstep(0.5,0.0,d); gl_FragColor=vec4(vec3(1.6,1.25,0.9)*a*vA, a*vA); }`,
    }));
    this.motes.frustumCulled = false; this.scene.add(this.motes);
    this.MN = MN;
    const key = new THREE.DirectionalLight(0xffe6d0, 1.2); key.position.set(6, 12, 8); this.scene.add(key);
    this.scene.add(new THREE.AmbientLight(0x404050, 0.4));
  }
  pose(t, c) {
    if (c && c.film) {
      // close on the keys, then rise to show strings and lacquer
      const u = smooth(0, 1, t / (c.dur || 24));
      const pos = new THREE.Vector3(lerp(3.5, 9.5, u), lerp(1.6, 7.8, u), lerp(4.2, 7.0, u));
      const tgt = new THREE.Vector3(lerp(0.5, -1.5, u), lerp(0.1, -0.6, u), lerp(-0.2, -7.0, u));
      return { pos, tgt, fov: lerp(30, 42, u) };
    }
    const a = 0.35 + Math.sin(t * 0.04) * 0.25;
    return { pos: new THREE.Vector3(Math.sin(a) * 17 + 2, 11.5, Math.cos(a) * 14 + 2), tgt: new THREE.Vector3(-0.5, -0.8, -6.5), fov: 40 };
  }
  update(t, dt, c) {
    const kb = this.kb;
    const ev = c.ev.recent(c.abs, 10, ['bass', 'melody', 'piano']);
    for (const k of kb.keys) k.press = 0;
    const amps = new Float32Array(88);
    let last = null;
    for (const e of ev) {
      const k = kb.byMidi.get(Math.round(e.midi)); if (!k) continue;
      const age = c.abs - e.t; if (age < 0) continue;
      const hold = Math.min(e.dur ?? 1, 1.6);
      const p = clamp(age / 0.03) * (1 - smooth(hold, hold + 0.18, age));
      k.press = Math.max(k.press, p * (0.6 + 0.6 * (e.vel ?? 0.6)));
      const i = Math.round(e.midi) - 21; const tau = 0.7 + 3.2 * (1 - i / 87);
      amps[i] += (e.vel ?? 0.6) * Math.exp(-age / tau) * 1.3;
      last = e;
    }
    kb.sync();
    for (let i = 0; i < 88; i++) this.ampData[i * 4] = Math.min(amps[i], 2.0);
    this.ampTex.needsUpdate = true; this.strMat.uniforms.time.value = t;
    // motes
    const mel = ev.filter((e) => e.tag === 'melody' || e.tag === 'piano');
    for (let j = 0; j < this.MN; j++) this.ma[j] = 0;
    mel.slice(-this.MN / 8).forEach((e, n) => {
      const i = Math.round(e.midi) - 21; if (i < 0 || i > 87) return; const age = c.abs - e.t;
      for (let q = 0; q < 8; q++) {
        const j = n * 8 + q; const sd = (e.t * 13.7 + q * 7.1) % 1;
        this.mpos[j * 3] = this.strX[i] + Math.sin(sd * 40 + age) * 0.4; this.mpos[j * 3 + 1] = -0.2 + age * (0.6 + sd * 0.8);
        this.mpos[j * 3 + 2] = -1.6 - this.strLen[i] * (0.15 + sd * 0.35);
        this.ma[j] = Math.exp(-age * 0.5) * (e.vel ?? 0.5) * clamp(age * 4);
      }
    });
    this.motes.geometry.attributes.position.needsUpdate = true; this.motes.geometry.attributes.aA.needsUpdate = true;
    this.motes.material.uniforms.pxr.value = c.pxr;
    c.hud(last ? [`${midiName(last.midi)}  ${mtof(last.midi).toFixed(1)} Hz`, '♩ = 62   3/4', 'D♭ · 平行和弦 planing'] : ['♩ = 62   3/4']);
  }
  down(p, c) {
    const hit = c.raycast(p, [this.kb.wMesh, this.kb.bMesh]);
    if (hit) { const k = this.kb.keyAt(hit); if (k) c.play('key', k.m); return; }
    // anywhere else: pick a key by horizontal position
    const i = Math.floor((p.x * 0.5 + 0.5) * 52) ; const whites = this.kb.keys.filter((k) => this.kb.byMidi.get(k.m) && [0, 2, 4, 5, 7, 9, 11].includes(k.m % 12));
    const k = whites[clamp(i, 0, whites.length - 1)]; if (k) c.play('key', k.m);
  }
}
