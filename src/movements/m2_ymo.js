import * as THREE from 'three';
import { Movement, softPoints } from './base.js';
import { clamp, smooth, lerp, midiName } from '../util.js';

// Tokyo, seen at night from orbit (NASA Black Marble, public domain). Every lit pixel of
// Japan becomes a column of light; each kick sends a wave out from Tokyo; the outer ring is
// a 16-step sequencer the viewer can rewrite.
export class Ymo extends Movement {
  build(app) {
    this.parallax = 1.2;
    const tex = this.app.assets.tex.earthNight;
    const globeMat = new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, pulse: { value: 0 }, time: { value: 0 } },
      vertexShader: `varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv=uv; vec4 w=modelMatrix*vec4(position,1.0); vN=normalize(mat3(modelMatrix)*normal); vV=normalize(cameraPosition-w.xyz); gl_Position=projectionMatrix*viewMatrix*w; }`,
      fragmentShader: `uniform sampler2D map; uniform float pulse, time; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
        void main(){ vec3 c = texture2D(map, vUv).rgb; float l = dot(c, vec3(0.3,0.5,0.2));
          float lights = smoothstep(0.012, 0.13, l);
          vec3 base = c*vec3(0.5,0.6,0.9)*1.6;
          vec3 glow = vec3(1.0,0.62,0.28)*lights*(2.2+pulse*2.5);
          float fr = pow(1.0-max(dot(vN,vV),0.0), 3.0);
          vec3 atm = mix(vec3(0.15,0.3,0.9), vec3(1.0,0.25,0.15), 0.25+0.25*sin(time*0.2))*fr*1.6;
          gl_FragColor = vec4(base+glow+atm, 1.0); }`,
    });
    this.globe = new THREE.Mesh(new THREE.SphereGeometry(3.2, 96, 64), globeMat);
    // face Japan (139.7°E, 35.7°N) toward the viewer
    const L = THREE.MathUtils.degToRad(139.7); const x = Math.cos(L), z = -Math.sin(L);
    this.globeYaw = Math.atan2(-x, z);
    this.globePivot = new THREE.Group(); this.globePivot.add(this.globe); this.globePivot.position.set(-3.5, 6.8, -13);
    this.globe.rotation.y = this.globeYaw; this.globePivot.rotation.x = THREE.MathUtils.degToRad(30);
    this.scene.add(this.globePivot);
    this.stars = softPoints(1500, () => { const v = new THREE.Vector3().randomDirection().multiplyScalar(120 + Math.random() * 60); return [v.x, Math.abs(v.y) * 0.8 + 5, v.z]; }, { size: 0.5, color: [0.85, 0.9, 1], opacity: 0.5 });
    this.scene.add(this.stars);

    // Japan as data
    const px = this.app.assets.pixels('japan');
    const W = px.w, H = px.h, data = [];
    const tokyo = [133.5, 117.5];
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
      const l = px.data[(j * W + i) * 4] / 255;
      if (l < 0.16) continue;
      const X = (i / W - 0.5) * 11.0, Z = (j / H - 0.5) * 9.8;
      const d = Math.hypot(i - tokyo[0], j - tokyo[1]) / 100;
      data.push(X, Z, l, d);
    }
    this.count = data.length / 4;
    const box = new THREE.BoxGeometry(11 / W * 0.82, 1, 9.8 / H * 0.82); box.translate(0, 0.5, 0);
    const ig = new THREE.InstancedBufferGeometry(); ig.index = box.index; ig.attributes.position = box.attributes.position; ig.attributes.normal = box.attributes.normal;
    ig.setAttribute('aData', new THREE.InstancedBufferAttribute(new Float32Array(data), 4)); ig.instanceCount = this.count;
    this.kicks = Array(6).fill(-99);
    this.cityMat = new THREE.ShaderMaterial({
      uniforms: { kicks: { value: this.kicks.slice() }, time: { value: 0 }, snare: { value: 0 }, arp: { value: 0 }, hat: { value: 0 }, lift: { value: 1 } },
      vertexShader: `attribute vec4 aData; uniform float kicks[6]; uniform float time, snare, arp, hat, lift; varying float vL; varying float vW; varying float vY;
        void main(){ float l = aData.z, d = aData.w; float wave = 0.0;
          for (int i=0;i<6;i++){ float age = time - kicks[i]; if (age < 0.0 || age > 3.0) continue; float front = age*3.2; wave += exp(-pow((d - front)*3.0, 2.0)) * exp(-age*1.1); }
          float h = (0.04 + l*l*1.6) * lift * (0.35 + 0.65*clamp(wave + snare*0.35*l + hat*0.12, 0.0, 2.0)) + arp*l*0.25;
          vec3 p = position; p.y *= h; p.xz += aData.xy; vL = l; vW = wave; vY = position.y;
          gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }`,
      fragmentShader: `varying float vL; varying float vW; varying float vY;
        void main(){ vec3 sodium = vec3(1.0,0.5,0.16); vec3 white = vec3(1.0,0.92,0.82); vec3 red = vec3(1.0,0.12,0.08);
          vec3 c = mix(sodium, white, smoothstep(0.5,1.0,vL)) * (0.5 + vL*1.6);
          c = mix(c, red*2.4, clamp(vW*0.8,0.0,1.0)*0.75);
          c *= 0.35 + 0.65*vY;
          gl_FragColor = vec4(c, 1.0); }`,
    });
    this.city = new THREE.Mesh(ig, this.cityMat); this.city.frustumCulled = false; this.scene.add(this.city);
    // base plate outline of the map
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(12, 10.8), new THREE.MeshBasicMaterial({ color: 0x07080c }));
    plate.rotation.x = -Math.PI / 2; plate.position.y = -0.01; this.scene.add(plate);
    const grid = new THREE.GridHelper(120, 120, 0x5a1a14, 0x2a0d0a); grid.position.y = -0.03; this.scene.add(grid);

    // 16-step ring
    this.steps = [];
    for (let s = 0; s < 16; s++) {
      const a = -Math.PI / 2 + (s / 16) * Math.PI * 2;
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.25, 0.45), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      m.position.set(Math.cos(a) * 7.6, 0.12, Math.sin(a) * 7.6); m.rotation.y = -a; m.userData.step = s;
      this.scene.add(m); this.steps.push(m);
    }
    this.mask = [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1];
    const ring = new THREE.Mesh(new THREE.RingGeometry(7.05, 7.08, 128), new THREE.MeshBasicMaterial({ color: 0x802018, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.01; this.scene.add(ring);
  }
  pose(t, c) {
    if (c && c.film) {
      const D = c.dur || 22, u = smooth(0, 1, t / D);
      // from the globe down to the city of light
      const a = lerp(-0.25, 0.55, u);
      const pos = new THREE.Vector3(Math.sin(a) * lerp(6, 13, u), lerp(7.5, 6.2, u), lerp(-3.5, 0, u) + Math.cos(a) * lerp(6, 13, u));
      const tgt = new THREE.Vector3(lerp(0, 0.6, u), lerp(4.2, 0.3, smooth(0.1, 0.6, u)), lerp(-9, -0.5, smooth(0.05, 0.6, u)));
      return { pos, tgt, fov: lerp(38, 44, u) };
    }
    const a = t * 0.05 + 0.3;
    return { pos: new THREE.Vector3(Math.sin(a) * 14, 8.5, Math.cos(a) * 14), tgt: new THREE.Vector3(0, 1.2, -1.5), fov: 44 };
  }
  update(t, dt, c) {
    const kicks = c.ev.recent(c.abs, 3.2, 'kick').slice(-6);
    const arr = this.cityMat.uniforms.kicks.value;
    for (let i = 0; i < 6; i++) arr[i] = kicks[i] ? kicks[i].t - c.abs + t : -99;
    const u = this.cityMat.uniforms;
    u.time.value = t; u.snare.value = c.ev.pulse(c.abs, 0.12, 'snare'); u.hat.value = c.ev.pulse(c.abs, 0.05, 'hat');
    u.arp.value = c.ev.pulse(c.abs, 0.09, 'arp') * 0.5 + c.ev.pulse(c.abs, 0.25, 'lead') * 0.6;
    u.lift.value = c.film ? smooth(0, 6, t) : 1;
    this.globe.material.uniforms.pulse.value = c.ev.pulse(c.abs, 0.2, 'kick') * 0.6;
    this.globe.material.uniforms.time.value = t;
    this.globe.rotation.y = this.globeYaw + Math.sin(t * 0.05) * 0.12;
    if (!c.film) {
      // keep the planet hanging behind the map, whichever way the camera has drifted
      const dir = new THREE.Vector3(0, 1.2, -1.5).sub(this.camera.position).setY(0).normalize();
      this.globePivot.position.set(dir.x * 21 - dir.z * 5, 3.2, dir.z * 21 + dir.x * 5);
    }
    this.stars.material.uniforms.time.value = t;
    // step ring
    const mask = c.composer?.mask || this.mask;
    const lastArp = c.ev.last(c.abs, 'arp');
    const cur = lastArp && c.abs - lastArp.t < 0.14 ? lastArp.step : -1;
    const lastBeat = c.ev.last(c.abs, 'hat');
    this.steps.forEach((m, s) => {
      const on = mask[s];
      const flash = s === cur ? 1 : 0;
      m.material.color.setRGB(on ? 0.5 + flash * 2.6 : 0.06, on ? 0.48 + flash * 0.25 : 0.06, on ? 0.46 + flash * 0.15 : 0.08);
      m.scale.y = 1 + flash * 2.5;
    });
    const bass = c.ev.last(c.abs, 'bass');
    c.hud(['116 BPM   4/4   16 steps', bass ? `bass ${midiName(bass.midi)}` : '', `${this.count} 光点 light points · 35.7°N 139.7°E`]);
  }
  down(p, c) {
    const hit = c.raycast(p, this.steps);
    if (hit) { c.play('toggle', hit.object.userData.step); return; }
    this.dragY = p.y;
  }
  move(p, c) { if (this.dragY != null && c.composer) c.composer.cut = 300 + Math.pow(clamp(p.y * 0.5 + 0.5), 2) * 6000; }
  up() { this.dragY = null; }
}
