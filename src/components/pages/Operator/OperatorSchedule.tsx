import useScheduleAppointment from "../../../hooks/schedule/useScheduleAppointment";
import { services } from "../../../utils/data/services";
import AppointmentModal from "../../ui/global/AppoinmentModal";
import ErrorMessage from "../../ui/global/ErrorMensaje";
import HelperText from "../../ui/operator/DatePickerOperator";

const inputActive =
  "border-gray-300 bg-white border rounded-lg h-10 p-1 pl-2 text-xl font-light w-full";
const div = "flex-col w-2/5 mr-10 mt-5";

const OperatorSchedule = () => {
  const { register, onSubmit, medics, hours, setValue , success ,notSuccess } =
    useScheduleAppointment("operator");
  return (
    <>
      {success && (
        <AppointmentModal
          title={"Cita Agendada !"}
          description={
            "Su cita ha sido Agendada con exito, revise su correo electronico para mas información"
          }
        />
      )}
      <main className="min-h-screen w-full flex justify-center bg-gradient-to-b from-white to-[#EFF0F1] p-6">
        <form className="h-full w-4/5" onSubmit={onSubmit}>
          <div className="flex justify-center mt-10">
            <h1 className="font-bold text-2xl">Agendamiento de cita</h1>
          </div>

          <section className="mt-5 mb-11">
            <div>
              <h2 className="font-normal text-lg">Tipo de cita</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>

            <div className="flex">
              <div className={div}>
                <label className="text-lg">Servicio</label>
                <select
                  className={inputActive}
                  {...register("idServicio")}
                  defaultValue="">
                  <option value="" disabled>
                    Seleccione una opción
                  </option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className={div}>
                <label className="text-lg">Especialista</label>
                <select className={inputActive} {...register("idDocCC")}>
                  <option value="" disabled>
                    Seleccione una opción
                  </option>
                  {medics &&
                    medics.map((medic) => (
                      <option key={medic.CC} value={medic.CC}>
                        {medic.nombreUsuario} {medic.apellidoUsuario}
                      </option>
                    ))}
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
              <h2 className="font-normal text-lg">Información personal</h2>
              <hr className="border-t border-gray-700"></hr>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Nombres</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Escribir..."
                  {...register("name")}
                />
              </div>
              <div className={div}>
                <label className="text-lg">Apellidos</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Escribir..."
                  {...register("surname")}
                />
              </div>
            </div>
            <div className="flex">
              <div className={div}>
                <label className="text-lg">Número de documento</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Escribir..."
                  {...register("idUsuarioCC")}
                />
              </div>
              <div className={div}>
                <label className="text-lg">Número de teléfono</label>
                <input
                  className={inputActive}
                  type="text"
                  placeholder="Escribir..."
                  {...register("phone")}
                />
              </div>
            </div>
            <div className={div}>
              <label className="text-lg">Correo electrónico</label>
              <input
                className={inputActive}
                type="text"
                placeholder="Escribir..."
                {...register("email")}
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
export default OperatorSchedule;
