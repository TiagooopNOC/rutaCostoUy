const DetallesViaje = ({ lugares, datosViaje, onChange }) => {
  const intercambiarLugares = () => {
    onChange("origen", datosViaje.destino);
    onChange("destino", datosViaje.origen);
  };

  const selectClasses =
    "w-full appearance-none bg-transparent py-2.5 pl-10 pr-10 text-xs font-medium text-titulos outline-none";

  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-200/40 sm:p-6">
      <h2 className="text-lg font-bold text-titulos">Detalles del viaje</h2>

      <div className="mt-4">
        <label className="relative block rounded-lg border border-bordecards bg-superficie transition-colors focus-within:border-primario focus-within:ring-3 focus-within:ring-primario/10">
          <i
            className="bi bi-geo-alt absolute left-4 top-1/2 -translate-y-1/2 text-primario"
            aria-hidden="true"
          />
          <span className="sr-only">Origen</span>
          <select
            value={datosViaje.origen}
            onChange={(event) => onChange("origen", event.target.value)}
            className={selectClasses}
          >
            {lugares.map((lugar) => (
              <option key={lugar.id} value={lugar.id}>
                {lugar.nombre}
              </option>
            ))}
          </select>
          <i
            className="bi bi-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-cuerpo"
            aria-hidden="true"
          />
        </label>

        <button
          type="button"
          onClick={intercambiarLugares}
          className="mx-auto my-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-bordecards bg-white text-primario shadow-sm transition-all duration-300 hover:rotate-180 hover:border-primario hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primario motion-reduce:transition-none"
          aria-label="Intercambiar origen y destino"
        >
          <i className="bi bi-arrow-down-up" aria-hidden="true" />
        </button>

        <label className="relative block rounded-lg border border-bordecards bg-superficie transition-colors focus-within:border-primario focus-within:ring-3 focus-within:ring-primario/10">
          <i
            className="bi bi-flag absolute left-4 top-1/2 -translate-y-1/2 text-primario"
            aria-hidden="true"
          />
          <span className="sr-only">Destino</span>
          <select
            value={datosViaje.destino}
            onChange={(event) => onChange("destino", event.target.value)}
            className={selectClasses}
          >
            {lugares.map((lugar) => (
              <option key={lugar.id} value={lugar.id}>
                {lugar.nombre}
              </option>
            ))}
          </select>
          <i
            className="bi bi-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-cuerpo"
            aria-hidden="true"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-bold text-titulos">Tipo de viaje</p>

        <div className="flex items-center gap-5 text-xs">
          <button
            type="button"
            onClick={() => onChange("idaYVuelta", false)}
            className={`inline-flex cursor-pointer items-center gap-2 transition-colors ${
              !datosViaje.idaYVuelta
                ? "font-semibold text-primario"
                : "text-cuerpo hover:text-titulos"
            }`}
          >
            <span
              className={`h-4 w-4 rounded-full border-4 ${
                !datosViaje.idaYVuelta
                  ? "border-primario bg-white"
                  : "border-slate-300 bg-white"
              }`}
            />
            Solo ida
          </button>

          <button
            type="button"
            onClick={() => onChange("idaYVuelta", true)}
            className={`inline-flex cursor-pointer items-center gap-2 transition-colors ${
              datosViaje.idaYVuelta
                ? "font-semibold text-primario"
                : "text-cuerpo hover:text-titulos"
            }`}
          >
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full ${
                datosViaje.idaYVuelta
                  ? "bg-primario text-white"
                  : "border border-slate-300 bg-white text-transparent"
              }`}
            >
              <i className="bi bi-check text-xs" aria-hidden="true" />
            </span>
            Ida y vuelta
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetallesViaje;
