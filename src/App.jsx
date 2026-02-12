import { useState } from "react";
import TodoInput from "./components/TodoInput";

const App = () => {
  // State: list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new task
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-6">
      <div className="bg-gray-200 shadow-blue-500 shadow-md rounded-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List 📝</h1>

        {/* Input component for adding tasks */}
        <TodoInput addTodo={addTodo} />

        {/* Display the list of tasks */}
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="bg-gray-50 p-3 mb-2 rounded-lg shadow-sm">
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;