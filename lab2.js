function tree(el) {
    if (el == document.documentElement) $("#result").empty();
    while (el) {
        if (1 == el.nodeType && el) {
            var i = 0;
            elem = el;
            while (elem) {
                i++;
                elem = elem.parentNode;
            }
            i -= 2;
            for (var j = 0; j < i; j++) {
                $("#result").append('+');
            }
            $("#result").append(el.tagName);
            $("#result").append('\n');
        }
        tree(el.firstChild);
        el = el.nextSibling;
    }
}

$(document).ready(function () {
    $("#btn").on("click", function () {
        tree(document.documentElement);
    })
})