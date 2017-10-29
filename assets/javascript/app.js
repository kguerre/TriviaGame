var timeLeft;
var number = 90;
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

$(document).ready(function() {

	$("#start-button").on("click", startGame);
	$("#submit").on("click", stopTimer);
	
    function startGame() {
		$("#questions").show();
		number = 90;
		guesses= [];
		startTimer();
	}
    function startTimer() {
		timeLeft = setInterval(countDown, 1000);
	}
    function countDown () {
		number--;
		$("#seconds").html("Countdown: " + "<h2>" + number + "</h2>");
		if (number === 0) {
			gameOver()
		}
	}
    function gameOver() {
		stopTimer();
	}
    function stopTimer() {
		clearInterval(timeLeft);
		$("#questions").hide();
		$("#score-board").show();
		$('input:checked').each(function(){
    		guesses.push($(this).val());
	});
		console.log(guesses)
		scoreGame();
	};
    function scoreGame() {
		var correctGuess = false
		for (var i = 0; i < answers.length; i++) {
			if(guesses[i] === answers[i]) {
				correctGuess = true;
				scoreCorrect++;
				$("#right").html("Right Answers: " + scoreCorrect);
			}else if(guesses[i] !== answers[i]) {
				scoreWrong++;
				$("#wrong").html("Wrong Answers: " + scoreWrong);
			}
		}
		endGame();
	};
    function endGame() {
		if(scoreCorrect > 5) {
			$("#win-loss").html("Well Done!");
			$("#gif-goes-here").html('<img src="https://media.giphy.com/media/3o8dp2x07W2WEWwmY0/giphy.gif"/>');
		}else {
			$("#win-loss").html("Keep trying!");
			$("#gif-goes-here").html('<img src="https://media.giphy.com/media/3o7qE8XB0J4nr53oRO/giphy.gif"/>');
		}
	}

});
