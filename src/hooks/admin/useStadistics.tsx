import {
  PresentationChartBarIcon,
  UserIcon,
  HeartIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  ExclamationCircleIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { get_stadistics } from "../../services/stadistic.service";
import dayjs from "dayjs";

interface EstadisticsItem {
  title: string;
  value: string;
  sub?: string;
  icon: JSX.Element; // Add icon property
}

export const useStadistics = () => {
  const [estadisticsData, setStadistics] = useState(null);
  const [data, setData] = useState<EstadisticsItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await get_stadistics();
        setStadistics(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (estadisticsData) {
      const totalAppointments =
        estadisticsData.numberOfAppointmentsDone[0]?.totalCitasRealizadas +
        estadisticsData.numberOfAppointmentsOnWait[0]?.totalCitasPendientes;
      const extractedData: EstadisticsItem[] = [
        {
          title: "Especialidades Activas",
          value:
            estadisticsData.numberOfSpecialties[0]?.totalEspecialidades || 0,
          sub: `Recurrente : ${
            estadisticsData.moreAskedSpecialty[0]?.nombreEspecialidad || 0
          }`,
          icon: <HeartIcon className="h-6 w-6 text-red-500 mr-2" />, // Icon for this card
        },
        {
          title: "Usuarios Existentes",
          value: estadisticsData.numberOfUsers[0]?.totalUsuarios || 0,
          sub: `Pacientes : ${
            estadisticsData.numberOfPatients[0]?.totalSoloUsuarios || 0
          }`,
          icon: <UserIcon className="h-6 w-6 text-blue-500 mr-2" />,
        },
        {
          title: "Servicios Activos",
          value: estadisticsData.numberOfServices[0]?.totalServicios || 0,
          sub: `Recurrente : ${
            estadisticsData.moreAskedService[0]?.nombreServicio || 0
          }`,
          icon: <DocumentTextIcon className="h-6 w-6 text-green-500 mr-2" />,
        },
        {
          title: "Emergencias Registradas",
          value: estadisticsData.numberOfEmergencies[0]?.totalEmergencias || 0,
          sub: "",
          icon: <ExclamationCircleIcon className="h-6 w-6 text-red-500 mr-2" />,
        },
        {
          title: "Citas Realizadas",
          value: `${
            estadisticsData.numberOfAppointmentsDone[0]?.totalCitasRealizadas ||
            0
          } / ${totalAppointments}`,
          sub: `Ultima cita : #${
            estadisticsData.lastAppointmentDone[0]?.idCita || 0
          } | ${dayjs(estadisticsData.lastAppointmentDone[0]?.dia).format(
            "MM/DD/YY"
          )}`,
          icon: <ClipboardIcon className="h-6 w-6 text-indigo-500 mr-2" />,
        },
        {
          title: "Citas Pendientes",
          value: `${
            estadisticsData.numberOfAppointmentsOnWait[0]
              ?.totalCitasPendientes || 0
          } / ${totalAppointments}`,
          sub: `Ultima cita : #${
            estadisticsData.lastAppointmentOnWait[0]?.idCita || 0
          } | ${dayjs(estadisticsData.lastAppointmentOnWait[0]?.dia).format(
            "MM/DD/YY"
          )}`,
          icon: <CalendarIcon className="h-6 w-6 text-yellow-500 mr-2" />,
        },
        {
          title: "Ingresos Totales",
          value: `$${estadisticsData.totalIncome[0]?.ingresosTotales || 0} COP`,
          sub: "",
          icon: <CurrencyDollarIcon className="h-6 w-6 text-green-500 mr-2" />,
        },
      ];

      setData(extractedData);
    }
  }, [estadisticsData]);

  return { data };
};

export default useStadistics;
