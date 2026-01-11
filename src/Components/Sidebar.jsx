import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiBook,
  FiCalendar,
  FiBarChart2,
  FiCheckSquare,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r px-6 py-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-indigo-600 mb-8">
        CreateX
      </h1>

      {/* Menu */}
      <nav className="space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg ${
              isActive
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <FiHome /> Dashboard
        </NavLink>

        <NavLink to="/courses" className="menu">
          <FiBook /> Courses
        </NavLink>

        <NavLink to="/performance" className="menu">
          <FiBarChart2 /> Performance
        </NavLink>

        <NavLink to="/calendar" className="menu">
          <FiCalendar /> Calendar
        </NavLink>

        <NavLink to="/enrolled" className="menu">
          <FiCheckSquare /> Enrolled
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
