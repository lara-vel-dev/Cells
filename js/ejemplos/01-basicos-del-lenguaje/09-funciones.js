// Declaración de función
function suma() {
  console.log(2 + 2);
}

suma(); // Llamar a la función

// Expresión de función
const suma2 = function () {
  console.log(3 + 3);
};

suma2(); // Llamar a la función

/* --- Diferencias entre declaración y expresión de función
 * Sintaxis
 * Declaraciones a la derecha, expresiones a la izquierda
 * La declaración de función te permite hacer hoisting
 * Las expresiones son más difíciles de inspeccionar
 */

// Funciones en javascript
alert(); // Muestra un mensaje desde un pop-out en el navegador
prompt(); // Sirve para ingresar datos desde un pop-out en el navegador
console.log(); // Sirve para imprimir información en la consola del navegador

function sumar(a, b) {
  // a y b son parámetros
  return a + b;
}

const a = 10;
const b = 20;

sumar(a, b); // a y b son argumentos

function saludo(nombre, apellido = "No tiene apellido") {
  // Parámetros por default
  console.log(`Nombre: ${nombre}, Apellido: ${apellido}`);
}

saludo("Daniela", "Lara"); // Daniela Lara
saludo("Juanchito"); // Juanchito No tiene apellido

// Callbacks (función que llama a otra función)
function crearCita(cita, callback) {
  var miCita = "Como yo siempre digo, " + cita;
  callback(miCita);
}

function logCita(cita) {
  console.log(cita);
}

crearCita("come tus vegetales!", logCita); // Como yo siempre digo, come tus vegetales!

// Funciones en objetos
const reproductor = {
  reproducir: function (nombre, artista) {
    console.log(`Reproduciendo canción ${nombre} de ${artista}`);
  },
  pausar: function () {
    console.log("Pausando...");
  },
};

reproductor.borrar = function (id) {
  console.log(`Borrando canción ${id}...`);
};

reproductor.reproducir("Too Afraid", "Marina");
reproductor.pausar();
reproductor.borrar(20);

// Arrow function
const arrowFunction = () => "Aprendiendo JS";
console.log(arrowFunction());

const objeto = {
  funcion: () => console.log("Soy una arrow function en un objeto"),
  cancion: "",
  // Setters y getters
  // Agrega valores
  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo canción: ${cancion}`);
  },
  // Obtiene valores
  get obtenerCancion() {
    console.log(`Obteniendo canción: ${this.cancion}`);
  },
};
