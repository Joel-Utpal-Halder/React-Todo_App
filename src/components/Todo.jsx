const Todo = ({ todo, deleteTodo, toggleTodo }) => { // Receives a 'todo' object and functions (deleteTodo, toggleTodo) as props.
  return (
    <li className="bg-gray-50 p-3 mb-2 rounded-sm shadow-sm flex justify-between items-center">
      {/* Task text, styled differently if completed */}
      <span
        onClick={() => toggleTodo(todo.id)} // ✅ Toggle complete when clicked
        className={todo.completed ? "line-through text-gray-400" : ""}
      >
        {todo.text}
      </span>

      {/* Delete button */}
      <button
        onClick={() => deleteTodo(todo.id)} // ✅ Delete task when clicked
        className="ml-4 text-red-500 hover:text-red-700 border"
      >
        ❌
      </button>
    </li>
  );
};

export default Todo;