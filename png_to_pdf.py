# Ce script Python convertit les images PNG de 1 à 5 en un fichier PDF nommé output.pdf
from PIL import Image
import os

# Liste des fichiers PNG à inclure
image_files = [f"asset/image/1 ({i}).png" for i in range(1, 6)]

# Charger les images existantes
images = []
for file in image_files:
    if os.path.exists(file):
        img = Image.open(file).convert('RGB')
        images.append(img)
    else:
        print(f"Fichier manquant : {file}")

if images:
    images[0].save('output.pdf', save_all=True, append_images=images[1:])
    print("PDF créé : output.pdf")
else:
    print("Aucune image trouvée.")
