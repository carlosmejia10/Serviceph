import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 bg-white flex flex-row justify-between w-full px-4 py-5">
      <img className="h-10 w-auto" src="/public/assets/astro.svg" alt="Astro Logo" />
      <nav className="flex flex-col items-center justify-between text-align-middle md:flex-row h-10 w-96 mx-10">
        <Link to="/" className="font-bold text-2xl text-white">
          <img src="" alt="" />
          Logo
        </Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto" className="rounded-xl bg-[#113F67] text-white px-3 py-2 hover:bg-[#133E87]">
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Header;