import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Header/>
      <hero className="flex flex-row justify-evenly items-center py-12 h-[526px] bg-secondary mt-20">
        <div className="flex flex-col w-3/12">
          <h1 className="text-md font-semibold tracking-wide text-primary">
            Service PH
          </h1>
          <h2 className="text-5xl font-bold tracking-tighter mt-2 text-[#113F67]">
            Especialistas en propiedad horizontal
          </h2>
          <p className="text-lg text-[#141C24]] mt-10">
            Descubre un modelo de gestión integral especializado en propiedad
            horizontal que se adapta a las necesidades de tu comunidad.
          </p>
          <button className="bg-[#113F67] text-white px-3 py-2 rounded-full mt-10 hover:bg-[#133E87]">
            Más información
          </button>
        </div>
        <div>
          <figure className="h-[506px] w-auto flex items-center justify-center gap-20">
            <img
              src="/public/assets/hero1.svg"
              alt="Hero Image"
              className="object-contain"
            />
          </figure>
        </div>
      </hero>

      <main>
        <section className="py-20 px-60">
          <div className="flex flex-row justify-between mb-0">
            <div className="flex flex-col gap-10 w-2/4">
              <h2 className="text-5xl font-extrabold text-primary">
                ~ Sobre Nosotros
              </h2>
              <p className="px-14 py-5 bg-secondary text-xl rounded-3xl mt-12 text-primary">
                Service Propiedad Horizontal es una empresa especializada en la
                gestión integral de comunidades y propiedades, comprometida con
                elevar los estándares de calidad en cada servicio que ofrecemos.
              </p>
            </div>
            <figure className="w-1/4 mr-20">
              <img
                className="w-full"
                src="/public/assets/5057948.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="flex flex-row justify-between items-center">
            <figure className="w-1/4 ml-32">
              <img
                className="w-full"
                src="/public/assets/3074334.jpg"
                alt=""
              />
            </figure>
            <div className="flex flex-col gap-10 w-2/4">
              <p className="px-14 py-5 bg-secondary text-xl rounded-3xl mt-0 text-primary">
                Nuestra trayectoria está respaldada por un equipo de expertos en
                administración, contabilidad, auditoría, recuperación de cartera
                y servicios de aseo, quienes trabajan con un enfoque riguroso y
                orientado a resultados. Nos destacamos por nuestra capacidad
                para adaptarnos a las necesidades particulares de cada
                comunidad, aplicando procesos eficientes y soluciones
                innovadoras que garantizan una operación transparente,
                organizada y en constante mejora. En Service Propiedad
                Horizontal, nuestra prioridad es brindar un servicio que no solo
                solucione problemas, sino que mejore la calidad de vida de los
                residentes y asegure el bienestar financiero y administrativo de
                las propiedades que gestionamos.
              </p>
            </div>
          </div>
        </section>
        <section className=" py-20  flex flex-col bg-accent px-60">
          <div className="flex flex-row">
            <div className="w-3/4 bg-primary flex flex-col gap-10 px-10 py-20 rounded-2xl">
              <h2 className="text-5xl font-medium text-accent">Misión</h2>
              <p className="text-secondary text-lg">
                En Service Propiedad Horizontal, transformamos la administración
                de comunidades en una experiencia eficiente y transparente,
                impulsada por la innovación y la excelencia. Nos dedicamos a
                crear entornos que fomenten la convivencia armónica, el
                bienestar de las familias y el crecimiento sostenible de los
                espacios que gestionamos. Creemos en la importancia de
                anticiparnos a las necesidades de nuestros clientes, ofreciendo
                soluciones personalizadas que aporten valor y tranquilidad a
                cada uno de los residentes que confían en nosotros. Con un
                equipo comprometido y apasionado, llevamos el manejo de la
                propiedad horizontal al siguiente nivel, superándosela los
                estándares tradicionales del sector.
              </p>
            </div>
            <figure className="w-1/4 ml-32">
              <img src="" alt="" />
            </figure>
          </div>
          <div className="flex flex-row mt-10">
            <figure className="w-1/4 ml-32">
              <img src="" alt="" />
            </figure>
            <div className="w-3/4 bg-primary flex flex-col gap-10 px-10 py-20 rounded-2xl">
              <h2 className="text-5xl font-medium text-accent">Visión</h2>
              <p className="text-secondary text-lg">
                Service Propiedad Horizontal se proyecta hacia un futuro de
                innovación, confianza y eficiencia en la administración de
                propiedades. Aspira a ser el referente en el sector,
                ofreciéndooslos soluciones vanguardistas que mejoren la
                experiencia de los residentes y el entorno comunitario. La
                empresa busca ser reconocida no solo por su excelencia en
                gestión, sino también por su capacidad de anticiparse a las
                tendencias globales en administración y sostenibilidad,
                integrando tecnologías inteligentes y prácticas responsables.
              </p>
              <p className="text-secondary text-lg">
                La visión es convertirse en la primera opción para quienes
                buscan una administración que combine compromiso, cercanía y
                profesionalismo, creándooslos espacios seguros y prósperos. A
                medida que cree, Service Propiedad Horizontal desea ser un
                catalizador de cambio positivo, promoviendo comunidades más
                unidas, organizadas y residentes, dejándooslas una huella
                duradera en cada propiedad gestionada.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
