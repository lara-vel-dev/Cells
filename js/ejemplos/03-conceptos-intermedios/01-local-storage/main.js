// El método set item prmite agregar elementos tanto al local storage como al session storage
localStorage.setItem("nombre", "Daniela");
sessionStorage.setItem("nombre", "Juan");

// NOTA: No se pueden almacenar objetos ni arrays, solo strings

// El método JSON.stringify permite cambiar de arreglo u objeto a string
const producto = {
  nombre: "Monitor",
  precio: 300,
};

const meses = ["Enero", "Febrero", "Marzo"];

const productoString = JSON.stringify(producto);
const mesesString = JSON.stringify(meses);

localStorage.setItem("producto", productoString);
localStorage.setItem("meses", mesesString);

// El método get item sirve para obtener los valores tanto del local como del session storage
const producto2 = localStorage.getItem("producto"); // Se obtiene el valor con la llave
console.log(producto2);
const nombre = sessionStorage.getItem("nombre");
console.log(nombre);

// NOTA: Si la llave no existe, el método retorna un null

// Para cambiar de string a objeto o array se usa el método JSON.parse
const productoJSON = JSON.parse(producto2);
console.log(productoJSON);

const mesesJSON = JSON.parse(localStorage.getItem("meses"));
console.log(mesesJSON);

// El método remove item prmite eliminar elementos del session y local storage
localStorage.removeItem("producto");
sessionStorage.removeItem("nombre");

// Local storage no tiene un método para actualizar un registro
// Para actualizar se hace de la siguiente manera

// Obtenemos el registro a actualizar
const getMeses = localStorage.getItem("meses");
const mesesArray = JSON.parse(getMeses);

// Actualizamos
mesesArray.push("Abril");

// Volvemos a asignar el valor
localStorage.setItem("meses", JSON.stringify(mesesArray));

// NOTA: La actualización se hace mediante una sobre escritura

// Para limpiar todos los datos del local o session storage se hace uso de clear
localStorage.clear();
sessionStorage.clear();
