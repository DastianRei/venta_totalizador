function ImpuestoPorEstado(impuestos, estado) {
  return impuestos.get(estado);
}
function PrecioNeto(cantItems, precioItem) {
  return cantItems * precioItem;
}
function CalcularPorcentaje(cantItems, precioItem) {
  let descuento = 0.0;
  if (PrecioNeto(cantItems, precioItem) < 1000) {
    descuento = 0;
  } else if (
    PrecioNeto(cantItems, precioItem) >= 1000 &&
    PrecioNeto(cantItems, precioItem) < 3000
  ) {
    descuento = 3;
  } else if (
    PrecioNeto(cantItems, precioItem) >= 3000 &&
    PrecioNeto(cantItems, precioItem) < 7000
  ) {
    descuento = 5;
  } else if (
    PrecioNeto(cantItems, precioItem) >= 7000 &&
    PrecioNeto(cantItems, precioItem) < 10000
  ) {
    descuento = 7;
  } else if (
    PrecioNeto(cantItems, precioItem) >= 10000 &&
    PrecioNeto(cantItems, precioItem) < 30000
  ) {
    descuento = 10;
  } else if (PrecioNeto(cantItems, precioItem) >= 30000) {
    descuento = 15;
  }
  return descuento;
}
function PrecioTotal(cantidadItems, precioItem, estado, impuestos) {
  const precioNeto = PrecioNeto(cantidadItems, precioItem);
  const calcularPorcentaje = CalcularPorcentaje(cantidadItems, precioItem)/100;
  const impuesto = ImpuestoPorEstado(impuestos, estado)/100;
  return precioNeto + (precioNeto * impuesto) - (precioNeto * calcularPorcentaje);
}
export { PrecioNeto, ImpuestoPorEstado, CalcularPorcentaje, PrecioTotal };
