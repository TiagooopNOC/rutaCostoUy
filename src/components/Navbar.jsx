import { useState, useRef } from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [comingSoonSection, setComingSoonSection] = useState(null);
  const navItemClasses =
    "relative cursor-pointer py-2 transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-primario after:transition-transform after:duration-300 hover:text-primario hover:after:scale-x-100 focus-visible:text-primario focus-visible:outline-none focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none";

  const toastTimeoutRef = useRef(null);
  const closeMenu = () => setIsMenuOpen(false);

  const handleComingSoon = (e, sectionName) => {
    e.preventDefault();

    setComingSoonSection(sectionName);
    closeMenu();

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = setTimeout(() => {
      setComingSoonSection(null);
    }, 2500);
  };

  return (
    <header className="border-b border-bordecards bg-superficie shadow-md">
      <nav
        className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 font-montserrat sm:px-8 lg:px-12"
        aria-label="Navegación principal"
      >
        <NavLink
          to="/"
          className="group block h-14 w-36 shrink-0 overflow-hidden"
          aria-label="RutaCostoUY - Inicio"
          onClick={closeMenu}
        >
          <img
            src="/assets/img/logo.png"
            alt="RutaCostoUY"
            className="w-36 -translate-y-9 transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none"
          />
        </NavLink>

        <div className="hidden items-center gap-8 text-sm font-semibold text-titulos md:flex lg:gap-10">
          <NavLink to="/" className={navItemClasses}>
            Inicio
          </NavLink>
          <NavLink to="/calculadora" className={navItemClasses}>
            Calculadora
          </NavLink>
          <a
            href="#rutas-frecuentes"
            className={navItemClasses}
            onClick={(e) => handleComingSoon(e, "Rutas Frecuentes")}
          >
            Rutas Frecuentes
          </a>
          <a
            href="#mis-rutas"
            className={navItemClasses}
            onClick={(e) => handleComingSoon(e, "Mis Rutas")}
          >
            Mis Rutas
          </a>
        </div>

        <NavLink
          to="/calculadora"
          className="hidden cursor-pointer rounded-full border border-primario bg-primario px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-titulos hover:bg-titulos hover:shadow-lg hover:shadow-primario/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primario active:translate-y-0 active:scale-95 motion-reduce:transition-none md:inline-flex"
        >
          Calcular
        </NavLink>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bordecards text-2xl text-titulos transition-colors hover:border-primario hover:bg-white hover:text-primario focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primario md:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <i
            className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"}`}
            aria-hidden="true"
          />
        </button>
      </nav>

      {/* MOBILE MENU  */}
      <div
        id="mobile-menu"
        className={`${isMenuOpen ? "grid" : "hidden"} gap-1 border-t border-bordecards px-5 pb-5 pt-3 font-montserrat text-sm font-semibold text-titulos md:hidden`}
      >
        <NavLink
          to="/calculadora"
          className="rounded-xl px-4 py-3 transition-colors hover:bg-white hover:text-primario"
          onClick={closeMenu}
        >
          Calculadora
        </NavLink>
        <a
          href="#rutas-frecuentes"
          className="rounded-xl px-4 py-3 transition-colors hover:bg-white hover:text-primario"
          onClick={(e) => handleComingSoon(e, "Rutas Frecuentes")}
        >
          Rutas Frecuentes
        </a>
        <a
          href="#mis-rutas"
          className="rounded-xl px-4 py-3 transition-colors hover:bg-white hover:text-primario"
          onClick={(e) => handleComingSoon(e, "Mis Rutas")}
        >
          Mis Rutas
        </a>
        <NavLink
          to="calculadora"
          className="mt-2 inline-flex justify-center rounded-full bg-primario px-5 py-3 text-white transition-colors hover:bg-titulos"
          onClick={closeMenu}
        >
          Calcular
        </NavLink>
      </div>

      {comingSoonSection && (
        <div className="fixed right-5 top-24 z-50 max-w-xs animate-fade-in rounded-2xl border border-bordecards bg-white px-5 py-4 font-montserrat shadow-xl shadow-black/10">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primario/10 text-xl text-primario">
              <i className="bi bi-clock-history" aria-hidden="true" />
            </div>

            <div>
              <p className="text-sm font-semibold text-titulos">Próximamente</p>
              <p className="mt-1 text-xs leading-5 text-cuerpo">
                La sección {comingSoonSection} estará disponible en una próxima
                versión.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
