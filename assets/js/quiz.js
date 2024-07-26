

const startbutton = document.getElementById('start-quiz-btn'); // start quiz button to trigger quiz
const quizWelcome = document.getElementById('quiz-welcome'); // initially displayed div in quiz section
const quiz = document.getElementsByClassName('quiz-questions-container'); // initially hidden div to contain quiz
const quizResult = document.getElementsByClassName('quiz-result-container'); // result div to display at the end of the quiz


//initialise questions array, index to track questions and answers array 

let currentQuestion = 0;
let userAnswers = [];
const bodytypeQuiz = [
    {
        question: "How would you describe your natural body shape?",
        choices: ["Naturally lean and have difficulty gaining weight.", 
            "Naturally muscular and gain muscle easily.",
             "Naturally soft and round, and gain weight easily."]
    },
    {
        question: "How does your body respond to weight training?",
        choices: [" I struggle to gain muscle mass.", 
            " I gain muscle mass quickly and easily.",
             "I gain some muscle but also tend to gain fat."]
    },
    {
        question: "What is your metabolism like?",
        choices: ["Very fast; I can eat a lot without gaining weight.",
             "Moderate; I can maintain my weight with a balanced diet.",
             "Slow; I gain weight easily and have to watch my diet closely."]
    },
    {
        question: "How would you describe your body fat distribution?",
        choices: ["Low body fat, with a tendency to look slim.",
             "Balanced body fat, with a muscular appearance.",
             "Higher body fat, with a tendency to store fat around the abdomen and thighs."]
    },
    {
        question: "What is your energy level like throughout the day?",
        choices: ["High energy levels and I stay active easily.",
             "Steady energy levels and I feel strong throughout the day.",
             " Variable energy levels and I often feel sluggish."]
    }
];

// add event listener to startQuiz button

startbutton.addEventListener("click", startQuiz);

function startQuiz() {
    quizWelcome.style.display = "none";
    quiz.style.display = "block";
}
