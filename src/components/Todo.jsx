const Todo = ({ todo }) => { // Receives a 'todo' object as a prop from TodoList.jsx.
  return (
    // Each todo is displayed inside a list item <li>
    <li className="bg-gray-50 p-3 mb-2 rounded-sm shadow-sm">
      {/* Displays one todo’s text inside <li> */}
      {todo.text}
    </li>
  );
};

export default Todo; // ✅ Export so TodoList.jsx can use it