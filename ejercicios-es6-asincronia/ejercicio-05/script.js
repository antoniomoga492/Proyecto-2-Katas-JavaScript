/* EJERCICIO 5 - filtrar streamers desde el input en vivo */

const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const input = document.querySelector('[data-function="toFilterStreamers"]');

input.addEventListener("input", () => {
  const texto = input.value;
  // filtro los streamers cuyo name incluye lo escrito en el input
  const filtrados = streamers.filter((s) => s.name.includes(texto));
  console.log(filtrados);
});
