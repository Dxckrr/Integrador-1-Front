import PDFICON from "../../../assets/img/others/pdfIcon.png"

const inputActive = "border-gray-300 bg-white border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full"
const div = "flex-col w-2/5 mr-10 mt-5"

const OperatorAuthorizations = () => {
  return (
    <>
      <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] p-6">
        <div className="h-full w-4/5">
          <div className="flex justify-center mt-10">
            <h1 className="font-bold text-2xl">Autorizaciones</h1>
          </div>
          <section className="mt-5 mb-10">
            <div>
              <h2 className="font-normal text-lg">Buscar orden</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Documento</label>
                <input className={inputActive} type="text" name={"Documento"} placeholder="Escribir..."/>
              </div>
              <div className={div}>
                <label className="text-lg">Número de orden</label>
                <input className={inputActive} type="text" name={"IDOrden"} placeholder="Escribir..."/>
              </div>
            </div>
            <hr className="border-t border-gray-700 mt-10"></hr>
          </section>

          <div className="bg-white shadow-customButton rounded-3xl w-full mt-8 p-10">
            <h2 className="text-xl font-bold text-center">Orden médica</h2>
            <div className="flex flex-col">
              <div className="flex mt-2 mb-3">
                <label className="text-xl w-52">Fecha de solicitud:</label>
                <label className="text-xl font-light">10/09/2024</label>
              </div>
              <div className="flex my-1">
                <label className="text-xl w-52">Médico responsable:</label>
                <label className="text-xl font-light">Carlos Sainz</label>
              </div>
              <div className="flex my-3">
                <label className="text-xl w-52">Paciente:</label>
                <label className="text-xl font-light">John Doe</label>
              </div>
              <div className="flex my-4">
                <label className="text-xl w-52 flex-shrink-0">Descripción:</label>
                <span className="text-xl font-light">Monitorización de presión arterial diaria por 7 días.
                  Realización de análisis de sangre (hemograma completo, perfil lipídico, función renal) en laboratorio autorizado.
                  Iniciar tratamiento con Lisinopril 10 mg 1 vez al día, por 30 días.
                  Restricción de sal en la dieta.
                  Control médico en 15 días.
                </span>
              </div>
              <div className="flex my-4">
                <label className="text-xl w-52 flex-shrink-0">Notas:</label>
                <span className="text-xl font-light">En caso de que la presión arterial no se controle adecuadamente con el medicamento prescrito, considerar ajuste de dosis en la próxima consulta.
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-7">
            <div className="w-40"></div>
            <button className="bg-gradient-to-br from-[#0F6AEF] to-[#009EE2]
              hover:bg-gradient-to-r from-[#0F6AEF] to-[#009EE2] text-white text-xl py-2 rounded-full w-40">
                Autorizar
            </button>
            <button className="w-40 shadow-customButton rounded-xl bg-white flex justify-center items-center hover:bg-slate-100">
              <p className="text-xl font-light">Descargar</p>
              <img src={PDFICON} className="h-8 ml-2"></img>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default OperatorAuthorizations;