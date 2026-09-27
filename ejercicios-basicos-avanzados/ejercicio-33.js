/* EJERCICIO 33 */

const capitals = {
  Spain: 'Madrid', France: 'Paris', Italy: 'Rome', Germany: 'Berlin', Portugal: 'Lisbon',
  Poland: 'Warsaw', Greece: 'Athens', Austria: 'Vienna', Hungary: 'Budapest', Ireland: 'Dublin'
};
function getCapital(pais) {
  if (capitals[pais]) return capitals[pais];
  return "No tengo registrada la capital de " + pais;
}
console.log(getCapital("Italy"));
console.log(getCapital("Narnia"));
