import { useRef, useState } from 'react';
import {Service} from '../../services/SendForm'
import './AddTask.sass'

const AddTask = (props) =>{
    const {isCompletedTask} = Service();
    let textInput = useRef()
    let {task, deleteItem,id,isCompleted} = props;
    let [classLict , setClassList] = useState((isCompleted)? 'task done' : 'task');
    let [newText, setNewText] = useState(task);
    let [readOnly,SetReadOnly] = useState(true);
   
    const editText= () => {
        SetReadOnly(!readOnly);
        textInput.current.focus();
    }

    const onDone = () =>{
        if(classLict === ('task done')){
            setClassList(classLict.replace('task done','task'))
        }else{
            setClassList(classLict.replace('task','task done'))
            isCompletedTask(id);
        }  
    }
    console.log(isCompleted)

    return (
        <div className={classLict}>
            <input ref = {textInput} type="text"
                readOnly = {readOnly}
                onClick={onDone} 
                value = {newText} 
                onChange = {(e) => setNewText(e.target.value)}/>
           
                <div>
                    <button className='task_button change' 
                            onClick={editText}>   
                    </button>
                    <button className="task_button delete"
                            onClick={deleteItem}>
                    </button>
                </div>
        </div>
    )
}

export default AddTask;
