import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import USER_IMAGE from "../../../assets/svg/icons/extra/UserBlack.svg";
import dayjs from "dayjs";
import TabComponent from "../../especialista_components/TabComponent";

const Citas: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("Hoy");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<
    Appointment[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  interface Appointment {
    idCita: number;
    dia: Date;
    hora: string;
    estadoCita: boolean;
    idServicio: number;
    idHistoria_Medica: number;
    idUsuarioCC: string;
    idDocCC: string;
  }

  const fetchAppointments = async () => {
    try {
      const staticDoctorId = 123456789; // Static ID for now
      const response = await fetch(
        `http://localhost:3000/api/appointments/user/${staticDoctorId}`
      );
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    const today = dayjs();
    let filteredData: Appointment[] = [];

    switch (selectedOption) {
      case "Hoy":
        filteredData = appointments.filter((appointment) =>
          dayjs(appointment.dia).isSame(today, "day")
        );
        break;
      case "Mañana":
        filteredData = appointments.filter((appointment) =>
          dayjs(appointment.dia).isSame(today.add(1, "day"), "day")
        );
        break;
      case "Esta semana":
        filteredData = appointments.filter((appointment) =>
          dayjs(appointment.dia).isSame(today, "week")
        );
        break;
      case "Este mes":
        filteredData = appointments.filter((appointment) =>
          dayjs(appointment.dia).isSame(today, "month")
        );
        break;
      case "Todos":
        filteredData = appointments;
        break;
      default:
        filteredData = appointments;
        break;
    }

    filteredData.sort((a, b) => dayjs(a.dia).unix() - dayjs(b.dia).unix());
    setFilteredAppointments(filteredData);
  }, [selectedOption, appointments]);

  const handleAppointmentClick = (appointment: Appointment) => {
    setIsModalOpen(true);
    navigate(`/especialista/orden-medica/${appointment.idCita}`, {
      state: { idCita: appointment.idCita },
    });
  };

  return (
    <div className="px-20 md:px-12 lg:px-32 pt-8 mb-24 ">
      <h1 className="text-3xl font-bold text-slate-800 mb-4">
        Citas Programadas
      </h1>

      <TabComponent
        options={["Hoy", "Mañana", "Esta semana", "Este mes", "Todos"]}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <div className="pt-4 flex flex-col space-y-4">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => (
            <div
              key={appointment.idCita}
              className="bg-white border border-slate-200 rounded-lg p-6 py-4 hover:shadow-md transition duration-200 cursor-pointer"
              onClick={() => handleAppointmentClick(appointment)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={USER_IMAGE}
                  alt="Profile"
                  className="w-16 h-16 rounded-full border border-blue-300 shadow-lg"
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-slate-800">
                    {dayjs(appointment.dia).format("D [de] MMMM [a las] HH:mm")}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      appointment.estadoCita ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {appointment.estadoCita
                      ? "Estado: Activa"
                      : "Estado: Inactiva"}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button className="bg-sky-600 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-sky-700">
                  Crear Orden
                </button>
                <p
                  className={`text-xs font-medium ${
                    appointment.estadoCita ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {appointment.estadoCita ? "Activa" : "Inactiva"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-slate-700 py-4">
            No hay citas programadas para esta selección.
          </p>
        )}
      </div>
    </div>
  );
};

export default Citas;
