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

export const UseContextProvider = ({ children }: ProviderProps) => {
  const { register, onSubmit, errors, watch, medics } = useScheduleAppointment();

  return (
    <StepperContext.Provider
      value={{ register, onSubmit, errors, watch, medics }}>
      {children}
    </StepperContext.Provider>
  );
};
