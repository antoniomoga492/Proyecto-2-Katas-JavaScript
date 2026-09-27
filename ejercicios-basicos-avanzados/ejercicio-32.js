/* EJERCICIO 32 */

const xMen = [
  { name: 'Wolverine', year: 1974 }, { name: 'Cyclops', year: 1963 }, { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 }, { name: 'Beast', year: 1963 }, { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 }, { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 }, { name: 'Mystique', year: 1978 }
];
function findOldestXMen(lista) {
  let masAntiguo = lista[0];
  for (const miembro of lista) if (miembro.year < masAntiguo.year) masAntiguo = miembro;
  return masAntiguo;
}
console.log(findOldestXMen(xMen));
