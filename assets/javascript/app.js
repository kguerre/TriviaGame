//VARIABLES
var number = 30;
var timeLeft;
var scoreCorrect = 0;
var scoreWrong = 0;
var guesses = [];
var answers = [
"Dwayne Wade",
"Walter",
"Pau Gasol",
"Wilt Chamberlain",
"16",
"Allen Iverson",
"7'7",
"5'3",
"24",
"Michael Jordan"];

//FUNCTIONS
	$(document).ready(function() {

	$("#start-button").on("click", startGame);
	$("#submit").on("click", stopTimer);
	
//startGame()
	function startGame() {
		startTimer();

	}
//startTimer()
	function startTimer() {
		timeLeft = setInterval(countDown, 1000);
	}
//counDown()
	function countDown () {
		number--;
		$("#seconds").html("Countdown: " + "<h2>" + number + "</h2>");
		if (number === 0) {
			gameOver()
		}
	}
//gameOver()
	function gameOver() {
		stopTimer();
	}
//stopTimer()
	function stopTimer() {
		clearInterval(timeLeft);
		scoreGame();
	}
//scoreGame()
	function scoreGame() {
		
	}

});