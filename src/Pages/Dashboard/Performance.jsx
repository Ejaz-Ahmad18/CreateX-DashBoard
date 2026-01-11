const Performance = () => {
  const score = 8.966; // out of 10
  const rotation = (score / 10) * 180 - 90; // needle angle

  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-4">
        Performance
      </h3>

      <div className="relative w-56 h-28 mx-auto">
        {/* Arc */}
        <svg viewBox="0 0 200 100" className="w-full">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>

          <path
            d="M10 100 A90 90 0 0 1 190 100"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>

        {/* Needle */}
        <div
          className="absolute left-1/2 bottom-0 w-1 h-20 bg-gray-800 origin-bottom transition-transform duration-700"
          style={{ transform: `rotate(${rotation}deg)` }}
        ></div>

        {/* Center Dot */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full"></div>
      </div>

      {/* Score */}
      <div className="text-center mt-4">
        <p className="text-3xl font-bold text-gray-800">
          {score}
        </p>
        <p className="text-sm text-gray-400">
          Your Grade
        </p>
      </div>
    </div>
  );
};

export default Performance;
