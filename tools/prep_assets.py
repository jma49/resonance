import cv2, numpy as np, os, shutil
from PIL import Image
os.makedirs('dist/assets/tex', exist_ok=True)
def tonemap(src, dst, exposure, w=2048, q=88):
    im = cv2.imread(src, cv2.IMREAD_ANYDEPTH | cv2.IMREAD_COLOR).astype(np.float32)
    im = cv2.resize(im, (w, w // 2), interpolation=cv2.INTER_LANCZOS4)
    im = np.maximum(im, 0) * exposure
    a, b, c, d, e = 2.51, 0.03, 2.43, 0.59, 0.14
    x = np.clip((im * (a * im + b)) / (im * (c * im + d) + e), 0, 1) ** (1 / 2.2)
    cv2.imwrite(dst, (x * 255 + 0.5).astype(np.uint8), [cv2.IMWRITE_JPEG_QUALITY, q])
T = 'dist/assets/tex/'
for k, f, e, q in [('dawn', 'kiara_1_dawn_1k', 0.9, 88), ('desert', 'quarry_01_1k', 0.7, 88), ('sunset', 'venice_sunset_1k', 1.0, 88),
                   ('forest', 'forest_slope_1k', 0.9, 88), ('night', 'dikhololo_night_1k', 2.2, 90), ('dark', 'moonless_golf_1k', 3.0, 88),
                   ('city', 'potsdamer_platz_1k', 0.8, 88), ('canal', 'san_giuseppe_bridge_2k', 0.8, 88)]:
    tonemap(f'raw/hdr/{f}.hdr', T + k + '.jpg', e, q=q)
Image.open('raw/img/earth_night.jpg').convert('RGB').save(T + 'earth_night.jpg', quality=84)
Image.open('raw/img/blue_marble.jpg').convert('RGB').save(T + 'blue_marble.jpg', quality=82)
def crop(im, lon0, lon1, lat1, lat0):
    W, H = im.size
    return im.crop((int((lon0 + 180) / 360 * W), int((90 - lat1) / 180 * H), int((lon1 + 180) / 360 * W), int((90 - lat0) / 180 * H)))
crop(Image.open('raw/img/earth_night.jpg').convert('L'), 128, 147, 46, 29).save(T + 'japan_lights.png')
crop(Image.open('raw/img/blue_marble.jpg').convert('RGB'), -75, -10, 84, 59).save(T + 'greenland.jpg', quality=90)
for inst in ['piano', 'cello', 'guitar', 'violin']:
    os.makedirs(f'dist/assets/aud/{inst}', exist_ok=True)
    for f in os.listdir(f'raw/aud/{inst}'): shutil.copy(f'raw/aud/{inst}/{f}', f'dist/assets/aud/{inst}/{f}')
print('assets ready')
