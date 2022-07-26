import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/taskList/TaskList';

function App() {

  const [task , setTask] = useState([]);

  useEffect (() =>{
    const sendRequest = async() =>{
      const response = await fetch('http://localhost:8000/tasks'); 
      const responsData  = await response.json();
      setTask(responsData);
    }
    sendRequest();
  },[]);

  const deleteHandle =  async (id) =>{
      await fetch (`http://localhost:8000/tasks/${id}`,{
      method :'DELETE'
    })
    setTask(task.filter((item) => item.id !==id ))
  }

  const addHandle = async (title) =>{
    const responseAdd = await fetch ("http://localhost:8000/tasks",{
      method : "POST",
      headers:{
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(title),
    });
    const newResponseAdd = await responseAdd.json();
    setTask([...task , newResponseAdd]);
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
