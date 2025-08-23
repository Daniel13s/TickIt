import { MoveUpRight, Trash } from "lucide-react";
import "./Task.css"

export interface InTask {
  name: string;
  resume: string;
  isComplete: boolean;
}

const Task = ({task}: {task: InTask}) => {
    return(
        <div id="taskBody">
            <h1>{task.name}</h1>
            <p>{task.resume}</p>
            <section id="navigationArea">
                <button className="buttonTask"><MoveUpRight /></button>
                <button className="buttonTask"><Trash /></button>
            </section>
        </div>
    )
}

export default Task;