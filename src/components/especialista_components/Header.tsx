import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 px-14 w-full flex items-center justify-between border-b-2">
      <div className="flex items-center">
        <div className="w-52 h-full">
          <img
            src="LogoSanavit(Mediana).png"
            alt="Logo"
            className="h-16 w-full object-contain"
          />
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <nav className="flex space-x-8">
          <a className="hover:text-primary duration-300" href="/Especialista">
            Inicio
          </a>
          <a
            className="hover:text-primary duration-300"
            href="/Especialista/Buscar"
          >
            Pacientes
          </a>
          <a
            className="hover:text-primary duration-300"
            href="/Especialista/citas"
          >
            Citas
          </a>
        </nav>

        <div className="w-12 h-full rounded-full bg-white">
          <img
            src="user.png"
            alt="Profile"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
