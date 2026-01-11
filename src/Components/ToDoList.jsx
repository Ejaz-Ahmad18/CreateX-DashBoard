import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { text: "Design System & Tokens", date: "10 Jan", done: false },
    { text: "Advanced Figma", date: "12 Jan", done: false },
    { text: "Interaction Design", date: "14 Jan", done: true },
    { text: "Figma Basics", date: "16 Jan", done: false },
  ]);

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-4">
        To Do List
      </h3>

      <ul className="space-y-3">
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            className="flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              {/* Checkbox */}
              <span
                className={`w-4 h-4 rounded border flex items-center justify-center
                  ${
                    todo.done
                      ? "bg-indigo-600 border-indigo-600"
                      : "border-gray-300"
                  }
                `}
              >
                {todo.done && (
                  <span className="w-2 h-2 bg-white rounded-sm"></span>
                )}
              </span>

              {/* Text */}
              <span
                className={`text-sm transition-all duration-300
                  ${
                    todo.done
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }
                `}
              >
                {todo.text}
              </span>
            </div>

            {/* Date */}
            <span
              className={`text-xs
                ${
                  todo.done ? "text-gray-300" : "text-gray-400"
                }
              `}
            >
              {todo.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
