import { useRef, useState } from 'react';
import './AddTask.sass'

const AddTask = (props) =>{
    let textInput = useRef()
    let {task, deleteItem} = props;
    let [classLict , setClassList] = useState('task');
    let [newText, setNewText] = useState(task);
    let [readOnly,SetReadOnly] = useState(true);
   

    const editText= () => {
        SetReadOnly(!readOnly);
        textInput.current.focus();
    }

    const onDone = () =>{
        if(classLict.includes('done')){
            setClassList(classLict.replace('done',''))
        }else{
            setClassList(classLict += ' done')
        }  
    }

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
