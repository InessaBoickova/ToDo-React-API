import { useRef, useState } from 'react';
import { Service } from '../../../services/SendForm';
import './Task.sass'

const Task = ({task, deleteItem,id,isCompleted}) =>{
    const {isCompletedTask,upDatedTask} = Service();
    const textInput = useRef()
    const [classLict , setClassList] = useState((isCompleted)? 'task done' : 'task');
    const [newText, setNewText] = useState(task);
    const [readOnly,SetReadOnly] = useState(true);
   
    const editText= () => {
        SetReadOnly(!readOnly);
        textInput.current.focus();
    }

    const changeInput = (e)=>{
        setNewText(e.target.value);
        if(newText.length > 1){
            upDatedTask(id,newText); 
        }
    }

    const onDone = () =>{
        (classLict === 'task done') ? setClassList(classLict.replace('task done','task'))
                                    :setClassList(classLict.replace('task','task done'))
        isCompletedTask(id);
    }
    
    return (
        <div className={classLict}>
            <input ref = {textInput} type="text"
                readOnly = {readOnly}
                onClick={onDone} 
                value = {newText} 
                onChange = {(e) =>changeInput(e) }/>
           
                <div>
                    <button className= 'task_button change'
                            onClick={editText}>   
                    </button>
                    <button className="task_button delete "
                            onClick={deleteItem}>
                    </button>
                </div>
        </div>
    )
}

export default Task;
