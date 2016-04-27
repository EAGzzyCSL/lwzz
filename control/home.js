var img_intro = document.getElementsByClassName("img_intro");
var j = 0;
var delay_hander;
var a_go = document.getElementById("a_go");
document.body.onload = function () {
    setTimeout("intro_ani()", 1000);
}

function intro_ani() {
    delay_hander = setTimeout("intro_ani()", 2000);
    if (j < img_intro.length - 1) {
        img_intro[j].classList.add("hide");
        j++;
    } else {
        clearTimeout(delay_hander);
        a_go.classList.add("show");
    }
}