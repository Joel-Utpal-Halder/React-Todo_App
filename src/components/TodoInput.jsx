import { useState } from "react";

// Input component for adding new tasks
const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  // Handle adding a new todo
  const handleAdd = () => {
    if (input.trim() === "") return; // prevent empty tasks
    addTodo(input); // call parent function
    setInput("");   // clear input after adding
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none"
        placeholder="Enter a task..."
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;