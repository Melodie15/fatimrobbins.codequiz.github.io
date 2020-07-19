var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var qImg = document.getElementById("questionImage");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");


var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");

var progress = document.getElementById("progress");
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
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

}

function progressRender(){
    for(var qIndex = 0; qIndex <= lastQuestionIndex; qIndex++)
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
}
function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor="green"
}
function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor="red"
}

const questionTime = 10;
const gaugeWidth = 150;
var count = 0;
var gaugeProgressUnit = gaugeWidth/questionTime;
var TIMER = setInterval(counterRender, 1000);
clearInterval(Timer);

function counterRender(){
    if( count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit* count + "px";
        count++;
    }else {
        count = 0;
        answerIsWrong();
        if( runningQuestionIndex < lastQuestionIndex){
           runningQuestionIndex++;
           questionRender(); 
        } else { clearInterval(TIMER);
                scoreRender();
        }

    }
}




