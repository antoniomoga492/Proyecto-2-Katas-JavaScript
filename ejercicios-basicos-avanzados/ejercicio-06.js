/* EJERCICIO 6 */

// 6.1 - de 0 a 9, un console.log por vuelta
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// 6.2 - solo cuando el resto entre 2 es 0, un console.log por vuelta
for (let i = 0; i <= 9; i++) {
  if (i % 2 === 0) console.log(i);
}

// 6.3 - contar ovejas, 10 vueltas
for (let i = 1; i <= 10; i++) {
  if (i === 10) console.log("¡Dormido!");
  else console.log("Intentando dormir 🐑");
}
