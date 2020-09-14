function gameStart(){
	//init();
	/*if(gaming==0) return;
	gaming = true;*/
	time=2;
	chooseEggs();
	gameMenu.style.visibility='hidden';
	statusMenu.innerHTML="게임이 진행중입니다."
	timeMenu.innerHTML = "남은 시간 : " + time;
	timerID = setInterval("count()", 1000);
	
}
function gameover(){
	
	gameMenu.style.visibility="visible";
	gameMenu.innerHTML = "게임 다시 시작";
	gameWindow.disabled="true";
	statusMenu.innerHTML = "게임이 종료되었습니다."
	
	//time=2;
}
function count(){
	if(time<=0){
		gameover();
		clearInterval(timerID);
	}
	else{
		time--;
		timeMenu.innerHTML = "남은 시간 : " + time;
	}
	if(time<=0){
		gameover();
		//clearInterval(timerID);
	}
	
	
}

function init(){
	
	//restMenu.innerHTML = "남은 수 : 8";
	//failMenu.innerHTML = "실패 수 : 0";
	//timeMenu.innerHTML = "시간 0";
	statusMenu.innerHTML = "게임이 시작될 예정입니다."
	var idNum=0;
	for(var i=0; i<3; i++) {
		for(var j=0; j<8; j++) {
			var egg = document.getElementById("egg" + idNum++);
			egg.src = "images/egg.gif";
		}
	}
	//time=20;
}
function chooseEggs(){
	while(chosenEggs==8){
		
	}
}