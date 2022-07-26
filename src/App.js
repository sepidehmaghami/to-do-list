import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/taskList/TaskList';

function App() {

  const [task , setTask] = useState([
    // {id:1 , title:'react'},
    // {id:2 , title:'HTML'}
  ]);

  useEffect (() =>{
    const sendRequest = async() =>{
      const response = await fetch('http://localhost:8000/tasks'); 
      const responsData  = await response.json();
      setTask(responsData);
    }
    sendRequest();
  },[]);

  const deleteHandle = (id) =>{
    setTask(task.filter((item) => item.id !==id ))
  }

  const addHandle = (title) =>{
    console.log(title);
    const id = Math.floor(Math.random()*1000) ;
    const newTask = {id , ...title};
    console.log(newTask);
    setTask([...task , newTask]);
  }

  return (
    <div className="App">
     <h1>To-Do List</h1>
      <AddTask onAdd={addHandle}/>
      <TaskList duty={task} onDelete={deleteHandle}/>
    </div>
  );
}

export default App;
