// Sets: Crea una lista de valores sin duplicados
const carrito = new Set(); // Crea un set
carrito.add("Camisa"); // Agrega un elemento al set
carrito.has("Pantalón"); // Devuelve si un elemento está o no en el set
carrito.delete("Camisa"); // Elimina un elemento en el set
carrito.clear(); // Limpia el set
carrito.size; // Devuelve cuantos elementos tiene un set
console.log(carrito);

// Weak set: Solo permite objetos, no es iterable y no tiene el método size()
const weakSet = new WeakSet();

const cliente = {
  nombre: "Dani",
  saldo: 32000,
};

weakSet.add(cliente);
weakSet.has(cliente);
weakSet.delete(cliente);
console.log(weakSet);

// Maps: listas ordenadas con llave y valor (tiene mejor performance que un objeto)
const cliente2 = new Map();
// Inicializar el Map
const mapa = new Map([
  ["nombre", "paciente"],
  ["cuarto", 1],
]);
cliente.set("nombre", "Karen"); // Agrega elementos al map (llave, valor)
cliente.set("tipo", "Premium");
cliente.set("saldo", 3000);

cliente2.size;
cliente2.has("nombre"); // Devuelve si existe la llave de un elemento dentro del map
cliente2.get("nombre"); // Busca por la llave y devuelve el valor
cliente2.delete("saldo"); // Elimina un elemento por la llave
cliente2.clear(); // Limpia el map
console.log(cliente2);

// Weak map: Sirve para mantener algunos valores privados, la llave es un objeto
const weakMap = new WeakMap();
const producto = {
  id: 1203,
};

// No son iterables y no tienen el método size
weakMap.set(producto, "Monitor");
weakMap.has(producto);
weakMap.get(producto);
weakMap.delete(producto);

// Symbols: Son valores únicos
const sym = Symbol();
const sym2 = Symbol();
console.log(sym === sym2); // false

// Las propiedades que utilizan un symbol no son iterables
const persona = {};
persona[nombre] = "Gloria"; // Sintaxis de symbol
persona[apellido] = "Trevi"; // Sintaxis de symbol

// No se puede acceder a un symbol por medio de sintaxis de punto
persona.nombre; // undefined
persona[nombre]; // Gloria

// Descriciones en symbols
const nombreCliente = Symbol("Nombre del cliente");
const cliente3 = {};

cliente3[nombreCliente] = "Alejandra";
console.log(cliente3);

// Iteradores: función que permite recorrer una colección de elementos
function crearIterador(carrito) {
  let i = 0;
  return {
    siguiente: () => {
      const fin = i >= carrito.lenght;
      const valor = !fin ? carrito[i++] : undefined;

      return fin, valor;
    },
  };
}

const carrito2 = ["Producto 1", "Producto 2", "Producto 3"];
const recorrerCarrito = crearIterador(carrito2);
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

// Generadores: función que retorna un iterador
// Generador con valores estáticos
function* crearGenerador() {
  // Yield hace referencia a los valores que se van a iterar
  yield 1;
  yield "Juan";
  yield 4 * 3;
  yield true;
}

const iterador = crearGenerador();
console.log(iterador); // Generador en estado suspended
console.log(iterador.next()); // Accede al primer valor ({value: 1, done: false})
console.log(iterador); // Generador en estado suspended
console.log(iterador.next().value); // Accede al segundo valor (Juan)
console.log(iterador.next().done); // Accede al tercer valor (false)
console.log(iterador.next()); // Accede al cuarto valor ({value: true, done: false})
console.log(iterador.next()); // Terminó de iterar ({value: undefined, done: true})

// Generador con valores dinámicos
function* generadorCarrito(carrito) {
  for (let i = 0; i < carrito.lenght; i++) {
    yield carrito[i];
  }
}

const iterador2 = generadorCarrito(carrito2);
console.log(iterador2.next().value); // Producto 1
