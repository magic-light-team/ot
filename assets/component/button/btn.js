
function btn(text, color) {
    if (!color) color = "red-color";
    return '<button class="btn +' + color + '">' + text + '</button>';
}