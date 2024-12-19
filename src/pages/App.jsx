import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-evenly gap-12">
            {/* Hero Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="inline-block text-sm md:text-base font-semibold tracking-wide text-primary mb-4">
                SERVICE PH
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-6">
                Especialistas en
                <br />
                Propiedad Horizontal
              </h1>
              <p className="text-base md:text-lg text-black max-w-xl mx-auto lg:mx-0 mb-8">
                Descubre un modelo de gestión integral especializado en
                propiedad horizontal que se adapta a las necesidades de tu
                comunidad.
              </p>
              <button className="bg-[#113F67] text-white px-8 py-3 rounded-full hover:bg-tertiary transition-colors">
                Más Información
              </button>
            </div>

            {/* Hero Image */}
            <div className="w-9/12 lg:w-4/12">
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="/public/assets/servicephhero.svg"
                    alt="Área de piscina"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative shape */}
                <div className="absolute inset-0 bg-[url('/assets/blob-shape.svg')] bg-no-repeat bg-contain bg-center pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* About Us Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16">
              {/* First Row */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="w-full lg:w-3/5">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#113F67] mb-8">
                    ~ Sobre nosotros
                  </h2>
                  <div className="bg-secondary p-8 rounded-3xl">
                    <p className="text-lg md:text-xl text-primary">
                      Service Propiedad Horizontal es una empresa especializada
                      en la gestión integral de comunidades y propiedades,
                      comprometida con elevar los estándares de calidad en cada
                      servicio que ofrecemos.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/3">
                  <img
                    src="/public/assets/5057948.jpg"
                    alt="Sobre nosotros"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                <div className="w-full lg:w-1/3">
                  <img
                    src="/public/assets/3074334.jpg"
                    alt="Nuestro equipo"
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="w-full lg:w-3/5">
                  <div className="bg-secondary p-8 rounded-3xl">
                    <p className="text-lg text-primary">
                      Nuestra trayectoria está respaldada por un equipo de
                      expertos en administración, contabilidad, auditoría,
                      recuperación de cartera y servicios de aseo, quienes
                      trabajan con un enfoque riguroso y orientado a resultados.
                      Nos destacamos por nuestra capacidad para adaptarnos a las
                      necesidades particulares de cada comunidad, aplicando
                      procesos eficientes y soluciones innovadoras que
                      garantizan una operación transparente, organizada y en
                      constante mejora.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-[#F3F4F6] py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-12">
              {/* Mission */}
                      <div className="flex flex-col lg:flex-row items-start gap-12">
                      <div className="w-full lg:w-2/3">
                        <div className="bg-[#113F67] p-8 md:p-12 rounded-2xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
                          MISIÓN
                        </h2>
                        <p className="text-gray-100 text-lg">
                          En Service Propiedad Horizontal, transformamos la
                          administración de comunidades en una experiencia eficiente
                          y transparente, impulsada por la innovación y la
                          excelencia. Nos dedicamos a crear entornos que fomenten la
                          convivencia armónica, el bienestar de las familias y el
                          crecimiento sostenible de los espacios que gestionamos.
                          Creemos en la importancia de anticiparnos a las
                          necesidades de nuestros clientes, ofreciendo soluciones
                          personalizadas que aporten valor y tranquilidad a cada uno
                          de los residentes que confían en nosotros. Con un equipo
                          comprometido y apasionado, llevamos el manejo de la
                          propiedad horizontal al siguiente nivel, superándosela los
                          estándares tradicionales del sector.
                        </p>
                        </div>
                      </div>
                      <div className="w-full md:w-4/12 md:h-[24.5rem]">
                        <img
                        src="/public/assets/hand-presenting-model-house-home-loan-campaign.jpg"
                        alt="Modelo de casa"
                        className="w-full md:h-full rounded-2xl object-cover"
                        />
                      </div>
                      </div>

                      {/* Vision */}
              <div className="flex flex-col-reverse lg:flex-row items-start gap-12">
                <div className="w-full md:w-1/3 md:h-[31rem]">
                  <img
                    src="/public/assets/pexels-asphotograpy-101808.jpg"
                    alt="Llaves"
                    className="w-full md:h-full rounded-2xl object-cover"
                  />
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="bg-[#113F67] p-8 md:p-12 rounded-2xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
                      VISIÓN
                    </h2>
                    <div className="space-y-4 text-gray-100 text-lg">
                      <p>
                        Service Propiedad Horizontal se proyecta hacia un futuro
                        de innovación, confianza y eficiencia en la
                        administración de propiedades. Aspira a ser el referente
                        en el sector, ofreciéndooslos soluciones vanguardistas
                        que mejoren la experiencia de los residentes y el
                        entorno comunitario. La empresa busca ser reconocida no
                        solo por su excelencia en gestión, sino también por su
                        capacidad de anticiparse a las tendencias globales en
                        administración y sostenibilidad, integrando tecnologías
                        inteligentes y prácticas responsables.
                      </p>
                      <p>
                        La visión es convertirse en la primera opción para
                        quienes buscan una administración que combine
                        compromiso, cercanía y profesionalismo, creándooslos
                        espacios seguros y prósperos. A medida que cree, Service
                        Propiedad Horizontal desea ser un catalizador de cambio
                        positivo, promoviendo comunidades más unidas,
                        organizadas y residentes, dejándooslas una huella
                        duradera en cada propiedad gestionada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
