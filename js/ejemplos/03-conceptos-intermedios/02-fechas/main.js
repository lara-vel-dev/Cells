// Las fechas reciden en el objeto Date()
const hoy = new Date(); // Crea la fecha actual Día de la semana, Mes, Día, Año y Hora
console.log(hoy);

// Se puede asignar una fecha
const fechaEnero = new Date("1-5-2000"); // Mes, Día, Año
console.log(fechaEnero);

let valor;

// Métodos en fechas
valor = fechaEnero.getFullYear(); // Obtiene el año
valor = fechaEnero.getMonth() + 1; // Obtiene el mes pero empieza a partir de 0
valor = fechaEnero.getDay(); // Obtiene el día
valor = fechaEnero.getMinutes(); // Obtiene los minutos
valor = fechaEnero.getHours(); // Obtiene la hora
valor = fechaEnero.getTime(); // Obtiene los ms desde el primero de enero de 1970 hasta hoy

// Formatear fechas con librería moment.js
console.log(moment().format("MMMM D YYYY h:mm:ss a")); // Mes Día Año HH:MM:SS
