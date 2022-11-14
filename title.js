if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = [ "c", "cu", "cut", "cutt", "cutty0", "cutty01", "cutty01", "cutty0", "cutty", "cutt", "cut", "cu", "c"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
