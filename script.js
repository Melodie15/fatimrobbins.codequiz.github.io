var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("questions-area");
var timer = document.getElementById("timer");



var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");


var scoreContainer = document.getElementById("scoreContainer");

var questions = [
    {
        question :"Who invented Javascript?",
        choiceA : "Anthony Smith",
        choiceB : "Brendan Eich",
        choiceC : "Mark Johnson",
        correct : "B"
    },
    {
        question :"Which one of these is a Javascript package manager?",
        choiceA : "Visual Code Studio",
        choiceB : "TypeScript",
        choiceC : "NPM",
        correct : "C"
    },
    {
        question :"String values must be enclosed in ___",
        choiceA : "quotes",
        choiceB : "parentheses",
        choiceC : "brackets",
        correct : "A"
    },

];

var lastQuestionIndex = questions.lenght - 1;
var runningQuestionIndex = 0;


function renderQuestion() {
    var q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "<p>";

}

// const questionTime = 10;
// var count = 0;
// var TIMER = setInterval(counterRender, 1000);
// clearInterval(Timer);

// function counterRender(){
//     if( count <= questionTime) {
//         counter.innerHTML = count;
//         timeGauge.style.width = gaugeProgressUnit* count + "px";
//         count++;
//     }else {
//         count = 0;
//         answerIsWrong();
//         if( runningQuestionIndex < lastQuestionIndex){
//            runningQuestionIndex++;
//            questionRender(); 
//         } else { clearInterval(TIMER);
//                 scoreRender();
//         }
//     }
// }
// var score = 0;
// function checkAnswer(answer){
//     if questions[runningQuestionIndex].correct == answer) {
//         score++;
//         answerIsCorrect();
//     }else{
//         answerIsWrong();
//     }
//     if(runningQuestionIndex < lastQuestionIndex) {
//         count = 0;
//         runningQuestionIndex++;
//         questionRender();
//     } else{
//         clearInterval(TIMER);
//         scoreRender();
//     }
// }


// let TIMER;

function startQuiz(){
    // start.style.display = "none";
    // counterRender();
    // TIMER = setInterval(counterRender, 1000);
    renderQuestion();
    // quiz.style.display = "block";
}

// function scoreRender(){
//     scoreContainer.style.display = "block;"
//     let scorePercent = Math.round(100 * score / questions.lenght);
//     scoreContainer.innerHTML = "<p>" + scorePercent + "%<p>";
            
// }
