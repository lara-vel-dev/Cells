/*
 * El DOM (Document Object Model) hace referencia a todos los elementos de tu sitio web
 * DOM Scripting es el código que modifica el DOM
 * El objeto Document es todo el HTML
 */

// Accediendo a elementos del DOM
let elemento;
elemento = document; // Objeto document
elemento = document.all; // Obtiene todos los elementos del html
elemento = document.head; // Obtiene los elementos del head del html
elemento = document.body; // Obtiene los elementos del body del html
elemento = document.domain; // Obtiene la url del sitio

// Obtener un elemento por clase
const header = document.getElementsByClassName("header"); // retorna un HTMLCollection

// Obtener un elemento por ID
const mainContent = document.getElementById("content"); // retorna todo el elemento

// Obtener un elemento por selectores
const section = document.querySelector(".card"); // retorna todo el elemento

// Obtener todos los elementos por selectores
const sections = document.querySelectorAll(".card"); // retorna un NodeList

// Modificar texto de un elemento
const h1 = document.querySelector("h1");
h1.innerText; // Obtiene el texto actual del elemento
h1.textContent; // Obtiene el texto actual del elemento y no le afecta el visibility
h1.innerHTML; // Obtiene el código html del elemento

h1.textContent = "Texto modificado con JS"; // Re asigna valor

// Modificar imágenes
const img = document.querySelector(".card img");
img.src; // Obtiene el valor del atributo src
img.alt; // Obtiene el valor del atributo alt

img.src =
  "https://imgs.search.brave.com/1hsaSViQXwFZlUIR45MtaCOqa7fs_CANd0P82hyHbYE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/MS8zMS8xMC80OC9z/dW5zZXQtNzc1Nzc1/Ml9fMzQwLmpwZw";
img.alt = "Paisaje";

// Modificar estilos
h1.style; // Accede a los estilos
h1.style.backgroundColor; // Después del . se puede obtener cualquier propiedad css

h1.style.color = "red"; // Cambia el color del texto del h1

// Recorrer el DOM (Traversing the DOM)
const menu = document.getElementById("menu-links");
menu.children; // Obtiene los hijos(nodos) del elemento
menu.children[0]; // Obtiene el primer nodo
menu.children[0].children; // Obtiene los hijos del primer nodo
menu.nextElementSibling; // Obtiene siguiente nodo del elemento
menu.firstChild; // Obtiene el primer nodo
menu.lastChild; // Obtiene el último nodo

const nth = document.querySelector("#menu-links li:nth-child(2)"); // enésimo nodo

// Eliminar elementos del DOM
nth.remove(); // Elimina directo
menu.removeChild(menu.children[1]); // Elimina elemento desde el padre

// Generar HTML desde JS
document.createElement("argumento"); // Crea un nuevo elemento dependiendo el argumento
const enlace = document.createElement("a"); // Crea un nuevo enlace
enlace.textContent = "Soy un enlace creado desde js";
enlace.href = "#";

// Agregar atributos
enlace.setAttribute("nombre-atributo", "valor-atributo");

// Agregar clases
enlace.classList.add("enlace");

mainContent.appendChild(enlace); // Se agrega el elemento al DOM (en este caso al main)
mainContent.insertBefore(enlace, mainContent[1]); // Lo agrega antes de la posición asignada
