import { useState } from 'react';

const Todo = () => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  const handleClick = () => {
    setItems((prevState) => {
      return [...prevState, inputText];
    });
    console.log(items);
    setInputText('');
  };

  return (
    <div>
      <div>
        <h1>To-Do List</h1>
      </div>
      <div>
        <input type='text' onChange={handleChange} value={inputText} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
