console.log("Guía JavaScript iniciada");

// Ejercicio 1: Crear datos de un jugador
{
  const nombre = "Luna";
  let edad = 18;
  let vida = 100;
  let puntaje = 0;
  let estaActivo = true;

  console.log(nombre, edad, vida, puntaje, estaActivo);
}

// Ejercicio 2: Calcular puntaje final
{
  let puntosBase = 100;
  let bonus = 50;
  let penalizacion = 20;

  let puntajeFinal = puntosBase + bonus - penalizacion;
  console.log("Puntaje final: " + puntajeFinal);
}

// Ejercicio 3: Convertir texto a número
{
  const input = document.getElementById("dato");
  const boton = document.getElementById("btn");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", function () {
    const valor = input.value;
    const numero = Number(valor);
    mensaje.textContent = numero + 10;
  });
}

// Ejercicio 4: Validar edad mínima
{
  let edad = 15;

  if (edad >= 13) {
    console.log("Puede jugar");
  } else {
    console.log("No puede jugar todavía");
  }
}

// Ejercicio 5: Estado del jugador según vida
{
  let vida = 50;

  if (vida > 70) {
    console.log("Jugador en buen estado");
  } else if (vida >= 30) {
    console.log("Jugador herido");
  } else if (vida >= 1) {
    console.log("Jugador en peligro");
  } else if (vida === 0) {
    console.log("Game Over");
  } else {
    console.log("Vida inválida");
  }
}

// Ejercicio 6: Menú de opciones
{
  let opcion = "iniciar";

  switch (opcion) {
    case "iniciar":
      console.log("Iniciando partida...");
      break;
    case "configuracion":
      console.log("Abriendo configuración");
      break;
    case "creditos":
      console.log("Mostrando créditos");
      break;
    case "salir":
      console.log("Saliendo del juego");
      break;
    default:
      console.log("Opción no válida");
  }
}
