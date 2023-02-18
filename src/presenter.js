const cantidadItems = document.querySelector("#cantidad-items");
const div = document.querySelector("#cantidad-items-mostrar");
const formulario = document.querySelector("#totalizador-form");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    div.innerHTML = "<p>" + cantidadItems.value + "</p>";
  });
  