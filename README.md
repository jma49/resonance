# 余韵 Resonance

**坂本龙一（1952–2023）主题的三维交互新媒体作品 · An interactive 3D homage to Ryuichi Sakamoto**

Live: https://resonance.majincheng.com

七个乐章，对应他一生的不同音乐风格；真实的照片、卫星影像和乐器录音铺展在三维空间里，音乐在聆听时实时生成。
Seven movements, one for each period of his music. Real photographs, satellite imagery and instrument
recordings are laid out in 3D; the score is generated live in the browser.

| | 乐章 Movement | 年代 | 真实素材 Real material | 声音 Sound |
|---|---|---|---|---|
| 序 | 一个音 A Single Tone | 1952–2023 | Salamander 钢琴录音的真实波形 | 单音与其衰减 |
| I | 德彪西的孩子 Debussy's Child | 1952–1977 | Poly Haven “Kiara 1 Dawn” 映在钢琴漆面 | 印象派平行和弦 |
| II | 黄色魔术 Yellow Magic | 1978–1983 | NASA 夜间灯光：日本的光点 | 合成器流行，16 步音序器 |
| III | 银幕上的旋律 Melodies for the Screen | 1983–1990 | Poly Haven “Quarry 01” 沙漠，实拍画格的胶片 | 五声音阶钢琴与弦乐 |
| IV | 家 · 波萨诺瓦 Casa | 2001 | Poly Haven “Venice Sunset” 水面倒影 | 尼龙弦吉他、大提琴 |
| V | 正弦与噪声 Sine and Noise | 2002–2007 | 真实钢琴录音的频谱 | 正弦波、点击声、稀疏钢琴 |
| VI | 冰川 · 海啸 · 森林 Ice · Flood · Forest | 2008–2017 | NASA Blue Marble 格陵兰，Poly Haven 森林 | 失谐钢琴，不同步循环，雨 |
| VII | 12 · Ars longa, vita brevis | 2023 | Poly Haven 真实星空 | 延音踏板下的稀疏钢琴 |

非官方致敬作品；不含坂本龙一的录音、肖像、乐谱或专辑封面，全部音乐为原创生成。
Unofficial tribute: no recordings, likeness, scores or artwork of Ryuichi Sakamoto are used. All music is original.

## Structure

- `public/` — the deployable static site (served by Vercel as-is)
- `src/` — source: three.js scenes (`movements/`), Web Audio engine and generative composers (`audio/`), post-processing (`pipeline.js`)
- `tools/` — rebuild `public/app.js` (`cd tools && npm i && npm run build`); `prep_assets.py` regenerates textures from the original HDRIs

## Credits

See `public/CREDITS.txt`. Imagery: Poly Haven (CC0), NASA Earth Observatory (public domain).
Sound: Salamander Grand Piano by Alexander Holm (CC BY 3.0); tonejs-instruments by Nicholaus Brosowsky (CC BY 3.0).
Code: three.js (MIT).
