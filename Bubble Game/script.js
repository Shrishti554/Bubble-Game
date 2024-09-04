var Timer=60;
 var score=0;
 var hitRn=0 ;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent=score;
}

function getHit(){
     hitRn=Math.floor(Math.random()*10);
     document.querySelector("#hitVal").textContent=hitRn;
}

function  makeBubble(){
    var clutter="";
for (var i =1; i<=102; i++) {
    var rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbottom").innerHTML = clutter;
}

 function runTimer(){
    var TimerInt= setInterval(function () {
        if(Timer>0){
            Timer--;
            document.querySelector("#timerval").textContent = Timer;
        }else{
            clearInterval(TimerInt);
            document.querySelector("#pbottom").innerHTML = `<h1> Congrats! Game Over</h1>`;
        }
    },1000)
 }
document.querySelector("#pbottom")
.addEventListener("click",function(dets){
   var clikedNum =( Number(dets.target.textContent));
   if(clikedNum===hitRn){
    increaseScore();
    makeBubble();
    getHit();
   }
})

runTimer();
makeBubble();
getHit();
