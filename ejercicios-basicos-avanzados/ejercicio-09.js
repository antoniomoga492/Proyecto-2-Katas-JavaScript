/* EJERCICIO 9 */

const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumNumbers(listaNumeros) {
  let total = 0;
  for (const n of listaNumeros) total += n;
  return total;
}
console.log(sumNumbers(numbers));
