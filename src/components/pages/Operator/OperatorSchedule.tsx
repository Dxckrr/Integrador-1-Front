

/** bg-gradient-to-r from-white to-[#EFF0F1]
 * This section contains tha main page
 * @returns {Component} Dashboard
 */
const inputActive = "border-gray-400 border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full"
const div = "flex-col w-2/5 mr-10 mt-5"

const OperatorSchedule = () => {
  return (
    <>
      <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] p-6">

        <div className="h-full w-4/5">
          <div className="flex justify-center mt-10">
            <h1 className="font-bold text-2xl">Agendamiento de cita</h1>
          </div>
          
          <section className="mt-5 mb-11">
            <div>
              <h2 className="font-normal text-lg">Tipo de cita</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Servicio</label>
                <select className={inputActive} name={"Servicio"}>
                  <option>Fisioterapia</option>
                </select>
              </div>
              <div className={div}>
                <label className="text-lg">Especialista</label>
                <select className={inputActive} name={"Especialista"}>
                  <option>John Doe</option>
                </select>
              </div>
            </div>
          </section>
          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">Fecha y hora</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Fecha</label>
                <input className={inputActive} type="date" name={"Fecha"}/>
              </div>
              <div className={div}>
                <label className="text-lg">Horas disponibles</label>
                <select className={inputActive} name={"Hora"}>
                  <option>00:00</option>
                </select>
              </div>
            </div>
          </section>
          
          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">Información personal</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Nombres</label>
                <input className={inputActive} type="text" name={"Nombres"} placeholder="Escribir..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Apellidos</label>
                <input className={inputActive} type="text" name={"Apellidos"} placeholder="Escribir..."/>
              </div>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Número de documento</label>
                <input className={inputActive} type="text" name={"Documento"} placeholder="Escribir..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Número de teléfono</label>
                <input className={inputActive} type="text" name={"Telefono"} placeholder="Escribir..."/>
              </div>
            </div>
            <div className={div}>
              <label className="text-lg">Correo electrónico</label>
              <input className={inputActive} type="text" name={"Correo"} placeholder="Escribir..."/>
            </div>

          </section>
          <div className="grid justify-items-end w-full">
            <button className="bg-gradient-to-br from-[#0F6AEF] to-[#009EE2] hover:bg-gradient-to-r from-[#0F6AEF] to-[#009EE2] text-white text-2xl py-2 px-4 rounded-lg">
              Confirmar
            </button>
          </div>
          
        </div>
      
      </main>
    </>
  );
};
export default OperatorSchedule;