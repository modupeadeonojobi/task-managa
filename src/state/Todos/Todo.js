import { useState } from 'react';
import InputArea from './InputArea';
import TodoItem from './TodoItem';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addItem = (inputText) => {
    setTodos((prevState) => {
      return [...prevState, inputText];
    });
  };

  const deleteItem = (id) => {
    setTodos((prevState) => {
      return prevState.filter((item, i) => i !== id);
    });
  };

  return (
    <div>
      <div>
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {todos.map((todo, i) => (
            <TodoItem item={todo} key={i} id={i} onCheck={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
