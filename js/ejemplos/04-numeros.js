// Números
const numero1 = 30;
const numero2 = 20.3;
const numero3 = 1 / 4;
const numero4 = -4;
const numero5 = new Number(80);

// Operaciones
let resultado;
const num1 = 90;
const num2 = 50;

// Suma
resultado = num1 + num2;

// Resta
resultado = num1 - num2;

// Multiplicación
resultado = num1 * num2;

// División
resultado = num1 / num2;

// Módulo num1 % num2
resultado = num1 % num2;

// Módulo Math
Math.PI; // Nos da el valor de pi
Math.E; // Nos da el valor de la función exponencial (e)
Math.floor(2.6); // Redondea un número hacia abajo
Math.ceil(2.1); // Redondea un número hacia arriba
Math.round(9.3); // Redondea un número hacia arriba (a partir de .5) o hacia abajo (a partir de .4)
Math.sqrt(114); // Obtiene la raíz cuadrada de un número
Math.abs(-500); // Obtiene el valor absoluto de un número
Math.pow(2, 3); // Obtiene la potencia de un número
Math.min(11, 3, 4); // Obtiene el mínimo de una serie de números
Math.max(11, 3, 4); // Obtiene el máximo de una serie de números
Math.random(); // Te da números aleatorios
Math.floor(Math.random() * 20); // Te da valores aleatorios dentro de un rango (0-n)

/* --- Jerarquía de operaciones ---
 * Paréntesis
 * Exponentes
 * Multiplicación y división
 * Sumas y restas
 */

// Incrementos
let puntaje = 5;
puntaje++; // Incrementa en 1 (primero es 5 luego 6)
++puntaje; // Primero incrementa (de inmediato es 6)
puntaje += 2; // Suma al número la cantidad agregada
puntaje = puntaje + 3; // Suma al número la cantidad agregada

// Decremento
puntaje--; // Decrementa en 1 (primero es 5 luego 4)
--puntaje; // Primero decrementa (de inmediato es 4)
puntaje -= 4; // Resta al número la cantidad agregada
puntaje = puntaje - 8; // Resta al número la cantidad agregada

// Métodos
const ejemplo1 = "20";
const ejemplo2 = "20.2";
const ejemplo3 = "Uno";
const ejemplo4 = 20;

// Convierte de string a número entero
Number.parseInt(ejemplo1);
parseInt(ejemplo1);

// Convierte de string a número flotante
Number.parseFloat(ejemplo2);
parseFloat(ejemplo2);

Number.isInteger(ejemplo4); // Revisa si un valor es un número entero
Number.isNaN(ejemplo3); // Revisa si un valor no es numérico
parseFloat(ejemplo2).toFixed(2); // Especifica cuántos decimales queremos
parseFloat(ejemplo2).toPrecision(2); // Especifica la precisión de redondeo según los decimales
parseFloat(ejemplo2).toExponential(2); // Devuelve un número representado en notación exponencial
