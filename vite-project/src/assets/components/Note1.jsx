import './note1.css'
import React, {useState} from 'react';
function Note1(){

    const [tasks, setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

  function addTask(){
 }
 function deleteTask(index){
 }
  function moveTaskUp(){
 }
  function moveTaskDown(){
 }




  return(
        <section>
            <div className="first">
                <input   placeholder="Deine Notiz!" type="text" value={newTask} onChange={handleInputChange}/>
                <ul>
                    {tasks.map((task,index)=>
                    <li key={index}>
                        <span className='text'>{task}</span>
                    </li>
                    )}
                </ul>
                <button className='add-button' onClick={addTask} >
                    Add
                </button>
            </div>
            <h2 className="title-of-first">Sport</h2>
        </section>
    );
}
export default Note1


// import './note1.css'
// function Note1(){
//   return(
//         <section>
//             <div className="first">
//                 <input type="text" />
//                 <ul></ul>
//             </div>
//             <h2 className="title-of-first">Sport</h2>
//         </section>
//     );
// }
// export default Note1