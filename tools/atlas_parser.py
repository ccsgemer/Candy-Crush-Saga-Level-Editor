import os
from PIL import Image

file_path = os.path.dirname(os.path.abspath(__file__))

def main():
    file = input("Type file name.\n")

    try:
        with open(os.path.join(file_path, file), "rb") as f:
            data = f.read()
    except FileNotFoundError:
        print(f"Filename {file} not found in the directory.")
        return

    if not data.startswith(b"BIN1TextureAtlas"):
        print("This file doesn't seem to be King's weird 'xml' file as it doesn't start with 'BIN1TextureAtlas'")
        return

    data = data.split(bytes.fromhex("000000"))

    image_name = data[0]
    data = data[1:]

    parsed_data = []

    for item in data:
        filtered_item = item.split(bytes.fromhex("00"))
        filtered_item = [x for x in filtered_item if not x == b'n' and not x == b'']

        if filtered_item == []:
            continue

        new_dict = {}
        for i in range(0, len(filtered_item), 2):
            new_dict[filtered_item[i].decode()] = filtered_item[i + 1].decode()
        parsed_data.append(new_dict)
    
    #Use Pillow to seperate the main image into parts
    image_name = image_name.split(bytes.fromhex("00"))
    image_name = image_name[image_name.index(b"imagePath") + 1].decode()

    main_image = Image.open(os.path.join(file_path, image_name))

    for sub_image_data in parsed_data:
        #Top left anchor
        coordinate_one = [int(sub_image_data['x']), int(sub_image_data['y'])]

        #Top left anchor first, but convert to bottom right anchor.
        coordinate_two = [x + y for x, y in zip(coordinate_one, [int(sub_image_data['w']), int(sub_image_data['h'])])]
        #coordinate_two = [main_image.size[0] - coordinate_two[0], main_image.size[1] - coordinate_two[1]]

        sub_image = main_image.crop(tuple(coordinate_one + coordinate_two))

        sub_image.save(os.path.join(file_path, sub_image_data['sprite']), "PNG")
        print(f"Saved {sub_image_data['sprite']}")

if __name__ == "__main__":
    main()