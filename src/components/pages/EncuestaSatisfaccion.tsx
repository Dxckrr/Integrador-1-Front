const Satisfaccion = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-1/3 bg-[#F7F7F7] p-6 flex flex-col justify-center items-start rounded-xl border-[#4F7594] shadow-lg">
        <h2 className="text-[#0F6AEF] text-xl font-bold mb-4">
          Encuesta de Satisfacción
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Tu opinión es importante para nosotros. Por favor, llena este breve
          formulario.
        </p>

        {/* Pregunta 1 */}
        <div className="mb-3 w-full">
          <label className="text-gray-600 text-sm block mb-1">
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
        <div className="mb-3 w-full">
          <label className="text-gray-600 text-sm block mb-1">
            ¿Recomendarías nuestros servicios?
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
            <option>Sí</option>
            <option>No</option>
          </select>
        </div>

        {/* Pregunta 3 */}
        <div className="mb-3 w-full">
          <label className="text-gray-600 text-sm block mb-1">
            Comentarios adicionales
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
            rows={3}
            placeholder="Déjanos tus comentarios"
          ></textarea>
        </div>

        {/* Botón de envío */}
        <button className="bg-[#0F6AEF] text-white px-4 py-2 rounded-md hover:bg-blue-800 text-sm">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Satisfaccion;
