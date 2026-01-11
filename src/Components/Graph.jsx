import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const Graph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Learning Hours",
        data: [20, 35, 30, 45, 40, 55],
        borderColor: "#6366F1",
        tension: 0.4,
      },
    ],
  };

  return (
    <>
      <h3 className="font-semibold text-gray-700 mb-4">
        Learning Hours
      </h3>
      <Line data={data} />
    </>
  );
};

export default Graph;
