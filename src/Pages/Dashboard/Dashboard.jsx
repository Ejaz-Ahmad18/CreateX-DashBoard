import Graph from "../../Components/Graph";
import ToDoList from "../../Components/ToDoList";
import Graph from "../../Components/Graph";
import ToDoList from "../../Components/ToDoList";
import Calendar from "./Calendar";


const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Performance Card */}
      <div className="col-span-4 bg-white rounded-xl p-5 shadow">
        <h3 className="font-semibold text-gray-700 mb-2">
          Performance
        </h3>
        <p className="text-3xl font-bold text-indigo-600">
          8.966
        </p>
        <p className="text-sm text-gray-400">Your Grade</p>
      </div>

      {/* Calendar Card */}
      <div className="col-span-4 bg-white rounded-xl p-5 shadow">
        <h3 className="font-semibold text-gray-700 mb-2">
          Calendar
        </h3>
        <p className="text-gray-400 text-sm">
          October 2025
        </p>
      </div>

      {/* Recently Joined */}
      <div className="col-span-4 bg-white rounded-xl p-5 shadow">
        <h3 className="font-semibold text-gray-700 mb-3">
          Recently Joined Courses
        </h3>
        <p className="text-sm">UI Design</p>
        <p className="text-sm text-gray-400">
          12 hours • 8 lessons
        </p>
      </div>

      {/* Graph */}
      <div className="col-span-8 bg-white rounded-xl p-5 shadow">
        <Graph />
      </div>

      {/* ToDo */}
      <div className="col-span-4 bg-white rounded-xl p-5 shadow">
        <ToDoList />
      </div>
    </div>
  );
};

export default Dashboard;
