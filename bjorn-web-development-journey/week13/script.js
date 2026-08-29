const questions = [
    {
        question: "What does HTML mainly do?",
        answers: ["Styles a page", "Structures a page", "Stores a database"],
        correct: 1
    },
    {
        question: "What does CSS mainly control?",
        answers: ["Appearance", "Python code", "File names"],
        correct: 0
    },
    {
        question: "Which language can run in the browser?",
        answers: ["JavaScript", "Python only", "SQL"],
        correct: 0
    },
    {
        question: "Which keyword creates a function in JavaScript?",
        answers: ["repeat", "function", "style"],
        correct: 1
    },
    {
        question: "What can an if statement do?",
        answers: ["Make a decision", "Create an image", "Rename a file"],
        correct: 0
    }
];

let questionNumber = 0;
let score = 0;

function showQuestion() {
    const current = questions[questionNumber];

    document.getElementById("question").textContent = current.question;
    const answers = document.getElementById("answers");
    answers.innerHTML = "";

    current.answers.forEach(function (answer, index) {
        const button = document.createElement("button");
        button.textContent = answer;
        button.className = "answer";
        button.addEventListener("click", function () {
            chooseAnswer(index);
        });
        answers.appendChild(button);
    });
}

function chooseAnswer(index) {
    if (index === questions[questionNumber].correct) {
        score++;
    }

    questionNumber++;

    if (questionNumber < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    document.getElementById("questionBox").hidden = true;

    let message = "You scored " + score + " out of " + questions.length + ".";

    if (score >= 4) {
        message += " Great job!";
    } else {
        message += " Keep practising.";
    }

    document.getElementById("result").textContent = message;
    document.getElementById("restart").hidden = false;
}

document.getElementById("restart").addEventListener("click", function () {
    questionNumber = 0;
    score = 0;
    document.getElementById("questionBox").hidden = false;
    document.getElementById("result").textContent = "";
    document.getElementById("restart").hidden = true;
    showQuestion();
});

showQuestion();
