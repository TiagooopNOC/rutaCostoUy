import RutasFrecuentesCard from "./RutasFrecuentesCard";

const RutasFrecuentesSection = () => {
  return (
    <section
      id="rutas-frecuentes"
      className="bg-superficie px-5 py-14 font-montserrat sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primario sm:text-4xl">
              Rutas Frecuentes
            </h2>
            <p className="mt-2 text-sm text-cuerpo sm:text-base">
              Los destinos más buscados desde la capital.
            </p>
          </div>

          <a
            href="#todas-las-rutas"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primario transition-all hover:gap-3 hover:text-titulos focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primario motion-reduce:transition-none"
          >
            Ver todas
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </a>
        </header>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,2.05fr)_minmax(280px,1fr)]">
          <RutasFrecuentesCard
            variant="featured"
            backgroundImage="/assets/img/PuntaDelEste.webp"
            distance="130 km"
            ariaLabel="Montevideo a Punta del Este"
            title={
              <>
                Montevideo{" "}
                <i
                  className="bi bi-arrow-right text-[0.8em]"
                  aria-hidden="true"
                />{" "}
                Punta del Este
              </>
            }
            price="$ 2.450"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <RutasFrecuentesCard
              route="Ruta 1"
              ariaLabel="Montevideo a Colonia"
              title={
                <>
                  Montevideo{" "}
                  <i
                    className="bi bi-arrow-right text-[0.75em]"
                    aria-hidden="true"
                  />{" "}
                  Colonia
                </>
              }
              distance="177 km"
              tolls="2 peajes"
              price="$ 3.100"
            />

            <RutasFrecuentesCard
              route="Ruta IB"
              ariaLabel="Montevideo a Piriápolis"
              title={
                <>
                  Montevideo{" "}
                  <i
                    className="bi bi-arrow-right text-[0.75em]"
                    aria-hidden="true"
                  />{" "}
                  Piriápolis
                </>
              }
              distance="98 km"
              tolls="1 peaje"
              price="$ 1.800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RutasFrecuentesSection;
