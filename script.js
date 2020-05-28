// Press Start to start Quix
// show my first question
// display the question wit hthe question # 
// Display choices
// Allow the user to select from one of the choices
// Provide a correct answer
// Determine if the choice is equal to the selected answer

// Element Variable
var startBtn = document.querySelector("#start-btn");
var playAgainBtn = document.querySelector("#play-btn");
var highScoreBtn = document.querySelector("#highscore-btn");
var landingEl = document.querySelector("#landing");
var endingEl = document.querySelector("#ending");
var questionEl = document.querySelector("#questions");
var questionTextEl = document.querySelector("#q-text");
var choicesEl = document.querySelector("#choices");
var timerEl = document.querySelector("#timer");

// Question Bank
var questions = 
[
    {
        text: "Commonly used data types DO NOT include",
        choices: [
            "Boolean",
            "Alerts",
            "Strings",
            "Numbers",
        ],
        correctAnswer: 1
    },
    {
        text: "The condition in an if / else statement is enclosed within ______. ",
        choices: [
        "Square Brackets",
        "Curly Brackets",
        "Quotes",
        "Paranthesis",
        ],
        correctAnswer: 3
    },
    {
        text: "Arrays in JavaScript can be used to store _______. ",
        choices: [
            "Numbers and Strings",
            "Booleans",
            "Other arrays",
            "All of the above",
        ],
        correctAnswer: 3
    },
    {
        text: "String values must be enclosed within ______ when being assigned to variables. ",
        choices: [
            "Commas",
            "Quotes",
            "Paranthesis",
            "Curly Brackets",
        ],
        correctAnswer: 1
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "JavaScript",
            "Terminal / Bash",
            "Console Log",
            "For loops",
        ],
        correctAnswer: 2
    },
];

var cursor = 0;
var score = 0;
var timeRemaining = 10;
var interval;

choicesEl.addEventListener("click", function(event) {
    var element = event.target;
    var question = questions[cursor];
    if (element.className === "item") {
        console.log("Make sure this is item");
        var id = parseInt(element.getAttribute("data-id"));  
        if (question.correctAnswer === id) {
            console.log("Correct");
            score++;
        } else {
            console.log("Wrong");
            timerEl.textContent = timeRemaining - 3;
        }
        cursor++;
        console.log("Score: ", score);
        renderQuestionData();

    }
});

function renderQuestionData() {
    var question = questions[cursor];
    choicesEl.innerHTML = "";   
    questionTextEl.textContent = question.text;
    
    question.choices.forEach(function(choice, index) {
        var choiceItem = document.createElement("div");
        choiceItem.setAttribute("class", "item");
        choiceItem.setAttribute("data-id", index);
        choiceItem.textContent = choice;
        choicesEl.appendChild(choiceItem);
    });
}

function initializeTimer() {
    timeRemaining = parseInt(timerEl.getAttribute("data-time"));
    interval = setInterval(function () {
        timeRemaining--;
        if (timeRemaining > 0) {
            timerEl.textContent = timeRemaining;
        } else {
            console.log("Game Over");
            landingEl.style.display = "none";
            questionEl.style.display = "none";
            endingEl.style.display = "flex";
            clearInterval(interval);
        }
    }, 1000);
};


startBtn.addEventListener("click", function (event) {
    landingEl.style.display = "none";
    questionEl.style.display = "flex"; 
    renderQuestionData();
    initializeTimer();
});

playAgainBtn.addEventListener("click", function(event) {
    landingEl.style.display = "flex";
    endingEl.style.display = "none";
    clearInterval(interval);
});