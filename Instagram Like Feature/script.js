console.log("VIvek")

var con = document.querySelector("#container");
var love = document.querySelector("i");

con.addEventListener("click",function(){
    console.log("hello");
    love.style.transform = "translate(-50%,-50%) scale(1)";
    setTimeout(() => {
        console.log("ab")
        love.style.transform = "translate(-50%,-50%) scale(0)";
    }, 2000);
});

