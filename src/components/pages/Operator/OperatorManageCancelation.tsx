import { useState } from "react";
import SimpleTableCancelation from "../../views/operator/SimpleTableCancelation";
import CancelModal from "../../ui/operator/CancelModal";

const inputActive =
  "border-gray-300 bg-white border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full";
const div = "flex-col w-1/3 mr-10 mt-5";

const OperatorCancelation = () => {
  const [modalOpen, isModalOpen] = useState<boolean>(false);
  const [idAppointment, setIdAppointment] = useState<number>();

  return (
    <>
      {modalOpen && <CancelModal isModalOpen={isModalOpen} idAppointment={idAppointment} />}

      <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] p-6">
        <div className="h-full w-4/5">
          <div className="flex justify-center mt-10">
            <h1 className="font-bold text-2xl">Cancelación de cita</h1>
          </div>
          <section className="mt-5">
            <h2 className="font-normal text-lg">Buscar cita por:</h2>
            <hr className="border-t border-gray-700"></hr>
          </section>
          <SimpleTableCancelation isModalOpen={isModalOpen} setIdAppointment={setIdAppointment}/>
        </div>
      </main>
    </>
  );
};
export default OperatorCancelation;
