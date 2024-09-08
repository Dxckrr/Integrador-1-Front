
/** bg-gradient-to-r from-white to-[#EFF0F1]
 * This section contains tha main page
 * @returns {Component} Dashboard
 */
const inputActive = "border-gray-400 border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full"
const div = "flex-col w-1/3 pr-10 mt-5"


const OperatorRegister = () => {
  return (
    <>
      <main className="h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] p-6">

        <div className="h-full w-4/5">
          <div className="flex justify-center">
            <h1 className="font-bold text-2xl mr-">Registrar usuario</h1>
          </div>

          <section className="mt-5 mb-11">
            <div>
              <h2 className="font-normal text-lg">Información personal</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Nombres</label>
                <input className={inputActive} type="text" name={"Nombres"} placeholder="Nombres del paciente..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Apellidos</label>
                <input className={inputActive} type="text" name={"Apellidos"} placeholder="Apellidos del paciente..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Número de documento</label>
                <input className={inputActive} type="text" name={"Documento"} placeholder="Documento del paciente..."/>
              </div>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Género</label>
                <select className={inputActive} name={"Genero"}>
                  <option>Masculino</option>
                  <option>Femenino</option>
                </select>
              </div>
              <div className={div}>
                <label className="text-lg">Número de teléfono</label>
                <input className={inputActive} type="text" name={"Telefono"} placeholder="Escribir..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Dirección</label>
                <input className={inputActive} type="text" name={"Direccion"} placeholder="Escribir..."/>
              </div>
            </div>
          </section>

          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">Información de EPS</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">EPS</label>
                <input className={inputActive} type="text" name={"EPS"} placeholder="Escribir..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Número de afiliación</label>
                <input className={inputActive} type="date" name={"NumAfiliacion"}/>
              </div>
              <div className={div}>
                <label className="text-lg">Tipo de afiliación</label>
                <select className={inputActive} name={"TipoAfiliacion"}>
                  <option> </option>
                  <option>Contributivo</option>
                  <option>Subsidiado</option>
                </select>
              </div>
            </div>
            <div className={div}>
                <label className="text-lg">Plan de salud</label>
                <select className={inputActive} name={"PlanDeSalud"}>
                  <option> </option>
                  <option>Básico</option>
                  <option>Complementario</option>
                </select>
              </div>
          </section>
          
          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">Contacto de emergencia</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Nombres</label>
                <input className={inputActive} type="text" name={"NombresContactoEmergencia"} placeholder="Contacto de emergencia..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Apellidos</label>
                <input className={inputActive} type="text" name={"ApellidosContactoEmergencia"} placeholder="Contacto de emergencia..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Número de teléfono</label>
                <input className={inputActive} type="text" name={"TelefonoContactoEmergencia"} placeholder="Contacto de emergencia..."/>
              </div>
            </div>
            <div className={div}>
                <label className="text-lg">Relación del paciente</label>
                <input className={inputActive} type="text" name={"RelacionConPaciente"} placeholder="Escribir..."/>
              </div>
          </section>
          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">Salud mental</h2>
              <hr className="border-t border-gray-700"></hr>
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
export default OperatorRegister;