function ImpuestoPorEstado(impuestos, estado) {
  return impuestos.get(estado);
}
function PrecioNeto(cantItems, precioItem) {
  return cantItems * precioItem;
}
export {PrecioNeto,ImpuestoPorEstado};
