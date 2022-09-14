import { useState } from 'react';
import CreateArea from './CreateArea';
import Note from './Note';

const Keeper = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevState) => {
      return [...prevState, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNote) => {
      return prevNote.filter((item, i) => i !== id);
    });
  };

  return (
    <div>
      <h1>Keeper</h1>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, i) => (
        <Note
          key={i}
          title={noteItem.title}
          id={i}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
};

export default Keeper;
