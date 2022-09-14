import { useState } from 'react';

const InputArea = ({ onAdd }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  return (
    <div>
      <input type='text' value={inputText} onChange={handleChange} />
      <button
        onClick={() => {
          onAdd(inputText);
          setInputText('');
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InputArea;
