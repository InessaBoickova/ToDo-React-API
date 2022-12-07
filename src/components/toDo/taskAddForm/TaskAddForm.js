import { useState } from "react"
import './TaskAddForm.sass'

const TaskAddForm = ({onAdd} )=> {
    const [task,setTask] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(task);
        setTask('')
    }

    const onValueChange= (e)=>{
        setTask(e.target.value)
    }

    return(
        <form className="todo-form" onSubmit = {onSubmit}>
            <input onChange={(e)=>{onValueChange(e)}} 
                    type="text" placeholder="Add your new todo"
                    name="name" value={task} 
                    className="todo-form_input"/>
            <button className="todo-form_btn" type="submit"></button>
        </form>      
    )
}

export default TaskAddForm;