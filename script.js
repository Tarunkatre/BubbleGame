var hit;
var score = 0;
function timer() {
    var timer = 60;
    setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerdiv").textContent = timer;
        }
        if (timer ==0) {
            document.querySelector("#center").innerHTML = `<h1>Game over<br>Your score is ${score}<br><button>Start again</button></h1>`;
        }
    }, 1000);
    
}
function getanewhit() {
    hit = Math.floor(Math.random() * 10)
    document.querySelector("#newhit").textContent = hit;
}
function newscore() {
    score = score + 10;
    document.querySelector("#scoreup").textContent = score;
}
function makebubbles(){
    document.querySelector("#center").innerHTML = ``;
for(var i=1 ;i<100; i++){
    var n = Math.floor(Math.random()*10)
    document.querySelector("#center").innerHTML += `<div class = "bubbles">${n}</div>`;}
}

document.querySelector("#center").addEventListener("click",function(det){
    if(Number(det.target.textContent)== hit){
        newscore();
        getanewhit();
        makebubbles();
    }
})

makebubbles();
timer();
getanewhit();