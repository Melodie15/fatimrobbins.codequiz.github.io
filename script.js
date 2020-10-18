var start = document.getElementById("start");
var quiz = document.getElementById("quiz-area");
var questionEl = document.getElementById("question");
var score = document.getElementById("score");
var next = document.getElementById("next");
var submit = document.getElementById("score");


var currentQuestion = 0;
var score = 0;
var counter = 20;


var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");

var scoreContainer = document.getElementById("scoreContainer");

var questions = [
    {
        question: "Who invented Javascript?",
        option1: "Anthony Smith",
        option2: "Brendan Eich",
        option3: "Mark Johnson",
        answer: "B"
    },
    {
        question: "Which one of these is a Javascript package manager?",
        option1: "Visual Code Studio",
        option2: "TypeScript",
        option3: "NPM",
        answer: "C"
    },
    {
        question: "String values must be enclosed in ___",
        option1: "quotes",
        option2: "parentheses",
        option3: "brackets",
        answer: "A"
    },
    {
        question: "Inside which HTML element do we put the JavaScript",
        option1: "<js>",
        option2: "<javascript>",
        option3: "<script>",
        answer: "C"
    },
    {
        question: "How do you create a function in Javascript?",
        option1: "function = myFunction()",
        option2: "function:myFunction()",
        option3: "function myFunction()",
        answer: "C"
    },

];

var totalQuestions = questions.length;

function renderQuestion(questionIndex) {
    document.getElementById("start").disabled = true;
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;

};

function nextQuestion() {
    var userChoice = document.querySelector('input[type=radio]:checked');
    if (!userChoice) {
        alert("Please select your answer.");
        return;
    }
    var answer = userChoice.value;
    if (questions[currentQuestion].answer === answer) {
        score += 1;
    }
    userChoice.checked = false;
    currentQuestion++;
    if (currentQuestion == totalQuestions) {
        start.style.visibility = 'hidden';
        next.style.visibility = 'hidden';
        quiz.style.display = "none";
        scoreRender();
        return;
    }
    renderQuestion(currentQuestion);
}

var timer;

function clock() {
    timer = setInterval(clock, 1000);
    function clock() {
        document.getElementById("timer").innerHTML = counter--;
        if (counter == 0) {
            clearInterval(timer);
            scoreRender();
        }
    }
}

function scoreRender(){
    document.getElementById("lead").style.display='none';
    let scorePercent = Math.round(100 * score / questions.length);
    scoreContainer.innerHTML = scorePercent + "%";
    scoreContainer.style.display = "";

}
