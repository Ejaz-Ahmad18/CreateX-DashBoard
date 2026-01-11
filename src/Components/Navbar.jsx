import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      {/* Search */}
      <div className="hidden sm:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg w-72">
        <FiSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <div className="relative">
          <FiBell className="text-xl text-gray-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden sm:block text-sm font-medium">
            Abdallah
          </span>
          <FiChevronDown className="text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
