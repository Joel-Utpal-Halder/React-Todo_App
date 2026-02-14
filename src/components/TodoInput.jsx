import { useState } from "react";

// Input component for adding new tasks. It receives the 'addTodo' function as a prop from App.jsx to add new tasks to the list.
const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  // Handle adding a new todo
  const handleAdd = () => {
    if (input.trim() === "") return; // prevent empty tasks
    addTodo(input); // Calls addTodo (received from App.jsx) when Add is clicked.
    setInput("");   // Clear input after adding
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border bg-gray-50 rounded-sm px-3 py-2 focus:outline-none"
        placeholder="Enter a task..."
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-sm hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;