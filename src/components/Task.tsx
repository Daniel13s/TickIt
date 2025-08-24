import { MoveUpRight, Trash } from "lucide-react";
import "./Task.css";
import { useDispatch, useSelector } from "react-redux";
import rootReducer, { RootState } from "../redux/rootReducer";
import { ActionTypes } from "../redux/task/action-types";

export interface InTask {
  //interface para tipar o task(evitando erros)
  id: string,
  name: string;
  resume: string;
  isComplete: boolean;
}

const Task = ({ task }: { task: InTask }) => {
  const dispatch = useDispatch()
  const {tasks} = useSelector((rootReducer: RootState) => rootReducer.taskReducer)

  function completeTask(taskId: string) {
    //complete as tasks com um clique.
    const taskCompleted = tasks.find((task: InTask) => task.id === taskId);
    dispatch({
        type: ActionTypes.UPDATE,
        payload: taskCompleted
    })
  }
  function deleteTask(taskId: string){
      const deleteList = tasks.filter((task) => task.id != taskId)
      dispatch({
        type: ActionTypes.DELETE,
        payload: deleteList
      })
    }
  return (
    <div id={task.isComplete ? "taskBodyComplete" : "taskBody"}>
      <div onClick={():void => completeTask(task.id)}>
        <h1>{task.name}</h1>
        <p>{task.resume}</p>
      </div>
      <section id="navigationArea">
        <button className="buttonTask">
          <MoveUpRight />
        </button>
        <button onClick={():void => deleteTask(task.id)} className="buttonTask">
          <Trash />
        </button>
      </section>
    </div>
  );
};

export default Task;
