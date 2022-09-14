import { useState } from 'react';

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevState) => {
      return {
        // We have to take note of the previous value because it's two input
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    event.preventDefault();
    onAdd(note);
    setNote({
      title: '',
      content: '',
    });
  };

  return (
    <div>
      <form>
        <input
          name='title'
          value={note.title}
          placeholder='Take a note'
          onChange={handleChange}
        />
        <br />
        <textarea
          name='content'
          value={note.content}
          placeholder='Take a note'
          onChange={handleChange}
          rows='3'
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
