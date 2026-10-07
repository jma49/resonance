import { Prelude } from './movements/m0_prelude.js';
import { Debussy } from './movements/m1_debussy.js';
import { Ymo } from './movements/m2_ymo.js';
import { Screen } from './movements/m3_screen.js';
import { Casa } from './movements/m4_casa.js';
import { Sine } from './movements/m5_sine.js';
import { Nature } from './movements/m6_nature.js';
import { Twelve } from './movements/m7_twelve.js';

export const CLASSES = { prelude: Prelude, debussy: Debussy, ymo: Ymo, screen: Screen, casa: Casa, sine: Sine, nature: Nature, twelve: Twelve };

export function collectPxr(scene) {
  const list = [];
  scene.traverse((o) => { const u = o.material && o.material.uniforms; if (u && u.pxr) list.push(u.pxr); });
  return list;
}
