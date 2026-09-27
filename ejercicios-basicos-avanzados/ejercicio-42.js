/* EJERCICIO 42 */

function swap(array, indiceA, indiceB) {
  const temporal = array[indiceA];
  array[indiceA] = array[indiceB];
  array[indiceB] = temporal;
  return array;
}
const fantasticFour = ["La antorcha humana", "Mr. Fantástico", "La mujer invisible", "La cosa"];
console.log(swap(fantasticFour, 0, 3));
