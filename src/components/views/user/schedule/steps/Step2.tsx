import { services } from "../../../../../utils/data/services";
import { useStepperContext } from "../../../../../context/schedule/ScheduleStepperContext";

const Step2 = () => {
  const { register, watch, medics } = useStepperContext();
  const selectedMedicId = watch("idDocCC") || "";
  const selectedHora = watch("hora") || "";
  //LLAMAR A LOS DOCS EN LA DATABASE
  //MAPEAR LAS HORAS Y QUITARLES LAS QUE NO ESTEN DISPONIBLES
  console.log(medics)
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
        <div className="flex-grow flex flex-col justify-center items-center">
          <label className="text-xl">Fecha</label>
          <div className="w-40 h-40 border border-black"></div>
        </div>
        <div className="flex flex-col gap-y-2 flex-grow">
          <label className="text-xl">Horas disponibles</label>
          <select
            className="block bg-transparent text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            {...register("hora")}
            value={selectedHora}>
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
      </section>
    </>
  );
};

export default Step2;
