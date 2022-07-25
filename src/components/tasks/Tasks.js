import './Tasks.css';

const Tasks = ({title}) =>{
    return(
        <div className="tasks-control">
            <div className='duty'>{title}</div>
            <button className='btn-duty edit' >Edit</button>
            <button className='btn-duty del'>Delete</button>
        </div>
    )
}

export default Tasks;