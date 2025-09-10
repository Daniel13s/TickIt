import { useSelector } from "react-redux";
import Task, { InTask } from "./Task";
import "./TaskArea.css";
import { RootState } from "../redux/rootReducer";
import { useEffect, useState } from "react";

const TaskArea = () => {
  const { tasks } = useSelector(
    (rootReducer: RootState) => rootReducer.taskReducer
  ); //consumo do estado global tasks.
  const [taskList, setTaskList] = useState(tasks)

  function filterComplete() {
    const tasksComplete = tasks.filter((task: InTask) => task.isComplete === true)
    setTaskList(tasksComplete)
  }

  function filterPendent() {
    const tasksPendent = tasks.filter((task: InTask) => task.isComplete === false)
    setTaskList(tasksPendent)
  }

  useEffect(()=>{
    setTaskList(tasks)
  }, [tasks])
  return (
    <div id="taskAreaG">
      <div id="filterBar">
        <input
          onClick={filterComplete}
          className="buttonFilter"
          type="button"
          value="feitas"
        />
        <input
          onClick={filterPendent}
          className="buttonFilter"
          type="button"
          value="pendentes"
        />
      </div>
      <div id="taskArea">
        {taskList.length === 0 ? <p>:/</p> : taskList.map((task: InTask) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskArea;
