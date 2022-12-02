import { Fragment } from "react";
import Task from "../task/Task";

const AddTask = ({data, deleteItem}) =>{
   
    return (
        <Fragment>
            {data.map((item) => {
            let {ID,title,isCompleted} = item;
            return (
                    <Task key = {ID}
                            id = {ID}
                            task = {title}
                            isCompleted = {isCompleted}
                            deleteItem = {() => deleteItem(ID)}/>
                    )
                })
            }
        </Fragment>
    )
}

export default AddTask;