import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Performance = () => {
  const value = 89.66;

  return (
    <div className="bg-white rounded-xl p-5 shadow h-full">
      <h3 className="font-semibold text-gray-700 mb-4">
        Performance
      </h3>

      <div className="w-32 mx-auto">
        <CircularProgressbar
          value={value}
          text="8.966"
          styles={buildStyles({
            pathColor: "#6366F1",
            textColor: "#111827",
            trailColor: "#E5E7EB",
          })}
        />
      </div>

      <p className="text-center text-sm text-gray-400 mt-2">
        Your Grade
      </p>
    </div>
  );
};

export default Performance;
