import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { get_all_appointments_service } from "../../../services/core/appointments.service";
import dayjs from "dayjs";
import { services } from "../../../utils/data/services";

// Register the components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface appointmentData{
  month_num : number;
  year : number;
  total_income: string;
}

const EstadisticGraphic = ({ service }) => {
  //
  const [chartData, setChartData] = useState({
    labels: [], // Empty labels initially
    datasets: [
      {
        label: "",
        data: [], // Empty data initially
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4, // Line curve
      },
    ],
  });
  const formatData = (appointments : appointmentData[]) => {
    const months = appointments.map((item) =>
      dayjs()
        .month(item.month_num - 1)
        .format("MMMM")
    ); // Convert month number to name
    const income = appointments.map((item) => parseFloat(item.total_income)); // Convert total_income to number
    return { labels: months, data: income }; // Return formatted data
  };

  // Fetch data when `service` changes
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await get_all_appointments_service(service); // Fetch data
        const { labels, data } = formatData(response); // Format data
        setChartData({
          labels,
          datasets: [
            {
              ...chartData.datasets[0], // Keep other dataset properties
              data, // Set the total income data
            },
          ],
        });
      } catch (err) {
        console.log(err);
      }
    };

    if (service) {
      fetchAppointments();
    }
  }, [service]); // Dependency on service

  // Optional chart configuration
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Ingresos por pagos de citas : ${
          service
            ? services.find((service_data) => service_data.id == service)?.title
            : ""
        }`, //has to change
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default EstadisticGraphic;
