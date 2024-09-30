import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { update_appointment } from "../../../services/core/appointments.service";
import { getHours } from "../../../utils/hours";
import { get_hours_available } from "../../../services/hours.service";
import { useNavigate } from "react-router-dom";

const useReScheduleAppointmentOperator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<>();

  const [success, setSuccess] = useState<boolean>(false);
  const [notSuccess, setNotSuccess] = useState<boolean>(false);
  const [hours, setHours] = useState<string[]>([]);
  const navigate = useNavigate();

  /**
   * Submits the form
   */
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const response = await update_appointment(data.id, data);
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
        navigate("/management/re-agendamiento");
      }, 3000);
    }
  });

  const date = watch("dia");

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
    setValue,
    hours,
    success,
    notSuccess,
  };
};
export default useReScheduleAppointmentOperator;
