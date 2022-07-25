import Tasks from "../tasks/Tasks";

const TaskList=({duty}) =>{
    return(
        <div>
              {duty.map( (item) => {
            return( 
           <div>
             <Tasks key={item.id} duty={item} title={item.title}/>
           </div>
                )
        } )}
        </div>
    )
}

export default TaskList;