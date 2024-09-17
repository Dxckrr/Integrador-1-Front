import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { add_appointment } from "../../services/core/appointments.service";
import { get_doctors } from "../../services/core/users.service";
import { FormDataSchedule } from "../../types/core/ScheduleForm";
import { User } from "../../types/auth/UserLogin";

const useScheduleAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormDataSchedule>();

  const [sent, isSent] = useState<boolean>(false);
  const [medics, setMedics] = useState<User[]>([]);
  const navigate = useNavigate();
  
  /**
   * Submits the form
   */
  const onSubmit = handleSubmit(async (data) => {
    isSent(true);
    try {
      const response = await add_appointment(data);
      if (response) {
        // Lógica después de enviar
      }
    } catch (e) {
      console.log("Error", e);
    } finally {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  });

  const service = watch("idServicio");
  /**
   * Gets medics from database
   */
  useEffect(() => {
    const get_medics = async () => {
      if (!service) return;
      try {
        const res_medics = await get_doctors(service);
        if (res_medics) setMedics(res_medics.user);
      } catch (error) {
        throw new Error("Error getting medics: " + error);
      }
    };
    get_medics();
  }, [service]);

  return {
    register,
    onSubmit,
    errors,
    watch,
    medics,
  };
};
export default useScheduleAppointment;
