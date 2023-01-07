import { useState,useEffect } from "react";
import TaskAddForm from "../taskAddForm/TaskAddForm";
import ClearButton from "../clearButton/ClearButton";
import AddTask from "../addTask/AddTask";
import { Service } from "../../../services";
import {Helmet} from "react-helmet";
import './ToDo.sass'

const ToDo = () =>{
    const {sendTask,getTask, deleteTask} = Service();
    const [data,setData] = useState([]);
  
    useEffect(() => {
        getTask().then((i)=> {
            setData(i);
        })
        // eslint-disable-next-line
    },[])

    const upDate = () =>{
        setTimeout (() =>{
            getTask().then((i)=>{
                setData(i);
            });
        },1000);
    }

    const deleteItem = (id) => {
        deleteTask(id);
        upDate();
    }
    
    const deleteAllItem = () =>{
        // eslint-disable-next-line
        getTask().then((i)=> i.map((i)=>{
            deleteTask(i.ID);
        }));
        upDate();
    } 

    const addItem = (task) => {
        if(!task){
            alert('Введите корректные данные!')
            return addItem;
        }
        sendTask(task);
        upDate();
    }

    const totalNumTask = data.length;
    return (
        <div className="todo">
            <Helmet>
                <title>Your ToDo List</title>
            </Helmet>
            <header className="todo_header">
                <h1>Your ToDo List</h1>
            </header>
                
            <section className="todo_wrapper">
                <TaskAddForm onAdd={addItem}/>
                 <AddTask data = {data} deleteItem = {deleteItem} />
                <ClearButton length = {totalNumTask} 
                            deleteAllItem = {deleteAllItem}/>
            </section> 
        </div>
    );
}

export default ToDo;
