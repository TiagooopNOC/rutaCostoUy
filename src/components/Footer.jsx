const footerSections = [
  {
    title: "Producto",
    links: [
      ["Calculadora", "#calculadora"],
      ["Rutas frecuentes", "#rutas-frecuentes"],
      ["Costo por persona", "#costo-por-persona"],
      ["Historial de cálculos", "#historial"],
    ],
  },
  {
    title: "Datos",
    links: [
      ["Peajes", "#peajes"],
      ["Combustible", "#combustible"],
      ["Supuestos usados", "#supuestos"],
      ["Última actualización", "#ultima-actualizacion"],
    ],
  },
  {
    title: "Proyecto",
    links: [
      ["Cómo funciona", "#como-funciona"],
      ["Fuentes oficiales", "#fuentes"],
      ["Reportar error", "#reportar-error"],
      ["Contacto", "#contacto"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacidad", "#privacidad"],
      ["Términos", "#terminos"],
      ["Aviso de uso", "#aviso-de-uso"],
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-bordecards bg-white font-montserrat">
      <div className="grid min-h-96 w-full gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[1.4fr_3fr] lg:gap-20 lg:px-16 lg:py-20 xl:px-24">
        <div className="max-w-sm">
          <a
            href="#inicio"
            className="block h-20 w-52 overflow-hidden"
            aria-label="RutaCostoUy - Inicio"
          >
            <img
              src="/assets/img/logo.png"
              alt="RutaCostoUy"
              className="w-52 -translate-y-15"
            />
          </a>

          <p className="mt-5 text-sm leading-6 text-cuerpo">
            Calculá cuánto te sale viajar por Uruguay: combustible, peajes y
            costo por persona en segundos.
          </p>
          <div className="flex gap-3 pt-5 text-xl text-cuerpo">
            {[
              [
                "LinkedIn",
                "bi-linkedin",
                "https://www.linkedin.com/in/tiago-nocella-massaferro-3ab422368/",
              ],
              ["GitHub", "bi-github", "https://github.com/TiagooopNOC"],
              [
                "Instagram",
                "bi-instagram",
                "https://www.instagram.com/nmdev.uy/",
              ],
            ].map(([name, icon, link]) => (
              <a
                key={name}
                href={link}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bordecards bg-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-primario hover:bg-primario hover:text-white hover:shadow-lg hover:shadow-primario/20 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primario active:translate-y-0 active:scale-95 motion-reduce:transition-none"
                aria-label={name}
              >
                <i className={`bi ${icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav
          className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4"
          aria-label="Enlaces del pie de página"
        >
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-semibold text-titulos">
                {section.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {section.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm leading-5 text-cuerpo transition-colors hover:text-primario focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primario"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="flex w-full flex-col gap-5 border-t border-bordecards bg-slate-50 px-6 py-7 text-xs text-cuerpo sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16 xl:px-24">
        <p>© 2026 RutaCostoUy — Hecho en Uruguay</p>

        <nav
          className="flex flex-wrap items-center gap-x-6 gap-y-3"
          aria-label="Enlaces legales"
        >
          <a
            href="#privacidad"
            className="transition-colors hover:text-primario"
          >
            Privacidad
          </a>
          <a href="#terminos" className="transition-colors hover:text-primario">
            Términos
          </a>
          <a href="#fuentes" className="transition-colors hover:text-primario">
            Fuentes
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
