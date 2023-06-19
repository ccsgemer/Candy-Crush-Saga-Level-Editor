from PIL import Image
import numpy as np
import colorsys

def round_school(x):
    i, f = divmod(x, 1)
    return int(i + ((f >= 0.5) if (x > 0) else (f > 0.5)))

image_path = "lucky.png"
image = Image.open(image_path)
image.convert("RGBA")

bands = image.split()

for index, band in enumerate(bands):
    band = band.convert("RGBA")
    band.putalpha(bands[3])
    band.save(f"{index}_{image_path}")

# for row in range(image.size[0]):
#     for column in range(image.size[1]):
#         red, green, blue, alpha = list(image.getpixel((row, column)))
#         hsv = [0, green / 255, blue / 255]
#         # hsv = [value / 255 for value in [red, green, blue]]

#         rgb = list(colorsys.hsv_to_rgb(*hsv))
#         rgb = [round_school(value * 255) for value in rgb]
#         rgb.append(alpha)
#         image.putpixel((row, column), tuple(rgb))

# image.save("test2.png")