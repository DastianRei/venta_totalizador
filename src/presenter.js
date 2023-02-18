import ImpuestoPorEstado from "./operaciones";
const cantidadItems = document.querySelector("#cantidad-items");
const div = document.querySelector("#cantidad-items-mostrar");
const estados = document.querySelector("#estados");
const precioPorItem = document.querySelector("#precio-por-item");
const formulario = document.querySelector("#totalizador-form");
const impuestos = new Map([
  ["UT", 6.65],
  ["NV", 8],
  ["TX", 6.25],
  ["AL", 4],
  ["CA", 8.25],
]);
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML =
    "<p>" +
    cantidadItems.value +
    precioPorItem.value +
    ImpuestoPorEstado(impuestos, estados.value) +
    "</p>";
});
