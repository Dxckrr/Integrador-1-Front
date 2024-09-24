// import { useStepperContext } from "../../../../../context/schedule/ScheduleStepperContext";
// import { services } from "../../../../../utils/data/services";

import CancelTableUser from "../../../ui/user/cancel/CancelTableUser";

export default function Step1() {
  //   const { register } = useStepperContext();

  return (
    <div className="flex flex-col container mx-auto">
      <h1 className="font-bold text-2xl text-center">Seleccionar Cita</h1>
      <CancelTableUser />
      {/* <h2 className="text-xl text-center font-bold text-dark-blue mb-20">
        Seleccionar servicio
      </h2>

      <div className="w-1/2">
        <label htmlFor="serviceSelect" className="block text-black mb-2">
          Seleccione un servicio
        </label>
        <select
          id="serviceSelect"
          className="block bg-transparent text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
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
      </div> */}
    </div>
  );
}
