function calcularResultado() {
    // Obtener respuestas del formulario
    const respuestas = {
        q1: getRadioValue("q1"),
        // Repite para las demás preguntas
    };

    // Calcular resultado
    const resultado = calcularResultadoFinal(respuestas);

    // Mostrar resultado en la página
    mostrarResultado(resultado);
}

function getRadioValue(name) {
    const radios = document.getElementsByName(name);
    for (const radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

function calcularResultadoFinal(respuestas) {
    // Implementa tu lógica para calcular el resultado basado en las respuestas
    // Aquí hay un ejemplo simple basado en la mayoría de respuestas
    const conteo = { a: 0, b: 0, c: 0, d: 0 };

    for (const pregunta in respuestas) {
        const opcionElegida = respuestas[pregunta];
        conteo[opcionElegida]++;
    }

    const resultado = Object.keys(conteo).reduce((a, b) => conteo[a] > conteo[b] ? a : b);

    return resultado;
}

function mostrarResultado(resultado) {
    const resultadoText = document.getElementById("resultadoText");
    resultadoText.textContent = `Tu resultado es: ${resultado.toUpperCase()}`;

    // Mostrar el resultado en la página
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.classList.remove("hidden");
}
