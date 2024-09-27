import { useState } from "react";
import Stepper from "../../../views/global/core/stepper/Stepper";
import StepperControl from "../../../views/global/core/stepper/StepperControl";
import Step1 from "../../../views/user/re-schedule/Step1";
import Step2 from "../../../views/user/re-schedule/Step2";
import {
  UseReScheduleContextProvider,
  useStepperContext,
} from "../../../../context/re-schedule/ReScheduleStepperContext";
import Step3 from "../../../views/user/re-schedule/Step3";
import AppointmentModal from "../../../ui/global/AppoinmentModal";
import ErrorMessage from "../../../ui/global/ErrorMensaje";

const ReScheduleBody = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const { onSubmit, success, notSuccess } = useStepperContext();

  const steps = ["Cita", "Horario", "Confirmación"];

  const displaySteps = (step: number) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return null; // Ensure to return something for default case
    }
  };

  const handleClick = (direction: string) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
      {success && (
        <AppointmentModal
          title={"Cita Re-Agendada !"}
          description={
            "Su cita ha sido Re-gendada con exito, revise su correo electronico para mas información"
          }
        />
      )}
      <main className="bg-gradient-to-t from-gray-100 to-white min-h-screen">
        {/* Title */}
        <h1 className="text-center text-xl pt-16 sm:text-2xl lg:text-3xl">
          Re-Agendamiento de citas
        </h1>
        {/* Stepper */}
        <div className="container mx-auto px-2 my-8">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        <div className="mx-auto rounded-2xl bg-white p-1 shadow-customCard w-full sm:w-4/5 md:w-2/3 min-h-[70vh]">
          <div className="container h-full">
            <div className="p-5 sm:p-8 md:p-10">
              <form onSubmit={onSubmit}>
                {displaySteps(currentStep)}
                {/* navigation button */}
                <StepperControl
                  handleClick={handleClick}
                  currentStep={currentStep}
                  steps={steps}
                />
              </form>
            </div>
          </div>
        </div>
        {notSuccess && <ErrorMessage />}
      </main>
    </>
  );
};
const ReSchedule_Appointment = () => {
  return (
    <UseReScheduleContextProvider>
      <ReScheduleBody />
    </UseReScheduleContextProvider>
  );
};
export default ReSchedule_Appointment;