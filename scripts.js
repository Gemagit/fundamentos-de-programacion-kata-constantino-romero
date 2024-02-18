const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
<<<<<<< HEAD
    let newHTML = "";

    newHTML += imprimeTitulo(pregunta);
    newHTML += imprimeTodasLasRespuestas(pregunta);

    return newHTML;
}

function imprimeTitulo(pregunta) {
    return "<p>" + pregunta.titulo + "</p>";
}

function imprimeTodasLasRespuestas(pregunta) {
    let stringResultado = "";
    let arrRespuestas = pregunta.respuestas;
    for (let i = 0; i < arrRespuestas.length; i++) {
        stringResultado += imprimeUnaRespuesta(arrRespuestas[i]);
    }
    return stringResultado;
}

function imprimeUnaRespuesta(respuesta) {
    return  imprimeLabel(respuesta) + imprimeInput(respuesta);
}
 
function imprimeLabel(respuesta) {
    let label = `<label for="${respuesta.id}">${respuesta.label}</label>`;
    return label;
}

function imprimeInput(respuesta) {
    let input = `<input id="${respuesta.id}" name= "${respuesta.name}" type="radio" value="${respuesta.value}>`
    return input;
}


document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);
=======
  const newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  // Put your code here
}

function imprimeTodasLasRespuestas(pregunta) {
  // Put your code here
}

function imprimeUnaRespuesta(respuesta) {
  // Put your code here
}

function imprimeLabel(respuesta) {
  // Put your code here
}

function imprimeInput(respuesta) {
  // Put your code here
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);
>>>>>>> 471cdda0f7a7df271ab16e8bc020f2a76db4c37d
