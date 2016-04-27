var img_his = document.getElementsByClassName("img_his");
var li_hisintro = document.getElementsByClassName("li_hisintro");
var i = 0,
    j = 0;
var m = 0;
var index = 0;
var his_before = document.getElementById("his_before");
var his_after = document.getElementById("his_after");
his_before.onclick = function () {
    if (index > 0) {
        img_his[index - 1].classList.remove("hide");
        li_hisintro[index - 1].classList.remove("hide");
        index--;
    } else {
        for (j = 0; j < img_his.length - 1; j++) {
            img_his[j].classList.add("hide");
            li_hisintro[j].classList.add("hide");
        }
        index = img_his.length - 1;
    }
}
his_after.onclick = function () {
    if (index < img_his.length - 1) {
        img_his[index].classList.add("hide");
        li_hisintro[index].classList.add("hide");
        index++;
    } else {
        for (j = 0; j < img_his.length - 1; j++) {
            img_his[j].classList.remove("hide");
            li_hisintro[j].classList.remove("hide");
        }
        index = 0;
    }
}