import { useState } from "react";
import PDFICON from "../../../assets/img/others/pdfIcon.png";
import { useForm } from "react-hook-form";
import {
  getAuthorizationById,
  updateAuthorization,
} from "../../../services/core/medicalAuthorization.service";
import Loader from "../../ui/global/Loader";
import { TrashIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import AppointmentModal from "../../ui/global/AppoinmentModal";
import ErrorMessage from "../../ui/global/ErrorMensaje";

const inputActive =
  "border-gray-300 bg-white border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full";
const div = "flex-col w-2/5 mr-10 mt-5";

const OperatorAuthorizations = () => {
  const [isLoading, setIsLoading] = useState(false); // Estado para mostrar si está cargando
  const [result, setResult] = useState(null); // Estado para manejar los resultados
  const { register, handleSubmit } = useForm();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  /**
   * Submit's the form
   */
  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      console.log(data);
      const response = await getAuthorizationById(data.order);

      if (response) {
        setResult(response);
      }
    } catch (e) {
      console.log("Error", e);
    } finally {
      setIsLoading(false); // Finaliza el estado de carga
    }
  });
  const authorize = async () => {
    if (result) {
      try {
        const response = await updateAuthorization(result.idOrden_Medica);
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
    }
  };

  return (
    <>
      {success && (
        <AppointmentModal
          title={"Autorización Exitosa  !"}
          description={
            "Su Autorización ha sido aprovada con exito"
          }
        />
      )}
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
            {/* Formulario único con submit */}
            <form className="flex" onSubmit={onSubmit}>
              <div className={div}>
                <label className="text-lg">Número de orden</label>
                <input
                  id="order"
                  className={inputActive}
                  type="text"
                  placeholder="Escribir..."
                  {...register("order")}
                />
              </div>
              {result && (
                <button
                  className="flex items-end justify-center"
                  onClick={() => {
                    setResult(null);
                    document.getElementById("order").value = "";
                  }}>
                  <TrashIcon className="size-12 bg-slate-200 p-2 rounded-full" />
                </button>
              )}
            </form>
            <hr className="border-t border-gray-700 mt-10"></hr>
          </section>
          {isLoading && <Loader />}
          {result && (
            <>
              <div className="bg-white shadow-customButton rounded-3xl w-full mt-8 p-10">
                <h2 className="text-xl font-bold text-center">Orden médica</h2>
                <div className="flex flex-col">
                  <div className="flex mt-2 mb-3">
                    <label className="text-xl w-52">Fecha de solicitud:</label>
                    <label className="text-xl font-light">
                      {dayjs(result.fecha).format("DD/MM/YY [ | ] H:mm:ss")}
                    </label>
                  </div>
                  <div className="flex my-1">
                    <label className="text-xl w-52">Médico responsable:</label>
                    <label className="text-xl font-light">
                      {result.medicName}
                    </label>
                  </div>
                  <div className="flex my-3">
                    <label className="text-xl w-52">Paciente:</label>
                    <label className="text-xl font-light">
                      {result.pacientName}
                    </label>
                  </div>
                  <div className="flex my-4">
                    <label className="text-xl w-52 flex-shrink-0">
                      Descripción:
                    </label>
                    <span className="text-xl font-light">
                      {result.diagnostico}
                    </span>
                  </div>
                  <div className="flex my-4">
                    <label className="text-xl w-52 flex-shrink-0">Notas:</label>
                    <span className="text-xl font-light">{result.ordenes}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-7">
                <div className="w-40"></div>
                <button
                  onClick={() => authorize()}
                  className="bg-gradient-to-br from-[#0F6AEF] to-[#009EE2]
              hover:bg-gradient-to-r from-[#0F6AEF] to-[#009EE2] text-white text-xl py-2 rounded-full w-40">
                  Autorizar
                </button>
                <button className="w-40 shadow-customButton rounded-xl bg-white flex justify-center items-center hover:bg-slate-100">
                  <p className="text-xl font-light">Descargar</p>
                  <img src={PDFICON} className="h-8 ml-2" alt="pdf icon"></img>
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      {error && <ErrorMessage />}
    </>
  );
};

export default OperatorAuthorizations;
