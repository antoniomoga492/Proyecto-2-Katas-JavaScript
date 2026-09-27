/* EJERCICIO 4 */

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
console.log(aldeanos[3]);
aldeanos.push("Cervasio");
aldeanos[0] = "Bambina";
aldeanos.reverse();
const posNarciso = aldeanos.indexOf("Narciso");
aldeanos.splice(posNarciso, 1, "Canela");
console.log(aldeanos[aldeanos.length - 1]);
console.log(aldeanos);
