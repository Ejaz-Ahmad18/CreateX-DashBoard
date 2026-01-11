import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const Graph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "2024",
        data: [20, 35, 30, 45, 40, 55, 50, 60],
        borderColor: "#6366F1",
        backgroundColor: "rgba(99,102,241,0.15)",
        tension: 0.4,
        fill: true,
        pointRadius: 3,
      },
      {
        label: "2025",
        data: [15, 25, 28, 35, 45, 48, 42, 50],
        borderColor: "#EC4899",
        backgroundColor: "rgba(236,72,153,0.15)",
        tension: 0.4,
        fill: true,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 10,
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 10,
        },
        grid: {
          color: "#F3F4F6",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-4">
        Learning Hours
      </h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
