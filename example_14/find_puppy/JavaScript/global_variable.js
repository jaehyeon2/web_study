var gameMenu = document.getElementById("gameMenu");//게임 메뉴 버튼
var restMenu = document.getElementById("restMenu");//남은 갯수
var failMenu = document.getElementById("failMenu");//틀린 횟수
var timeMenu = document.getElementById("timeMenu");//남은 시간
var statusMenu = document.getElementById("statusMenu");//게인 진행 상태
var gameWindow = document.getElementById("gameWindow");//게임 창
var time=2;//카운트 다운 초기 시간
var gaming="false"//게임 진행 여부
var gameover = 0;//게임 오버 여부
var eggs = new Array(24);//정답 eggs 저장
var chosenEggs = 0;//뽑힌 eggs 개수 저장
var timerID;