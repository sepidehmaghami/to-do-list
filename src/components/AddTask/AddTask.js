import './AddTask.css';

const AddTask = () => {
    return(
        <div>
            <form className="form">
                <input placeholder="input task" className="input-form"/>
                <button type="submit" className='btn-form'>Add</button>
            </form>
        </div>
    )
}

export default AddTask;