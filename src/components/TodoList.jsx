import Todo from "./Todo"; // ✅ Import the single-task component

const TodoList = ({ todos }) => {
  return (
    <ul>
      {/* Loop through each todo in the array */}
      {todos.map((todo) => (
        // For each todo, render the Todo component
        // 'key={todo.id}' gives React a unique identifier for efficient rendering
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList; // ✅ Export so App.jsx can use it