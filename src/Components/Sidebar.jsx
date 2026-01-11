import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiBook,
  FiBarChart2,
  FiCalendar,
  FiCheckSquare,
} from "react-icons/fi";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all
     ${
       isActive
         ? "bg-indigo-50 text-indigo-600 font-medium"
         : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
     }`;

  return (
    <aside className="w-64 bg-white border-r px-6 py-6 flex flex-col">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-indigo-600 mb-10">
        CreateX
      </h1>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <NavLink to="/" end className={linkClass}>
          <FiHome className="text-lg" />
          Dashboard
        </NavLink>

        <NavLink to="/courses" className={linkClass}>
          <FiBook className="text-lg" />
          Courses
        </NavLink>

        <NavLink to="/performance" className={linkClass}>
          <FiBarChart2 className="text-lg" />
          Performance
        </NavLink>

        <NavLink to="/calendar" className={linkClass}>
          <FiCalendar className="text-lg" />
          Calendar
        </NavLink>

        <NavLink to="/enrolled" className={linkClass}>
          <FiCheckSquare className="text-lg" />
          Enrolled
        </NavLink>
      </nav>

      {/* Footer (optional later) */}
      <div className="mt-auto text-xs text-gray-300 pt-6">
  © 2026 CreateX
</div>

    </aside>
  );
};

export default Sidebar;
