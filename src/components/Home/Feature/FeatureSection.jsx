import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  return (
    <section className="bg-white px-5 py-16 font-montserrat sm:px-8 lg:px-12">
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-primario font-montserrat font-bold text-3xl">
          Todo bajo control
        </h2>
        <p className="text-cuerpo max-w-160 text-center">
          Nuestra calculadora toma en cuenta todas las variables para que no te
          lleves sorpresas en el camino.
        </p>
      </div>

      <div className="mx-auto mt-12 w-full max-w-7xl">
        <ul className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon="bi-fuel-pump"
            title="Combustible estimado"
            description="Calculamos el consumo según el tipo de vehículo, rinde y distancia real."
          ></FeatureCard>
          <FeatureCard
            icon="bi-stoplights"
            title="Peajes actualizados"
            description="Incluye la ubicación y el costo exacto de cada peaje en tu trayecto con tarifas al día."
          ></FeatureCard>
          <FeatureCard
            icon="bi-people-fill"
            title="Costo por persona"
            description="Dividí los gastos de manera justa. Ingresá la cantidad de pasajeros y obtené el costo individual al instante"
          ></FeatureCard>
        </ul>
      </div>
    </section>
  );
};

export default FeatureSection;
