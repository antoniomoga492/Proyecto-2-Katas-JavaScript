/* EJERCICIO 9 - PokeAPI (pokémon aleatorio del 1 al 151) */

const imagen = document.querySelector(".random-image");

// número aleatorio del 1 al 151 (primera generación)
const idAleatorio = Math.floor(Math.random() * 151) + 1;

async function cargarPokemon() {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + idAleatorio);
    const pokemon = await respuesta.json();

    // uso la imagen oficial (official-artwork), la más grande y bonita
    imagen.src = pokemon.sprites.other["official-artwork"].front_default;
    imagen.alt = pokemon.name;
  } catch (error) {
    console.error("Error al cargar el Pokémon:", error);
  }
}

cargarPokemon();
