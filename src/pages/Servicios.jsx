import { useState } from "react";
import AsideMenu from "../components/AsideMenu";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Servicios = () => {
  // Estado para expandir o colapsar cada sección
  const [expanded, setExpanded] = useState({});

  // Función para alternar el estado de expansión
  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Datos de los servicios
  const servicios = [
    {
      title: "EMPALME ADMINISTRATIVO",
      text: [
        "Existe un servicio que está revolucionando el mercado de propiedad horizontal, la sustitución del administrador.",
        "En cualquier instante, si la gestión del administrador no satisface las necesidades del cliente y los copropietarios deciden que no es la persona indicada para llevar las riendas, SERVICEPH, se encarga de realizar el cambió del funcionario evitando traumatismos.",
      ],
      image: "/src/assets/pexels-ekaterina-bolovtsova-6077961.jpg",
    },
    {
      title: "OUTSOURCING",
      text: [
        "Nuestros servicios de outsourcing, permiten una prestación más eficiente de determinadas actividades, concediendo al administrador de más tiempo para centrarse en los aspectos claves de la convivencia de la propiedad.",
        "Contamos con el mejor recurso humano en las áreas de revisoría fiscal, contable, jurídica, suministro de personal de mantenimiento, aseo y vigilancia, asesoramiento en informática, software, seguridad y salud en el trabajo y otros servicios especializados.",
      ],
      image: "/src/assets/pexels-pavel-danilyuk-8112172.jpg",
    },
    {
      title: "REVISORÍA FISCAL",
      text: [
        "Nuestros profesionales especialistas en Revisoría Fiscal, ejercen inspección y vigilancia de la copropiedad, velando, en todo momento, por el cumplimiento de las leyes, normas y de las decisiones de los órganos de administración, y dan fe pública al respecto.",
      ],
      image: "/src/assets/pexels-pixabay-48148.jpg",
    },
  ];

  return (
    <>
      <main className="flex flex-col md:flex-row bg-white mt-20 h-auto md:h-3/6">
        <div className="hidden md:block md:w-1/4">
          <AsideMenu />
        </div>
        <div className="bg-white flex-1 p-4 md:p-10 overflow-hidden">
          <h1 className="text-4xl font-bold mb-8 md:mb-16 mt-8 text-primary">
            Nuestros Servicios
          </h1>
          <div className="h-auto md:h-[40rem] space-y-8 overflow-auto">
            <Link
              to="/modelo-de-gestion"
              className="flex flex-col md:flex-row items-start gap-6 cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:bg-gray-100 p-4 rounded-md"
            >
              <img
                src="/src/assets/pexels-mohamed-hamdi-510308652-16282306.jpg"
                alt="MODELO DE GESTIÓN"
                className="w-full md:w-64 h-48 object-cover rounded-md"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-primary">
                  MODELO DE GESTIÓN
                </h2>
                <p className="text-tertiary">
                  En la actualidad un conjunto residencial no debe contar con un
                  simple administrador. Los tiempos modernos exigen de las
                  unidades residenciales, el liderazgo de un gerente que
                  gestione de manera integral.
                </p>
              </div>
            </Link>
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start gap-6 cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:bg-gray-100 p-4 rounded-md"
                onClick={() => toggleExpand(index)}
              >
                <img
                  src={servicio.image}
                  alt={servicio.title}
                  className="w-full md:w-64 h-48 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-primary">
                    {servicio.title}
                  </h2>
                  <p
                    className={`text-tertiary transition-all duration-300 ${
                      expanded[index] ? "" : "line-clamp-3"
                    }`}
                  >
                    {servicio.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Servicios;