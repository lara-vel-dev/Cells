// Arreglos
// Elemento de 1 dimensión
const numeros = [10, 20, 30];
const meses = new Array("Enero", "Febrero", "Marzo");

// Elementos de 2 dimensiones
const arreglo2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Acceder a valores
numeros[0]; // Obtiene el primer elemento (10)

// Métodos
numeros.length; // Retorna cuantos elementos tiene el arreglo
numeros.push(6); // Agrega un valor al final del arreglo
numeros.unshift(10); // Agrega un valor al inicio del arreglo
numeros.pop(); // Elimina el último elemento del arreglo y devuelve el elemento
numeros.shift(); // Elimina el primer elemento del arreglo y devuelve el elemento
numeros.splice(1, 1); // Elimina n valores a partir de una posición
numeros.slice(); // Genera una copia del arreglo
numeros.includes(3); // Determina si existe un valor en el arreglo
numeros.some((num) => num % 2 === 0); // Comprueba si al menos 1 elemento cumple la condición
numeros.every((num) => num % 2 !== 0); // Comprueba si la condición se cumple para todos los elementos del arreglo
numeros.reduce((counter, num) => counter + num, 0); // Reduce un arreglo a un solo valor
numeros.findIndex((num) => num % 2 !== 0); // Retorna en que índice se encuentra un elemento
numeros.find((num) => num === 30); // Regresa el elemento encontrado
numeros.filter((num) => num >= 20); // Filtra valores dependiento de una condición
numero.concat(nums); // Une 1 o más arreglos
Array.isArray(numeros); // Determina si el elemento es un arreglo

// Recorrer arreglos
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
numeros.forEach((numero) => console.log(numero));
numeros.map((numero) => numero * 2); // Genera un arreglo nuevo

// Agregar elementos con el spread operator
const carrito = ["producto1", "producto2", "producto3"];
let resultado;
resultado = [...carrito, "producto4"]; // Lo agrega al final
resultado = ["producto0", ...carrito]; // Lo agrega al inicio

// Destructuración
const nums = [1, 2, 3, 4, 5];
const [primero] = nums; // primero = 1
// Omite elementos con comas
const [, , tercero] = nums; // tercero = 3
const [...nuevoArray] = nums; // nuevoArray = [1, 2, 3, 4, 5]
