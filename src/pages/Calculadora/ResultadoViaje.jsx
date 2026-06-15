import { formatCurrency } from "../../utils/formatCurrency";

const ResultadoViaje = ({
  resultado,
  origen,
  destino,
  pasajeros,
  idaYVuelta,
}) => {
  if (!resultado.ok) {
    return (
      <aside className="rounded-3xl border border-red-200 bg-white p-6 shadow-sm sm:p-8 lg:sticky lg:top-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
          <i className="bi bi-exclamation-triangle" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-xl font-semibold text-titulos">
          No pudimos calcular el viaje
        </h2>
        <p className="mt-2 text-sm leading-6 text-cuerpo">{resultado.error}</p>
      </aside>
    );
  }

  const detalleItems = [
    {
      icon: "bi-signpost-split",
      label: "Distancia total",
      value: `${resultado.distanciaTotal} km`,
    },
    {
      icon: "bi-fuel-pump",
      label: "Combustible",
      value: `${resultado.litrosConsumidos} L`,
    },
    {
      icon: "bi-stoplights",
      label: "Peajes",
      value: `${resultado.cantidadPeajes}`,
    },
  ];

  return (
    <aside className="overflow-hidden rounded-3xl border border-bordecards bg-white shadow-xl shadow-slate-200/70 lg:sticky lg:top-6">
      <header className="bg-primario p-6 text-white sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-100">
          Resumen estimado
        </p>
        <h2 className="mt-2 text-2xl font-semibold">
          {origen} <i className="bi bi-arrow-right text-lg" /> {destino}
        </h2>
        <p className="mt-2 text-sm text-sky-100">
          {idaYVuelta ? "Viaje de ida y vuelta" : "Viaje de ida"}
        </p>
      </header>

      <div className="p-6 sm:p-8">
        <div>
          <p className="text-sm font-medium text-cuerpo">Costo total estimado</p>
          <p className="mt-1 text-4xl font-bold tracking-tight text-titulos">
            {formatCurrency(resultado.costoTotal)}
          </p>
        </div>

        <div className="mt-6 rounded-2xl bg-sky-50 p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-cuerpo">
                Costo por persona
              </p>
              <p className="mt-1 text-2xl font-bold text-primario">
                {formatCurrency(resultado.costoPorPersona)}
              </p>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-cuerpo shadow-sm">
              {pasajeros} {pasajeros === 1 ? "persona" : "personas"}
            </span>
          </div>
        </div>

        <dl className="mt-6 grid grid-cols-3 gap-3">
          {detalleItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-bordecards p-3 text-center"
            >
              <i
                className={`bi ${item.icon} text-lg text-primario`}
                aria-hidden="true"
              />
              <dt className="mt-2 text-[11px] leading-4 text-cuerpo">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-titulos">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 space-y-3 border-t border-bordecards pt-6 text-sm">
          <div className="flex items-center justify-between gap-4">
            <span className="text-cuerpo">Combustible</span>
            <span className="font-semibold text-titulos">
              {formatCurrency(resultado.costoCombustible)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-cuerpo">Peajes</span>
            <span className="font-semibold text-titulos">
              {formatCurrency(resultado.costoPeajes)}
            </span>
          </div>
        </div>

        {resultado.peajes.length > 0 && (
          <details className="mt-6 rounded-2xl bg-superficie p-4">
            <summary className="cursor-pointer text-sm font-semibold text-titulos">
              Ver peajes del recorrido
            </summary>
            <ul className="mt-3 space-y-2 text-sm text-cuerpo">
              {resultado.peajes.map((peaje) => (
                <li key={peaje.id} className="flex items-start gap-2">
                  <i
                    className="bi bi-geo-alt mt-0.5 text-primario"
                    aria-hidden="true"
                  />
                  {peaje.nombre}
                </li>
              ))}
            </ul>
          </details>
        )}

        <p className="mt-6 text-xs leading-5 text-cuerpo">
          Este resultado es orientativo y puede variar según el tránsito, el
          consumo real y las tarifas vigentes.
        </p>
      </div>
    </aside>
  );
};

export default ResultadoViaje;
