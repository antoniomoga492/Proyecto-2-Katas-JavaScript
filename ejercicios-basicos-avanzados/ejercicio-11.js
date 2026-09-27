/* EJERCICIO 11 */

const mixedElements = [6, 1, "Marvel", 1, "hamburguesa", "10", "Prometeo", 8, "Hola mundo"];
function averageWord(lista) {
  let total = 0;
  for (const elemento of lista) {
    if (typeof elemento === "number") total += elemento;
    else total += elemento.length;
  }
  return total / lista.length;
}
console.log(averageWord(mixedElements));
