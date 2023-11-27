const questions = [
    {
      question: "Tipo de cuerpo",
      options: {
        a: "Delgado y anguloso",
        b: "Delgado y anguloso",
        c: "Formas rectas, ojos hundidos",
        d: "Grueso",
        e: "Redondeado, ojos grandes",
        f: "Blando",
        g: "Quebrado",
        h: "Blando, redondeado",
        i: "Blando alargado",
        j: "Anguloso, nariz corta",
        k: "Musculoso, nariz corta",
        l: "Anguloso recto, nariz corta",
      },
    },
    {
      question: "Tendencia a tipo de enfermedades",
      options: {
        a: "fracturas y dificultades articulares",
        b: "fracturas y dificultades en los miembros",
        c: "falla en el sistema motor o reflejos",
        d: "hipertensión",
        e: "afecciones cardíacas o circulatorias",
        f: "derrames cerebrales",
        g: "infecciones, intoxicaciones",
        h: "secuelas urinarias, infecciones",
        i: "infecciones, afecciones pulmonares, hipotensión",
        j: "traumas musculares",
        k: "traumas musculares",
        l: "traumas musculares",
      }
    },
    {
      question: "Tono de piel",
      options: {
        a: "Pálido oscuro",
        b: "Pálido oscuro",
        c: "Oscuro",
        d: "Rosado",
        e: "Rosa claro",
        f: "Amarillento pálido",
        g: "Pálido claro",
        h: "Pálido",
        i: "Blanco rosado",
        j: "Rosa claro",
        k: "Rosado",
        l: "Rosado",
      }
    },
      {
        question: "Tipo de andar",
        options: {
          a: "Veloz",
          b: "Lento y mal afirmado",
          c: "Veloz y corto",
          d: "Amplio",
          e: "Lento y amplio",
          f: "Desequilibrado",
          g: "Lento y amplio",
          h: "Lento e inestable",
          i: "Desequilibrado",
          j: "Veloz y amplio",
          k: "Amplio",
          l: "Veloz",
        }
      },
      {
        question: "Tipo de gestos",
        options: {
          a: "Veloces y contradictorios",
          b: "Lentos",
          c: "Veloces plegados",
          d: "Ampuloso",
          e: "Armonioso",
          f: "Desconectados",
          g: "Lentos, tranquilos, desequilibrados",
          h: "Equilibrados",
          i: "Inarmónicos, plegados",
          j: "Veloces, violentos",
          k: "Inhibidos",
          l: "Veloces",
        },
      },
      {
        question: "Forma de vestir",
        options: {
          a: "Seria y variable",
          b: "Cuidadosa",
          c: "Seria",
          d: "Vistosa y variable",
          e: "Vistosa",
          f: "Vistosa",
          g: "Cuidadosa",
          h: "Cuidadosa y vistosa",
          i: "Cuidadosa y seria",
          j: "Variable",
          k: "Vistosa y variable",
          l: "Variable y seria",
        },
      },
      {
        question: "Tipo de letra",
        options: {
          a: "Veloz y angulosa",
          b: "Variable y ondulante",
          c: "Veloz, angulosa, pequeña, decaída",
          d: "Grande y afectada",
          e: "Redondeada, grande, ondulante, dextrogira",
          f: "Variable, decaída, grande",
          g: "Lenta, redondeada, lineal, vertical",
          h: "Lenta, redondeada, lineal, vertical",
          i: "Pequeña, desarreglada",
          j: "Veloz, angulosa, grande, ascendente, vertical",
          k: "Grande",
          l: "Angulosa, veloz y pequeña",
        },
      },
      {
        question: "Tipo de reacciones",
        options: {
          a: "Lenta para actuar, rápida para pensar",
          b: "Lenta para actuar, rápida para pensar",
          c: "Lenta para actuar y sentir, reflejos lentos, rápida para pensar",
          d: "Rápida para sentir, reflejos rápidos",
          e: "Lenta para actuar, reflejos rápidos, rápida para sentir y pensar",
          f: "Lenta para actuar, rápida para pensar",
          g: "Lenta para pensar, reflejos rápidos",
          h: "Lenta para sentir, reflejos lentos, rápida para actuar",
          i: "Lenta para sentir",
          j: "Lenta para pensar, reflejos rápidos, rápida para sentir y actuar",
          k: "Rápida para sentir",
          l: "Neutra",
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
    optionsHTML += `<label><input type="checkbox" name="q${questionIndex}" value="${key}">${value}</label><br>`;
  }
  return optionsHTML;
}

// Function to calculate and display the result
function calculateResult() {
  const answers = {};

  questions.forEach((q, index) => {
    const selectedAnswers = document.querySelectorAll(`input[name="q${index}"]:checked`);
    selectedAnswers.forEach(selectedAnswer => {
      const questionKey = selectedAnswer.value;
      answers[questionKey] = (answers[questionKey] || 0) + 1;
    });
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