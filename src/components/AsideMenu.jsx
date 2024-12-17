import { useLocation, Link } from "react-router-dom";

const AsideMenu = () => {
  const location = useLocation();

  return (
    <div className="flex flex-row h-[56rem] m-2 p-4 md:p-2 lg:p-1">
      <aside className="w-[40rem] h-full flex flex-col items-center p-0">
        <ul className="flex flex-col gap-6 p-6 px-20 mt-10 w-full md:px-10 lg:px-5">
          <li className="text-primary text-xl font-light flex items-center gap-2 md:text-lg lg:text-2xl">
            <img
              className="rounded-full w-10 h-10 object-cover md:w-8 md:h-8 lg:w-6 lg:h-6"
              src="/src/assets/5057948.jpg"
              alt="Service PH Logo"
            />
            Service PH
          </li>
          <li className="text-primary text-lg font-light flex items-center gap-2 md:text-base lg:text-xl">
            <Link
              to="/"
              className={`flex items-center gap-2 w-full h-full rounded-full px-4 py-1 ${
                location.pathname === "/" ? "bg-secondary" : ""
              } md:px-3 md:py-0.5 lg:px-2 lg:py-0.5`}
            >
              <img
                src="/src/assets/home.svg"
                alt="Inicio"
                className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5"
              />
              Inicio
            </Link>
          </li>
          <li className="text-primary text-lg font-light flex items-center gap-2 md:text-base lg:text-xl">
            <Link
              to="/servicios"
              className={`flex items-center gap-2 w-full h-full rounded-full px-4 py-1 ${
                location.pathname === "/servicios" ? "bg-secondary" : ""
              } md:px-3 md:py-0.5 lg:px-2 lg:py-0.5`}
            >
              <img
                src="/src/assets/Servicios.svg"
                alt="Servicios"
                className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5"
              />
              Servicios
            </Link>
          </li>
          <li className="text-primary text-lg font-light flex items-center gap-2 md:text-base lg:text-xl">
            <Link
              to="/clientes"
              className={`flex items-center gap-2 w-full h-full rounded-full px-4 py-1 ${
                location.pathname === "/clientes" ? "bg-secondary" : ""
              } md:px-3 md:py-0.5 lg:px-2 lg:py-0.5`}
            >
              <img
                src="/src/assets/Contacto.svg"
                alt="Clientes"
                className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5"
              />
              Clientes
            </Link>
          </li>
          <li className="text-primary text-lg font-light flex items-center gap-2 md:text-base lg:text-xl">
            <Link
              to="/contacto"
              className={`flex items-center gap-2 w-full h-full rounded-full px-4 py-1 ${
                location.pathname === "/contacto" ? "bg-secondary" : ""
              } md:px-3 md:py-0.5 lg:px-2 lg:py-0.5`}
            >
              <img
                src="/src/assets/Contacto.svg"
                alt="Contacto"
                className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5"
              />
              Contacto
            </Link>
          </li>
        </ul>
        <button className="bg-[#38598B] text-white px-4 py-2 rounded-full mt-96 hover:bg-[#133E87] md:px-10 md:py-1.5 lg:px-16 lg:py-0.5">
          Mas informacion
        </button>
      </aside>
      <div className="w-0.5 bg-gray-400/90"></div>
    </div>
  );
};

export default AsideMenu;