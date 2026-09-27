/* DOM - EJERCICIO 4 */

// botón con evento click que muestra la info del evento
const boton = document.querySelector("#btnToClick");
boton.addEventListener("click", (evento) => {
  console.log(evento);
});

// evento focus que muestra el valor del input
const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (evento) => {
  console.log(evento.target.value);
});

// evento input que muestra el valor mientras escribes
const inputValor = document.querySelector(".value");
inputValor.addEventListener("input", (evento) => {
  console.log(evento.target.value);
});
