const questions = [
    {
      question: "This is question 1",
      options: {
        a: "This is option a from question 1",
        b: "This is option b from question 1",
        c: "This is option c from question 1",
        d: "This is option d from question 1",
      },
    },
    {
        question: "This is question 2",
        options: {
          a: "This is option a from question 2",
          b: "This is option b from question 2",
          c: "This is option c from question 2",
          d: "This is option d from question 2",
        },
      },
      {
        question: "This is question 3",
        options: {
          a: "This is option a from question 3",
          b: "This is option b from question 3",
          c: "This is option c from question 3",
          d: "This is option d from question 3",
        }
      },
      {
        question: "This is question 4",
        options: {
          a: "This is option a from question 4",
          b: "This is option b from question 4",
          c: "This is option c from question 4",
          d: "This is option d from question 4",
        },
      },
      {
        question: "This is question 5",
        options: {
          a: "This is option a from question 5",
          b: "This is option b from question 5",
          c: "This is option c from question 5",
          d: "This is option d from question 5",
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