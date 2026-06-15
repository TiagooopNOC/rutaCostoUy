export function obtenerPeajesDelTramo(tramo, peajes) {
  const inicio = Math.min(tramo.kmInicio, tramo.kmFin);
  const fin = Math.max(tramo.kmInicio, tramo.kmFin);

  return peajes.filter((peaje) => {
    return peaje.ruta === tramo.ruta && peaje.km >= inicio && peaje.km <= fin;
  });
}
