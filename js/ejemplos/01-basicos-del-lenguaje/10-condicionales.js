// If-else
const puntaje = 1000;
if (puntaje === 1000) {
  console.log("Si es igual");
} else {
  console.log("No es igual");
}

// Switch
const opcion = 2;
switch (opcion) {
  case 1:
    console.log("Seleccionaste la opción 1");
    break;
  case 2:
    console.log("Seleccionaste la opción 2");
    break;
  default:
    console.log("Opción no válida");
}

// Operador ternario
const edad = 18;
edad >= 18
  ? console.log("Eres mayor de edad")
  : console.log("Eres menor de edad");

const autenticado = true;
const puedePagar = false;

// Ternario anidado
autenticado
  ? puedePagar
    ? "Si a todo"
    : "No puede pagar"
  : "No está autenticado";
