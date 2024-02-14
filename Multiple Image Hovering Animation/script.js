var elem=document.querySelectorAll(".elem");
var elemImage=document.querySelector("#elem1 img");


elem.forEach(function(val){
    // console.log(val);
    // console.log(val.childNodes[3]);
    val.addEventListener("mouseenter",function(){
        console.log("Entered");
        val.childNodes[3].style.opacity="1";
    })
    val.addEventListener("mouseleave",function(){
        console.log("leave");
        val.childNodes[3].style.opacity="0";
    })
    val.addEventListener("mousemove",function(e){
        console.log("leave");
        val.childNodes[3].style.left=e.x+"px";
        // val.childNodes[3].style.top=e.y+"px";
        
    })
})

