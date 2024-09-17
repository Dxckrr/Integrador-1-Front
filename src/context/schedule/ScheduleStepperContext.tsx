import { createContext, useContext, ReactNode } from "react";
import {
  useForm,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import { FormDataSchedule } from "../../types/core/ScheduleForm";

interface StepperContextProps {
  register: UseFormRegister<FormDataSchedule>;
  handleSubmit: UseFormHandleSubmit<FormDataSchedule>;
  errors: FieldErrors;
  watch: (field: keyof FormDataSchedule) => any;
}

interface ProviderProps {
  children: ReactNode;
}

// Crear el contexto con un valor por defecto vacío, con tipos especificados
const StepperContext = createContext<StepperContextProps | undefined>(
  undefined
);

/**
 * Export the function to use the context body
 * @returns {Context} Context
 */
export const useStepperContext = (): StepperContextProps => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("No StepperContext found");
  }
  return context;
};

/**
 * Contains the functions of the Context
 * In order to have the data inputs info in the register appointment section
 * @param {*} param0
 * @returns {Component} StepperContext.Provider that wraps the appointment section
 */
export const UseContextProvider = ({ children }: ProviderProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormDataSchedule>();

  return (
    <StepperContext.Provider value={{ register, handleSubmit, errors, watch }}>
      {children}
    </StepperContext.Provider>
  );
};
