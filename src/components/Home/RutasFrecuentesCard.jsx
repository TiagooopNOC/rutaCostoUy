const RutasFrecuentesCard = ({
  variant = "compact",
  backgroundImage,
  title,
  distance,
  tolls,
  route,
  price,
  ariaLabel,
}) => {
  if (variant === "featured") {
    return (
      <article
        className="group relative min-h-72 overflow-hidden rounded-3xl bg-slate-800 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-400/30 motion-reduce:transition-none sm:min-h-80 lg:h-full"
      >
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />

        <div className="relative flex h-full min-h-72 flex-col justify-end p-6 text-white sm:min-h-80 sm:p-8">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-primario shadow-sm">
            <i className="bi bi-map" aria-hidden="true" />
            {distance}
          </span>

          <h3 className="max-w-xl text-2xl font-bold leading-tight sm:text-3xl">
            {title}
          </h3>

          <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/40 pt-4">
            <p className="text-sm font-medium sm:text-base">
              Aprox. {price} (Ida y vuelta)
            </p>

            <a
              href="#calculadora"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primario text-xl text-white shadow-lg transition-transform duration-300 group-hover:translate-x-1 hover:bg-titulos focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              aria-label={`Calcular viaje: ${ariaLabel}`}
            >
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex min-h-44 flex-col rounded-3xl border border-bordecards bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primario/25 hover:shadow-xl hover:shadow-slate-300/50 motion-reduce:transition-none sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500">
          {route}
        </span>
        <button
          type="button"
          className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-primario focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primario"
          aria-label={`Guardar ruta ${ariaLabel}`}
        >
          <i className="bi bi-heart" aria-hidden="true" />
        </button>
      </div>

      <h3 className="mt-3 text-xl font-semibold leading-tight text-primario transition-colors duration-300 group-hover:text-titulos sm:text-2xl">
        {title}
      </h3>
      <p className="mt-2 text-sm font-medium text-cuerpo">
        {distance} <span aria-hidden="true">•</span> {tolls}
      </p>

      <div className="mt-auto flex items-center justify-between gap-4 pt-5">
        <p className="text-sm font-semibold text-primario">Desde {price}</p>
        <a
          href="#calculadora"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-lg text-primario transition-all duration-300 group-hover:translate-x-1 group-hover:bg-sky-50 hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primario motion-reduce:transition-none"
          aria-label={`Ver ruta ${ariaLabel}`}
        >
          <i className="bi bi-chevron-right" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

export default RutasFrecuentesCard;
