const quizData = [
  {
    question: 'How Old Is Mohamed?',
    a: '30',
    b: '35',
    c: '31',
    d: '34',
    correct: 'b'
  }, {
    question: 'what is the most used programing language in 2020?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'javaScript',
    correct: 'd'
  }, {
    question: 'Who is the president of Egypt?',
    a: 'Jamal Abdelnasser',
    b: 'Anwar Elsadat',
    c: 'El SISI',
    d: 'Mohamed Nagib',
    correct: 'c'
  }, {
    question: "what you work ?",
    a: 'IT',
    b: 'tetcher',
    c: 'driver',
    d: 'supervisor',
    correct: 'a'
  }
];

let questionEl = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let answerEl = document.querySelectorAll(".answer");
let submitBtn = document.getElementById("submit");
let quiz = document.getElementById("quizResult");
let currentQuiz = 0;
let score = 0;




loadQuiz();
function loadQuiz() {
  deSelectedAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}



function getSelected() {

  let answer = undefined;

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}


function deSelectedAnswer() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });

}

submitBtn.addEventListener('click', () => {
  //check to see the answer
  const answer = getSelected();

  // console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2 class="quizResult">
      Your answerd correctly at ${score}/${quizData.length} questions .
      </h2>
      <button class="btn btn-danger" onclick="location.reload()">Reload Quiz</button>`;
    }
  }

});

