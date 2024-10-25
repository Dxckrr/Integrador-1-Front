import { useStepperContext } from "../../../../context/re-schedule/ReScheduleStepperContext";

const translations = {
  pacientName: "Nombre",
  surname: "Apellido",
  email: "Correo Electrónico",
  phone: "Teléfono",
  pacientID: "CC",
  idServicio: "Id del Servicio",
  idDocCC: "CC del Médico",
  date: "Fecha",
  time: "Hora",
};

const Step3 = () => {
  const { watch, appointment } = useStepperContext();
  const watchedValues = watch(); // Obtener los valores observados

  // Verificar la estructura de los valores observados
  console.log(watchedValues);
  console.log(appointment);


  return (
    <>
      <h1 className="text-3xl text-center font-bold text-dark-blue mb-16">
        Confirmación cita
      </h1>
      <div className="flex justify-center">
        <section className="grid grid-flow-row grid-cols-2 gap-x-60 gap-y-5 max-w-4xl">
          {Object.keys(watchedValues)
            .slice(0, 8)
            .map((key) => (
              <div key={key} className="p-2 ">
                <h2 className="text-xl font-semibold text-dark-blue">
                  {translations[key] || key}
                </h2>
                <p>{watchedValues[key]}</p>
              </div>
            ))}
          {Object.keys(appointment).map((key) => (
            <div key={key} className="p-2 ">
              <h2 className="text-xl font-semibold text-dark-blue">{key}</h2>
              <p>{appointment[key]}</p>
            </div>
          ))}
          {/* {Object.keys(appointment)
            .filter((key) => key !== "id" && key !== "date")
            .map((key) => (
              <div key={key} className="p-2">
                <h2 className="text-xl font-semibold text-dark-blue">{key}</h2>
                <p>{appointment[key]}</p>
              </div>
            ))} */}
        </section>
      </div>
    </>
  );
};

export default Step3;
