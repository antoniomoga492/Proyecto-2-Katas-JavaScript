/* DOM - EJERCICIO 1 */

// botón .showme
const boton = document.querySelector(".showme");
console.log(boton);

// h1 #pillado
const titulo = document.querySelector("#pillado");
console.log(titulo);

// todos los p
const parrafos = document.querySelectorAll("p");
console.log(parrafos);

// todos los .pokemon
const pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);

// todos los [data-function="testMe"]
const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log(personajes);

// el 3º de ellos
const tercerPersonaje = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(tercerPersonaje);
