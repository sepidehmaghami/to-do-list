import './Tasks.css';

const Tasks = ({titles , txt , onDelete}) =>{
    return(
        <div className="tasks-control">
            <div className='duty'>{titles}</div>
            <button className='btn-duty edit' >Edit</button>
            <button className='btn-duty del' onClick={ () => onDelete(txt.id)}>Delete</button>
        </div>
    )
}

export default Tasks;