var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("questions-area");
var counter = document.getElementById("timer");
var score = document.getElementById("score");
var next = document.getElementById("next");
var submit = document.getElementById("submit");



var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");

var questionChoices= document.getElementById("questionChoices");


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

var lastQuestionIndex = questions.length - 1;


function renderQuestion() {
    for (var i = 0; i < questions.length; i++) {
        var q = questions[i];
        var p = document.createElement('p');
        testQuestion = document.createTextNode(q.question)
        p.appendChild(testQuestion)
        question.appendChild(p) ;
        var nodeA= document.createElement("li")
        var textA= document.createTextNode(q.choiceA)
        var nodeB= document.createElement("li")
        var textB= document.createTextNode(q.choiceB)
        var nodeC= document.createElement("li")
        var textC= document.createTextNode(q.choiceC)
        
        nodeA.appendChild(textA);
        nodeB.appendChild(textB);
        nodeC.appendChild(textC);
        
        questionChoices.appendChild(nodeA)
        ;
       
    }

};

const questionTime = 10;
var count = 0;


function counterRender(){
    if( count <= questionTime) {
        counter.innerHTML = count;
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
var score = 0;
function checkAnswer(answer){
    if (questions[runningQuestionIndex].correct == answer) {
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex) {
        count = 0;
        runningQuestionIndex++;
        questionRender();
    } else{
        clearInterval(TIMER);
        scoreRender();
    }
}


let timer;

function startQuiz(){
    counterRender();
    timer = setInterval(counterRender, 1000);
    renderQuestion();
}

function scoreRender(){
    let scorePercent = Math.round(100 * score / questions.length);
    scoreContainer.innerHTML = "<p>" + scorePercent + "%<p>";
            
}
