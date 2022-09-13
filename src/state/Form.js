import React from 'react';
import { useState } from 'react';

const Form = () => {
  const [fullName, setFullName] = useState({
    fName: '',
    lName: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFullName((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  // TODO: Submit the form in the button code

  return (
    <div>
      <h1>
        Hi {fullName.fName} {fullName.lName}{' '}
      </h1>
      <form>
        <input
          type='text'
          placeholder='Your first name'
          name='fName'
          value={fullName.fName}
          onChange={handleChange}
        />
        <br />
        <input
          type='text'
          placeholder='Your last name'
          name='lName'
          value={fullName.lName}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
