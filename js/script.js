let opciones = ["piedra", "papel", "tijera"]; 
let puntosUsuario=0;
let puntosOrdenador=0;

const botones = document.querySelectorAll(".boton-jugada");
const resultados = document.getElementById("resultados")
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById ("contador-ordenador");


//Jugada aleatoria del ordenador

function jugadaOrdenador() {
const opcionAleatoria = Math.floor(Math.random() *3);
return opciones[opcionAleatoria];
}
//Resultado del juego

function obtenerResultado(jugadaUsuario, jugadaOrdenador) {
    if (jugadaUsuario === jugadaOrdenador) {
      return "Empate";
    } else if (
      (jugadaUsuario === "piedra" && jugadaOrdenador === "tijera") ||
      (jugadaUsuario === "papel" && jugadaOrdenador === "piedra") ||
      (jugadaUsuario === "tijera" && jugadaOrdenador === "papel")
    ) {
      return "Ganaste";
    } else {
      return "Perdiste";
    }
  }

  function mostrarResultado (resultado, jugadaUsuario, jugadaOrdenador) {
    resultados.textContent = "Has elegido " + jugadaUsuario + " y el ordenador ha sacado " + jugadaOrdenador + ". El resultado es " + resultado

  }
//Ir sumando puntos segun el resultado
  function actualizarPuntuacion(resultado) {
    if (resultado === "Ganaste") {
      puntosUsuario++;
    } else if (resultado === "Perdiste") {
      puntosOrdenador++;
    }
    contadorUsuario.textContent = puntosUsuario;
    contadorOrdenador.textContent = puntosOrdenador;
  }

  botones.forEach((boton) =>  {
    boton.addEventListener("click", () =>  {
      const jugadaUsuario = boton.dataset.jugada;
      const jugadaOrd = jugadaOrdenador();
      const resultado = obtenerResultado(jugadaUsuario, jugadaOrd);
  
      mostrarResultado(resultado, jugadaUsuario, jugadaOrd);
      actualizarPuntuacion(resultado);
    });
  });

