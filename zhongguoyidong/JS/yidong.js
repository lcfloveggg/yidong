// 下拉
{
    let aa = document.querySelectorAll(".toubu5-2");
    let bb = document.querySelectorAll(".tuBOX");
    aa.forEach(function (val, index) {
        val.onmousemove = function () {
            for (let i = 0; i < aa.length; i++) {
                bb[i].style.display = "none";
            }
            bb[index].style.display = "block";
        };
        val.onmouseout = function () {
            bb[index].style.display = "none";
        }
    })
}
// 自动轮播
{
    let lunbo = document.querySelector(".xbox");
    let Bbox = document.querySelector("#Bbox");
    let prov = document.querySelector(".prov");
    let next = document.querySelector(".next");
    let nam = 4;
    let yidong = setInterval(lunboFn, 3000);
    let yd = "r";

    function lunboFn() {
        if (yd === "r") {
            nam++;
        } else if (yd === "l") {
            nam--;
        }
        lunbo.style.transition = "all 1s";
        lunbo.style.marginLeft = -300 * nam + "px";
    }

    lunbo.addEventListener("transitionend", function () {
        flag = true;
        if (nam === 12) {
            nam = 4;
            lunbo.style.transition = "none";
            lunbo.style.marginLeft = "-1200px";
        }
        else if (nam === 0) {
            nam = 8;
            lunbo.style.transition = "none";
            lunbo.style.marginLeft = "-2400px";
        }
    });
    window.onblur = Bbox.onmousemove = function () {
        clearInterval(yidong);
    };
    window.onfocus = Bbox.onmouseout = function () {
        yidong = setInterval(lunboFn, 3000);
    };
    let flag = true;
    prov.onclick = function () {
        yd = "l";
        if (flag) {
            flag = false;
            lunboFn();
        }
    };
    next.onclick = function () {
        yd = "r";
        if (flag) {
            flag = false;
            lunboFn();
        }
    }
}
// binner
{
    let dians = document.querySelectorAll(".banner-img .dian");
    let imgs = document.querySelectorAll(".banner-img .tubox");
    let now = 0;
    let z = 10;
    let flag = true;
    let st = setInterval(lunbo, 3000);
    function lunbo(yd ="r") {
        if (yd === "l") {
            imgs[now].classList.add("rightout");//显示的当前图片
            dians[now].classList.remove("dian1");
            now--;
            if (now < 0) {
                now = imgs.length - 1;
            }
            imgs[now].classList.add("leftin");//当前图片的下一张图片
            dians[now].classList.add("dian1");
            imgs[now].style.zIndex = z++;
        }
        if (yd === "r") {
            imgs[now].classList.add("leftout");//显示的当前图片
            dians[now].classList.remove("dian1");
            now++;
            if (now === imgs.length) {
                now = 0;
            }
            imgs[now].classList.add("rightin");//当前图片的下一张图片
            dians[now].classList.add("dian1");
            imgs[now].style.zIndex = z++;
        }
    }

    imgs.forEach(function (ele) {  //消除类名
        ele.addEventListener("animationend", function () {
            ele.className = "tubox";
            flag = true;
        })
    });
    dians.forEach(function (ele, index) {
        ele.onclick = function () {
            //w代表的是当前轮播点所在的位子下标
            //index代表当前你点击的图片下标
            if (flag) {
                flag = false;
                if (now < index) {
                    //左进右出
                    imgs[now].classList.add("leftout");
                    imgs[index].classList.add("rightin");
                } else if (now > index) {
                    //左出右进
                    imgs[now].classList.add("rightout");
                    imgs[index].classList.add("leftin");
                }
                imgs[index].style.zIndex = z++;
                dians[now].classList.remove("dian1");
                dians[index].classList.add("dian1");
                now = index;//当前的下标等于点击时的下标
            }
        }
    });
    let left = document.querySelector(".banner-img .zuo");
    let right = document.querySelector(".banner-img .you");
    left.onclick = function () {
        if (flag) {
            flag = false;
            lunbo(yd="l");
        }
    };
    right.onclick = function () {
        if (flag) {
            flag = false;
            lunbo(yd = "r");
        }
    };
    let tops = document.querySelector(".banner-img");
    tops.onmouseover = window.onblur = function () {
        clearInterval(st);
    };
    window.addEventListener("onblur",function () {
        clearInterval(st);
    });
    tops.onmouseout = window.onfocus = function () {
            st = setInterval(lunbo, 3000);
    };
    window.addEventListener("onfocus",function () {
            st = setInterval(lunbo, 3000);
    });
}