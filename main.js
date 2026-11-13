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
// NOTA: los ejercicios 3, 24 y 25 usan el mismo botón "btn".
// Para probar uno, descomentá su addEventListener y comentá los otros.
{
  const input = document.getElementById("dato");
  const boton = document.getElementById("btn");
  const mensaje = document.getElementById("mensaje");

  // boton.addEventListener("click", function () {
  //   const valor = input.value;
  //   const numero = Number(valor);
  //   mensaje.textContent = numero + 10;
  // });
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

// Ejercicio 16: Crear un objeto jugador
{
  const jugador = {
    nombre: "Luna",
    vida: 100,
    energia: 80,
    nivel: 1,
    inventario: ["espada", "poción"]
  };

  console.log(jugador.nombre);
  console.log(jugador.vida);
  console.log(jugador.energia);
  console.log(jugador.nivel);
  console.log(jugador.inventario);
}

// Ejercicio 17: Modificar propiedades de un objeto
{
  const jugador = {
    nombre: "Kai",
    nivel: 1,
    monedas: 0
  };

  jugador.nivel++;
  jugador.monedas += 50;

  console.log(jugador);
}

// Ejercicio 18: Array de objetos
{
  const personajes = [
    { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
    { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
    { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
  ];

  for (let i = 0; i < personajes.length; i++) {
    console.log(personajes[i].nombre + " es " + personajes[i].tipo + " y está en nivel " + personajes[i].nivel);
  }
}

// Ejercicio 19: Filtrar personajes por nivel (usa "personajes" de data.js)
{
  const personajesFuertes = personajes.filter((personaje) => {
    return personaje.nivel >= 3;
  });

  console.log(personajesFuertes);
}

// Ejercicio 20: Obtener solo los nombres
{
  const nombres = personajes.map((personaje) => {
    return personaje.nombre;
  });

  console.log(nombres);
}

// Ejercicio 21: Buscar un personaje
{
  const personajeEncontrado = personajes.find((personaje) => {
    return personaje.nombre === "Kai";
  });

  console.log(personajeEncontrado);
}

// Ejercicio 22: Calcular total de vida
{
  const vidaTotal = personajes.reduce((acumulador, personaje) => {
    return acumulador + personaje.vida;
  }, 0);

  console.log(vidaTotal);
}

// Ejercicio 23: Mostrar mensaje en pantalla
{
  const mensaje = document.getElementById("mensaje");

  mensaje.textContent = "Bienvenido a la guía de JavaScript";
  mensaje.style.color = "#CC1155";
}

// Ejercicio 24: Botón que suma puntos
// (comentado porque comparte el botón "btn" con el ejercicio 25, ver nota del ejercicio 3)
{
  const boton = document.getElementById("btn");
  const mensaje = document.getElementById("mensaje");

  let puntos = 0;

  // boton.addEventListener("click", function () {
  //   puntos = puntos + 10;
  //   mensaje.textContent = "Puntos: " + puntos;
  // });
}

// Ejercicio 25: Validar nombre de usuario (este es el listener activo del botón "btn")
{
  const input = document.getElementById("dato");
  const boton = document.getElementById("btn");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", function () {
    if (input.value === "") {
      mensaje.textContent = "Ingresá un nombre para continuar";
    } else {
      mensaje.textContent = "Bienvenido/a, " + input.value;
    }
  });
}

// Ejercicio 26: Guardar puntaje en LocalStorage
{
  const jugador = {
    nombre: "Luna",
    puntaje: 1500
  };

  // guardar en localStorage (convertido a texto)
  localStorage.setItem("jugador", JSON.stringify(jugador));

  // recuperar desde localStorage (convertido de nuevo a objeto)
  const jugadorRecuperado = JSON.parse(localStorage.getItem("jugador"));

  // mostrar por consola
  console.log(jugadorRecuperado);
}
