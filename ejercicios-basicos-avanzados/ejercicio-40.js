/* EJERCICIO 40 */

function findArrayIndex(array, texto) {
  for (let i = 0; i < array.length; i++) if (array[i] === texto) return i;
  return -1;
}
function removeItem(array, texto) {
  const indice = findArrayIndex(array, texto);
  if (indice !== -1) array.splice(indice, 1);
  return array;
}
const mainCharacters = ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"];

// Ejemplos findArrayIndex
console.log(findArrayIndex(mainCharacters, "Rey"));      // 4
console.log(findArrayIndex(mainCharacters, "Luke"));     // 0
console.log(findArrayIndex(mainCharacters, "Obi-Wan"));  // 6
console.log(findArrayIndex(mainCharacters, "Yoda"));     // -1 (no existe)

// Ejemplos removeItem
console.log(removeItem([...mainCharacters], "Han Solo"));
console.log(removeItem([...mainCharacters], "Luke"));
console.log(removeItem([...mainCharacters], "Yoda"));    // no existe, no borra nada
