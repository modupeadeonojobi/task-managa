const TodoItem = ({ item, id, onCheck }) => {
  return (
    <li
      onClick={() => onCheck(id)}
      style={{
        cursor: 'pointer',
      }}
    >
      {item}
    </li>
  );
};

export default TodoItem;
