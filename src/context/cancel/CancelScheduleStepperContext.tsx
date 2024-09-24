import { createContext, useContext, ReactNode } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormDataSchedule } from "../../types/core/ScheduleForm";
import useCancelAppointment from "../../hooks/cancel/useCancelAppointment";

interface StepperContextProps {
  register: UseFormRegister<FormDataSchedule>;
  onSubmit: () => void;
  errors: FieldErrors;
  success: boolean;
  notSuccess: boolean;
  appointment: any;
  setAppointment: any;
}

interface ProviderProps {
  children: ReactNode;
}

const StepperContext = createContext<StepperContextProps | undefined>(
  undefined
);

export const useStepperContext = (): StepperContextProps => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("No StepperContext found");
  }
  return context;
};

export const UseCancelContextProvider = ({ children }: ProviderProps) => {
  const {
    register,
    onSubmit,
    errors,
    success,
    notSuccess,
    appointment,
    setAppointment,
  } = useCancelAppointment();

  return (
    <StepperContext.Provider
      value={{
        register,
        onSubmit,
        errors,
        success,
        notSuccess,
        appointment,
        setAppointment,
      }}>
      {children}
    </StepperContext.Provider>
  );
};
