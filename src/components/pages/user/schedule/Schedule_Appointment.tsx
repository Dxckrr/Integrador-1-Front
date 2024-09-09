import { useState } from "react";
import Stepper from "../../../views/user/schedule/stepper/Stepper";
import StepperControl from "../../../views/user/schedule/stepper/StepperControl";
import Step1 from "../../../views/user/schedule/steps/Step1";
import Step2 from "../../../views/user/schedule/steps/Step2";

const Schedule_Appointment = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const steps = [
    "Servicio",
    "Horario",
    "Datos",
  ]
  const displaySteps = (step) => {
    switch(step){
      case 1:
        return <Step1/>
      case 2:
        return <Step2/>

        default:

    }
  }
  return (
    <>
      <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        <div className="container horizontal mt-5">
          <Stepper />
        </div>
        <StepperControl />
      </div>
    </>
  );
};
export default Schedule_Appointment;
