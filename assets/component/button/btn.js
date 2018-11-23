
function btn(text, color, attr) {
    if (!color) color = "red-color";
    return '<button class="btn ' + color + '" data-level="' + attr + '">' + text + '</button>';
}