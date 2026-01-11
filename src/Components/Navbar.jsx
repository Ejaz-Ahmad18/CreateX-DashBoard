import { FiSearch, FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
        <FiSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <FiBell className="text-xl text-gray-600" />
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Navbar;
