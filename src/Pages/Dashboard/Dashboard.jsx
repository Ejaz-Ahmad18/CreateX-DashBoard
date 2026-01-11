import Performance from "./Performance";
import Calendar from "./Calendar";
import Graph from "../../Components/Graph";
import ToDoList from "../../Components/ToDoList";

const courses = [
  {
    title: "User Interface (UI) Design",
    hours: "12.00hrs",
    lessons: "08 Lessons",
    assignments: "Assignments",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    title: "Visual Design and Branding",
    hours: "04.30hrs",
    lessons: "03 Lessons",
    assignments: "Assignments",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  },
];



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
  {courses.map((course, index) => (
    <div
      key={index}
      className="flex items-center gap-4 p-4 border rounded-xl hover:bg-gray-50 transition"
    >
      {/* Icon */}
      <img
        src={course.icon}
        alt={course.title}
        className="w-10 h-10 rounded-lg"
      />

      {/* Content */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800">
          {course.title}
        </p>

        <div className="flex gap-3 text-xs text-gray-400 mt-1">
          <span>{course.hours}</span>
          <span>{course.lessons}</span>
          <span>{course.assignments}</span>
        </div>
      </div>
    </div>
  ))}
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
