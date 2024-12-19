// src/pages/Clientes.jsx
import AsideMenu from "../components/AsideMenu";
import Footer from "../components/Footer";
const clients = [
  {
    id: 1,
    name: "CONJUNTO CAMPESTRE ALTOS DEL BOSQUE",
    image: "/public/assets/ALTOS DEL BOSQUE.jpeg",
  },
  {
    id: 2,
    name: "PARQUE RESIDENCIAL EL OASIS",
    image: "/public/assets/OASIS.jpeg",
  },
  {
    id: 3,
    name: "CONJUNTO RESIDENCIAL PARQUES DE SANTA HELENA",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 4,
    name: "URBANIZACION LA CAMPAÑITA",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 5,
    name: "CONJUNTO RESIDENCIAL PROVENZA IMPERIAL",
    image: "/public/assets/PROVENZA.jpeg",
  },
  {
    id: 6,
    name: "INDE IPS",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 7,
    name: "EMMANUEL IPS",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 8,
    name: "CONJUNTO ABADÍA SAN RAFAEL",
    image: "https://via.placeholder.com/400x300",
  },
];
const Clientes = () => {
  return (
    <div>
    <div className="flex flex-row">
      <AsideMenu />
      <div className="container md:ml-80 px-4 py-12 pb-28 mt-0">
      <h1 className="text-3xl mt-10 md:mt-0 md:text-4xl font-bold text-[#1a365d] mb-11">
        Nuestros Clientes
      </h1>
      <h2 className="text-2xl md:text-3xl text-[#1a365d] mb-8">
        Confian en Nosotros
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="flex flex-col">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-[#1a365d] font-medium text-lg text-center">
              {client.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
    </div>
     <Footer />
    </div>
  );
};

export default Clientes;
