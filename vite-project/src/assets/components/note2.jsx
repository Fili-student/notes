import React, { useState } from 'react';
 
 import './note2.css'
 function Note2(){
  
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








     return(
         <section>
             <div className="second">
                <main id='m2'>
             <input  placeholder="schreibe hier" id='input2' type="text" 
               value={inputValue}
               onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          />

<button className='add-button2'  onClick={handleAddNote}>
                    Add
                </button>
                        <article id='ar2'>
                <ul>
                {notes.map((note, index) => (
            <li  id='li2' key={index} onClick={() => handleDeleteNote(index)}>
              {note}
            </li>
          ))}

                </ul>
                </article>
                 </main>
             </div>
             <h2 className="title-of-second">Aufräumen</h2>
         </section>
     );
 }
 export default Note2

