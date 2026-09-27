/* EJERCICIO 22 */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true }, { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },  { name: "Pasta", isVegan: true },
];
let indiceFruta = 0;
for (const comida of foodSchedule) {
  if (!comida.isVegan) {
    comida.name = fruits[indiceFruta];
    comida.isVegan = true;
    indiceFruta++;
  }
}
console.log(foodSchedule);
