import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DashboardCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <h3 className="font-semibold text-gray-700 mb-3">
        Calendar
      </h3>

      <Calendar
        onChange={setDate}
        value={date}
        className="rounded-lg border-none"
      />
    </div>
  );
};

export default DashboardCalendar;
