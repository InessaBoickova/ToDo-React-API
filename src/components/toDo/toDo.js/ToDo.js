import { Component } from "react";
import TaskAddForm from "../taskAddForm/TaskAddForm";
import ClearButton from "../clearButton/ClearButton";
import Task from "../task/Task";
import './ToDo.sass'

class ToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {task:'Learn React', id: 0 },
            ],
        }
        this.maxId = 1;
    }

    deleteItem =(id)=>{
        this.setState(({data})=> {
            return {
              data: data.filter(item => item.id !== id)
            }
        })
    }

    deleteAllItem =()=>{
        this.setState(()=> {
            return {
              data: []
            }
        })
    }

    addItem = (task) => {
      if(!task){
        alert('Введите корректные данные!')
        return this.addItem;
      }

      const newItem = {
          task,
          id: this.maxId++
      }
  
      this.setState(({data}) => {
          const newArr = [...data, newItem];
          return {
              data: newArr
          }
      });
    }
  
    render(){
      const {data} = this.state;
      let totalNumTask = data.length;
        return (
            <div className="todo">
                <header className="todo_header">
                    <h1>Your to-do list</h1>
                </header>
                  
                <section className="todo_wrapper">
                    <TaskAddForm onAdd={this.addItem} />
                    <Task data = {data}
                          deleteItem ={this.deleteItem} />
                    <ClearButton length = {totalNumTask} 
                                deleteAllItem = {this.deleteAllItem}/>
                </section> 
            </div>
        );
    }
}

export default ToDo;
