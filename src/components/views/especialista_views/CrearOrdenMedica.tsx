function CrearOrdenMedica() {
  return (
    <div className="flex h-full px-44 bg-white">
      <div className="w-1/2 p-10">
        <h2 className="text-3xl font-semibold mb-6">Crear orden Medica</h2>

        <form className="space-y-4">
          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="fechaSolicitud"
            >
              Fecha de Solicitud
            </label>
            <input
              id="fechaSolicitud"
              type="date"
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="descripcion"
            >
              Descripción
            </label>
            <textarea
              id="descripcion"
              placeholder="Descripcion"
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-24"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="prioridad">
              Prioridad
            </label>
            <select
              id="prioridad"
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Prioridad</option>
              <option>Alta</option>
              <option>Media</option>
              <option>Baja</option>
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="medicoResponsable"
            >
              Médico Responsable
            </label>
            <input
              id="medicoResponsable"
              type="text"
              placeholder="Médico o especialista"
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2" htmlFor="notas">
              Notas
            </label>
            <textarea
              id="notas"
              placeholder="Notas"
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-16"
            />
          </div>
        </form>
      </div>

      <div className="w-1/2 flex flex-col items-center justify-between">
        <img
          src="..\..\src\assets\img\logos\LogoSanavit(Mediana).png"
          alt="Logo"
          className="w-1/2 mx-auto mt-72 "
        />
        <div className="w-full flex justify-center mb-10">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-16 rounded-xl "
          >
            Guardar Orden
          </button>
        </div>
      </div>
    </div>
  );
}

export default CrearOrdenMedica;
