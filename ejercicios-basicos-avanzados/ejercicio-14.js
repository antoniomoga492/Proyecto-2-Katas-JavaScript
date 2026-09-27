/* EJERCICIO 14 */

const words = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','sleep','code'];
function repeatCounter(lista) {
  const contador = {};
  for (const palabra of lista) {
    if (contador[palabra]) contador[palabra]++;
    else contador[palabra] = 1;
  }
  return contador;
}
console.log(repeatCounter(words));
