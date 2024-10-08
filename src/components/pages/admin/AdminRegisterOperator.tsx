const inputActive = "border-gray-300 bg-white border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full"
const div = "flex-col w-1/3 pr-10 mt-5"

const AdminRegisterOperator = () => {
  return (
    <>
      <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] pb-10">

        <div className="h-full w-4/5">
          <div className="flex justify-center mt-10">
            <h1 className="font-bold text-2xl">Registrar Operador</h1>
          </div>

          <section className="mt-5 mb-11">
            <div>
              <h2 className="font-normal text-lg">Información personal</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Nombres y Apellidos</label>
                <input className={inputActive} type="text" name={"Nombres y Apellidos"} placeholder="Nombres del paciente..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Documento de Identidad</label>
                <input className={inputActive} type="text" name={"Documento de Identidada"} placeholder="Documento del paciente..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Género</label>
                <select className={inputActive} name={"Genero"}>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
              </div>
              </div>
              <div className="flex">
              <div className={div}>
                <label className="text-lg">Correo</label>
                <input className={inputActive} type="text" name={"TipoAfiliacion"}  placeholder="Escribir..."/>
                 

              </div>
              
            </div>
          </section>

          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">Informacion Administrativa</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Salario</label>
                <input className={inputActive} type="text" name={"EPS"} placeholder="Escribir..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Cargo</label>
                <input className={inputActive} type="text" name={"NumAfiliacion"} placeholder="Escribir..."/>
              </div>
              
            </div>
            
          </section>
          

          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">Direccion de Residencia</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Direccion de Domicilio</label>
                <input className={inputActive} type="text" name={"EPS"} placeholder="Escribir..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Departamento</label>
                <input className={inputActive} type="text" name={"NumAfiliacion"} placeholder="Escribir..." />
              </div>
              <div className={div}>
                <label className="text-lg">Ciudad</label>
                <input className={inputActive} type="text" name={"TipoAfiliacion"} placeholder="Escribir..."/>
    
              </div>
            </div>
            <div className={div}>
                <label className="text-lg">Telefono</label>
                <input className={inputActive} name={"PlanDeSalud"} placeholder="Escribir..."/>
              </div>
          </section>
          
          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">Datos de Contacto de emergencia</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Nombres Completos</label>
                <input className={inputActive} type="text" name={"NombresContactoEmergencia"} placeholder="Nombres..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Parentezco</label>
                <input className={inputActive} type="text" name={"ParentezcoContactoEmergencia"} placeholder="Parentezco..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Número de teléfono</label>
                <input className={inputActive} type="text" name={"TelefonoContactoEmergencia"} placeholder="Telefono   de emergencia..."/>
              </div>
            </div>
            <div className={div}>
                <label className="text-lg">Relación del paciente</label>
                <input className={inputActive} type="text" name={"RelacionConPaciente"} placeholder="Escribir..."/>
              </div>
          </section>
          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg">Informacion de Contacto</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
            <div className={div}>
                <label className="text-lg">Número de teléfono</label>
                <input className={inputActive} type="text" name={"Telefono"} placeholder="Escribir..."/>
              </div>
            <div className={div}>
                <label className="text-lg">Correo electrónico</label>
                <input className={inputActive} type="email" name={"Correo electronico"} placeholder="Escribir..."/>
              </div>
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
export default AdminRegisterOperator;