const hamburger = document.getElementById("hamburger");
const side = document.getElementById("side");
hamburger.onclick = function pop(){
    if(side.style.display=="none"){
        side.setAttribute("style","display:block;")
    }
    else{
        side.setAttribute("style","display:none;")
    }
}