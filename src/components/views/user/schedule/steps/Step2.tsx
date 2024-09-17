import { services } from "../../../../../utils/data/services";
import { useStepperContext } from "../../../../../context/schedule/ScheduleStepperContext";

const Step2 = () => {
  const { register, watch } = useStepperContext();

  return (
    <>
      <h2 className="text-xl text-center font-bold text-dark-blue mb-20">
        Disponibilidad
      </h2>
      <section className="flex gap-x-6 w-full">
        <div className="flex flex-col gap-y-2 flex-grow">
          <label className="text-xl">Especialista</label>
          <select
            className="block bg-transparent text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            {...register("medicId")}>
            <option
              defaultValue={
                watch("medicId") !== undefined ? watch("medicId") : ""
              }>
              Seleccione una opción
            </option>
            {services.map((service, index) => (
              <option key={index} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-grow flex flex-col justify-center items-center">
          <label className="text-xl">Fecha</label>
          <div className="w-40 h-40 border border-black"></div>
        </div>
        <div className="flex flex-col gap-y-2 flex-grow">
          <label className="text-xl">Horas disponibles</label>
          <select
            className="block bg-transparent text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            {...register("hora")}>
            <option
              defaultValue={watch("hora") !== undefined ? watch("hora") : ""}>
              Seleccione una opción
            </option>
            {services.map((service, index) => (
              <option key={index} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </section>
    </>
  );
};
export default Step2;
