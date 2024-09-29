import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import USER_IMAGE from "../../../assets/svg/icons/extra/UserBlack.svg";
import dayjs from "dayjs";
import TabComponent from "../../especialista_components/TabComponent";

const Citas: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("Hoy");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<
    Appointment[]
  >([]);
  const [, setSelectedAppointment] = useState<Appointment | null>(null);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [doctorInfo, setDoctorInfo] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate(); // Initialize navigate

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

  interface User {
    CC: string;
    nombreUsuario: string;
    apellidoUsuario: string;
    emailUsuario: string;
    pwdUsuario: string;
    idSede?: number;
    idRol: number;
    estadoUsuario?: boolean;
    idEspecialidad?: number;
    idHoja_Vida?: number;
    idTipoPaciente?: number;
    telefono?: string; // Optional field
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

  const fetchUserInfo = async (userId: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/user/${userId}`
      );
      const data = await response.json();
      if (data.success) {
        setUserInfo(data.user);
      } else {
        console.error("API response error:", data);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const fetchDoctorInfo = async (doctorId: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/users/user/${doctorId}`
      );
      const data = await response.json();
      if (data.success) {
        setDoctorInfo(data.user);
      } else {
        console.error("API response error:", data);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    const today = dayjs();

    const filterByToday = (appointment: Appointment) => {
      const appointmentDate = dayjs(appointment.dia);
      return appointmentDate.isSame(today, "day");
    };

    const filterByTomorrow = (appointment: Appointment) => {
      const appointmentDate = dayjs(appointment.dia);
      return appointmentDate.isSame(today.add(1, "day"), "day");
    };

    const filterByWeek = (appointment: Appointment) => {
      const appointmentDate = dayjs(appointment.dia);
      return appointmentDate.isSame(today, "week");
    };

    const filterByMonth = (appointment: Appointment) => {
      const appointmentDate = dayjs(appointment.dia);
      return appointmentDate.isSame(today, "month");
    };

    let filteredData: Appointment[] = [];
    switch (selectedOption) {
      case "Hoy":
        filteredData = appointments.filter(filterByToday);
        break;
      case "Mañana":
        filteredData = appointments.filter(filterByTomorrow);
        break;
      case "Esta semana":
        filteredData = appointments.filter(filterByWeek);
        break;
      case "Este mes":
        filteredData = appointments.filter(filterByMonth);
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

  const handleAppointmentClick = async (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);

    console.log("Selected Appointment:", appointment); // Verifica la cita seleccionada

    // Fetch user and doctor information
    await fetchUserInfo(appointment.idUsuarioCC);
    await fetchDoctorInfo(appointment.idDocCC);

    // Navega a la ruta con el idCita en los parámetros y pasa el idCita en el estado
    console.log(
      "Navigating to:",
      `/especialista/orden-medica/${appointment.idCita}`
    ); // Verifica la ruta
    navigate(`/especialista/orden-medica/${appointment.idCita}`, {
      state: { idCita: appointment.idCita },
    });
  };

  return (
    <div className="px-56 pt-16 mb-48">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-extrabold">Citas</h1>
      </div>

      <TabComponent
        options={["Hoy", "Mañana", "Esta semana", "Este mes", "Todos"]}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <div className="pt-8">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => (
            <div
              key={appointment.idCita}
              className="flex items-center space-x-4 py-4 border-b border-[#D1DBE5] hover:bg-gray-100 transition cursor-pointer"
              onClick={() => handleAppointmentClick(appointment)}
            >
              <img
                src={USER_IMAGE}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-lg">
                  {dayjs(appointment.dia).format("D [de] MMMM")}
                </p>
                <p>{appointment.hora}</p>
              </div>
              <p
                className={`text-lg font-bold ${
                  appointment.estadoCita ? "text-green-500" : "text-red-500"
                }`}
              >
                {appointment.estadoCita ? "Activa" : "Inactiva"}
              </p>
            </div>
          ))
        ) : (
          <p>No hay citas programadas para esta selección.</p>
        )}
      </div>
    </div>
  );
};

export default Citas;
