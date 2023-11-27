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
      a: "Fracturas y dificultades articulares. Atañe al sistema óseo. Enfriamientos.",
      b: "Atañe al vientre e intestinos. Enfermedades digestivas, apendicitis.",
      c: "Falla en el sistema motor o reflejos. Atañe a la garganta, enfermedades de nervios, uremia.",
      d: "Hipertensión. Atañe a los muslos, la cadera, sistema muscular-arterial. Enfermedades: perturbaciones sanguíneas, respiratorias como el asma.",
      e: "Afecciones cardíacas, circulatorias o intestinales. Atañe al corazón y circulación sanguínea.",
      f: "Atañe a cabeza y/o rostro. Posibles enfermedades hepáticas y renales o derrames cerebrales.",
      g: "Atañe a pies y sistema linfático. Enfermedades de piel, ganglios, afecciones purulentas y mentales. Infecciones, intoxicaciones",
      h: "Atañe a la zona pubiana. Enfermedades: intoxicación sanguínea, próstata, inflamaciones.",
      i: "Atañe al estómago y pulmones. Enfermedades del sistema linfático, dispepsia, gastritis, afecciones pulmonares, hipotensión",
      j: "Atañe a tobillos y tendones. Enfermedades nerviosas y artritis.",
      k: "Atañe a baja espalda y riñones-suprarrenales: lumbago, de la piel, tos, vientre delicado.",
      l: "Atañe a la espalda, brazos y hombros. Enfermedades de inflamación respiratoria y musculares.",
    },
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
    },
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
    },
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
    question: "Otras caracteristicas",
    options: {
      a: "Seco-frío, nocturno, móvil, fijo",
      b: "Cálido-seco, ígneo, diurno, fijo",
      c: "Seco-frío, terrero, fijo",
      d: "Cálido, húmedo, ígneo, doble, locuaz",
      e: "Caliente-seco, ígneo, fijo, suave",
      f: "Seco-caliente, violento, ígneo, móvil",
      g: "húmedo-frío, fecundo, nocturno, raro",
      h: "Frío-húmedo, acuoso, violento, fijo, silencioso",
      i: "Frío-húmedo, móvil, tortuoso",
      j: "Húmedo-cálido, locuaz, fijo, aéreo",
      k: "Húmedo-cálido, móvil, aéreo, locuaz",
      l: "Húmedo-cálido, aéreo, doble, diurno",
    },
  },
  {
    question: "Aspecto negativo",
    options: {
      a: "desconfiados, artilugios engañosos, mentirosos, fantasiosos, mezquinos, murmuradores, vagos, rencorosos. Sentimientos complejos",
      b: "detallistas, sectarios, compasivos, “hablan de ellos”, obstinados, considerados, muy nerviosos, entrometidos y “encerrados”. Curiosidad",
      c: "sensualizado, cerrado, incomunicativo, crítica negativa, desconfiado, tegiversado. Planificador insistente",
      d: "cambiante, arrogante, falsos, irreflexivos, “lengua de víbora”, inconstantes, altibajos marcados, se ofende, ingratitud",
      e: "erotismo torcido, arrogantes, intolerancia, orgullo desmedido, despótico",
      f: "Envidia, irritables, cruel, infiel, brusco, indiscreto, cobardía, temeroso",
      g: "débil, indeciso, timorato, pasivo, serviciales, quisquillosos, reservado, negligente e indolente. Voluble y versátil",
      h: "rencor, enemistades, agresivo, impío, rudos, dobleces, irritables",
      i: "hiriente, acomplejado, duro, ansioso, tímido, exquisito, sensualidad alterada, incomprendido",
      j: "superstición, maquinaciones, subterfugios, egoísmos, fastidiosos, cortedad intelectual",
      k: "ambivalencias afectivas, inestabilidad, inseguridad, pedantería, caprichosos, frívolos, nada profundos, melosos y amanerados",
      l: "perplejos, huidizos, discordias, falta de concentración, inconstancia, superficiales, desconfiados, vanos, olvidadizos, pretenciosos y arrogantes",
    },
  },
  {
    question: "Clave",
    options: {
      a: "conocimiento, sacrificio | irritabilidad, traición",
      b: "permanencia, minucioso | lentitud, reserva",
      c: "comunicación, paciencia, obstinación | grosero, posesivo",
      d: "Organización, original. | desorden",
      e: "justicia, nobleza | vanidad, egocéntrico",
      f: "valentía, tenaz | temor",
      g: "apoyo, abnegación | negligencia, indecisión, temeroso",
      h: "laboriosidad, puede influir, temerario | crueldad, falso, enemigo",
      i: "sentimientos buenos, receptibilidad, autonomía | oposición mecánica",
      j: "reconocimiento, renovación, cerebral | ambición",
      k: "conciliación, integración | avidez, irritabilidad",
      l: "tenacidad, proyectos, osadía | autopostergación",
    },
  },
  /*
  {
    question: "Otras caracteristicas",
    options: {
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
      g: "",
      h: "",
      i: "",
      j: "",
      k: "",
      l: "",
    },
  },*/
];

const result = {
  a: "Imaginativo | Im. Representa la concentración, el desprendimiento. Enigmáticos, ensimismados, tranquilos, disciplinados, reflexivos, imaginativos, puntuales, discretos, solitarios. Persuasivos. Trabajadores y estudiosos voluntariosos.",
  b: "Curioso | Ie. Representa la recolección, la vuelta a… por esto es precavido, cauteloso, reúne datos y analiza. Ordenados, meticuloso y exactos. Colectan con afán. Curiosos, interesados por todo. Profundidad. Sociables, hábiles, elocuentes, actúan con calidad. Lógicos, intuitivos, aplicados. Les preocupa la salud.",
  c: "Planificador | Ii. Representa el embestir. Calmados, ponderados, cautos, independientes, ensimismados (no admite consejos), serio, paciente, tiernos, amables. Reflexivo y crítico. Son obstinados y prudentes.",
  d: "Pasional | Em. Representa la originalidad, el imulso, la elevación y la caída. Impulsivos, propulsores, grandes pasiones (místicas, carnales o metafísicas), franco y generoso, solitario, sensato, viajantes. Profundo e insatisfecho (florece y marchita).",
  e: "Susceptible | Ee. Representa a lo decisivo la determinación de dar. Magnánimo, generoso, amplísimo, fuerte, sincero. Dignidad, tolerancia, simpatía, voluntad. Dinámico, vibrante. Amantes de la justicia.",
  f: "Intuitivo | Ei. Representa lo que comienza (jefe, pionero, guía), lo que brota, lo que se inicia. Intrépido, vivaces con sentido del humor, agradables, optimistas. Entusiastas, infatigables, audaz, energético, inspiran confianza. Tenacidad. Virilidad, sentimiento ardoroso.",
  g: "Instintivo | Sm. Representa lo difícil, las extrañas cosas, místico y sacrificios. Austero, paciente, internamente agitado, imaginación fuerte, sensitivos, devotos, emocionables, idealistas, comprensivos, amistosos, respetuosos, asimilación y memoria destacada, investigación, abnegados, tareas duraderas. Sentimientos especiales.",
  h: "Ávido | Se. Representa la calma del mar y sus honduras movidas. Potencia psicológica, esfuerzos notables, cáusticos, irónicos. Se imponen más que se adaptan. Bravura, osadía, instinto enérgico, tenaz, fecundo, sincero, intrépido. Trabajador, nobleza, simpático.",
  i: "Corporal | Si. Representa al inicio, la fertilidad, la coraza y el caminar para atrás. Tras la coraza escode la vulnerabilidad. Inquietos, tozudos, prestigiosos, con “ideas contrarias al resto”, les preocupa lo material, lo mundano y lo metafísico. Muy generosos, prácticos, sensuales e instintivos. Memoria. Conservadores, de moralidad y mente complejas.",
  j: "Habitual | Mm. Representa la afinidad, los amigos, las relaciones, voluntariosos, independientes, dinámicos, eficaces, con inventiva y originalidad, curiosidad científica. Persuasivos, amistosos, buscan la verdad. Solitario y reservado. No se somete a la voluntad de otros, anárquicos. Son espiritualistas y místicos.",
  k: "Esteticista | Me. Representa la necesidad de equilibrio y armonía. Como a todos los motrices les preocupa el complemento. Esteticismo, belleza, buen gusto. Agradables, benévolos, corteses, animosos, aprecian, valoran e intuyen lo mejor, amistosos y querendones. Mantienen el sentimiento ideal de la pareja ideal. Generadores, entusiastas, propulsores emotivos. Especialización en relaciones humanas. Reconciliadores",
  l: "Proyectista – Mi. Representa la transición, la dualidad, la indecisión, la separación. Difunde, transmite, une y huye. Movimiento, ligero, ágil, razonador, difuso y concreto, inasible. Curiosos, observadores, diligentes, tenaces, interesados, creativos e ingeniosos, les falta profundidad pero tienen tacto, sutileza, entusiasmo y fluidez.",
};

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const points = document.getElementById("points");

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
    const selectedAnswers = document.querySelectorAll(
      `input[name="q${index}"]:checked`
    );
    selectedAnswers.forEach((selectedAnswer) => {
      const questionKey = selectedAnswer.value;
      answers[questionKey] = (answers[questionKey] || 0) + 1;
    });
  });

  const maxAnswerCount = Math.max(...Object.values(answers));
  const maxAnswers = Object.keys(answers).filter(
    (key) => answers[key] === maxAnswerCount
  );

  if (maxAnswers.length === 1) {
    // No tie, display the result for the single winner
    resultContainer.textContent = result[maxAnswers[0]];
  } else {
    // Tie, display all tied results
    const tiedResults = maxAnswers.map((answer) => `<p>${result[answer]}</p>`);
    resultContainer.innerHTML = `Empate: ${tiedResults.join(
      ""
    )}`;
  }
  console.log(answers);
  points.innerHTML += `<p>${JSON.stringify(answers)}</p>`;
}

// Event listener for the submit button
submitBtn.addEventListener("click", () => {
  calculateResult();
});

// Event listener for the restart button
restartBtn.addEventListener("click", () => {
  location.reload();
});

// Call the function to render questions
renderQuestions();
