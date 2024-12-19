// src/pages/Contacto.jsx
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import AsideMenu from "../components/AsideMenu";
import Footer from "../components/Footer";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <div>
      <AsideMenu />
      <div className=" bg-white ml-0 mt-24 mb-52 md:ml-80">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h1 className="text-4xl font-bold text-[#1a365d] mb-10">
                Contáctanos
              </h1>
              <form onSubmit={handleSubmit} className="space-y-6 bg-secondary p-10 rounded-xl">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg bg-[#F3F4F6] border-0 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tu correo electrónico"
                    className="w-full px-4 py-3 rounded-lg bg-[#F3F4F6] border-0 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="6"
                    placeholder="Tu mensaje"
                    className="w-full px-4 py-3 rounded-lg bg-[#F3F4F6] border-0 focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a365d] text-white py-3 px-6 rounded-lg hover:bg-[#2a466d] transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="p-3 bg-[#F3F4F6] rounded-lg">
                  <Mail className="w-6 h-6 text-[#1a365d]" />
                </div>
                <div>
                  <a
                    href="mailto:servicepropiedadhorizontal@gmail.com"
                    className="text-[#1a365d] hover:underline"
                  >
                    servicepropiedadhorizontal@gmail.com
                  </a>
                  <p className="text-sm text-gray-500">
                    No additional information available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="p-3 bg-[#F3F4F6] rounded-lg">
                  <MapPin className="w-6 h-6 text-[#1a365d]" />
                </div>
                <div>
                  <h3 className="text-[#1a365d]">Facatativá - Cundinamarca</h3>
                  <p className="text-sm text-gray-500">Location</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="p-3 bg-[#F3F4F6] rounded-lg">
                  <Phone className="w-6 h-6 text-[#1a365d]" />
                </div>
                <div>
                  <h3 className="text-[#1a365d]">
                    310 5506172 - (031) 891 3204
                  </h3>
                  <p className="text-sm text-gray-500">Contact Number</p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img
                  src="https://via.placeholder.com/800x400"
                  alt="Location Map"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
