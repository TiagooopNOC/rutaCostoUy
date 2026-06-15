const nombresCombustible = {
  super95: "Nafta Súper 95",
  premium97: "Nafta Premium 97",
  gasoil50S: "Gasoil 50-S",
};

const nombresCategoriasPeaje = {
  categoria1: "Categoría 1 - Autos y camionetas",
  categoria2: "Categoría 2 - Ómnibus hasta 25 pasajeros",
  categoria3: "Categoría 3 - Carga hasta 3 ejes",
  categoria4: "Categoría 4 - Ómnibus de más de 25 pasajeros",
  categoria5: "Categoría 5 - Carga de 3 ejes y más de 6 ruedas",
  categoria6: "Categoría 6 - Vehículos de 4 o más ejes",
  categoria7: "Categoría 7 - Tritrenes",
};

const VehiculoPeajes = ({
  preciosCombustible,
  tarifasPeajes,
  datosVehiculo,
  onChange,
}) => {
  const inputClasses =
    "mt-2 w-full rounded-lg border border-bordecards bg-superficie px-3 py-2.5 text-xs font-medium text-titulos outline-none transition-colors focus:border-primario focus:ring-3 focus:ring-primario/10";

  const metodosPeaje = [
    { id: "telepeaje", nombre: "Telepeaje", icono: "bi-broadcast-pin" },
    { id: "sucive", nombre: "SUCIVE", icono: "bi-receipt" },
    { id: "efectivo", nombre: "Efectivo", icono: "bi-cash-stack" },
  ];

  const presetsConsumo = [
    { nombre: "Económico", valor: 6 },
    { nombre: "Normal", valor: 8 },
    { nombre: "Alto", valor: 11 },
  ];

  const precioSeleccionado =
    preciosCombustible[datosVehiculo.combustibleId] ?? 0;

  return (
    <section className="mt-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-200/40 sm:p-6">
      <h2 className="text-lg font-bold text-titulos">Vehículo y peajes</h2>

      <div className="mt-4">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-bold text-titulos">Consumo (L/100 km)</p>
          <div className="flex flex-wrap gap-1.5">
            {presetsConsumo.map((preset) => {
              const seleccionado =
                Number(datosVehiculo.consumoCada100Km) === preset.valor;

              return (
                <button
                  key={preset.nombre}
                  type="button"
                  onClick={() => onChange("consumoCada100Km", preset.valor)}
                  className={`cursor-pointer rounded-full border px-3 py-1 text-[11px] transition-colors ${
                    seleccionado
                      ? "border-sky-300 bg-sky-100 font-semibold text-primario"
                      : "border-transparent bg-slate-100 text-cuerpo hover:border-bordecards"
                  }`}
                >
                  {preset.nombre}: {preset.valor}
                </button>
              );
            })}
          </div>
        </div>

        <input
          type="number"
          min="1"
          max="50"
          step="0.1"
          value={datosVehiculo.consumoCada100Km}
          onChange={(event) => onChange("consumoCada100Km", event.target.value)}
          className={inputClasses}
          aria-label="Consumo cada 100 kilómetros"
        />
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="text-xs font-bold text-titulos">
          Combustible
          <select
            value={datosVehiculo.combustibleId}
            onChange={(event) => onChange("combustibleId", event.target.value)}
            className={inputClasses}
          >
            {Object.keys(preciosCombustible).map((id) => (
              <option key={id} value={id}>
                {nombresCombustible[id] ?? id}
              </option>
            ))}
          </select>
        </label>

        <label className="text-xs font-bold text-titulos">
          Categoría de peaje
          <select
            value={datosVehiculo.categoriaPeaje}
            onChange={(event) => onChange("categoriaPeaje", event.target.value)}
            className={inputClasses}
          >
            {Object.keys(tarifasPeajes).map((id) => (
              <option key={id} value={id}>
                {nombresCategoriasPeaje[id] ?? id}
              </option>
            ))}
          </select>
        </label>

        <label className="text-xs font-bold text-titulos">
          Precio combustible ($)
          <input
            type="text"
            value={precioSeleccionado.toLocaleString("es-UY")}
            readOnly
            className={`${inputClasses} cursor-default text-cuerpo`}
          />
        </label>

        <label className="text-xs font-bold text-titulos">
          Pasajeros
          <input
            type="number"
            min="1"
            max="99"
            step="1"
            value={datosVehiculo.pasajeros}
            onChange={(event) => onChange("pasajeros", event.target.value)}
            className={inputClasses}
          />
        </label>
      </div>

      <fieldset className="mt-4">
        <legend className="text-xs font-bold text-titulos">
          Método de peaje
        </legend>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {metodosPeaje.map((metodo) => {
            const seleccionado = datosVehiculo.metodoPeaje === metodo.id;

            return (
              <button
                key={metodo.id}
                type="button"
                onClick={() => onChange("metodoPeaje", metodo.id)}
                className={`flex min-h-16 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border px-2 py-2.5 text-[11px] transition-all ${
                  seleccionado
                    ? "border-primario bg-sky-50 font-semibold text-primario shadow-sm"
                    : "border-bordecards text-cuerpo hover:border-primario/40 hover:bg-superficie"
                }`}
              >
                <i
                  className={`bi ${metodo.icono} text-lg`}
                  aria-hidden="true"
                />
                {metodo.nombre}
              </button>
            );
          })}
        </div>
      </fieldset>

    </section>
  );
};

export default VehiculoPeajes;
