import { useState } from 'react';
import TodoItem from './TodoItem';

const Todo = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  const addItem = () => {
    setTodos((prevState) => {
      return [...prevState, inputText];
    });
    setInputText('');
  };
  return (
    <div>
      <div>
        <h1>To-Do List</h1>
      </div>
      <div>
        <input type='text' value={inputText} onChange={handleChange} />
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, i) => (
            <TodoItem item={todo} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
