import Todo from "./Todo"; // ✅ Import single-task component

const TodoList = ({ todos, deleteTodo, toggleTodo }) => { // Receives 'todos' array and functions (deleteTodo, toggleTodo) from App.jsx.
  return (
    <ul>
      {/* Loop through each todo and render a Todo component */}
      {todos.map((todo) => (
        <Todo
          key={todo.id} // Unique identifier for React
          todo={todo} // Pass the todo object
          deleteTodo={deleteTodo} // Pass delete function
          toggleTodo={toggleTodo} // Pass toggle function
        />
      ))}
    </ul>
  );
};

export default TodoList;