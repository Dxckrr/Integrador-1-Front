import { useAuth } from "../../../../context/auth/AuthContext";
import { useStepperContext } from "../../../../context/schedule/ScheduleStepperContext";

const Step3 = () => {
  const { register } = useStepperContext();
  const { userLogin } = useAuth();

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
          <label htmlFor="name">Nombres</label>
          <input
            className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            type="text"
            id="name"
            defaultValue={userLogin?.user.nombreUsuario}
            {...register("name")}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="phone">Número de teléfono</label>
          <input
            className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            type="text"
            id="phone"
            {...register("phone")}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="surname">Apellidos</label>
          <input
            className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            type="text"
            id="surname"
            defaultValue={userLogin?.user.apellidoUsuario}
            {...register("surname")}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            type="text"
            id="email"
            defaultValue={userLogin?.user.emailUsuario}
            {...register("email")}
          />
        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="CC">Documento</label>
          <input
            className="block bg-transparent appearance-none text-black border-b p-1 border-gray-400 focus:outline-none focus:border-black w-full peer"
            type="text"
            id="CC"
            defaultValue={userLogin?.user.CC}
            {...register("idUsuarioCC")}
          />
        </div>
      </section>
    </>
  );
};

export default Step3;
