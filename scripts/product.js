const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const dv20 = document.querySelector(".dv2-0");
const dv21 = document.querySelector(".dv2-1");
const dv22 = document.querySelector(".dv2-2");
const dv23 = document.querySelector(".dv2-3");
const dv24 = document.querySelector(".dv2-4");

btn0.onclick = function slide0(){
    dv20.setAttribute("style", "display:block;");
    dv21.setAttribute("style", "display:none;");
    dv22.setAttribute("style", "display:none;");
    dv23.setAttribute("style", "display:none;");
    dv24.setAttribute("style", "display:none;");
}
btn1.onclick = function slide1(){
    dv20.setAttribute("style", "display:none;");
    dv21.setAttribute("style", "display:block;");
    dv22.setAttribute("style", "display:none;");
    dv23.setAttribute("style", "display:none;");
    dv24.setAttribute("style", "display:none;");
}
btn2.onclick = function slide2(){
    dv20.setAttribute("style", "display:none;");
    dv21.setAttribute("style", "display:none;");
    dv22.setAttribute("style", "display:block;");
    dv23.setAttribute("style", "display:none;");
    dv24.setAttribute("style", "display:none;");
}
btn3.onclick = function slide3(){
    dv20.setAttribute("style", "display:none;");
    dv21.setAttribute("style", "display:none;");
    dv22.setAttribute("style", "display:none;");
    dv23.setAttribute("style", "display:block;");
    dv24.setAttribute("style", "display:none;");
}
btn4.onclick = function slide4(){
    dv20.setAttribute("style", "display:none;");
    dv21.setAttribute("style", "display:none;");
    dv22.setAttribute("style", "display:none;");
    dv23.setAttribute("style", "display:none;");
    dv24.setAttribute("style", "display:block;");
}