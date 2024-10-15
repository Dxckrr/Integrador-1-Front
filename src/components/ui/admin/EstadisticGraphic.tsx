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
import { useFinances } from "../../../hooks/admin/useFinances";
import { services } from "../../../utils/data/services";

// Register the components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EstadisticGraphic = ({ service }): any => {

  const { labels, data } = useFinances(service);

  const chartData = {
    labels, // From hook
    datasets: [
      {
        label: "Total Income",
        data, // From hook
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4, // Line curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Ingresos por pagos de citas: ${service ? services.find((service_data) => service_data.id == service)?.title : ""
          }`,
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
