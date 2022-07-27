import Tasks from "../tasks/Tasks";

const TaskList=({duty , onDelete , onEdit}) =>{
    return(
        <div>
              {duty.map( (item) => {
            return( 
           <div>
             <Tasks key={item.id} txt={item} titles={item.title} onDelete={onDelete} onEdit={onEdit}/>
           </div>
                )
        } )}
        </div>
    )
}

export default TaskList;