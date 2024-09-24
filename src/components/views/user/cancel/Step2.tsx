import { useStepperContext } from "../../../../context/cancel/CancelScheduleStepperContext";

const translations = {
  name: "Nombre",
  surname: "Apellido",
  email: "Correo Electrónico",
  phone: "Teléfono",
  CC: "CC",
  idServicio: "Id del Servicio",
  idDocCC: "CC del Médico",
  fecha: "Fecha",
  hora: "Hora",
};

const Step2 = () => {
  const { appointment } = useStepperContext();

  return (
    <>
      <h1 className="text-3xl text-center font-bold text-dark-blue mb-16">
        Confirmación cita
      </h1>
      <div className="flex justify-center">
        <section className="grid grid-flow-row grid-cols-2 gap-x-60 gap-y-5 max-w-4xl">
          {Object.keys(appointment).map((key) => (
            <div key={key} className="p-2 ">
              <h2 className="text-xl font-semibold text-dark-blue">{key}</h2>
              <p>{appointment[key]}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Step2;
