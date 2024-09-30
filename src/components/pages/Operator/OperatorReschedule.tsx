const inputActive =
  "border-gray-300 bg-white border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full";
const inputDisable =
  "border-gray-300 text-gray-400 bg-white border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full";
const labelDisable = "text-lg text-[#ACACAC]";
const div = "flex-col w-2/5 mr-10 mt-5";

import { useLocation } from "react-router-dom";
import HelperText from "../../ui/operator/DatePickerOperator";
import useReScheduleAppointmentOperator from "../../../hooks/re-schedule/operator/useReScheduleAppointmentOperator";
import { useEffect } from "react";
import AppointmentModal from "../../ui/global/AppoinmentModal";
import ErrorMessage from "../../ui/global/ErrorMensaje";

const OperatorReschedule = () => {
  const location = useLocation();
  const { appointment } = location.state || {};
  const { onSubmit, setValue, hours, register, success, notSuccess } =
    useReScheduleAppointmentOperator();
  useEffect(() => {
    setValue("id", appointment.id);
  }, [appointment, setValue]);
  return (
    <>
      {success && (
        <AppointmentModal
          title={"Cita Re-Agendada !"}
          description={
            "Su cita ha sido Re-gendada con exito, revise su correo electronico para mas información"
          }
        />
      )}
      <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] p-6">
        <form onSubmit={onSubmit} className="h-full w-4/5">
          <div className="flex justify-center mt-10">
            <h1 className="font-bold text-2xl">Reagendamiento de cita</h1>
          </div>

          <section className="mt-5 mb-11">
            <div>
              <h2 className="font-normal text-lg text-[#ACACAC]">
                Tipo de cita
              </h2>
              <hr className="border-t border-gray-300"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className={labelDisable}>Servicio</label>
                <select className={inputDisable} name={"type"} disabled>
                  <option>{appointment.type}</option>
                </select>
              </div>
              <div className={div}>
                <label className={labelDisable}>Especialista</label>
                <select className={inputDisable} name={"medicName"} disabled>
                  <option>{appointment.medicName}</option>
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
                {/* <input className={inputActive} type="date" name={"date"} /> */}
                <HelperText className={inputActive} setValue={setValue} />
              </div>
              <div className={div}>
                <label className="text-lg">Horas disponibles</label>
                <select className={inputActive} {...register("hora")}>
                  {hours &&
                    hours.map((hour, i) => (
                      <option key={i} value={hour}>
                        {hour}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </section>

          <section className="mb-11">
            <div>
              <h2 className="font-normal text-lg text-[#ACACAC]">
                Información personal
              </h2>
              <hr className="border-t border-gray-300"></hr>
            </div>
            <div className="flex">
              <div className="flex-col w-5/6 mr-10 mt-5">
                <label className={labelDisable}>
                  Nombre completo del paciente
                </label>
                <input
                  className={inputDisable}
                  type="text"
                  name={"pacientName"}
                  disabled
                  value={appointment.pacientName}
                />
              </div>
            </div>
            <div className="flex">
              <div className={div}>
                <label className={labelDisable}>Número de documento</label>
                <input
                  className={inputDisable}
                  type="text"
                  name={"pacientID"}
                  disabled
                  value={appointment.pacientID}
                />
              </div>
              <div className={div}>
                <label className={labelDisable}>Número de teléfono</label>
                <input
                  className={inputDisable}
                  type="text"
                  name={"pacientPhone"}
                  disabled
                />
              </div>
            </div>
            <div className={div}>
              <label className={labelDisable}>Correo electrónico</label>
              <input
                className={inputDisable}
                type="text"
                name={"pacientEmail"}
                disabled
                value={appointment.pacientEmail}
              />
            </div>
          </section>
          <div className="grid justify-items-end w-full">
            <button
              type="submit"
              className="bg-gradient-to-br from-[#0F6AEF] to-[#009EE2] hover:bg-gradient-to-r from-[#0F6AEF] to-[#009EE2] text-white text-2xl py-2 px-4 rounded-lg">
              Confirmar
            </button>
          </div>
        </form>
      </main>
      {notSuccess && <ErrorMessage />}
    </>
  );
};
export default OperatorReschedule;
