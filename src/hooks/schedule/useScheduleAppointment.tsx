import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { add_appointment } from "../../services/core/appointments.service";
import { get_doctors } from "../../services/core/users.service";
import { FormDataSchedule } from "../../types/core/ScheduleForm";
import { User } from "../../types/auth/UserLogin";
import { getHours } from "../../utils/hours";
import { get_hours_available } from "../../services/hours.service";

const useScheduleAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormDataSchedule>();

  const [success, setSuccess] = useState<boolean>(false);
  const [notSuccess, setNotSuccess] = useState<boolean>(false);
  const [medics, setMedics] = useState<User[]>([]);
  const [hours, setHours] = useState<string[]>([]);

  const navigate = useNavigate();

  /**
   * Submits the form
   */
  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await add_appointment(data);
      if (response) {
        setSuccess(true);
      } else {
        setNotSuccess(true);
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

  const service = watch("idServicio");
  const date = watch("dia");
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

  useEffect(() => {
    const get_Hours_Available = async () => {
      if (!date) return;
      try {
        const hours = getHours(); //arr1
        const res_hours_by_day = await get_hours_available(date); //arr2

        const res_hours_available = hours.filter(
          (valor) => !res_hours_by_day.includes(valor)
        );
        if (res_hours_available) setHours(res_hours_available);
      } catch (error) {
        throw new Error("Error getting hours: " + error);
      }
    };
    get_Hours_Available();
  }, [date]); // CUANDO CAMBIE LA FECHA

  return {
    register,
    onSubmit,
    errors,
    watch,
    medics,
    setValue,
    hours,
    success,
    notSuccess,
  };
};
export default useScheduleAppointment;
