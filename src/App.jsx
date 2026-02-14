import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList"; // ✅ new import

const App = () => {
  // State: list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new task
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-6">
      <div className="bg-gray-200 shadow-blue-500 shadow-md rounded-sm w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List 📝</h1>

        {/* Input component for adding tasks. Send addTodo function to TodoInput.jsx. */}
        <TodoInput addTodo={addTodo} />

        {/* Display the list of tasks using TodoList. Send todos array to TodoList.jsx */}
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default App;