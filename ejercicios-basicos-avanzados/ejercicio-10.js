/* EJERCICIO 10 */

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(listaNumeros) {
  let total = 0;
  for (const n of listaNumeros) total += n;
  return total / listaNumeros.length;
}
console.log(average(numbers));
