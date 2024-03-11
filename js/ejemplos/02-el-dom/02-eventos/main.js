// Para que el navegador escuche eventos se usa la función addEventListener

// Evento que se ejecuta luego de cargar todo el HTML
document.addEventListener("DOMContentLoaded", () => {
  console.log("Documento listo");
});

// -- Eventos del mouse --
const btn = document.querySelector("button");
const p = document.querySelector("p");
let counter = 0;

// Evento que se ejecuta cuando se da clic en un elemento
btn.addEventListener("click", () => {
  counter++;
  p.textContent = "Contador de clicks: ";
  p.textContent += counter;
});

// Evento que se ejecuta cuando el mouse se posiciona sobre el elemento
btn.addEventListener("mouseenter", () => {
  btn.style.backgroundColor = "blue";
  btn.style.color = "white";
});

// Evento que se ejecuta cuando el mouse se sale del elemento
btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "gray";
});

// Evento que se ejecuta cuando el mouse es presionado
btn.addEventListener("mousedown", () => {
  btn.style.backgroundColor = "lightblue";
});

// Evento que se ejecuta cuando el mouse dejó de ser presionado
btn.addEventListener("mouseup", () => {
  btn.style.backgroundColor = "green";
});

// Evento que se ejecuta cuando das scroll
window.addEventListener("scroll", () => {
  const scrollPx = window.scrollY;
  console.log(scrollPx);

  const section = document.querySelector("section");
  // Te da las coordenadas de donde está un determinado elemento en el DOM
  const ubicacion = section.getBoundingClientRect();
  console.log(ubicacion);
});

// -- Eventos de inputs --
const input = document.querySelector(".busqueda");

// Evento que se ejecuta cuando una tecla es presionada
input.addEventListener("keydown", () => {
  console.log("Escribiendo");
});

// Evento que se ejecuta cuando ya no se está presionando la tecla
input.addEventListener("keyup", () => {
  console.log("Ya no escribe");
});

// Evento que se ejecuta cuando ya no le das foco al input
input.addEventListener("blur", () => {
  console.log("Ya no estás en el input");
});

// Evento que se ejecuta cuando copias un texto
input.addEventListener("copy", () => {
  console.log("Copiaste el texto");
});

// Evento que se ejecuta cuando pegas un texto
input.addEventListener("paste", () => {
  console.log("Pegaste el texto");
});

// Evento que se ejecuta cuando cortas un texto
input.addEventListener("cut", () => {
  console.log("Cortaste el texto");
});

// Evento que se ejecuta cuando ingresas datos al input
input.addEventListener("input", (e) => {
  console.log("Ingresaste texto...", e.target.value); // Obtiene el valor del input
});

// -- Eventos de forms --
const formulario = document.querySelector("form");

// Evento que se ejecuta cuando se envía el formulario
formulario.addEventListener("submit", (e) => {
  // Evita que el formulario se refresque
  e.preventDefault();
  console.log(e.target.method);
});

/* Event Bubbling
 * Este proceso inicia cuando un elemento ha ejecutado el evento y este se propaga en cadena.
 * Se ejecuta de adentro hacia afuera.
 * Se puede prevenir con delegation o con un método
 */
