import { useForm } from "react-hook-form";
import { Emergency } from "../../../types/core/Emergency";
import { emergencyTypes } from "../../../utils/data/emergencyTypes";
import { add_emergency } from "../../../services/core/emergency.service";
import { useState } from "react";
import AppointmentModal from "../../ui/global/AppoinmentModal";
import ErrorMessage from "../../ui/global/ErrorMensaje";

const inputActive =
  "border-gray-300 border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full";
const div = "flex-col w-2/5 mr-10 mt-5";

const OperatorEmergencies = () => {
  const { register, handleSubmit } = useForm<Emergency>();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  /**
   * Submit's the form
   */
  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      const response = await add_emergency(data);
      if (response) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
      console.log("Error", e);
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  });

  return (
    <>
      {success && (
        <AppointmentModal
          title={"Emergencia Registrada !"}
          description={
            "Su emergencia ha sido registrada con exito, porfavor que el paciente continue"
          }
        />
      )}
      <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] p-6">
        <form onSubmit={onSubmit} className="h-full w-4/5">
          <div className="flex justify-center mt-10">
            <h1 className="font-bold text-2xl">Urgencias</h1>
          </div>
          {/* Contenedor */}
          <div className="bg-white shadow-customButton rounded-3xl w-full mt-8 p-10">
            <section className="mb-11">
              <div>
                <h2 className="font-normal text-lg">Información personal</h2>
                <hr className="border-t border-gray-700"></hr>
              </div>
              <div className={div}>
                <label className="text-lg">Documento</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Escribir..."
                  {...register("CC")}
                />
              </div>
              <div className="flex">
                <div className={div}>
                  <label className="text-lg">Nombres</label>
                  <input
                    className={inputActive}
                    type="text"
                    placeholder="Escribir..."
                    {...register("nombre")}
                  />
                </div>
                <div className={div}>
                  <label className="text-lg">Apellidos</label>
                  <input
                    className={inputActive}
                    type="text"
                    placeholder="Escribir..."
                    {...register("apellido")}
                  />
                </div>
              </div>
            </section>
            <section className="mb-11">
              <div>
                <h2 className="font-normal text-lg">Emergencia</h2>
                <hr className="border-t border-gray-700"></hr>
              </div>
              <div className="mt-5">
                <label className="text-lg">Motivo de llegada</label>
                <textarea
                  className="border-gray-300 border rounded-lg p-1 pl-2 text-xl font-light w-full"
                  rows={3}
                  placeholder="Describe los sintomas del paciente..."
                  {...register("descripcion")}
                />
              </div>
              <div className="w-1/4 mr-10 mt-5">
                <select
                  className={inputActive}
                  {...register("idTipo_Emergencia")}>
                  {emergencyTypes &&
                    emergencyTypes.map((emergencyType) => (
                      <option value={emergencyType.id} key={emergencyType.id}>
                        {emergencyType.TIPO}
                      </option>
                    ))}
                </select>
              </div>
            </section>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-br from-[#0F6AEF] to-[#009EE2] hover:bg-gradient-to-r from-[#0F6AEF] to-[#009EE2] text-white text-xl py-2 px-4 rounded-full">
                Confirmar
              </button>
            </div>
          </div>
        </form>
      </main>
      {error && <ErrorMessage />}
    </>
  );
};
export default OperatorEmergencies;
