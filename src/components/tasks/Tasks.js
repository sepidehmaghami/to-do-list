import { useState } from 'react';
import './Tasks.css';

const Tasks = ({titles , txt , onDelete}) =>{

    const [check , setCheck]= useState(false);
    const doneTask =() =>{
        if(!check){
        setCheck(true);
        }
        else{
        setCheck(false);
        }
    }

    const extra_styles = (check) => {
        if (check) {
            return {
                textDecoration: "line-through",
                color:"gray"
            };
            }
        else {
            return {
                textDecoration: "none",
                color:"black"
            }
        }
    };

    return(
        <div className="tasks-control">
            <input type="checkbox" onClick={doneTask}/>
            <div className='duty'  style={extra_styles(check)}>{titles}</div>
            <button className='btn-duty edit' >Edit</button>
            <button className='btn-duty del' onClick={ () => onDelete(txt.id)}>Delete</button>
        </div>
    )
}

export default Tasks;