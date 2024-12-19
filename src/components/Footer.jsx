const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-white py-8 relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2023 Service PH, Todos los derechos reservados
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:underline">
                ayuda
              </a>
              <a href="#" className="text-sm hover:underline">
                Contactanos
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
