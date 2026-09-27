/* EJERCICIO 12 */

const duplicates = ['sushi','pizza','burger','potatoe','pasta','ice-cream','pizza','chicken','onion rings','pasta','soda'];
function removeDuplicates(lista) {
  const resultado = [];
  for (const elemento of lista) if (!resultado.includes(elemento)) resultado.push(elemento);
  return resultado;
}
console.log(removeDuplicates(duplicates));
