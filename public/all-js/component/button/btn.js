
function btn(text, color, attr, score) {
    if (!color) color = "red-color";
    return '<button class="btn ' + color + '" data-score="' + score + '" data-level="' + attr + '">' + text + '</button>';
}