/* EJERCICIO 2 - Spread operator */

// 2.1
{
  const pointsList = [32, 54, 21, 64, 75, 43];
  const copia = [...pointsList];
  console.log(copia);
}

// 2.2
{
  const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
  const copiaToy = { ...toy };
  console.log(copiaToy);
}

// 2.3
{
  const pointsList = [32, 54, 21, 64, 75, 43];
  const pointsLis2 = [54, 87, 99, 65, 32];
  const arrayUnido = [...pointsList, ...pointsLis2];
  console.log(arrayUnido);
}

// 2.4
{
  const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
  const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };
  const objetoFusionado = { ...toy, ...toyUpdate };
  console.log(objetoFusionado);
}

// 2.5
{
  const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
  const copiaSinPosicion2 = [...colors.slice(0, 2), ...colors.slice(3)];
  console.log(copiaSinPosicion2);
}
