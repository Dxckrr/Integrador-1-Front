import { createContext, useContext, ReactNode } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormDataSchedule } from "../../types/core/ScheduleForm";
import { User } from "../../types/auth/UserLogin";
import useScheduleAppointment from "../../hooks/schedule/useScheduleAppointment";

interface StepperContextProps {
  register: UseFormRegister<FormDataSchedule>;
  onSubmit: () => void;
  errors: FieldErrors;
  watch: (field: keyof FormDataSchedule) => any;
  medics: User[];
  setValue: any;
  hours: string[];
  success: boolean;
  notSuccess: boolean;
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

export const UseScheduleContextProvider = ({ children }: ProviderProps) => {
  const { register, onSubmit, errors, watch, medics ,setValue , hours , success, notSuccess} =
    useScheduleAppointment("user");

  return (
    <StepperContext.Provider
      value={{ register, onSubmit, errors, watch, medics , setValue , hours , success ,notSuccess}}>
      {children}
    </StepperContext.Provider>
  );
};
