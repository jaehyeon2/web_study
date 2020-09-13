function gameStart(){
	//init();
	if(gaming==0) return;
	gaming = true;
	chooseEggs();
	gameMenu.style.visibility='hidden';
	timeMenu.innerHTML = "남은 시간 : " + time;
	var timerID = setInterval("count()", 1000);
	
}
function count(){
	if(time<=0){
		//alert("게임이 종료되었습니다.");
		clearInterval(timerID);
		timer=100;
	}
	time--;
	timeMenu.innerHTML = "남은 시간 : " + time;
	
}
function init(){
	gameMenu.innerHTML = "게임 다시 시작";
	gameMenu.style.visibility='visible';
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
	time=20;
}
function chooseEggs(){
	while(chosenEggs==8){
		
	}
}