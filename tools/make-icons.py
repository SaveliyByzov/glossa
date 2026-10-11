"""Генерирует иконки Glossa: icons/icon.svg и PNG 192/512/maskable-512/apple-touch 180.

Запуск:  python tools/make-icons.py   (нужен Pillow: pip install pillow)
Рисунок — буква «G» из дуги и перекладины (бумажный цвет на лазурите), без шрифтов,
поэтому SVG и PNG совпадают пиксель в пиксель на любой системе.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'icons'
INK = '#34428f'      # лазурит (бренд, hue 272)
PAPER = '#f6f3ee'    # бумага (--bg светлой темы)
GOLD = '#c79a2e'     # рубрикационная точка

# Геометрия на холсте 512: дуга радиуса R (по оси штриха), толщина W, раскрыв справа сверху (0°…300° по часовой).
R, W, C = 140, 56, 256


def svg(maskable=False):
    s = 0.78 if maskable else 1.0           # maskable: контент в безопасной зоне 80 %
    rx = 0 if maskable else 112
    import math
    ex, ey = C + R * math.cos(math.radians(300)), C + R * math.sin(math.radians(300))
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="{rx}" fill="{INK}"/>
  <g transform="translate(256 256) scale({s}) translate(-256 -256)">
    <path d="M{C + R} {C} A{R} {R} 0 1 1 {ex:.1f} {ey:.1f}" fill="none" stroke="{PAPER}" stroke-width="{W}"/>
    <rect x="{C}" y="{C - W / 2}" width="{R + W / 2}" height="{W}" fill="{PAPER}"/>
    <rect x="{C + R + 8}" y="{C - R - W / 2 - 4}" width="26" height="26" fill="{GOLD}" transform="rotate(45 {C + R + 21} {C - R - W / 2 + 9})"/>
  </g>
</svg>
'''


def png(size, maskable=False, path=None):
    from PIL import Image, ImageDraw
    k = 4                                    # суперсэмплинг для сглаживания
    S = 512 * k
    img = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    rx = 0 if maskable else 112 * k
    d.rounded_rectangle([0, 0, S - 1, S - 1], radius=rx, fill=INK)
    s = 0.78 if maskable else 1.0
    t = lambda v: (C + (v - C) * s) * k     # масштаб вокруг центра
    outer = R + W / 2
    d.arc([t(C - outer), t(C - outer), t(C + outer), t(C + outer)], start=0, end=300, fill=PAPER, width=round(W * s * k))
    d.rectangle([t(C), t(C - W / 2), t(C + outer), t(C + W / 2)], fill=PAPER)
    cx, cy, r = t(C + R + 21), t(C - R - W / 2 + 9), 13 * 1.414 * s * k
    d.polygon([(cx, cy - r), (cx + r, cy), (cx, cy + r), (cx - r, cy)], fill=GOLD)
    img.resize((size, size), Image.LANCZOS).save(path)


def main():
    OUT.mkdir(exist_ok=True)
    (OUT / 'icon.svg').write_text(svg(), encoding='utf-8')
    (OUT / 'icon-maskable.svg').write_text(svg(maskable=True), encoding='utf-8')
    try:
        png(192, path=OUT / 'icon-192.png')
        png(512, path=OUT / 'icon-512.png')
        png(512, maskable=True, path=OUT / 'icon-maskable-512.png')
        png(180, maskable=True, path=OUT / 'apple-touch-icon.png')   # iOS скругляет сам
        print('icons: SVG + PNG готовы')
    except ImportError:
        print('Pillow не найден: созданы только SVG (pip install pillow, затем повторите)')


if __name__ == '__main__':
    main()
