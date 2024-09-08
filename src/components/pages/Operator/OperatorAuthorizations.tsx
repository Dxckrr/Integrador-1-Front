const inputActive = "border-gray-400 border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full"
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
        </div>
      </main>
    </>
  );
};
export default OperatorAuthorizations;