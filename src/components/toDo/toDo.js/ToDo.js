import { useState,useEffect } from "react";
import TaskAddForm from "../taskAddForm/TaskAddForm";
import ClearButton from "../clearButton/ClearButton";
import AddTask from "../addTask/AddTask";
import Spinner from '../../spinner/Spinner'
import { Service } from "../../../services/SendForm";
import './ToDo.sass'

const ToDo =()=>{
    const {sendTask,getTask, deleteTask} = Service();
    const [data,setData] = useState([]);
    const [spinner,setSpinner] = useState(true);
  
    useEffect(()=>{
        getTask().then((i)=> {
            setData(i);
        })
        setSpinner(false)
    },[])

    useEffect(()=>{
        getTask().then((i)=>{
            setData(i);
        });
    },[data])

    const deleteItem =(id)=>{
        deleteTask(id);
    }
    
    const deleteAllItem =()=>{
        getTask().then((i)=> i.map((i)=>{
            deleteTask(i.ID);
        }));
    }

    const addItem = (task) => {
        if(!task){
            alert('Введите корректные данные!')
            return addItem;
        }
        sendTask(task);
    }

    const totalNumTask = data.length;
    return (
        <div className="todo">
            <header className="todo_header">
                <h1>Your to-do list</h1>
            </header>
                
            <section className="todo_wrapper">
                <TaskAddForm onAdd={addItem}/>
                {(spinner)? <Spinner/> :  <AddTask data = {data}
                        deleteItem = {deleteItem} 
                        />}
                <ClearButton length = {totalNumTask} 
                            deleteAllItem = {deleteAllItem}
                            />
            </section> 
        </div>
    );
}

export default ToDo;
