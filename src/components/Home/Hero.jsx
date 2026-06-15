import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-superficie px-5 py-14 font-montserrat sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <section className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-primario sm:text-5xl lg:text-6xl">
            Calculá cuánto te sale viajar por Uruguay
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-cuerpo sm:text-lg">
            Estimá combustible, peajes, ida y vuelta, y costo por persona antes
            de salir a la ruta. Simple, rápido y preciso.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/calculadora"
              className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-primario px-8 py-4 font-semibold text-white shadow-lg shadow-primario/15 transition-all duration-300 hover:-translate-y-1 hover:bg-titulos hover:shadow-xl active:translate-y-0 active:scale-95 motion-reduce:transition-none"
            >
              <i className="bi bi-calculator" aria-hidden="true" />
              Calcular viaje
            </Link>

            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-primario transition-all duration-300 hover:-translate-y-1 hover:border-primario hover:bg-sky-50 active:translate-y-0 active:scale-95 motion-reduce:transition-none"
            >
              Ver rutas frecuentes
            </button>
          </div>
        </section>

        <section className="w-full rounded-3xl border border-white bg-white p-6 shadow-2xl shadow-slate-300/50 sm:p-8">
          <header className="flex items-center justify-between border-b border-bordecards pb-5">
            <h2 className="text-2xl font-semibold text-primario sm:text-3xl">
              Resumen estimado
            </h2>
            <i
              className="bi bi-info-circle text-xl text-cuerpo"
              aria-label="Información del resumen"
            />
          </header>

          <div className="flex items-center gap-5 py-7">
            <img
              src="/assets/img/destino.png"
              className="h-60 w-20 object-contain sm:h-48 sm:w-16 sm:scale-135"
              alt=""
              aria-hidden="true"
            />

            <div className="flex min-w-0 flex-col gap-7">
              <div>
                <p className="text-sm font-medium text-cuerpo">Origen</p>
                <h3 className="text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                  Montevideo
                </h3>
              </div>

              <div>
                <p className="text-sm font-medium text-cuerpo">Destino</p>
                <h3 className="text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                  Punta del Este
                </h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-2xl bg-slate-100 p-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-cuerpo">
                Costo total (ida y vuelta)
              </p>
              <p className="text-3xl font-bold leading-none text-primario">
                $ 2.450
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-sm font-semibold text-cuerpo">
                Por persona (4)
              </p>
              <p className="text-2xl font-semibold leading-none text-cyan-700">
                $ 612
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
