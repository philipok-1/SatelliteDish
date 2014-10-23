//onload intro or reset function

	function play_single_sound() {
		document.getElementById('audiotag1').play();
	}

function loadIntro(){

switchScreen("intro", "end")
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




  var el = document.getElementById("gamescreen");
  var ctx = el.getContext("2d");

for (var i=0; i<targets.length; i++){
			
		var item=targets[i];
		
if (collision(posx-30, posy-30, 15, item.x, item.y, 2))
{


ctx.drawImage(greensatdish, posx-30, posy-30, 60,60);
targets=[]
score+=1;
flag=true;

}
else {


ctx.drawImage(redsatdish, posx-30, posy-30, 60,60);
score=0;
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

//play_single_sound();

}


//helper functions


function TargetIcon(){
this.fixed=false;
this.life=5;
this.x=randomInt(10,650);
this.y=randomInt(10,600);

this.draw=placeTarget(this.x, this.y);

}

function createTarget(){

if (flag==true){
var target1=new TargetIcon();
targets.push(target1);
flag=false;
}
document.getElementById("score").innerHTML=(score);
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

switchScreen("end", "game")
comment="";

if (score==0){comment="Zero?? That's terrible!"}

else if (score==1){comment="Oh man!"}

else if (score>1 && score<5){comment="What happened??."}

else if (score>=5 && score<10){comment="Average..."}

else if (score>=10 && score<15){comment="Not bad!.."}

else if (score>=15 && score<20){comment="Very good!"}

else if (score>=20 && score<24){comment="Master satellite </br> engineer!"}

else {comment="oh my goodness </br> Amazing!"}


  var el = document.getElementById("gameover");

el.style.visibility="visible";
el.innerHTML="game over..</br> you scored "+score+"</br>"+comment;


// var timeEnd=window.setTimeout(loadIntro,7000)
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
