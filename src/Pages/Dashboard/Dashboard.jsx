import Performance from "./Performance";
import Calendar from "./Calendar";
import Graph from "../../Components/Graph";
import ToDoList from "../../Components/ToDoList";




const Dashboard = () => {
  return (
 <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

      {/* Performance Card */}
      {/* Performance */}
<div className="col-span-4">
  <Performance />
</div>


      {/* Calendar Card */}
     
<div className="md:col-span-4 bg-white rounded-xl p-5 shadow-sm">
  <Calendar />
</div>

      {/* Recently Joined */}
     <h3 className="font-semibold text-gray-700 mb-4">
  Recently Joined Courses
</h3>

<div className="space-y-4">
  <div className="flex items-center gap-4 p-3 rounded-lg border">
    <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold">
      UI
    </div>

    <div className="flex-1">
      <p className="text-sm font-medium">
        User Interface Design
      </p>
      <p className="text-xs text-gray-400">
        12 hours • 8 lessons
      </p>
    </div>
  </div>

  <div className="flex items-center gap-4 p-3 rounded-lg border">
    <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center font-bold">
      UX
    </div>

    <div className="flex-1">
      <p className="text-sm font-medium">
        Visual Design & Branding
      </p>
      <p className="text-xs text-gray-400">
        8 hours • 6 lessons
      </p>
    </div>
  </div>
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
