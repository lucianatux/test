const questions = [
    {
      question: "Tipo de cuerpo",
      options: {
        a: "Formas blandas, rostro triangular, torso ovalado",
        b: "Formas redondas, rostro cuadrado, torso cuadrado",
        c: "Formas redondas, rostro y torso redondo",
        d: "Formas rectas, rostro triangulo invertido, torso rectangular",
      },
    },
    {
        question: "Tono de piel",
        options: {
          a: "Blancuzco",
          b: "Rosado",
          c: "Rosado claro",
          d: "Oscuro",
        },
      },
      {
        question: "Tipo de andar",
        options: {
          a: "Lento y corto",
          b: "Veloz y amplio",
          c: "Lento y amplio",
          d: "Veloz y corto",
        }
      },
      {
        question: "Tipo de gestos",
        options: {
          a: "Lentos y tranquilos",
          b: "Veloces y abruptos",
          c: "Armónicos",
          d: "Veloces y pegados",
        },
      },
      {
        question: "Forma de vestir",
        options: {
          a: "Cuidadosa",
          b: "Variable",
          c: "Vistosa",
          d: "Seria",
        },
      },
      {
        question: "Tipo de letra",
        options: {
          a: "Lenta, redondeada, pequeña, lineal, vertical",
          b: "Veloz, angulosa, ascendente, vertical",
          c: "Lenta, redondeada, grande, ondulante, destrogira",
          d: "Veloz, angulosa, pequeña, decaída, replegada",
        },
      },
      {
        question: "Tipo de reacciones",
        options: {
          a: "Muy lenta para actuar, rápida para pensar y sentir",
          b: "Lenta para pensar, muy rápida para actuar",
          c: "Ni muy lenta ni muy rápida en general",
          d: "Muy lenta para actuar, lenta para sentir, rápida para pensar",
        },
      },
      {
        question: "This is question 6",
        options: {
          a: "This is option a from question 6",
          b: "This is option b from question 6",
          c: "This is option c from question 6",
          d: "This is option d from question 6",
        },
      },
      {
        question: "This is question 6",
        options: {
          a: "This is option a from question 6",
          b: "This is option b from question 6",
          c: "This is option c from question 6",
          d: "This is option d from question 6",
        },
      },
  ];
  
  const result = {
    a: "This is result with most answers type a",
    b: "This is result with most answers type b",
    c: "This is result with most answers type c",
    d: "This is result with most answers type d",
  };
  
  const quizContainer = document.getElementById('quiz-container');
  const resultContainer = document.getElementById('result-container');
  const submitBtn = document.getElementById('submit-btn');

// Function to render questions in the HTML
function renderQuestions() {
  questions.forEach((q, index) => {
    const questionHTML = `
      <div class="question">
        <p>${q.question}</p>
        ${renderOptions(q.options, index)}
        <br/>
        <hr>
      </div>
    `;
    quizContainer.innerHTML += questionHTML;
  });
}

// Function to render options for a question
function renderOptions(options, questionIndex) {
  let optionsHTML = "";
  for (const [key, value] of Object.entries(options)) {
    optionsHTML += `<label><input type="radio" name="q${questionIndex}" value="${key}">${value}</label><br>`;
  }
  return optionsHTML;
}

// Function to calculate and display the result
function calculateResult() {
  const answers = {};

  questions.forEach((q, index) => {
    const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
    if (selectedAnswer) {
      const questionKey = selectedAnswer.value;
      answers[questionKey] = (answers[questionKey] || 0) + 1;
    }
  });

  const maxAnswerCount = Math.max(...Object.values(answers));
  const maxAnswers = Object.keys(answers).filter(key => answers[key] === maxAnswerCount);

  if (maxAnswers.length === 1) {
    // No tie, display the result for the single winner
    resultContainer.textContent = result[maxAnswers[0]];
  } else {
    // Tie, display all tied results
    const tiedResults = maxAnswers.map(answer => `<p>${result[answer]}</p>`);
    resultContainer.innerHTML = `Tie! Results for tied options: ${tiedResults.join('')}`;
  
  }
}

// Event listener for the submit button
submitBtn.addEventListener('click', () => {
  calculateResult();
});

// Call the function to render questions
renderQuestions();