import * as THREE from 'three';
import { assetURL } from './util.js';

// A photographed panorama wrapped around the viewer. The grade (exposure, tint, saturation,
// defocus) lives in the shader so each movement can push the same real photograph toward
// its own mood without touching the source image.
export function envSphere(tex, opts = {}) {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, depthTest: false, fog: false,
    uniforms: {
      map: { value: tex }, exposure: { value: opts.exposure ?? 1 }, tint: { value: new THREE.Color(...(opts.tint ?? [1, 1, 1])) },
      sat: { value: opts.sat ?? 1 }, blur: { value: opts.blur ?? 1 }, yaw: { value: opts.yaw ?? 0 }, pitch: { value: opts.pitch ?? 0 },
      floorDark: { value: opts.floorDark ?? 0.0 }, skyDark: { value: opts.skyDark ?? 0.0 }, contrast: { value: opts.contrast ?? 1 },
      opacity: { value: 1 },
    },
    vertexShader: /* glsl */`varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position = p.xyww; }`,
    fragmentShader: /* glsl */`
      varying vec3 vDir; uniform sampler2D map; uniform float exposure, sat, blur, yaw, pitch, floorDark, skyDark, contrast, opacity; uniform vec3 tint;
      void main(){
        vec3 d = normalize(vDir);
        float cy = cos(pitch), sy = sin(pitch); d = vec3(d.x, cy*d.y - sy*d.z, sy*d.y + cy*d.z);
        float c = cos(yaw), s = sin(yaw); d = vec3(c*d.x - s*d.z, d.y, s*d.x + c*d.z);
        float u = atan(d.z, d.x) * 0.15915494 + 0.5; float v = asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5;
        float u2 = fract(u + 0.5) - 0.5;
        float dxu = dFdx(u), dyu = dFdy(u), dxu2 = dFdx(u2), dyu2 = dFdy(u2);
        vec2 gx = vec2(abs(dxu) < abs(dxu2) ? dxu : dxu2, dFdx(v)) * blur;
        vec2 gy = vec2(abs(dyu) < abs(dyu2) ? dyu : dyu2, dFdy(v)) * blur;
        vec3 col = textureGrad(map, vec2(u, v), gx, gy).rgb;
        float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col = mix(vec3(l), col, sat);
        col = pow(max(col, 0.0), vec3(contrast));
        col *= tint * exposure;
        col *= mix(1.0, 1.0 - floorDark, smoothstep(0.05, -0.35, d.y));
        col *= mix(1.0, 1.0 - skyDark, smoothstep(0.1, 0.8, d.y));
        gl_FragColor = vec4(col * opacity, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(400, 64, 32), mat);
  mesh.renderOrder = -10; mesh.frustumCulled = false;
  mesh.userData.u = mat.uniforms;
  return mesh;
}

export class Assets {
  constructor(base = 'assets/') { this.base = base; this.tex = {}; this.loader = new THREE.TextureLoader(); this.pmrem = null; this.envs = {}; this.images = {}; }
  async loadTextures(list, onProgress) {
    let done = 0;
    await Promise.all(list.map(async ([key, file, opts = {}]) => {
      const t = await this.loader.loadAsync(assetURL(this.base + 'tex/' + file));
      t.colorSpace = opts.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
      t.anisotropy = opts.equirect ? 1 : 4;
      if (opts.equirect) { t.wrapS = THREE.RepeatWrapping; t.minFilter = THREE.LinearMipmapLinearFilter; t.generateMipmaps = true; }
      if (opts.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
      this.tex[key] = t; this.images[key] = t.image;
      done++; onProgress && onProgress(done / list.length);
    }));
  }
  envMap(renderer, key) {
    if (this.envs[key]) return this.envs[key];
    if (!this.pmrem) { this.pmrem = new THREE.PMREMGenerator(renderer); }
    const t = this.tex[key]; t.mapping = THREE.EquirectangularReflectionMapping;
    const rt = this.pmrem.fromEquirectangular(t);
    t.mapping = THREE.UVMapping;
    this.envs[key] = rt.texture; return rt.texture;
  }
  // read pixels of a loaded image (for data-driven geometry)
  pixels(key, w, h) {
    const img = this.images[key]; const c = document.createElement('canvas');
    c.width = w ?? img.width; c.height = h ?? img.height; const g = c.getContext('2d', { willReadFrequently: true });
    g.drawImage(img, 0, 0, c.width, c.height); return { data: g.getImageData(0, 0, c.width, c.height).data, w: c.width, h: c.height };
  }
}

export const TEXTURES = [
  ['dawn', 'dawn.jpg', { equirect: true }],
  ['desert', 'desert.jpg', { equirect: true }],
  ['sunset', 'sunset.jpg', { equirect: true }],
  ['forest', 'forest.jpg', { equirect: true }],
  ['night', 'night.jpg', { equirect: true }],
  ['dark', 'dark.jpg', { equirect: true }],
  ['city', 'city.jpg', { equirect: true }],
  ['canal', 'canal.jpg', { equirect: true }],
  ['earthNight', 'earth_night.jpg', { equirect: true }],
  ['blueMarble', 'blue_marble.jpg', { equirect: true }],
  ['japan', 'japan_lights.png', {}],
  ['greenland', 'greenland.jpg', {}],
];
