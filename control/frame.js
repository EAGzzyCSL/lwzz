(function () {
    var frame_div_quicknav = document.getElementById("frame_div_quicknav");
    var frame_mainnav = document.getElementById("frame_mainnav");
    frame_div_quicknav.onclick = function () {
        if (frame_mainnav.classList.contains("active")) {
            frame_mainnav.classList.remove("active");
        } else {
            frame_mainnav.classList.add("active");
        }
    }
})();
var img_topback = document.getElementById("img_topback");
img_topback.onclick = function () {
    window.scrollTo(0, 0);
}
var div_topback = document.getElementById("div_topback");
document.onscroll = function () {
    var sft = window.pageYOffset;
    if (sft > 400) {
        div_topback.classList.add("show");
    } else {
        div_topback.classList.remove("show");
    }
}