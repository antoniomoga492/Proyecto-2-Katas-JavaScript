/* EJERCICIO 8 */

const avengers = ["Hulk", "Thor", "Iron Man", "Captain A.", "Spiderman", "Captain M."];
function findLongestWord(listaTextos) {
  let masLarga = "";
  for (const palabra of listaTextos) {
    if (palabra.length > masLarga.length) masLarga = palabra;
  }
  return masLarga;
}
console.log(findLongestWord(avengers));
