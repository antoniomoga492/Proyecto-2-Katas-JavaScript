/* DOM - EJERCICIO 5 */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// cabecera
const header = document.createElement("header");
const titulo = document.createElement("h1");
titulo.textContent = "Mis Álbumes";
const subtitulo = document.createElement("p");
subtitulo.textContent = albums.length + " discos en la colección";
header.appendChild(titulo);
header.appendChild(subtitulo);
document.body.appendChild(header);

// lista ul > li
const lista = document.createElement("ul");
lista.className = "album-list";
albums.forEach((album, indice) => {
  const li = document.createElement("li");

  const numero = document.createElement("span");
  numero.className = "album-number";
  numero.textContent = indice + 1;

  const nombre = document.createElement("span");
  nombre.textContent = album;

  li.appendChild(numero);
  li.appendChild(nombre);
  lista.appendChild(li);
});
document.body.appendChild(lista);
