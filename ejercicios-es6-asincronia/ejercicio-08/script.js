/* EJERCICIO 8 - API de Game of Thrones (select + imagen) */

const URL = "https://thronesapi.com/api/v2/Characters";

const select = document.querySelector("#character-list");
const imagen = document.querySelector(".character-image");

async function cargarPersonajes() {
  try {
    const respuesta = await fetch(URL);
    const personajes = await respuesta.json();

    // relleno el select con una option por personaje (guardo la imagen en el value)
    personajes.forEach((personaje) => {
      const option = document.createElement("option");
      option.value = personaje.imageUrl;
      option.textContent = personaje.fullName;
      select.appendChild(option);
    });

    // muestro la imagen del primero al cargar
    if (personajes.length > 0) imagen.src = personajes[0].imageUrl;
  } catch (error) {
    console.error("Error al cargar los personajes:", error);
  }
}

// al cambiar la selección, actualizo la imagen
select.addEventListener("change", () => {
  imagen.src = select.value;
});

cargarPersonajes();
