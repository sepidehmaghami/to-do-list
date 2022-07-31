import { useState } from 'react';
import './Tasks.css';

const Tasks = ({titles , txt , onDelete , onEdit ,onDone}) =>{

    const [check , setCheck]= useState();
    const doneTask =() =>{
        alert(check)
        if(!check){
            setCheck(true);
            const title =txt.title;
            onDone(txt.id,{title, check:true});
        }       
        else{
            setCheck(false);           
            const title =txt.title;
            onDone(txt.id,{title, check:false});
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

      const [isPTag, setPTag] = useState(true);

      const [title,setTitle] = useState('');
      
    const submitInput =(event) =>{
        event.preventDefault();
        setPTag(true);
        onEdit(txt.id,{title,check:check});
    }

    return(
        <div className="tasks-control">
            <input type="checkbox" onClick={doneTask}/>
                {isPTag ? (
                    <div className='duty'  style={extra_styles(check)}>{titles}</div>
                        ) : (
                    <input  
                    type="text" 
                    placeholder={titles} 
                    value={title}
                    className="input-form"
                    onChange={(event) => setTitle(event.target.value)}
                    />
                )}
            {isPTag ? (
            <button className='btn-duty edit' onClick={() => setPTag(false)}>Edit</button>
            ) : (
            <button className='btn-duty edit' onClick={submitInput} type="submit">Add</button>
            )}
            <button className='btn-duty del' onClick={ () => onDelete(txt.id)}>Delete</button>
        </div>
    )
}

export default Tasks;