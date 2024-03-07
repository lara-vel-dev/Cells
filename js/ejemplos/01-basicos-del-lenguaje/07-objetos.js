// Un objeto agrupa todo en una sola variable
// Object literal
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 20,
  disponible: true,
};

// Acceder a los valores
producto.nombre; // Acceder por notación de punto
producto["precio"]; // Acceder por llave

// Agregar propiedades
producto.imagen = "imagen.jpg";

// Eliminar propiedades
delete producto.disponible;

// Destructuración (extraer info de un objeto y asignarla a una variable)
const { nombre } = producto; // equivalente a poner const nombre = producto.nombre
const { precio, imagen } = producto; // Destructuración múltiple

// Objetos anidados
const producto2 = {
  nombre: "Monitor 30 pulgadas",
  precio: 30,
  disponible: true,
  informacion: {
    peso: "1kg",
    medida: "1m",
  },
};

// Acceder a objetos anidados
producto2.informacion; // {peso: 1kg, medida: 1m}
producto2.informacion.peso; // 1m

// Destructuración de objetos anidados
const {
  informacion: { peso },
} = producto; // peso = 1kg

// NOTA: Aunque un objeto sea const, sus propiedades pueden ser alteradas

// Métodos
("use strict"); // No permite malas prácticas en el código de JS
Object.freeze(producto); // Congela el objeto y no se puede modificar
Object.isFrozen(producto); // Te dice si un objeto ha sido congelado
Object.seal(producto); // Permite modificar las propiedades existentes pero no agrregar nuevas
Object.isSealed(producto); // Te dice si un objeto ha sido sellado
Object.keys(producto); // Devuelve las llaves del objeto
Object.values(producto); // Devuelve los valores del objeto
Object.entries(producto); // Devuelve las llaves con sus valores del objeto

// Unir 2 objetos
const producto3 = {
  nombre: "Producto",
  precio: 40,
  disponible: true,
};

const medidas = {
  peso: "2kg",
  medida: "3m",
};

const resultado = Object.assign(producto3, medidas);

// Unir con spread operator (el spread operator copia el objeto)
const resultado2 = { ...producto3, ...medidas };

// Contexto (hace referencia al objeto en el que se encuentra)
const producto4 = {
  nombre: "Producto",
  precio: 40,
  disponible: true,
  mostrarInfo: function () {
    console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
  },
};

// Object constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto5 = new Producto("Producto", 40);
