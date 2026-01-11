const ToDoList = () => {
  const todos = [
    "Design System & Tokens",
    "Advanced Figma",
    "Interaction Design",
    "Figma Basics",
  ];

  return (
    <>
      <h3 className="font-semibold text-gray-700 mb-4">
        To Do List
      </h3>

      <ul className="space-y-3">
        {todos.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <input type="checkbox" />
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
