const Satisfaccion = () => {
  return (
    <div className="min-h-screen flex p-20 ">
      <div className="w-2/5 bg-[#F7F7F7] p-8 flex flex-col justify-center items-start rounded-xl border-[#4F7594]">
        <h2 className="text-[#0F6AEF] text-2xl font-bold mb-6">
          Encuesta de Satisfacción
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Tu opinión es importante para nosotros. Por favor, llena este breve
          formulario.
        </p>

        {/* Pregunta 1 */}
        <div className="mb-4 w-full">
          <label className="text-gray-600 text-sm block mb-2">
            ¿Cómo calificarías nuestro servicio?
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
            <option>Excelente</option>
            <option>Bueno</option>
            <option>Regular</option>
            <option>Malo</option>
          </select>
        </div>

        {/* Pregunta 2 */}
        <div className="mb-4 w-full">
          <label className="text-gray-600 text-sm block mb-2">
            ¿Recomendarías nuestros servicios?
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
            <option>Sí</option>
            <option>No</option>
          </select>
        </div>

        {/* Pregunta 3 */}
        <div className="mb-4 w-full">
          <label className="text-gray-600 text-sm block mb-2">
            Comentarios adicionales
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
            rows={4}
            placeholder="Déjanos tus comentarios"
          ></textarea>
        </div>

        {/* Botón de envío */}
        <button className="bg-[#0F6AEF] text-white px-6 py-2 rounded-md hover:bg-blue-800 text-sm">
          Enviar
        </button>
      </div>

      {/* Columna derecha para el logo */}
      <div className="w-3/5 flex justify-center items-center bg-white">
        <img
          src=".\..\src\assets\img\logos\LogoSanavit(Mediana).png"
          alt="Logo"
          className="w-1/3"
        />
      </div>
    </div>
  );
};

export default Satisfaccion;
