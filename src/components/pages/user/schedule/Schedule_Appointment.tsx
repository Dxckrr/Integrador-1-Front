import { useState } from "react";
import Stepper from "../../../views/user/schedule/stepper/Stepper";
import StepperControl from "../../../views/user/schedule/stepper/StepperControl";
import Step1 from "../../../views/user/schedule/steps/Step1";
import Step2 from "../../../views/user/schedule/steps/Step2";
import { UseContextProvider } from "../../../../context/schedule/ScheduleStepperContext";
import Step3 from "../../../views/user/schedule/steps/Step3";
import Step4 from "../../../views/user/schedule/steps/Step4";

const Schedule_Appointment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Servicio", "Horario", "Datos", "Confirmación"];
  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;

      case 3:
        return <Step3 />;

      case 4:
        return <Step4 />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <main className="bg-gradient-to-t from-gray-100 to-white h-screen">
      {/* Title */}
      <h1 className="text-center text-xl pt-16 sm:text-2xl lg:text-3xl">
        Agendamiento de citas
      </h1>
      {/* Stepper */}
      <div className="container mx-auto px-2 my-8">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="mx-auto rounded-2xl bg-white p-5 shadow-customCard md:w-2/3 md:h-3/5">
        <div className="h-5/6 container">
          <div className="p-10">
            <UseContextProvider>{displaySteps(currentStep)}</UseContextProvider>
          </div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
      {currentStep === steps.length && (
        <div className="flex justify-center mt-8">
          <footer>
            <h3 className="text-dark-blue text-2xl">
              <span className="font-bold">Confirma la cita </span>a través del mensaje que se envió a
              tu correo electrónico.
            </h3>
            <p className="font-thin">Si no encuentras el mensaje revisa la bandeja de spam.</p>
          </footer>
        </div>
      )}
    </main>
  );
};
export default Schedule_Appointment;
