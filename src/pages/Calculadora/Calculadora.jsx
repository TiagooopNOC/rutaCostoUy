import { useMemo, useState } from "react";

import DetallesViaje from "./DetallesViaje";
import ResultadoViaje from "./ResultadoViaje";
import VehiculoPeajes from "./VehiculoPeajes";

import { lugares } from "../../data/lugares";
import { preciosCombustible } from "../../data/precioCombustible";

import { calcularRuta } from "../../utils/calcularRuta";
import { calcularCostoViaje } from "../../utils/calcularCostoViaje";

const Calculadora = () => {
  const [datosViaje, setDatosViaje] = useState({
    origen: "montevideo",
    destino: "punta-del-este",
    idaYVuelta: true,
  });

  const [datosVehiculo, setDatosVehiculo] = useState({
    combustibleId: "super95",
    consumoCada100Km: 8,
    pasajeros: 1,
    metodoPeaje: "telepeaje",
    categoriaPeaje: "categoria1",
  });

  const rutaCalculada = useMemo(() => {
    return calcularRuta(datosViaje.origen, datosViaje.destino);
  }, [datosViaje.origen, datosViaje.destino]);

  const resultado = useMemo(() => {
    const precioCombustible =
      preciosCombustible[datosVehiculo.combustibleId] || 0;

    if (!rutaCalculada.ok) {
      return rutaCalculada;
    }

    return calcularCostoViaje({
      rutaCalculada,
      consumoCada100Km: Number(datosVehiculo.consumoCada100Km),
      precioCombustible,
      pasajeros: Number(datosVehiculo.pasajeros),
      metodoPeaje: datosVehiculo.metodoPeaje,
      categoriaPeaje: datosVehiculo.categoriaPeaje,
      idaYVuelta: datosViaje.idaYVuelta,
    });
  }, [rutaCalculada, datosVehiculo, datosViaje.idaYVuelta]);

  const actualizarDatosViaje = (campo, valor) => {
    setDatosViaje((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const actualizarDatosVehiculo = (campo, valor) => {
    setDatosVehiculo((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const obtenerNombreLugar = (id) => {
    return lugares.find((lugar) => lugar.id === id)?.nombre ?? id;
  };

  return (
    <section className="bg-superficie px-4 py-8 font-montserrat sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(340px,1fr)]">
          <form onSubmit={(event) => event.preventDefault()}>
            <DetallesViaje
              lugares={lugares}
              datosViaje={datosViaje}
              onChange={actualizarDatosViaje}
            />

            <VehiculoPeajes
              preciosCombustible={preciosCombustible}
              datosVehiculo={datosVehiculo}
              onChange={actualizarDatosVehiculo}
            />
          </form>

          <ResultadoViaje
            resultado={resultado}
            origen={obtenerNombreLugar(datosViaje.origen)}
            destino={obtenerNombreLugar(datosViaje.destino)}
            pasajeros={Number(datosVehiculo.pasajeros) || 1}
            idaYVuelta={datosViaje.idaYVuelta}
          />
        </div>
      </div>
    </section>
  );
};

export default Calculadora;
