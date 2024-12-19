import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col mt-20">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">
            MODELO DE GESTIÓN
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            En la actualidad un conjunto residencial no debe contar con un
            simple administrador. Los tiempos modernos exigen de las unidades
            residenciales, el liderazgo de un gerente que gestione de manera
            integral. Un profesional que no solo se encargue de cobrar las
            cuotas por concepto de administración, sino que vaya mas allá,
            asesorando, planeando y ejecutando, de manera eficaz, cada uno de
            los recursos de los copropietarios.
          </p>
        </section>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Service 1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#1a365d]">
              GESTIÓN INTEGRAL
            </h3>
            <p className="text-gray-600">
              Somos una agencia dedicada a prestar servicios especializados e
              integrales en la administración de propiedad horizontal
              propendiendo siempre por la seguridad, aumento patrimonial, y la
              confianza de cada uno de los copropietarios, garantizando el
              cumplimiento de la legislación vigente, con el respaldo constante
              de un grupo de profesionales especializados en las diferentes
              áreas.
            </p>
            <div className="relative h-[17rem] rounded-lg overflow-hidden">
              <img
                src="/public/assets/pexels-yankrukov-7698836.jpg"
                alt="Gestión Integral"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#1a365d]">
              GESTIÓN CONTABLE Y FINANCIERA
            </h3>
            <p className="text-gray-600">
              Manejo del área financiera, cumpliendo con lo establecido en la
              ley y la normatividad contable vigente. Suministramos
              periódicamente al Consejo de Administración o a la Revisoría
              Fiscal los reportes contables y la actualidad financiera de la
              propiedad.
            </p>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="/public/assets/pexels-serpstat-177219-572056.jpg"
                alt="Gestión Contable"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Service 3 - Full Width */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold text-[#1a365d]">
              ASESORÍA JURÍDICA
            </h3>
            <p className="text-gray-600">
              Realizamos el recaudo de la cartera morosa de la Unidad
              Residencial, elaboración y/o modificación Reglamento de Propiedad
              Horizontal y Manual de Convivencia, brindar asesoría y respaldo en
              lo referente a Asambleas Generales, solución de conflictos
              inmobiliarios, revisión de contratos, expedición de conceptos,
              elaboración y contestación de querellas, tutelas, acciones
              populares.
            </p>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="/public/assets/pexels-karolina-grabowska-7876093.jpg"
                alt="Asesoría Jurídica"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
