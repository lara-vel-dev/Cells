// Strings
const numeroString = 30;
const producto = "  Monitor de 20 pulgadas  ";
let producto2 = String("Monitor de 20 pulgadas");
let producto3 = new String("Monitor de 20 pulgadas");

producto2 = producto3 + "20 USD"; // Concatenación de datos
producto3 = `${producto3} 40 USD`; // Interpolación de elementos

const textoEscapado = 'Bienvenido a "Pizza Hut "'; // Bienvenido a "Pizza Hut"

// Métodos de strings
producto.length; // Cuenta los caracteres de un string
producto.indexOf("Monitor"); // Devuelve el índice del elemento (si no lo encuentra devuelve -1)
producto.includes("Monitor"); // Devuelve true si se encuentra el elemento en el string
producto.concat("30 USD"); // Concatena texto a una cadena
producto.trimStart(); // Elimina los espacios en blanco del inicio
producto.trimEnd(); // Elimina los espacios en blanco del final
producto.trim(); // Elimina todos los espacios en blanco de una cadena
producto.replace("pulgadas", "pulgas"); // Reemplaza una palabra por otra
producto.slice(0, 8); // Corta o extrae una sección de una cadena cadena de texto
producto.substring(0, 8); // Devuelve un subconjunto de una cadena de texto
producto.charAt(2); // Devuelve el caracter posicionado en un índice en particular
producto.repeat(3); // Repite una cadena de texto n veces
producto.split(" "); //Divide un string en un arreglo dependiendo del separador que se mande
producto.toUpperCase(); // Convierte todo el texto a mayúsculas
producto.toLowerCase(); // Convierte todo el texto en minúsuclas
numeroString.toString(); // Convierte otro tipo de dato a string
