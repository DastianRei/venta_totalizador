import { PrecioNeto, ImpuestoPorEstado } from "./operaciones";
const cantidadItems = document.querySelector("#cantidad-items");
const divPrecioNeto = document.querySelector("#precio-neto");
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
  divPrecioNeto.innerHTML =
    "<p>" +
    PrecioNeto(cantidadItems.value, precioPorItem.value) +
    "</p>";
});
