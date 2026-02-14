import Todo from "./Todo"; // ✅ Import the single-task component

const TodoList = ({ todos }) => { // Receives the todos array from App.jsx.
  return (
    <ul>
      {/* Loop through each todo in the array */}
      {todos.map((todo) => (
        // Loops through todos with .map(). For each todo, render the Todo component. 
        // 'key={todo.id}' gives React a unique identifier for efficient rendering
        <Todo key={todo.id} todo={todo} /> // Passes each single todo object → to Todo.jsx.
      ))}
    </ul>
  );
};

export default TodoList; // ✅ Export so App.jsx can use it