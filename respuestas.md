# Respuestas teóricas - Guía JavaScript

## 27. Diferencia entre `let`, `const` y `var`

**¿Cuándo usarías `let`?**
Para una variable cuyo valor va a cambiar. Por ejemplo, la vida o el puntaje de un jugador:

```js
let vida = 100;
vida = vida - 30;
```

**¿Cuándo usarías `const`?**
Para valores que no se van a reasignar, como el nombre del jugador. También se usa para objetos y arrays: `const` no deja reemplazar la variable por otra cosa, pero sí permite modificar su contenido.

```js
const jugador = { nivel: 1 };
jugador.nivel++;      // permitido: cambia una propiedad
// jugador = {};      // error: no se puede reasignar
```

**¿Por qué se recomienda evitar `var`?**
Porque `var` no respeta el bloque `{ }` donde se declara (solo respeta las funciones), así que la variable "se escapa" de un `if` o de un `for`. Además permite declarar dos veces la misma variable sin dar error. Esto puede pisar valores sin darnos cuenta. `let` y `const` respetan el bloque y no permiten redeclarar, por eso son más seguros.

```js
if (true) {
  var a = 1;
  let b = 2;
}
console.log(a); // 1 -> se escapó del bloque
console.log(b); // error: b no existe fuera del bloque
```

## 28. ¿Qué es el scope?

El scope (alcance) es la parte del código donde una variable existe y se puede usar.

```js
let nombre = "Global";

function mostrarNombre() {
  let nombre = "Local";
  console.log(nombre);
}

mostrarNombre();
console.log(nombre);
```

**¿Qué se muestra primero?**
`Local`

**¿Qué se muestra después?**
`Global`

**¿Por qué?**
Porque son dos variables distintas que existen en alcances diferentes. La de afuera tiene scope global y la de adentro tiene scope local: solo existe dentro de la función. Cuando la función hace `console.log(nombre)`, usa primero su propia variable interna, que vale `"Local"`. Al terminar la función, esa variable deja de existir, y el segundo `console.log`, que está afuera, solo puede ver la global, que vale `"Global"`. La variable local no modifica a la global.

## 29. Diferencia entre array y objeto

```js
const inventario = ["espada", "poción", "llave"];

const jugador = {
  nombre: "Luna",
  vida: 100,
  nivel: 3
};
```

**Array (`inventario`):**
Representa una lista ordenada de elementos del mismo tipo, en este caso los objetos que lleva el jugador. Cada elemento se accede por su índice, o sea por su posición, empezando en 0 (`inventario[0]` es `"espada"`). Conviene usar un array cuando tenemos varios elementos parecidos, la cantidad puede cambiar (agregar con `push`, quitar con `pop`) y queremos recorrerlos con un bucle.

**Objeto (`jugador`):**
Representa una sola cosa con varias características distintas, cada una con un nombre (propiedad) y un valor. Se accede por el nombre de la propiedad (`jugador.vida` es `100`). Conviene usar un objeto cuando queremos describir algo con datos de distinto tipo que van juntos, como la ficha de un personaje.

**Se pueden combinar:** en un juego, cada personaje es un objeto, y todos los personajes juntos forman un array de objetos (como `personajes` en `data.js`).

## 30. Eventos en JavaScript

Un evento es algo que pasa en la página, generalmente provocado por el usuario (un clic, una tecla, escribir en un input), y que JavaScript puede detectar para ejecutar una acción en respuesta.

```js
boton.addEventListener("click", function () {
  console.log("El usuario hizo clic");
});
```

**¿Qué elemento escucha el evento?**
El botón (la variable `boton`).

**¿Qué evento se está escuchando?**
El evento `"click"`, o sea cuando el usuario hace clic sobre el botón.

**¿Qué acción se ejecuta?**
La función que se pasa como segundo parámetro, que muestra en la consola el mensaje `"El usuario hizo clic"`. Esa función no se ejecuta al cargar la página, sino cada vez que ocurre el clic.

**¿Dónde podríamos aplicar esto en una página web o videojuego?**
- En una página web: un botón para enviar un formulario, validando primero que los campos no estén vacíos (como en el ejercicio 25).
- En un videojuego: un botón del menú para ir a otra sección, por ejemplo "Configuración". También se pueden escuchar teclas (evento `"keydown"`) para mover al personaje.
