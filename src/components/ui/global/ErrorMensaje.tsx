import { useState, useEffect } from "react";

const ErrorMessage = () => {
  const [showError, setShowError] = useState(true);

  // Hacer que el mensaje desaparezca después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, []);

  if (!showError) return null; // Si no hay error, no mostrar nada

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <article className="bg-red-50 border-l-4 border-red-600 p-4 rounded-md shadow-md">
        <h3 className="text-red-600 text-2xl">
          <span className="font-bold">Ha ocurrido un error </span> en el
          agendamiento
        </h3>
        <p className="text-red-800 font-semibold mt-2">Revisa tus datos</p>
      </article>
    </div>
  );
};

export default ErrorMessage;
