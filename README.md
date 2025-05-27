# Adobe Illustrator Swatch Sheet Generator

This script for Adobe Illustrator creates a printable grid of labeled color swatches from the current document's swatch library — ideal for visualizing Pantone books or other color systems.

---

## 🎯 Features

- Generates labeled swatch squares from all standard (non-system) swatches in the active document.
- Automatically lays out swatches in a customizable grid.
- Perfect for printing or digital reference of Pantone and brand color palettes.

---

## 🖥️ How to Use

1. **Open Adobe Illustrator** and load or create a document that includes your desired swatches.

   - **Note:** Pantone libraries are the intellectual property of Pantone and are **not included in newer versions of Adobe Creative Cloud** due to licensing changes.  
     However, they **can still be found in older versions** of Adobe Illustrator or obtained through Pantone's official products.

   - To import Pantone libraries in supported versions, go to:  
     `Swatches > Open Swatch Library > Color Books > [Choose a Pantone book]`

2. **Ensure your document is active** before running the script.

3. **Add Pantone swatches to your Swatches panel:**
   - Drag the desired colors from the open Pantone swatch library window into your document's Swatches panel.
   - Remove any non-Pantone or unwanted colors from your Swatches panel to keep the palette clean.

4. **Run the script:**
   - Go to `File > Scripts > Other Script…`
   - Select `generate-swatches.jsx` from this repository.

5. **Save your swatch library as an ASE file:**
   - In the Swatches panel, click the hamburger menu (top right).
   - Near the bottom of the menu, select **Save Swatch Library as ASE...**
   - Choose a folder and file name to save your custom swatch library.

6. **Load your saved ASE swatch library into any Illustrator document:**
   - Open the Swatches panel.
   - Click the hamburger menu.
   - Choose **Open Swatch Library > Other Library…**
   - Navigate to your saved ASE file and open it to load the swatches.

---

## 🧪 Example Output

![Swatches Panel in Illustrator](https://github.com/picatar/adobe-illustrator-swatches/blob/main/adobe-illustatror-swatch-library.jpg)

---

## 📄 License

This project is open-source and available under the [MIT License](./LICENSE).

---

## ✍️ Author

Created by **Steven Stelter**  
[stelterdesign.com](https://stelterdesign.com)
