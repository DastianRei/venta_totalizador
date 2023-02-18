const cantidadItems = document.querySelector("#cantidad-items");
const div = document.querySelector("#cantidad-items-mostrar");
const precioPorItem = document.querySelector("#precio-por-item");
const formulario = document.querySelector("#totalizador-form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>" + cantidadItems.value + precioPorItem.value + "</p>";
});
