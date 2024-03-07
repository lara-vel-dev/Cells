/* --- Reglas de variables ---
* Los nombres de variables pueden contener números, letras y guiones.
* Los nombres no pueden iniciar con un número pero si con letras o guiones.
* Se utiliza la nomenclatura lower cammel case para nombrar variables con más de 1 palabra.
* Los nombres no pueden llevar espacios.
*/

// Variables: pueden cambiar su valor a lo largo del tiempo
var variable = "Soy una variable"; // Variable inicializada con un valor
let variable2 = "Soy otra variable";

let disponible; // Variable declarada

// Re asignación de valores
disponible = true;
disponible = false;

// Inicializar múltiples variables
let numero1, numero2, numero3;
let nombre = "Daniela",
  apellido = "Lara";

// NOTA: La diferencia entre var y let es el scope

// Constantes: no pueden cambiar su valor
const pi = 3.14;
