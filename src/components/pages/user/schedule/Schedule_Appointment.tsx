import { useState } from "react";
import Stepper from "../../../views/user/schedule/stepper/Stepper";
import StepperControl from "../../../../components/views/user/schedule/stepper/StepperControl";
import Step1 from "../../../views/user/schedule/steps/Step1";
import Step2 from "../../../views/user/schedule/steps/Step2";
import { UseContextProvider } from "../../../../context/schedule/ScheduleStepperContext";
import Step3 from "../../../views/user/schedule/steps/Step3";

const Schedule_Appointment = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const steps = [
    "Servicio",
    "Horario",
    "Datos",
    "Confirmación",
  ]
  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />

      case 3:
        return <Step3 />

      case 4:
        return <Step4 />
      default:

    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <main className="mt-16">
      {/* Title */}
      <h1 className="text-center text-xl mb-8 sm:text-2xl lg:text-3xl">Agendamiento de citas</h1>

      <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="my-10 p-10 ">
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
    </main>

  );
};
export default Schedule_Appointment;