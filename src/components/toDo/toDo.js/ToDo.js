import { useState,useEffect } from "react";
import TaskAddForm from "../taskAddForm/TaskAddForm";
import ClearButton from "../clearButton/ClearButton";
import Task from "../task/Task";
import {Service} from '../../services/SendForm'
import './ToDo.sass'

const ToDo =()=>{
    const {sendTask,getTask, deleteTask} = Service();
    const [data,setData] = useState([]);
    useEffect(()=>{
        getTask().then((i)=> setData(i));
    },[])

    const deleteItem =(id)=>{
        deleteTask(id)
    }
    
    // const deleteAllItem =()=>{
    //     this.setState(()=> {
    //         return {
    //           data: []
    //         }
    //     })
    // }

    const addItem = (task) => {
        if(!task){
            alert('Введите корректные данные!')
            return addItem;
        }
        sendTask(task);
        getTask()
    }

    let totalNumTask = data.length;
    return (
        <div className="todo">
            <header className="todo_header">
                <h1>Your to-do list</h1>
            </header>
                
            <section className="todo_wrapper">
                <TaskAddForm onAdd={addItem} />
                <Task data = {data}
                        deleteItem ={deleteItem} 
                        />
                <ClearButton length = {totalNumTask} 
                            // deleteAllItem = {deleteAllItem}
                            />
            </section> 
        </div>
    );
}

export default ToDo;
