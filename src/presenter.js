import {
  PrecioNeto,
  ImpuestoPorEstado,
  CalcularPorcentaje,
  PrecioTotal,
} from "./operaciones";
const cantidadItems = document.querySelector("#cantidad-items");
const divPrecioNeto = document.querySelector("#precio-neto");
const divPorcentaje = document.querySelector("#porcentaje-div");
const divPorcentajeEstado = document.querySelector("#porcentaje-estado-div");
const divPrecioTotal = document.querySelector("#precio-total");
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
    "<p>" + PrecioNeto(cantidadItems.value, precioPorItem.value) + "</p>";
  divPorcentaje.innerHTML =
    "<p>" +
    CalcularPorcentaje(cantidadItems.value, precioPorItem.value) +
    "%" +
    "</p>";
  divPorcentajeEstado.innerHTML =
    "<p>" + ImpuestoPorEstado(impuestos, estados.value) + "%" + "</p>";
  divPrecioTotal.innerHTML =
    "<p>" +
    PrecioTotal(
      cantidadItems.value,
      precioPorItem.value,
      estados.value,
      impuestos
    ) +
    "</p>";
});
