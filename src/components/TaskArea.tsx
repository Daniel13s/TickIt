import { useDispatch, useSelector } from "react-redux";
import Task, { InTask } from "./Task";
import "./TaskArea.css";
import { RootState } from "../redux/rootReducer";
import { ActionTypes } from "../redux/task/action-types";

const TaskArea = () => {
  const { tasks } = useSelector(
    (rootReducer: RootState) => rootReducer.taskReducer
  ); //consumo do estado global tasks.
  const dispatch = useDispatch()

  function filterComplete() {
    const tasksComplete = tasks.filter((task:InTask) => task.isComplete === true)
    dispatch({
      type: ActionTypes.COMPLETE,
      payload: tasksComplete
    })
  }
  return (
    <div id="taskAreaG">
      <div id="filterBar">
        <input onClick={filterComplete} className="buttonFilter" type="button" value="feitas" />
        <input className="buttonFilter" type="button" value="pendentes" />
      </div>
      <div id="taskArea">
        {tasks.map((task: InTask) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskArea;
