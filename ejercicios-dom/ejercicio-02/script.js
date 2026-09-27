/* DOM - EJERCICIO 2 */

// div vacío
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);

// div con una p
const divConParrafo = document.createElement("div");
const parrafoDentro = document.createElement("p");
parrafoDentro.textContent = "Soy una p dentro de un div";
divConParrafo.appendChild(parrafoDentro);
document.body.appendChild(divConParrafo);

// div con 6 p usando un bucle
const divCon6 = document.createElement("div");
for (let i = 1; i <= 6; i++) {
  const p = document.createElement("p");
  p.textContent = "Párrafo número " + i;
  divCon6.appendChild(p);
}
document.body.appendChild(divCon6);

// p con texto 'Soy dinámico!'
const parrafoDinamico = document.createElement("p");
parrafoDinamico.textContent = "Soy dinámico!";
document.body.appendChild(parrafoDinamico);

// texto en el h2.fn-insert-here
const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// lista ul > li con el array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement("ul");
for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  lista.appendChild(li);
}
document.body.appendChild(lista);

// eliminar los .fn-remove-me
const paraEliminar = document.querySelectorAll(".fn-remove-me");
for (const nodo of paraEliminar) nodo.remove();

// p 'Voy en medio!' tras el primer div
const primerDiv = document.querySelector("div");
const parrafoEnMedio = document.createElement("p");
parrafoEnMedio.textContent = "Voy en medio!";
primerDiv.after(parrafoEnMedio);

// p 'Voy dentro!' dentro de cada div.fn-insert-here
const divsInsertar = document.querySelectorAll("div.fn-insert-here");
for (const div of divsInsertar) {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";
  div.appendChild(p);
}
