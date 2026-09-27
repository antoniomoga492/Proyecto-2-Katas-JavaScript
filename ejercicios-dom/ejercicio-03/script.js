/* DOM - EJERCICIO 3 */

// lista ul > li con los países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const listaPaises = document.createElement("ul");
for (const pais of countries) {
  const li = document.createElement("li");
  li.textContent = pais;
  listaPaises.appendChild(li);
}
document.body.appendChild(listaPaises);

// eliminar el .fn-remove-me
document.querySelector(".fn-remove-me").remove();

// lista de coches dentro del div [data-function="printHere"]
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const contenedor = document.querySelector('[data-function="printHere"]');
const listaCoches = document.createElement("ul");
for (const coche of cars) {
  const li = document.createElement("li");
  li.textContent = coche;
  listaCoches.appendChild(li);
}
contenedor.appendChild(listaCoches);

// divs con h4 + img
const countriesImg = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const galeria = document.createElement("div");
galeria.id = "galeria";
document.body.appendChild(galeria);

function pintarGaleria() {
  galeria.innerHTML = "";
  countriesImg.forEach((item, indice) => {
    const div = document.createElement("div");

    const h4 = document.createElement("h4");
    h4.textContent = item.title;

    const img = document.createElement("img");
    img.src = item.imgUrl;
    img.alt = item.title;

    // botón que borra ESTE div
    const btnBorrarUno = document.createElement("button");
    btnBorrarUno.textContent = "Borrar este";
    btnBorrarUno.addEventListener("click", () => {
      countriesImg.splice(indice, 1);
      pintarGaleria();
    });

    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(btnBorrarUno);
    galeria.appendChild(div);
  });
}
pintarGaleria();

// botón que borra el último div
const btnBorrarUltimo = document.createElement("button");
btnBorrarUltimo.textContent = "Borrar el último";
btnBorrarUltimo.addEventListener("click", () => {
  countriesImg.pop();
  pintarGaleria();
});
document.body.insertBefore(btnBorrarUltimo, galeria);
