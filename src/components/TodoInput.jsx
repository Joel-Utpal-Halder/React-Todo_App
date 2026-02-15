import { useState } from "react";

const TodoInput = ({ addTodo }) => { // Receives 'addTodo' function from App.jsx as a prop.
  const [input, setInput] = useState(""); // Local state for input field

  const handleAdd = () => {
    if (input.trim() === "") return; // ✅ Prevent empty tasks
    addTodo(input); // Call parent function to add task
    setInput(""); // Clear input field
  };

  return (
    <div className="flex mb-4 bg-white">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update local state
        className="flex-grow p-2 border rounded-l-sm"
        placeholder="Enter a task..."
      />
      <button
        onClick={handleAdd} // ✅ Add task when clicked
        className="bg-blue-500 text-white px-4 rounded-r-sm"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;