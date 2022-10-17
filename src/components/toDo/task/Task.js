import { Fragment } from "react";
import AddTask from "../addTask/AddTask";

const Task = (props) =>{
    const {data, deleteItem} = props;
    const elem = data.map((item) => {
        let {id,task} = item;
        return (
             <AddTask key = {id}
                     task = {task}
                     deleteItem ={() => deleteItem(id)}/>
        )
    })
    
    return (
        <Fragment>
            {elem}
        </Fragment>
    )
}

export default Task;