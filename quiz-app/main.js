const quizData = [
  {
    question: 'Windows is a ...?',
    a: 'Browser',
    b: 'Operating System',
    c: 'Software',
    d: 'Antivirus',
    correct: 'b',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'Who is the CEO of Google (in 2022)?',
    a: 'Sagar Mittal',
    b: 'Sergey Brin',
    c: 'Sundar Pichai',
    d: 'Steve Wozniak',
    correct: 'c',
  },
  {
    question: 'What is the parent company of Google',
    a: 'Alphabet',
    b: 'Apple',
    c: 'BackRub',
    d: 'Goooogle',
    correct: 'a',
  },
];

const quiz = document.querySelector('.quiz-container');
const question = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.querySelector('.btn');

let currentNo = 0,
  score = 0;

const loadQuiz = () => {
  resetBoxes();

  const currentQuestion = quizData[currentNo];
  question.innerHTML = currentQuestion.question;
  a_text.innerHTML = currentQuestion.a;
  b_text.innerHTML = currentQuestion.b;
  c_text.innerHTML = currentQuestion.c;
  d_text.innerHTML = currentQuestion.d;
};

loadQuiz();

const loadAnswers = () => {
  const answers = document.querySelectorAll('[name="answer"]');
  let userAnswer;

  answers.forEach((answer) => {
    if (answer.checked) {
      userAnswer = answer.id;
    }
  });

  return userAnswer;
};

function resetBoxes() {
  const answers = document.querySelectorAll('[name="answer"]');
  answers.forEach((answer) => {
    answer.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const userAnswer = loadAnswers();
  // console.log(userAnswer);

  if (userAnswer) {
    if (userAnswer === quizData[currentNo].correct) score++;
    // console.log(score);

    currentNo++;

    if (currentNo < quizData.length) {
      loadQuiz();
    } else {
      quiz.classList.add('result');
      quiz.innerHTML = `
        <h2>You answerd correcty ${score} out of ${quizData.length} questions</h2>
        <button onClick="location.reload()" class="btn">Reload</button>
      `;
    }
  }
});
