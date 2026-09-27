/* EJERCICIO 38 */

const users = [
  { name: "Alberto", favoritesSounds: { waves: { format: "mp3", volume: 50 }, rain: { format: "ogg", volume: 60 }, firecamp: { format: "mp3", volume: 80 } } },
  { name: "Antonio", favoritesSounds: { waves: { format: "mp3", volume: 30 }, shower: { format: "ogg", volume: 55 }, train: { format: "mp3", volume: 60 } } },
  { name: "Santiago", favoritesSounds: { shower: { format: "mp3", volume: 50 }, train: { format: "ogg", volume: 60 }, firecamp: { format: "mp3", volume: 80 } } },
  { name: "Laura", favoritesSounds: { waves: { format: "mp3", volume: 67 }, wind: { format: "ogg", volume: 35 }, firecamp: { format: "mp3", volume: 60 } } },
];
let total = 0, cantidad = 0;
for (const usuario of users) {
  for (const sonido in usuario.favoritesSounds) {
    total += usuario.favoritesSounds[sonido].volume;
    cantidad++;
  }
}
console.log((total / cantidad).toFixed(2));
