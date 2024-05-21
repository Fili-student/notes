import React, { useState } from 'react';
import './note1.css';

function Note1() {
  const [inputValue, setInputValue] = useState('');
  const [notes, setNotes] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, noteIndex) => noteIndex !== index);
    setNotes(newNotes);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddNote();
    }
  };

  return (
    <section>
      <div className="first">
        <main>
        <input
          placeholder="schreibe hier"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
          <button className='add-button' onClick={handleAddNote}>
          Add
        </button>

        <article>
                <ul>
                {notes.map((note, index) => (
            <li id='li1' key={index} onClick={() => handleDeleteNote(index)}>
              {note}
            </li>
          ))}

                </ul>
                </article>
                </main>
      </div>
      <h2 className="title-of-first">Sport</h2>
    </section>
  );
}

export default Note1;





