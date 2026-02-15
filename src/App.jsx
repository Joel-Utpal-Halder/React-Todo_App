import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList"; // ✅ Import TodoList

const App = () => {
  // State: list of todos (array of objects with id, text, completed)
  const [todos, setTodos] = useState([]);

  // Function to add a new task
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]); // ✅ Add completed flag
  };

  // Function to delete a task by id
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to toggle completion status of a task
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-6">
      <div className="bg-gray-200 shadow-blue-500 shadow-md rounded-sm w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List 📝</h1>

        {/* Input component for adding tasks */}
        <TodoInput addTodo={addTodo} />

        {/* Display the list of tasks using TodoList */}
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
};

export default App;