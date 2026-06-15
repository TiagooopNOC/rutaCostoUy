const FeatureCard = ({ icon, title, description }) => {
  return (
    <li className="h-full">
      <article className="group flex h-full flex-col items-start rounded-3xl border border-bordecards bg-superficie p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-primario/25 hover:bg-white hover:shadow-xl hover:shadow-slate-300/50 motion-reduce:transition-none">
        <i
          className={`bi ${icon} flex h-14 w-14 items-center justify-center rounded-full bg-[#d9f1fd] text-2xl text-primario transition-all duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-primario group-hover:text-white group-hover:shadow-lg group-hover:shadow-primario/20 motion-reduce:transition-none`}
          aria-hidden="true"
        />
        <div className="mt-5">
          <h3 className="font-montserrat text-2xl font-semibold leading-tight text-slate-950 transition-colors duration-300 group-hover:text-primario">
            {title}
          </h3>
          <p className="mt-5 text-base leading-6 text-cuerpo">{description}</p>
        </div>
      </article>
    </li>
  );
};

export default FeatureCard;
