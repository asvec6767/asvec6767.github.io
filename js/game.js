var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var sber = new Image(); 
var bgimg = new Image();
var ground = new Image();
var sky = new Image();
var up = new Image();
var bottom = new Image();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getImagebg() 
{
    const random = Math.floor(Math.random() * 5) + 1;   
    return random;
}

sber.src = "img/Sber.png";
bgimg.src = "img/bg/"+getImagebg()+".png";
ground.src = "img/ground.png";
up.src = "img/BankUp.png";
sky.src = "img/sky.png";
bottom.src = "img/BankBottom.png";

var gap = cvs.height/2.5;
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
document.addEventListener("click", moveup);

function moveup(){
	ypos-=sbermoveup;
}

//Сбер позиция
var xpos = cvs.width/10;
var ypos = cvs.height/3;
var grav = 1;

//Начальные точки bg, ground, sky
var bg_x=0;
var ground_x=0;
var sky_x=0;

//Переменные размеров банкоматов
var bankwidth = cvs.width/6;//ширина банокмата
var bankheight = cvs.height/2.1;//высота банокмата


var lose = 1;
function start(){lose=0; score = 0; xpos = cvs.width/10; ypos = cvs.height/3; bank[0].x=cvs.width; bank[0].y= -0.2*cvs.width;}

function refreshPage(){
    window.location.reload();
}


function drawgame()
{
	if (lose==1)
	{
		lvl = 3;
		sbermoveup = cvs.height/17;
		
		
		ctx.drawImage(bgimg, 0, 0, cvs.width, cvs.height);
		
		ctx.fillStyle = "#000";
		ctx.font = "42px Verdana";
		//ctx.fillText("Score: " + score, (cvs.width-220)/2, cvs.height/2+80);
		ctx.fillText("To start the game, press any key...", (cvs.width-700)/2, cvs.height/2);
		document.addEventListener("keydown", start);
		document.addEventListener("click", start);
	}
	
	if (lose==2)
	{
		ctx.drawImage(bgimg, 0, 0, cvs.width, cvs.height);
		
		ctx.fillStyle = "#000";
		ctx.font = "42px Verdana";
		ctx.fillText("Score: " + score, (cvs.width-220)/2, cvs.height/2+80);
		ctx.fillText("To start the game, press any key...", (cvs.width-700)/2, cvs.height/2);
		document.addEventListener("keydown", refreshPage);
		document.addEventListener("click", refreshPage);
	}
	
	
	
	if (lose==0){
		
	ctx.drawImage(bgimg, 0+bg_x, 0, cvs.width, cvs.height);//1
	ctx.drawImage(bgimg, 0+bg_x+cvs.width, 0, cvs.width, cvs.height);//2
	document.removeEventListener("keydown", start);
	document.removeEventListener("click", start);
	
	//перерисовка банкоматов
	for (var i=0;i<bank.length;i++) 
	{
		ctx.drawImage(up, bank[i].x, bank[i].y, bankwidth, bankheight);
		ctx.drawImage(bottom, bank[i].x, bank[i].y + bankheight + gap, bankwidth, bankheight);
		
		bank[i].x-=lvl;//передвижение банкоматов влево
		
		if(bank[i].x<=cvs.width*0.3 && bank[i].x > cvs.width*0.3-lvl)
		{
			bank.push({
				x : cvs.width,
				y : Math.floor(Math.random() * bankheight *0.7/*Амплитуда колебаний*/)-bankheight*0.6/*Опуск по ОУ*/
			});
		}
		
		if(xpos>=bank[i].x && xpos<=bank[i].x + bankwidth && ( ypos<=bank[i].y + bankheight || ypos>=bank[i].y + bankheight + gap-(0.7*cvs.width/11)) || ypos<=0+cvs.height*0.06 || ypos>=cvs.height-cvs.width*0.185){
			lose = 2;
		}
		
		if (bank[i].x<=xpos && bank[i].x > xpos-lvl && score%5==1) { lvl++; grav++; sbermoveup+=15;}
		
		if (bank[i].x<=xpos && bank[i].x > xpos-lvl) {score++;}
		
		
		
	}
	
	ctx.drawImage(ground, 0+ground_x, cvs.height*0.875, cvs.width, cvs.height/7);//1
	ctx.drawImage(ground, 0+ground_x+cvs.width, cvs.height*0.875, cvs.width, cvs.height/7);//2
	ctx.drawImage(sky, 0+sky_x, 0-cvs.height*0.35, cvs.width*1.2, cvs.height/2);//1
	ctx.drawImage(sky, 0+sky_x+cvs.width, 0-cvs.height*0.35, cvs.width*1.2, cvs.height/2);//2
	
	ctx.drawImage(sber, xpos, ypos, cvs.width/9, cvs.width/11);
	
	bg_x-=lvl/10;
	ground_x-=lvl/2;
	sky_x-=lvl/2;
	if (-bg_x>=cvs.width)bg_x=0;
	if (-ground_x>=cvs.width)ground_x=0;
	if (-sky_x>=cvs.width)sky_x=0;
	
	ypos+=grav;
	
	ctx.fillStyle = "#000";
	ctx.font = "36px Verdana";
	ctx.fillText("Score: " + score, 0+cvs.height/20, cvs.height-cvs.height/25);
	}
		
	requestAnimationFrame(drawgame);
	
}

bottom.onload = drawgame;
