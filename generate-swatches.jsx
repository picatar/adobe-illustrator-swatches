/**
 * Illustrator Pantone Swatch Script
 * Generates a labeled grid of color swatches from the current document's swatches.
 * Each square displays the swatch color with a label underneath.
 */

var doc = app.activeDocument;
var swatches = doc.swatches;

// Layout settings
var squareSize = 36;        // Swatch square size (points) = 0.5 inch
var padding = 6;            // Padding between swatch and label
var textSize = 6;           // Font size for label
var columns = 20;           // Number of swatches per row
var startX = 0;             // Left offset
var startY = 0;             // Top offset

var row = 0;
var col = 0;

for (var i = 0; i < swatches.length; i++) {
    var swatch = swatches[i];

    // Skip system swatches like [None], [Registration], etc.
    if (swatch.name.charAt(0) === '[') continue;

    // Calculate position
    var x = startX + col * (squareSize + padding);
    var y = startY - row * (squareSize + 2 * padding);

    // Create color swatch square
    var rect = doc.pathItems.rectangle(y, x, squareSize, squareSize);
    rect.filled = true;
    rect.fillColor = swatch.color;
    rect.stroked = false;

    // Create label under swatch
    var label = doc.textFrames.add();
    label.contents = swatch.name;
    label.textRange.characterAttributes.size = textSize;

    try {
        label.textRange.characterAttributes.textFont = app.textFonts.getByName("MyriadPro-Regular");
    } catch (e) {
        // Fallback if font not available
        label.textRange.characterAttributes.textFont = app.textFonts[0];
    }

    label.left = x;
    label.top = y - squareSize - padding;

    // Move to next column/row
    col++;
    if (col >= columns) {
        col = 0;
        row++;
    }
}
