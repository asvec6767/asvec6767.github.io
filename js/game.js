var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var sber = new Image(); 
var bg = new Image();
var ground = new Image();
var sky = new Image();
var up = new Image();
var bottom = new Image();

sber.src = "img/Sber.png";
bg.src = "img/bg.png";
ground.src = "img/ground.png";
up.src = "img/BankUp.png";
sky.src = "img/sky.png";
bottom.src = "img/BankBottom.png";

var gap = 250;
var score = 0;
var lvl = 3;
var sbermoveup = 60;

//Создание банкоматов
var bank = [];

bank[0] = {
	x : cvs.width,
	y : -200
}



//Кнопка полета
document.addEventListener("keydown", moveup);

function moveup(){
	ypos-=sbermoveup;
}

//Сбер позиция
var xpos = 100;
var ypos = 150;
var grav = 1;

//Переменные размеров
var bankwidth = 185;//ширина банокмата
var bankheight = 385;//высота банокмата


var lose = 1;
function start(){lose=0; score = 0; xpos = 100; ypos = 150; bank[0].x=cvs.width; bank[0].y= -200;}


function reload(){location.reload();}
function reloadgame()
{
	ctx.drawImage(bg, 0, 0);
		
	ctx.fillStyle = "#000";
	ctx.font = "42px Verdana";
	ctx.fillText("Score: " + score, 400, cvs.height-150);
	ctx.fillText("To start the game, press any key...", 150, cvs.height-250);
	document.addEventListener("keydown", reload);
}


function drawgame()
{
	if (lose==1)
	{
		lvl = 3;
		sbermoveup = 60;
		
		
		ctx.drawImage(bg, 0, 0);
		
		ctx.fillStyle = "#000";
		ctx.font = "42px Verdana";
		ctx.fillText("Score: " + score, 400, cvs.height-150);
		ctx.fillText("To start the game, press any key...", 150, cvs.height-250);
		document.addEventListener("keydown", start);
	}
	
	
	
	if (lose==0){
	ctx.drawImage(bg, 0, 0);
	//ctx.drawImage(sky, 0, 0, cvs.width, 20); - сделать норм текстуру неба
	
	//перерисовка банкоматов
	for (var i=0;i<bank.length;i++) 
	{
		if(i==0){document.removeEventListener("keydown", start);}
		
		ctx.drawImage(up, bank[i].x, bank[i].y, bankwidth, bankheight);
		ctx.drawImage(bottom, bank[i].x, bank[i].y + bankheight + gap, bankwidth, bankheight);
		
		bank[i].x-=lvl;//передвижение банкоматов влево
		
		if(bank[i].x<=300 && bank[i].x > 300-lvl)
		{
			bank.push({
				x : cvs.width,
				y : Math.floor(Math.random() * 400)-bankheight-50
			});
		}
		
		if(xpos>=bank[i].x && xpos<=bank[i].x + bankwidth && ( ypos<=bank[i].y + bankheight || ypos>=bank[i].y + bankheight + gap) || ypos<=0 || ypos>=cvs.height-175){
			location.reload();
		}
		
		if (bank[i].x<=xpos && bank[i].x > xpos-lvl && score%5==1) { lvl++; grav++; sbermoveup+=15;}
		
		if (bank[i].x<=xpos && bank[i].x > xpos-lvl) {score++;}
		
	}
	ctx.drawImage(ground, 0, 550, cvs.width, 100);
	ctx.drawImage(sber, xpos, ypos, 125, 100);
	
	ypos+=grav;
	
	ctx.fillStyle = "#000";
	ctx.font = "36px Verdana";
	ctx.fillText("Score: " + score, 20, cvs.height-30);
	}
		
	requestAnimationFrame(drawgame);
	
}

bottom.onload = drawgame;