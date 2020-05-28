// Press Start to start Quix
// show my first question
// display the question wit hthe question # 
// Display choices
// Allow the user to select from one of the choices
// Provide a correct answer
// Determine if the choice is equal to the selected answer

// Element Variable
var startBtn = document.querySelector("#startBtn");
var landingEl = document.querySelector("#landing");
var questionEl = document.querySelector("#questions");
var questionTextEl = document.querySelector("#q-text");
var choicesEl = document.querySelector("#choices");


// Question Bank
var questionBank = [
    {
        question: "Commonly used data types DO NOT include",
        choices : [
            "Boolean",
            "Alerts",
            "Strings",
            "Numbers",
        ],
        correctAnswer: 1
    },
    {
        question: "The condition in an if / else statement is enclosed within ______. ",
        choices : [
            "Square Brackets",
            "Curly Brackets",
            "Quotes",
            "Paranthesis",
        ],
        correctAnswer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store _______. ",
        choices: [
            "Numbers and Strings",
            "Booleans",
            "Other arrays",
            "All of the above",
        ],
        correctAnswer: 3
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables. ",
        qnswers: [
            "Commas",
            "Quotes",
            "Paranthesis",
            "Curly Brackets",
        ],
        correctAnswer: 1
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "JavaScript",
            "Terminal / Bash",
            "Console Log",
            "For loops",
        ],
        correctAnswer: "c"
    },
];

var cursor = 0;
var score = 0;
var timeLeft = 75;
var interval = 0;

choicesEl.addEventListener("click", function(event) {
    var element = event.target;
    if (element.getAttribute("class") === "item") {
    var id = parseInt(element.getAttribute("data-id"));    
    if (question.correctAnswer === id) {
        console.log("CORRECT ANSWER");
        score++;
    } else {
        console.log("WRONG ANSWER");
    }
    cursor++;
    renderQuestionData();
    }
});

startBtn.addEventListener("click", function(event) {
    landingEl.style.display = "none";
    questionEl.style.display = "flex";
    questionTextEl.textContent = "1. " + question.text;
    question.choices.forEach(function(choice, index) {
        var choiceItem = document.createElement("div");
        choiceItem.setAttribute("class", "item");
        choiceItem.setAttribute("data-id", index);
        choiceItem.textContent
    });
});
    



// var currentQuestion = 0;
// var viewAns = 0;
// var correctAnswers = 0;
// var quizOver = false;
// var userSelectedAnswer = [];
// var c = 180;
// var t;

