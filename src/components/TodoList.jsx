const TodoList = ({ todos }) => {
  return (
    <ul>
      {/* Loop through each todo in the array */}
      {todos.map((todo) => (
        // Each todo is displayed as a list item <li>
        // 'key={todo.id}' gives React a unique identifier for efficient rendering
        <li
          key={todo.id}
          className="bg-gray-50 p-3 mb-2 rounded-lg shadow-sm"
        >
          {/* Show the text of the todo */}
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;