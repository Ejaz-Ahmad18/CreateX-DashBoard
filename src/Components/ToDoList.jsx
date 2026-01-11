import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { text: "Design System & Tokens", done: false },
    { text: "Advanced Figma", done: false },
    { text: "Interaction Design", done: false },
    { text: "Figma Basics", done: true },
  ]);

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="h-full">
      <h3 className="font-semibold text-gray-700 mb-4">
        To Do List
      </h3>

      <ul className="space-y-3">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-sm cursor-pointer"
            onClick={() => toggleTodo(index)}
          >
            <input
              type="checkbox"
              checked={todo.done}
              readOnly
              className="accent-indigo-600"
            />

            <span
              className={`${
                todo.done
                  ? "line-through text-gray-400"
                  : "text-gray-700"
              }`}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
