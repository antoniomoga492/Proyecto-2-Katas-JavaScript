/* EJERCICIO 23 */

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 }, { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 }, { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 }, { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 }, { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 }, { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];
const pequenas = [], medianas = [], grandes = [];
for (const pelicula of movies) {
  if (pelicula.durationInMinutes < 100) pequenas.push(pelicula);
  else if (pelicula.durationInMinutes <= 200) medianas.push(pelicula);
  else grandes.push(pelicula);
}
console.log("Pequeñas:", pequenas);
console.log("Medianas:", medianas);
console.log("Grandes:", grandes);
