var timer = 60;
var score = 0;
var hitrn;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
var clutter = "";
for(var i=1; i<=168 ;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class = "bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML  = `<div id="lastscore"><h1>Game over</h1>  <h1>Score: ${score}</h1></div`;
        }
        },1000);
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makeBubble();