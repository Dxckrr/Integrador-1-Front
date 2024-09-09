function HistoriaClinica() {
  return (
    <div className="flex flex-col h-full px-44 bg-white space-y-10 pb-24">
      <div className="p-10">
        <h1 className="text-3xl font-semibold mb-10">Historia Clínica</h1>

        <div className="flex flex-wrap justify-between mb-10 ">
          <div className="w-1/2 space-y-4">
            <h2 className="text-sm font-bold mb-4">Datos del paciente</h2>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="N. Identificación"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/2 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Sexo"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/2 py-2 px-3"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Edad"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/2 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Discapacidades"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/2 py-2 px-3"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Nombre"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/2 py-2 px-3"
              />
              <input
                type="date"
                placeholder="Fecha nacimiento"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/2 py-2 px-3"
              />
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center pt-8">
            <img
              src="..\..\src\assets\img\logos\LogoSanavit(Mediana).png"
              alt="VitaMed Logo"
              className="w-1/2"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between mb-10">
          <div className="w-full space-y-4">
            <h2 className="text-sm font-bold mb-4">Consulta</h2>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Profesional"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/4 py-2 px-3"
              />
              <input
                type="date"
                placeholder="Fecha"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/4 py-2 px-3"
              />
              <input
                type="time"
                placeholder="Hora"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/4 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Especialidad"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/4 py-2 px-3"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Sede"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/2 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Motivos de Consulta"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/2 py-2 px-3"
              />
            </div>
            <textarea
              placeholder="Descripción"
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 h-24"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between mb-10">
          <div className="w-full space-y-4">
            <h2 className="text-sm font-bold mb-4">Signos vitales</h2>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Presión arterial"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Presión arterial media"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Pulso"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Frecuencia cardíaca"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/4 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Saturación de oxígeno"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/4 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Talla (cm)"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/4 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Peso"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/4 py-2 px-3"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between mb-10">
          <div className="w-full space-y-4">
            <h2 className="text-sm font-bold mb-4">Antecedentes</h2>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Perinatales"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Patológicos"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Quirúrgicos"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/3 py-2 px-3"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Medicamentos"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/4 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Alergias"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/4 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Traumatismos"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/4 py-2 px-3"
              />
              <input
                type="text"
                placeholder="Vacunas"
                className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-1/4 py-2 px-3"
              />
            </div>
            <textarea
              placeholder="Observaciones"
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 h-24"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between mb-10">
          <div className="w-full space-y-4">
            <h2 className="text-sm font-bold mb-4">Ordenes Clínicas</h2>
            <textarea
              placeholder="Escriba sus ordenes clínicas aquí..."
              className="border bg-[#E8EDF2] text-[#4F7594] rounded-xl w-full py-2 px-3 h-24"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-16 rounded-xl ">
            Guardar historia clinica
          </button>
        </div>
      </div>
    </div>
  );
}

export default HistoriaClinica;
