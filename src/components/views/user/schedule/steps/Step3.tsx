import { useStepperContext } from "../../../../../context/schedule/ScheduleStepperContext";

const Step3 = () => {
  const { register, watch } = useStepperContext();

  return (
    <>
      <h1 className="text-3xl text-center font-bold text-dark-blue mb-2">
        Información Personal
      </h1>
      <h2 className="text-xl text-center font-semibold text-dark-blue mb-10">
        Datos del paciente
      </h2>
      <section className="grid grid-rows-3 grid-cols-2 gap-10">
        <div className="flex flex-col p-2">
          <label htmlFor="">Nombres</label>
          <input
            className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            type="text"
            {...register("name")}
            value={watch("name")}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="">Numero de telefono</label>
          <input
            className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            type="text"
            {...register("phone")}
            value={watch("phone")}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="">Apellidos</label>
          <input
            className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            type="text"
            {...register("surname")}
            value={watch("surname")}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="">Correo Electronico</label>
          <input
            className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            type="text"
            {...register("email")}
            value={watch("email")}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="">Documento</label>
          <input
            className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            type="text"
            {...register("CC")}
            value={watch("CC")}
          />
        </div>
      </section>
    </>
  );
};
export default Step3;
