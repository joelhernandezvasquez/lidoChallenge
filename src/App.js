import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);
  
const markItem = () =>{
   return{

   }
}
  const createTodos = () =>{
    if(task!=="")
    {
      setTodos([...todos,task]);
      setTask("");
    }
  }

  const deleteTask = (e,index) =>{
   
    

  }
  return (
    <div className="App">
    
     <div className='todo-container'>
    
       <div className='input-container'>
         <input type = "text"
          placeholder='Write A task'
          value = {task}
          onChange={(e)=> setTask(e.target.value)}
         />
         <button className='btn-create-task' onClick={(e)=> createTodos()}>
           Create a Task
         </button>
       </div>

     <div className='todos-section'>
     {todos.map((todo,index)=>{
         return <div key={index} className='todo-item' onClick={(e)=> deleteTask(e,index)}> <p> {todo}</p></div>
       })}
     </div>
     
     </div>
    </div>
  );
}

export default App;
