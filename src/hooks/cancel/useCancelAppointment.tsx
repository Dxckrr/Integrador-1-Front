import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cancel_appointment } from "../../services/core/appointments.service";
import { FormDataSchedule } from "../../types/core/ScheduleForm";

const useCancelAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataSchedule>();

  const [success, setSuccess] = useState<boolean>(false);
  const [notSuccess, setNotSuccess] = useState<boolean>(false);
  const [appointment, setAppointment] = useState(null);

  const navigate = useNavigate();

  /**
   * Submits the form
   */
  const onSubmit = handleSubmit(async () => {
    try {
      if (appointment) {
        const response = await cancel_appointment(appointment.id);
        if (response) {
          setSuccess(true);
        } else {
          setNotSuccess(true);
        }
      }
    } catch (e) {
      setNotSuccess(true);
      console.log("Error", e);
    } finally {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  });
  return {
    register,
    onSubmit,
    errors,
    success,
    notSuccess,
    setAppointment,
    appointment,
  };
};
export default useCancelAppointment;
