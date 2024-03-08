// For
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

const numeros = [1, 2, 3, 4, 5];
// For each
numeros.forEach((numero) => console.log(numero));

// For of (itera sobre objetos)
for (const numero of numeros) {
  console.log(numero);
}

// For in (itera sobre objetos)
const object = {
  nombre: "Juan",
  apellido: "Pérez",
};

for (const key in object) {
  console.log(`Llave: ${llave}, Valor: ${object[key]}`);
}

for (let [llave, valor] of Object.entries(object)) {
  console.log(`Llave: ${llave}, valor: ${valor}`);
}

// While
let counter = 0;
while (counter > 5) {
  console.log(counter); // 0, 1, 2, 3, 4
  counter++;
}

// Do while
counter = 0;
do {
  console.log(counter); // 0, 1, 2, 3, 4, 5
  counter++;
} while (counter > 5);
