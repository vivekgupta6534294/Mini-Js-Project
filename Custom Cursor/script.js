var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

// console.log("hello");
// crsr.style.backgroundColor = "green"
main.addEventListener("mousemove",function(e){
    console.log("hey");
    crsr.style.left=e.x+"px";
    crsr.style.top=e.y+"px";

})