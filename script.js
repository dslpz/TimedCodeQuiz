// questions array
const askAllQuestion = [
	{
		question: "Commonly used JS data types DON'T include:",
		options: ["Strings", "Numbers", "Booleans", "Alerts"],
		answer: "Alerts",
	},
	{
		question: "A condition in an if/else statement is enclosed with:",
		options: ["Quotes", "Parentheses", "Square brackets", "Curly Brackets"],
		answer: "Parentheses",
	},
	{
		question: "In JS, arrays can be used to store ____",
		options: ["Numbers", "Strings", "Boolens", "All of the above"],
		answer: "All of the above",
	},
	{
		question:
			"String values must be enclosed within ____ when being assigned to variables",
		options: ["Curly Brackets", "Commas", "Quotes", "Parenthesis"],
		answer: "Quotes",
	},

];
let currentQuestion = 0;
let score = 0;
let totalTime = 60;
let currentAnswer = "";
let a;
const start = $("<button>").text("Start").addClass("btn btn-primary start");
$("#start").append(start);
// timer function
function setTimer() {
	a = setInterval(startTimer, 1000);
	function startTimer() {
		totalTime--;
		$("#timer").text(`${totalTime} seconds left!`);
	}
}
$(".start").click(function () {
	$("#start").hide();
	setTimer();
	showQuestion();
});
// question function
function showQuestion() {
	$("#question").text(askAllQuestion[currentQuestion].question);
	currentAnswer = askAllQuestion[currentQuestion].answer;
	for (
		let lap = 0;
		lap < askAllQuestion[currentQuestion].options.length;
		lap++
	) {
		let option = $("<button>")
			.addClass("btn btn-success btn-lg btn-block selectedAnswer")
			.text(askAllQuestion[currentQuestion].options[lap])
			.attr("value", askAllQuestion[currentQuestion].options[lap]);
		$("#options").append(option);
	}
}
$(document).on("click", ".selectedAnswer", function () {
	let choosedAnswer = $(this).val();
	if (choosedAnswer === currentAnswer) {
		$("#result").text("Correct!");
		score++;
		checkGame();
	} else {
		$("#result").text("Wrong Answer!");
		score--;
		checkGame();
	}
});
// end of the game function
function checkGame() {
	if (currentQuestion >= 4 || totalTime <= 0) {
		$("#question").text("Congratulations! Game Over!");
		$("#options").empty();
		$("#result").text(`Your total score is ${score}`);
		$("#start").show();
		clearInterval(a);
		currentQuestion = 0;
		score = 0;
		totalTime = 60;
		currentAnswer = "";
	} else {
		currentQuestion++;
		$("#question").empty();
		$("#options").empty();
		showQuestion();
	}
}