/* EJERCICIO 13 */

const names = ['Peter','Steve','Tony','Natasha','Clint','Logan','Xabier','Bruce','Peggy','Jessica','Marc'];
function nameFinder(listaNombres, valor) {
  for (let i = 0; i < listaNombres.length; i++) {
    if (listaNombres[i] === valor) return { encontrado: true, posicion: i };
  }
  return { encontrado: false };
}
console.log(nameFinder(names, "Logan"));
console.log(nameFinder(names, "Thanos"));
