import { useSelector } from "react-redux";
import Task from "./Task";
import "./TaskArea.css"

const TaskArea = () => {
    const {tasks} = useSelector(rootReducer => rootReducer.taskReducer)
    return(
        <div id="taskAreaG">
            <div id="filterBar">
                <input className="buttonFilter" type="button" value="feitas" />
                <input className="buttonFilter" type="button" value="pendentes" />
            </div>
            <div id="taskArea">
                {tasks.map((task) => (
                    <Task task={task} />
))}
            </div>
        </div>
    )
}

export default TaskArea;