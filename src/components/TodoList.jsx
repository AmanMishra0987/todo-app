import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../features/todosSlice';


const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(null);

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  const handleUpdateTodo = (id, text) => {
    dispatch(updateTodo({ id, text }));
    setEditTodo(null);
  };

  return (
    <div >
      <h1>Todo List</h1>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editTodo === todo.id ? (
              <input
                defaultValue={todo.text}
                onBlur={(e) => handleUpdateTodo(todo.id, e.target.value)}
              />
            ) : (
              <span>{todo.text}</span>
            )}
            <button onClick={() => setEditTodo(todo.id)}>Edit</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
