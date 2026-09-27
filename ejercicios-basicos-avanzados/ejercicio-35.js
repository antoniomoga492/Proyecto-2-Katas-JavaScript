/* EJERCICIO 35 */

const mutants = [
  { name: 'Wolverine', power: 'regeneration' }, { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' }, { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' }, { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' }, { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' }, { name: 'Nightcrawler', power: 'teleportation' }
];
function findMutantByPower(lista, poder) {
  const encontrados = [];
  for (const mutante of lista) if (mutante.power === poder) encontrados.push(mutante.name);
  if (encontrados.length > 0) return "Poder '" + poder + "' encontrado en: " + encontrados.join(", ");
  return "Ningún mutante tiene el poder '" + poder + "'";
}
console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "flight"));
