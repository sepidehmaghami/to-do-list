import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/taskList/TaskList';

function App() {

const [task , setTask] = useState([
  {id:1 , title:'react'},
  {id:2 , title:'HTML'}
]);

  return (
    <div className="App">
     <h1>To-Do List</h1>
      <AddTask/>
      <TaskList duty={task}/>
    </div>
  );
}

export default App;
