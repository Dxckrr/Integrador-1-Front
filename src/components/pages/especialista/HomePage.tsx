import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 h-[calc(100vh-56px)] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
      ></div>
      <div className="relative z-10 text-center p-5">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Bienvenido al Sistema de Sevicio Especialista
        </h1>
        <p className="text-lg md:text-xl mb-8">
          "La medicina musculoesquelética es la clave para una vida activa y
          saludable."
        </p>
        <a
          href="/especialista/buscar"
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Comienza a navegar
        </a>
      </div>

      {/* Corazón que late */}
      <div className="absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-pulse text-6xl">
          <span className="text-red-600">❤️</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
