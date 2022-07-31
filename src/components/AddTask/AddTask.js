import './AddTask.css';
import { useState } from 'react';
const AddTask = ({onAdd}) => {

    const [title,setTitle] = useState('');

    const submitForm =(event) =>{
        event.preventDefault();
        onAdd({title, check:false});
        setTitle('');
    }

    return(
        <div>
            <form className="form" onSubmit={submitForm}>
                <input 
                    type="text" 
                    value={title}
                    placeholder="input task" 
                    className="input-form"  
                    onChange={(event) => setTitle(event.target.value)}/>
                <button type="submit" className='btn-form'>Add</button>
            </form>
        </div>
    )
}

export default AddTask;