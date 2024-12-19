import React, { useState } from "react";
import { Home, Package, AtSign, Menu, X, Users } from "lucide-react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  // Simulating current page - in a real app this would come from router
  const [currentPage, setCurrentPage] = useState("servicios");

  const menuItems = [
    { id: "inicio", label: "Inicio", icon: <Home className="w-5 h-5" /> },
    {
      id: "servicios",
      label: "Servicios",
      icon: <Package className="w-5 h-5" />,
    },
    { id: "clientes", label: "Clientes", icon: <Users className="w-5 h-5" /> },
    { id: "contacto", label: "Contacto", icon: <AtSign className="w-5 h-5" /> },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md md:hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white w-80 shadow-lg transform transition-transform duration-300 ease-in-out z-40 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 p-4 border-b">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <Package className="w-5 h-5 text-gray-600" />
          </div>
          <span className="text-lg font-semibold text-[#1a365d]">
            Service PH
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.id === "inicio" ? "/" : `/${item.id}`}
              onClick={() => setCurrentPage(item.id)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                ${
                  currentPage === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              {item.icon}
              <Link to={item.id === "inicio" ? "/" : `/${item.id}`}>{item.label}</Link>
            </a>
          ))}
        </nav>

        {/* More Information Button */}
        <div className="absolute bottom-32 left-4 right-4">
          <button className="w-full py-3 px-4 bg-[#1a365d] text-white rounded-lg hover:bg-[#2a466d] transition-colors">
            Más Información
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default Sidebar;
