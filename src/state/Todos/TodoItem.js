import { useState } from 'react';

const TodoItem = ({ item, key }) => {
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone((prevState) => !prevState); // Here, you're toggling the previous state
  };
  return (
    <li
      key={key}
      onClick={handleClick}
      style={{
        textDecoration: isDone ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      {item}
    </li>
  );
};

export default TodoItem;
