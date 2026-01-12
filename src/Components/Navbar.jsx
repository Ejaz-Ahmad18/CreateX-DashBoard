import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="h-[64px] bg-[#F9FAFC] border-b border-gray-200 flex items-center justify-between px-[32px]">
      {/* Left: Search */}
      <div className="flex items-center gap-3 bg-white h-[40px] w-[320px] px-4 rounded-[10px] border border-gray-200">
        <FiSearch className="text-gray-400 text-[16px]" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <div className="relative">
          <FiBell className="text-[18px] text-gray-600" />
          <span className="absolute -top-1 -right-1 w-[8px] h-[8px] bg-red-500 rounded-full"></span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-[32px] h-[32px] rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">
            Abdallah
          </span>
          <FiChevronDown className="text-gray-400 text-[16px]" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
