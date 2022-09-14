import React from 'react';

const Note = ({ title, content, id, onDelete }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    onDelete(id);
  };

  return (
    <div>
      <h4>{title}</h4>
      <p>{content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;
