import { useSelector } from "react-redux";
import Task, { InTask } from "./Task";
import "./TaskArea.css"
import { RootState } from "../redux/rootReducer";

const TaskArea = () => {
    const {tasks} = useSelector((rootReducer: RootState) => rootReducer.taskReducer)
    return(
        <div id="taskAreaG">
            <div id="filterBar">
                <input className="buttonFilter" type="button" value="feitas" />
                <input className="buttonFilter" type="button" value="pendentes" />
            </div>
            <div id="taskArea">
                {tasks.map((task: InTask) => (
                    <Task task={task} />
))}
            </div>
        </div>
    )
}

export default TaskArea;