import { peajes } from "../data/peajes";
import { tarifasPeajes } from "../data/tarifasPeajes";

// La interfaz puede llamar "efectivo" al método que las tarifas guardan
// internamente como "basica". Los demás nombres ya coinciden.
function normalizarMetodoPeaje(metodoPeaje) {
  if (metodoPeaje === "efectivo") return "basica";
  return metodoPeaje;
}

// Convierte nombres como "Ruta 1", "ruta-1" e "Interbalnearia"
// a un formato común para poder compararlos de forma segura.
function normalizarNombreRuta(nombreRuta) {
  return nombreRuta
    ?.toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}

// Devuelve los peajes ubicados dentro del rango kilométrico de un tramo.
export function obtenerPeajesDelTramo(tramo, listaPeajes = peajes) {
  const inicio = Math.min(tramo.kmInicio, tramo.kmFin);
  const fin = Math.max(tramo.kmInicio, tramo.kmFin);
  const rutaTramo = normalizarNombreRuta(tramo.ruta);

  return listaPeajes.filter((peaje) => {
    const mismaRuta = normalizarNombreRuta(peaje.ruta) === rutaTramo;

    // Se excluye el punto inicial para evitar contar dos veces un peaje
    // ubicado justo donde termina un tramo y comienza el siguiente.
    return mismaRuta && peaje.km > inicio && peaje.km <= fin;
  });
}

// Reúne los peajes de todos los tramos que forman la ruta calculada.
function obtenerPeajesDeRuta(tramos, listaPeajes) {
  const peajesEncontrados = tramos.flatMap((tramo) =>
    obtenerPeajesDelTramo(tramo, listaPeajes),
  );

  // Un peaje podría aparecer en más de un tramo contiguo. Se conserva
  // solamente una instancia de cada uno usando su id como identificador.
  const peajesUnicos = [];

  peajesEncontrados.forEach((peaje) => {
    const yaExiste = peajesUnicos.some((item) => item.id === peaje.id);

    if (!yaExiste) {
      peajesUnicos.push(peaje);
    }
  });

  return peajesUnicos;
}

// Busca primero una tarifa particular definida en el propio peaje.
// Si no existe, utiliza la tarifa general de la categoría seleccionada.
function obtenerTarifaPeaje(peaje, metodoPeaje, categoriaPeaje, tarifas) {
  const metodo = normalizarMetodoPeaje(metodoPeaje);

  if (peaje.tarifas && peaje.tarifas[metodo] !== undefined) {
    return peaje.tarifas[metodo];
  }

  const tarifasCategoria = tarifas[categoriaPeaje] ?? tarifas.categoria1;

  return tarifasCategoria[metodo] ?? 0;
}

/**
 * Calcula el costo estimado de un viaje a partir de una ruta ya resuelta.
 *
 * @param {object} opciones Datos necesarios para realizar el cálculo.
 * @param {object} opciones.rutaCalculada Resultado de calcularRuta().
 * @param {number} opciones.consumoCada100Km Litros consumidos cada 100 km.
 * @param {number} opciones.precioCombustible Precio por litro.
 * @param {number} [opciones.pasajeros=1] Personas que comparten el costo.
 * @param {string} [opciones.metodoPeaje="telepeaje"] Forma de pago del peaje.
 * @param {string} [opciones.categoriaPeaje="categoria1"] Categoría tarifaria.
 * @param {boolean} [opciones.idaYVuelta=false] Duplica distancia y peajes.
 * @returns {object} Desglose de costos o un mensaje de error.
 */
export function calcularCostoViaje({
  rutaCalculada,
  consumoCada100Km,
  precioCombustible,
  pasajeros = 1,
  metodoPeaje = "telepeaje",
  categoriaPeaje = "categoria1",
  idaYVuelta = false,
  listaPeajes = peajes,
  tarifas = tarifasPeajes,
}) {
  // El costo solo puede calcularse a partir de una ruta válida.
  if (!rutaCalculada || !rutaCalculada.ok) {
    return {
      ok: false,
      error: "La ruta calculada no es válida.",
    };
  }

  // Para ida y vuelta se recorren dos veces la distancia y los peajes.
  const multiplicador = idaYVuelta ? 2 : 1;

  const distanciaTotal = rutaCalculada.distanciaKm * multiplicador;

  // Ejemplo: 200 km * 8 litros cada 100 km / 100 = 16 litros.
  const litrosConsumidos = (distanciaTotal * consumoCada100Km) / 100;

  const costoCombustible = litrosConsumidos * precioCombustible;

  // Los peajes se detectan usando los tramos concretos del recorrido.
  const peajesIda = obtenerPeajesDeRuta(rutaCalculada.tramos, listaPeajes);

  const costoPeajesIda = peajesIda.reduce((total, peaje) => {
    return (
      total +
      obtenerTarifaPeaje(peaje, metodoPeaje, categoriaPeaje, tarifas)
    );
  }, 0);

  const costoPeajes = costoPeajesIda * multiplicador;

  const costoTotal = costoCombustible + costoPeajes;

  // Evita dividir entre cero si se recibe una cantidad inválida.
  const pasajerosValidos = pasajeros > 0 ? pasajeros : 1;

  // Los valores se redondean únicamente al construir el resultado final,
  // evitando acumular errores de redondeo durante las operaciones.
  return {
    ok: true,
    distanciaTotal: Number(distanciaTotal.toFixed(1)),
    litrosConsumidos: Number(litrosConsumidos.toFixed(2)),
    costoCombustible: Number(costoCombustible.toFixed(2)),
    costoPeajes: Number(costoPeajes.toFixed(2)),
    costoTotal: Number(costoTotal.toFixed(2)),
    costoPorPersona: Number((costoTotal / pasajerosValidos).toFixed(2)),
    cantidadPeajes: peajesIda.length * multiplicador,
    peajes: peajesIda,
  };
}
