import { createContext, useContext, ReactNode } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormDataSchedule } from "../../types/core/ScheduleForm";
import useReScheduleAppointment from "../../hooks/re-schedule/useReScheduleAppointment";

interface StepperContextProps {
  register: UseFormRegister<FormDataSchedule>;
  onSubmit: () => void;
  errors: FieldErrors;
  watch: (field?: keyof FormDataSchedule | (keyof FormDataSchedule)[]) => any;
  setValue: any;
  hours: string[];
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

export const UseReScheduleContextProvider = ({ children }: ProviderProps) => {
  const {
    register,
    onSubmit,
    errors,
    watch,
    setValue,
    hours,
    success,
    notSuccess,
    appointment,
    setAppointment,
  } = useReScheduleAppointment();

  return (
    <StepperContext.Provider
      value={{
        register,
        onSubmit,
        errors,
        watch,
        setValue,
        hours,
        success,
        notSuccess,
        appointment,
        setAppointment,
      }}>
      {children}
    </StepperContext.Provider>
  );
};
