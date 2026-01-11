import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar = () => {
  const [month, setMonth] = useState("January");
  const [year] = useState(2026);
  const [activeDate, setActiveDate] = useState(11);

  const dates = [
    29, 30, 31, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 1
  ];

  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-4">
        Calendar
      </h3>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <FiChevronLeft className="cursor-pointer text-gray-500" />
        <p className="font-medium text-gray-700">
          {month} {year}
        </p>
        <FiChevronRight className="cursor-pointer text-gray-500" />
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-y-2 text-sm">
        {dates.map((date, i) => (
          <div
            key={i}
            onClick={() => setActiveDate(date)}
            className={`text-center cursor-pointer py-1 rounded-lg
              ${
                date === activeDate
                  ? "bg-indigo-600 text-white"
                  : i % 7 === 6
                  ? "text-red-500"
                  : "text-gray-700"
              }
            `}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
