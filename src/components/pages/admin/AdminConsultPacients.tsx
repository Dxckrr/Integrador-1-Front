import SimpleTablePacientInfo from "../../views/Admin/SimpleTablePacientInfo";


const AdminConsultPatients = () => {
    return (
      <>
        <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] p-6">
          <div className="h-full w-4/5">
            <div className="flex justify-center mt-10 items-center flex-col">
              <h1 className="font-bold text-2xl">Consultar información</h1>
              <h1 className="text-primary-blue font-bold text-2xl">Pacientes</h1>
            </div>
            <section className="mt-5">
              <h2 className="font-normal text-lg">Buscar paciente</h2>
              <hr className="border-t border-gray-700"></hr>
          </section>
          <SimpleTablePacientInfo/>
          </div>
        </main>
      </>
    );
  };
  export default AdminConsultPatients;
  