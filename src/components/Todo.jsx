// This component represents a single todo item (one task card).
// It receives a 'todo' object as a prop from TodoList.jsx.

const Todo = ({ todo }) => {
  return (
    // Each todo is displayed inside a list item <li>
    <li className="bg-gray-50 p-3 mb-2 rounded-sm shadow-sm">
      {/* Show the text of the todo */}
      {todo.text}
    </li>
  );
};

export default Todo;