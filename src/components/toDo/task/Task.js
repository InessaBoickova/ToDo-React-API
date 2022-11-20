import { Fragment } from "react";
import AddTask from "../addTask/AddTask";

const Task = (props) =>{
    const {data, deleteItem} = props;

    return (
        <Fragment>
            {
                (data)? data.map((item) => {
                    let {ID,title,isCompleted} = item;
                    return (
                         <AddTask key = {ID}
                                 id = {ID}
                                 task = {title}
                                 isCompleted = {isCompleted}
                                 deleteItem = {() => deleteItem(ID)}
                        />
                    )
                }) : '...in progres'
            }
        </Fragment>
    )
}

export default Task;