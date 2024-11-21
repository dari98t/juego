// Preguntas y respuestas para el juego
const questions = [
    { question: "¿Cuál es la capital de Barahona?", answer: "Santa Cruz" },
    { question: "¿Cuál es la capital de Azua?", answer: "Azua de Compostela" },
    { question: "¿Cuál es la capital de Santiago?", answer: "Santiago de los Caballeros" }
];

let currentQuestion = 0;

// Mostrar la pregunta actual
function loadQuestion() {
    const questionElement = document.querySelector('.question');
    questionElement.textContent = questions[currentQuestion].question;

    const resultElement = document.querySelector('.result');
    resultElement.textContent = '';
    document.querySelector('#answer').value = '';
}

// Verificar la respuesta ingresada
function checkAnswer() {
    const userAnswer = document.querySelector('#answer').value.trim();
    const resultElement = document.querySelector('.result');

    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        resultElement.textContent = 'Correcto.';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `Incorrecto. La respuesta correcta es ${questions[currentQuestion].answer}.`;
        resultElement.style.color = 'red';
    }
}

// Pasar a la siguiente pregunta
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        const questionElement = document.querySelector('.question');
        questionElement.textContent = '¡Has completado el juego!';
        document.querySelector('#answer').style.display = 'none';
        document.querySelector('.result').textContent = '';
        document.querySelector('button[onclick="checkAnswer()"]').style.display = 'none';
        document.querySelector('button[onclick="nextQuestion()"]').style.display = 'none';
    } else {
        loadQuestion();
    }
}

// Cargar la primera pregunta al iniciar
window.onload = loadQuestion;
