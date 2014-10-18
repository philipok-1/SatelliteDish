//onload intro or reset function

	function play_single_sound() {
		document.getElementById('audiotag1').play();
	}

function loadIntro(){

switchScreen("intro", "game")

switchBG()

  var el = document.getElementById('gameover');
el.style.visibility=("hidden")

canvas = document.getElementById("introscreen");
    
canvas.width  = window.innerWidth/2;
canvas.height = window.innerHeight/2;}

function startUp(){


newGame()

  var el = document.getElementById('gamescreen');
  el.addEventListener("touchstart", handleStart, false);

function handleStart(evt) {
  evt.preventDefault();
  
checkPlacement(evt.pageX, evt.pageY);
};

};


function checkPlacement(posx,posy){


document.getElementById("score").innerHTML=(score);

  var el = document.getElementById("gamescreen");
  var ctx = el.getContext("2d");

for (var i=0; i<targets.length; i++){
			
		var item=targets[i];
		
if (collision(posx-30, posy-30, 15, item.x, item.y, 2))
{


ctx.drawImage(greensatdish, posx-30, posy-30, 60,60);

score+=1;
flag=true;

}
else {


ctx.drawImage(redsatdish, posx-30, posy-30, 60,60);
flag=false;
}
};




// start new game


};

// main game function

function newGame(){

clearCanvas()
switchScreen("game", "intro")


timer=20
score=0
targets=[]
timers=[]
flag=true

gameTimer=setInterval("dropTimer()", 1000);
targetPlace=setInterval("createTarget()", 20);

document.getElementById("score").innerHTML=(score);

play_single_sound();

}


//helper functions


function TargetIcon(){
this.fixed=false;
this.life=5;
this.x=randomInt(10,650);
this.y=randomInt(10,650);

this.draw=placeTarget(this.x, this.y);

}

function createTarget(){

if (flag==true){
var target1=new TargetIcon();
targets.push(target1);
flag=false;
}

};

function placeTarget(posx,posy){

var el = document.getElementById("gamescreen");
  var ctx = el.getContext("2d");

ctx.drawImage(targetsym, posx,posy, 50, 50);

}

	
	
function dropTimer(){

timer-=1

document.getElementById("timer").innerHTML=(timer+" seconds");

if (timer<=0){
clearInterval(gameTimer);
gameOver()


}

}

function collision (p1x, p1y, r1, p2x, p2y, r2) {
    var a;
    var x;
    var y;

    a = r1 + r2;
    x = p1x - p2x;
    y = p1y - p2y;

   if(a > Math.sqrt(x*x + y*y)) { 
        return true;
    } else {
        return false;
    }   
}

function gameOver(){

  var el = document.getElementById("gameover");

el.style.visibility="visible";
el.innerHTML="game over.. score="+score;

 var timeEnd=window.setTimeout(loadIntro,7000)
}

function clearCanvas(){

  var el = document.getElementById("gamescreen");
  var ctx = el.getContext("2d");

ctx.clearRect(0,0,el.width,el.height)}

function log(msg) {
  var p = document.getElementById('log');
  p.innerHTML = msg + "\n" + p.innerHTML;
};

function switchScreen(on, off){

var elements=document.getElementsByClassName(on);
for (var i=0; i<elements.length; i++){
elements[i].style.visibility="visible";}

var newElements=document.getElementsByClassName(off);
for (var j=0; j<newElements.length; j++){
newElements[j].style.visibility="hidden";}
}