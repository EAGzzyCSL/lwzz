var div_dever = document.getElementsByClassName("div_dever");
var div_container = document.getElementById("div_container");
var p_introtext = document.getElementsByClassName("p_introtext");
var i = 0,
    j = 0,
    k = 0;
var img_d0;
var img_a0;
var img_a;
var img_name;
var img_d;
var s = new Array(true, true, true, true);
for (i = 0; i < div_dever.length; i++) {
    div_dever[i].addEventListener("click", function () {
        img_d0 = this.getElementsByClassName("img_d");
        img_a0 = this.getElementsByClassName("img_a");
        img_name = img_d0[0].src.substring(img_d0[0].src.lastIndexOf("/") + 1);
        for (j = 0; j < div_dever.length; j++) {
            div_dever[j].classList.remove("big");
            div_dever[j].classList.add("small");
            img_d = div_dever[j].getElementsByClassName("img_d");
            img_d[0].classList.remove("big");
            img_d[0].classList.add("small");
            img_a = div_dever[j].getElementsByClassName("img_a");
            img_a[0].classList.remove("big");
            img_a[0].classList.add("small");
            img_a[0].style.display = "none";
        }
        for (j = 0; j < div_dever.length; j++) {
            p_introtext[j].classList.remove("active");
        }
        if (img_name == "zwj.png") {
            if (s[0]) {
                for (j = 0; j < div_dever.length; j++) {
                    div_dever[j].style.verticalAlign = "bottom";
                }
                div_container.style.textAlign = "right";
                p_introtext[0].classList.add("active");
                for (k = 0; k <= div_dever.length; k++) {
                    s[k] = true;
                }
                s[0] = false;
            } else {
                s[0] = true;
                location.reload();
            }
        }
        if (img_name == "lsf.png") {
            if (s[1]) {
                for (j = 0; j < div_dever.length; j++) {
                    div_dever[j].style.verticalAlign = "bottom";
                }
                div_container.style.textAlign = "left";
                p_introtext[1].classList.add("active");
                for (k = 0; k <= div_dever.length; k++) {
                    s[k] = true;
                }
                s[1] = false;
            } else {
                s[1] = true;
                location.reload();
            }
        }
        if (img_name == "why.png") {
            if (s[2]) {
                for (j = 0; j < div_dever.length; j++) {
                    div_dever[j].style.verticalAlign = "top";
                }
                div_container.style.textAlign = "right";
                p_introtext[2].classList.add("active");
                for (k = 0; k <= div_dever.length; k++) {
                    s[k] = true;
                }
                s[2] = false;
            } else {
                s[2] = true;
                location.reload();
            }
        }
        if (img_name == "zzy.png") {
            if (s[3]) {
                for (j = 0; j < div_dever.length; j++) {
                    div_dever[j].style.verticalAlign = "top";
                }
                div_container.style.textAlign = "left";
                p_introtext[3].classList.add("active");
                for (k = 0; k <= div_dever.length; k++) {
                    s[k] = true;
                }
                s[3] = false;
            } else {
                s[3] = true;
                location.reload();
            }
        }
        this.classList.remove("small");
        this.classList.add("big");
        img_d0[0].classList.remove("small");
        img_d0[0].classList.add("big");
        img_a0[0].style.display = "inline";
    });
}