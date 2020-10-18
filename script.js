var start = document.getElementById("start");
var quiz= document.getElementById("quiz-area");
var counter = document.getElementById("timer");
var score = document.getElementById("score");
var next = document.getElementById("next");
var submit = document.getElementById("score");
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var choiceA = document.getElementById("A");
var choiceA = document.getElementById("B");
var choiceA = document.getElementById("C");

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


function renderQuestion() {
    document.getElementById("start").disabled = true;
    var q = questions[quIndex];
    questionEl.textContent = (quIndex + 1) + '. ' + q.question;
    choiceA.textContent = q.option1;
    choiceB.textContent = q.option2;
    choiceC.textContent = q.option3;

};

funtion nextQuestion() {
    var userChoice = document.querySelector('input[type=radio]:checked');
    if(!userChoice){
        alert("Please select your answer.");
        return;
    }
    var answer = userChoice.value;
    if(questions[currentQuestion].answer === answer){
        score += 1;
    }
    userChoice.checked = false;
    currentQuestion++;
    if (currentQuestion == totquestions){
        startBtn.style.visibility='hidden';
        nextBtn.style.visibility='hidden';
        quizContainer.style.display="none";
        result.style.display="";
        result.textContent = score;
        return;
    }
    nextQuestion(currentQuestion);
}


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

// function scoreRender(){
//     let scorePercent = Math.round(100 * score / questions.length);
//     scoreContainer.innerHTML = "<p>" + scorePercent + "%<p>";
            
// }
