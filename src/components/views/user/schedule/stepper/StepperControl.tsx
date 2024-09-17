import { useState } from "react";

export default function StepperControl({ handleClick, currentStep, steps }) {
  const [confirmation, isConfirmated] = useState<boolean>(false);
  return (
    <div className="container mt-16 flex justify-around">
      <button
        type={confirmation ? "submit" : "button"}
        onClick={
          currentStep === steps.length
            ? () => {
                isConfirmated(false);
                handleClick("prev");
              }
            : () => handleClick("prev")
        }
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
        disabled={currentStep === 1}>
        Atrás
      </button>

      <button
        type={confirmation ? "submit" : "button"}
        onClick={
          currentStep === steps.length
            ? () => isConfirmated(true)
            : () => handleClick("next")
        }
        className="cursor-pointer rounded-lg bg-primary-blue py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
        {currentStep === steps.length ? "Confirmar" : "Siguiente"}
      </button>
    </div>
  );
}
