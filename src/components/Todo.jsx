import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Todo = ({ todo, deleteTodo, toggleTodo }) => { // Receives a 'todo' object and functions (deleteTodo, toggleTodo) as props.
  return (
    <li className="bg-gray-50 p-2 pe-2 mb-2 rounded-sm shadow-sm flex justify-between items-center">
      {/* Task text */}
      <span
        className={todo.completed ? "line-through text-gray-400" : ""}
      >
        {todo.text}
      </span>

      {/* Action buttons */}
      <div className="flex gap-2">
        {/* Toggle button with green checkmark icon */}
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`px-2 rounded-sm border 
        ${todo.completed ? "text-gray-400 hover:text-gray-600" : "text-green-500 hover:text-green-700"}`}
        >
          <FaCheck />
        </button>

        {/* Delete button with red X icon */}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 border px-2 rounded-sm"
        >
          <FaTimes />
        </button>
      </div>
    </li>
  );
};

export default Todo;