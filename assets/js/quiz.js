

const startbutton = document.getElementById('start-quiz-btn'); // start quiz button to trigger quiz
const quizWelcome = document.getElementById('quiz-welcome'); // initially displayed div in quiz section
const quiz = document.querySelector('.quiz-questions-container'); // initially hidden div to contain quiz
const quizResult = document.querySelector('.quiz-result-container'); // result div to display at the end of the quiz


//initialise questions array, index to track questions and answers array 

let currentQuestionIndex = 0;
let userAnswers = [];
const bodytypeQuiz = [
    {
        question: "How would you describe your natural body shape?",
        choices: { A: "Naturally lean and have difficulty gaining weight.", 
            B: "Naturally muscular and gain muscle easily.",
            C: "Naturally soft and round, and gain weight easily."}
    },
    {
        question: "How does your body respond to weight training?",
        choices: { A: " I struggle to gain muscle mass.", 
            B: " I gain muscle mass quickly and easily.",
            C: "I gain some muscle but also tend to gain fat."}
    },
    {
        question: "What is your metabolism like?",
        choices: { A: "Very fast; I can eat a lot without gaining weight.",
            B: "Moderate; I can maintain my weight with a balanced diet.",
            C: "Slow; I gain weight easily and have to watch my diet closely."}
    },
    {
        question: "How would you describe your body fat distribution?",
        choices: {A: "Low body fat, with a tendency to look slim.",
            B: "Balanced body fat, with a muscular appearance.",
            C: "Higher body fat, with a tendency to store fat around the abdomen and thighs."}
    },
    {
        question: "What is your energy level like throughout the day?",
        choices: {A: "High energy levels and I stay active easily.",
            B: "Steady energy levels and I feel strong throughout the day.",
            C: " Variable energy levels and I often feel sluggish."}
    }
];

// add event listener to startQuiz button

startbutton.addEventListener("click", startQuiz);

// create all functions needed to implement full functionality

function startQuiz() {
    quizWelcome.style.display = "none";
    quiz.style.display = "block";
    displayQuestion(0);
}

function displayQuestion(index) {
    const currentQuestion = bodytypeQuiz[index];
    quiz.innerHTML = 
    `<div class="question">${currentQuestion.question}</div>
    <div class="choices">
        <button class="choice-btn" data-choice="A"> ${currentQuestion.choices.A}</button>
        <button class="choice-btn" data-choice="B"> ${currentQuestion.choices.B}</button>
        <button class="choice-btn" data-choice="C"> ${currentQuestion.choices.C}</button>
    </div>
    <div class="navigation">
        <button class="nav-btn hidden" id="prev-btn">Prev</button>
        <button class="nav-btn" id="next-btn">Next</button>
    </div>`
    /*
    `
    <div class="question">${currentQuestion.question}</div>

    <div class="choices">
        ${currentQuestion.choices.map((choice, i) => `
            <button class="choice-btn" data-choice-index="${i}">${choice}</button>
        `).join('')}
    </div>
    `
    */

    // add event listeners and functionality to navigation buttons
    questionNav();
   
    // event listeners to get userAnswer array populated with user selection.
    handleAnswers();
}


function questionNav() {
    const next = document.getElementById('next-btn');
    const prev = document.getElementById('prev-btn');
    const nav = document.querySelector('.nav-btn');

    //remove prev button when not needed
    if (currentQuestionIndex > 0) {
        nav.classList.remove('hidden');
    };

    //remove next button when not needed
    if (currentQuestionIndex === bodytypeQuiz.length -1) {
        next.classList.add('hidden');
    }

    //add submit button at the end of quiz
    if (currentQuestionIndex === bodytypeQuiz.length -1) {
        const navDiv = document.querySelector('.navigation');
        const submitButton = document.createElement('button');
        submitButton.textContent = 'SUBMIT';
        submitButton.id = 'submit-btn';
        navDiv.appendChild(submitButton);
    }

    // event listeners fpr prev/next clicks and update currentQuestionIndex variable.
    next.addEventListener("click", function() {
        if (currentQuestionIndex < bodytypeQuiz.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        }
    });

    prev.addEventListener("click", function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex);
        }
    });
}

function handleAnswers() {
    // this code snippet was created with perplexity ai and it add event listeners to the choice-btns
    document.querySelectorAll('.choice-btn').forEach(button => {
        button.addEventListener('click', function() {
            userAnswers[currentQuestionIndex] = this.getAttribute('data-choice');
            highlightSelectedChoice(this);
        });
    });
}


// this function captures the choice for each question and higlights it.
function highlightSelectedChoice(selectedButton) {
    // Remove highlight from all buttons
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    // Add highlight to selected button
    selectedButton.classList.add('selected');
}

function submitQuiz() {

}