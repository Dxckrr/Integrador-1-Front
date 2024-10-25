import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  appointmentsData: number[];
  labels: string[];
}

const BarChart: React.FC<BarChartProps> = ({ appointmentsData, labels }) => {
  // Array of colors for each bar
  const colors = [
    "rgba(75, 192, 192, 0.6)",
    "rgba(255, 99, 132, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(153, 102, 255, 0.6)",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Valor",
        data: appointmentsData,
        backgroundColor: colors.slice(0, appointmentsData.length), // Assign different colors
        borderColor: colors
          .slice(0, appointmentsData.length)
          .map((color) => color.replace("0.6", "1")), // Opaque borders
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow manual control of dimensions
    plugins: {
      legend: {
        display : false
      }
    },
  };

  return (
      <Bar data={data} options={options} />
  );
};

export default BarChart;
    