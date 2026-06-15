import { tramosRuta } from "../data/tramosRuta";

// Algunos tramos pueden traer la distancia calculada explícitamente.
// Si no la tienen, se obtiene a partir de sus kilómetros inicial y final.
function obtenerDistanciaTramo(tramo) {
  if (typeof tramo.distanciaKm === "number") {
    return tramo.distanciaKm;
  }

  return Math.abs(tramo.kmFin - tramo.kmInicio);
}

// Agrega una salida desde un lugar hacia otro dentro del grafo.
function agregarConexion(grafo, desde, hasta, tramo) {
  if (!grafo[desde]) {
    grafo[desde] = [];
  }

  grafo[desde].push({
    hasta,
    distanciaKm: obtenerDistanciaTramo(tramo),
    tramo,
  });
}

// Convierte la lista plana de tramos en un grafo bidireccional.
// Así cada tramo puede recorrerse tanto de ida como de vuelta.
function crearGrafo(tramos) {
  const grafo = {};

  tramos.forEach((tramo) => {
    const distanciaKm = obtenerDistanciaTramo(tramo);

    const tramoIda = {
      ...tramo,
      distanciaKm,
    };

    const tramoVuelta = {
      ...tramo,
      desde: tramo.hasta,
      hasta: tramo.desde,
      kmInicio: tramo.kmFin,
      kmFin: tramo.kmInicio,
      distanciaKm,
    };

    agregarConexion(grafo, tramo.desde, tramo.hasta, tramoIda);
    agregarConexion(grafo, tramo.hasta, tramo.desde, tramoVuelta);
  });
  return grafo;
}

/**
 * Busca la ruta más corta entre dos lugares usando el algoritmo de Dijkstra.
 *
 * @param {string} origen Identificador del lugar de salida.
 * @param {string} destino Identificador del lugar de llegada.
 * @param {Array} tramos Lista de conexiones disponibles entre lugares.
 * @returns {object} Resultado con la distancia y los tramos, o un error.
 */
export function calcularRuta(origen, destino, tramos = tramosRuta) {
  // Evita ejecutar el algoritmo con datos incompletos.
  if (!origen || !destino) {
    return {
      ok: false,
      error: "Falta origen o destino",
    };
  }

  // No hace falta recorrer la red si el viaje termina donde comienza.
  if (origen === destino) {
    return {
      ok: true,
      origen,
      destino,
      distanciaKm: 0,
      tramos: [],
    };
  }

  const grafo = crearGrafo(tramos);

  // Si el origen no tiene conexiones, no pertenece a la red cargada.
  if (!grafo[origen]) {
    return {
      ok: false,
      error: "El origen no existe en la red de rutas",
    };
  }

  // distancias guarda el menor costo conocido desde el origen.
  // anteriores permite reconstruir el recorrido al terminar.
  const distancias = {};
  const anteriores = {};
  const visitados = new Set();

  Object.keys(grafo).forEach((lugar) => {
    distancias[lugar] = Infinity;
  });

  distancias[origen] = 0;

  // En cada iteración se procesa el lugar no visitado más cercano.
  while (true) {
    let actual = null;
    let menorDistancia = Infinity;

    Object.keys(distancias).forEach((lugar) => {
      if (!visitados.has(lugar) && distancias[lugar] < menorDistancia) {
        menorDistancia = distancias[lugar];
        actual = lugar;
      }
    });

    // No quedan lugares alcanzables o ya llegamos al destino.
    if (actual === null) break;
    if (actual === destino) break;

    visitados.add(actual);

    const conexiones = grafo[actual] || [];

    // "Relajar" una conexión significa guardar el nuevo camino solo si
    // mejora la distancia que ya conocíamos para ese destino.
    conexiones.forEach((conexion) => {
      const nuevaDistancia = distancias[actual] + conexion.distanciaKm;

      if (nuevaDistancia < (distancias[conexion.hasta] ?? Infinity)) {
        distancias[conexion.hasta] = nuevaDistancia;

        anteriores[conexion.hasta] = {
          anterior: actual,
          tramo: conexion.tramo,
        };
      }
    });
  }

  // Sin un paso anterior para el destino, no existe un camino conectado.
  if (!anteriores[destino]) {
    return {
      ok: false,
      error: "No se encontró una ruta entre el origen y el destino.",
    };
  }

  // Se reconstruye el camino desde el destino hacia el origen.
  // unshift mantiene los tramos en el orden correcto de viaje.
  const tramosCamino = [];
  let actual = destino;

  while (actual !== origen) {
    const paso = anteriores[actual];

    if (!paso) break;

    tramosCamino.unshift(paso.tramo);
    actual = paso.anterior;
  }

  return {
    ok: true,
    origen,
    destino,
    distanciaKm: Number(distancias[destino].toFixed(1)),
    tramos: tramosCamino,
  };
}
