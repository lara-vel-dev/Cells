// Booleanos solo tienen 2 valores
const verdadero = true;
const falso = false;
const boolean1 = new Boolean(true);

// Buenas prácticas con booleanos
// Evita esta sintaxis
if (verdadero === true) {
  console.log("Valor verdadero");
}

// Mejor hazlo así para no ser redundante
if (verdadero) {
  console.log("Valor verdadero");
}

