function dialogue(header, body) {
    return '<div class="dialogue"><h1>' + header + '</h1><p>' + body + '</p></div>';
}
function dialogue_html(html, attr) {
    return '<div class="dialogue" data-level="' + attr + '">' + html + '</div>';
}