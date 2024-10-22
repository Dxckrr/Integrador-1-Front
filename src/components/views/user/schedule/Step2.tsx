import { useStepperContext } from "../../../../context/schedule/ScheduleStepperContext";
import { CalendarIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";
import HelperText from "../../../ui/user/DatePicker";

const Step2 = () => {
  const { register, watch, medics, hours } = useStepperContext();
  const selectedMedicId = watch("idDocCC") || "";
  const selectedHora = watch("hora") || "";
  console.log(medics);
  return (
    <>
      <h2 className="text-xl text-center font-bold text-dark-blue mb-20">
        Disponibilidad
      </h2>
      <div className="flex flex-col justify-evenly md:flex-row gap-4 md:gap-6">
        <div className="md:w-1/3 space-y-2 flex flex-col justify-center">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <UserIcon className="size-4 text-primary-blue" />
            Especialista
          </label>
          <select
            className="block bg-transparent text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            {...register("idDocCC")}
            value={selectedMedicId}>
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
        <div className="md:w-2/4 bg-gray-100 p-8 rounded-lg ">
          <div className="flex flex-col gap-6">
            <div className="flex-1 space-y-2">
              <label
                htmlFor="date"
                className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary-blue" />
                Fecha
              </label>
              <HelperText context={"schedule"} />
            </div>
            <div className="flex-1 space-y-2">
              <label
                htmlFor="hours"
                className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-primary-blue" />
                Horas disponibles
              </label>
              <div className="relative">
                <select
                  id="hours"
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  {...register("hora")}>
                  {hours &&
                    hours.map((hour, i) => (
                      <option key={i} value={hour}>
                        {hour}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
