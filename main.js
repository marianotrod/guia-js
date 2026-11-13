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

// Ejercicio 7: Cuenta regresiva
{
  for (let i = 3; i >= 1; i--) {
    console.log(i);
  }
  console.log("¡Comienza!");
}

// Ejercicio 8: Sumar puntos por rondas
{
  let puntajeTotal = 0;

  for (let ronda = 1; ronda <= 5; ronda++) {
    puntajeTotal = puntajeTotal + 10;
  }

  console.log(puntajeTotal);

  // Desafío extra: cada ronda suma una cantidad diferente (10, 20, 30, 40, 50)
  let puntajeVariable = 0;

  for (let ronda = 1; ronda <= 5; ronda++) {
    puntajeVariable += ronda * 10;
  }

  console.log(puntajeVariable);
}

// Ejercicio 9: Recorrer un inventario
{
  const inventario = ["espada", "poción", "llave", "escudo", "mapa"];

  console.log(inventario[0]);                      // primer objeto
  console.log(inventario[inventario.length - 1]);  // último objeto
  console.log(inventario.length);                  // cantidad total
}

// Ejercicio 10: Mostrar todos los objetos
{
  const inventario = ["espada", "poción", "llave", "escudo"];

  for (let i = 0; i < inventario.length; i++) {
    console.log(inventario[i]);
  }
}

// Ejercicio 11: Agregar y quitar elementos
{
  let mochila = [];

  mochila.push("linterna");
  mochila.push("comida");
  mochila.push("mapa");
  mochila.pop();

  console.log(mochila);
}

// Ejercicio 12: Buscar un objeto en el inventario
{
  const inventario = ["espada", "poción", "llave", "escudo"];

  if (inventario.includes("llave")) {
    console.log("La puerta se abre");
  } else {
    console.log("Necesitás una llave");
  }
}

// Ejercicio 13: Crear una función de saludo
{
  function saludarUsuario(nombre) {
    console.log("Bienvenido/a, " + nombre);
  }

  saludarUsuario("Milo");
}

// Ejercicio 14: Función para calcular daño
{
  function calcularVidaRestante(vida, danio) {
    return vida - danio;
  }

  let resultado = calcularVidaRestante(100, 30);
  console.log("vida restante: " + resultado);
}

// Ejercicio 15: Usar arrow functions
{
  const sumar = (a, b) => {
    return a + b;
  };

  console.log(sumar(10, 5));
}
