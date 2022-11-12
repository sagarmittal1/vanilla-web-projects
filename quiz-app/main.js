const quizData = [
  {
    question: 'Who is prime minister of India ?',
    a: 'Sagar Mittal',
    b: 'Narendra Modi',
    c: 'Amit Shah',
    d: 'Rahul Gandhi',
    correct: 'a',
  },
  {
    question: 'Who is president of India',
    a: 'Sagar Mittal',
    b: 'Narendra Modi',
    c: 'Amit Shah',
    d: 'Rahul Gandhi',
    correct: 'a',
  },
  {
    question: 'Who is chief of India',
    a: 'Sagar Mittal',
    b: 'Narendra Modi',
    c: 'Amit Shah',
    d: 'Rahul Gandhi',
    correct: 'a',
  },
  {
    question: 'Who is army of India',
    a: 'Sagar Mittal',
    b: 'Narendra Modi',
    c: 'Amit Shah',
    d: 'Rahul Gandhi',
    correct: 'a',
  },
];

const question = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.querySelector('.btn');

let currentNo = 0;

const loadQuiz = () => {
  const currentQuestion = quizData[currentNo];
  question.innerHTML = currentQuestion.question;
  a_text.innerHTML = currentQuestion.a;
  b_text.innerHTML = currentQuestion.b;
  c_text.innerHTML = currentQuestion.c;
  d_text.innerHTML = currentQuestion.d;
};

loadQuiz();

submitBtn.addEventListener('click', () => {
  currentNo++;
  loadQuiz();
});
