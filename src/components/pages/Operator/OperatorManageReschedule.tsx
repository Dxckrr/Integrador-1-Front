import SimpleTableReschedule from "../../views/operator/SimpleTableReschedule";

const div = "flex-col w-1/3 mr-10 mt-5"

const OperatorReschedule = () => {
  return (
    <>
      <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] p-6">
        <div className="h-full w-4/5">
          <div className="flex justify-center mt-10">
            <h1 className="font-bold text-2xl mr-">Reagendamiento de cita</h1>
          </div>
          <section className="mt-5">
              <h2 className="font-normal text-lg">Buscar cita por:</h2>
              <hr className="border-t border-gray-700"></hr>
          </section>
          <SimpleTableReschedule/>
        </div>
      </main>
    </>
  );
};
export default OperatorReschedule;