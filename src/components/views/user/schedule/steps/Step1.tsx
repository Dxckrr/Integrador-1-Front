import { useEffect } from "react";
import { useStepperContext } from "../../../../../context/schedule/ScheduleStepperContext";
import { services } from "../../../../../utils/data/services";

export default function Step1() {
  const { register, watch } = useStepperContext();
  useEffect(() => {
    console.log(watch("serviceId"));
  }, [watch("serviceId")]);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-xl text-center font-bold text-dark-blue mb-20">
        Seleccionar servicio
      </h2>

      <select
        className="block bg-transparent text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-1/2 peer"
        {...register("serviceId")}>
        <option defaultValue={watch("serviceId") !== undefined ? watch("serviceId") : ""}>
          Seleccione una opción
        </option>
        {services.map((service, index) => (
          <option key={index} value={service.id}>
            {service.title}
          </option>
        ))}
      </select>
    </div>
  );
}
