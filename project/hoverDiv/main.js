const bal=document.querySelector("#bal");



window.onmousemove = function(e){
 let x= e.clientX;
 bal.style.left = x + "px";
}