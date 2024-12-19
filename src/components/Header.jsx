import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.svg" 
              alt="Service PH Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-semibold text-[#1a365d]">
              SERVICE PH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/clientes" 
              className="text-gray-700 hover:text-[#1a365d] transition-colors"
            >
              Clientes
            </Link>
            <Link 
              to="/servicios" 
              className="text-gray-700 hover:text-[#1a365d] transition-colors"
            >
              Servicios
            </Link>
            <Link 
              to="/contacto" 
              className="bg-[#1a365d] text-white px-6 py-2 rounded-lg hover:bg-[#2a466d] transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/clientes" 
                className="text-gray-700 hover:text-[#1a365d] transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Clientes
              </Link>
              <Link 
                to="/servicios" 
                className="text-gray-700 hover:text-[#1a365d] transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                to="/contacto" 
                className="bg-[#1a365d] text-white px-6 py-2 rounded-lg hover:bg-[#2a466d] transition-colors inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

