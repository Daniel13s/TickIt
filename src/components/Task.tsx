import { MoveUpRight, Trash } from "lucide-react";
import "./Task.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { ActionTypes } from "../redux/task/action-types";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()

  function completeTask(taskId: string) {
    //complete as tasks com um clique.
    const taskCompleted = tasks.find((task: InTask) => task.id === taskId);
    dispatch({
        type: ActionTypes.UPDATE,
        payload: taskCompleted
    })
  }
  function deleteTask(taskId: string){
      const deleteList = tasks.filter((task: InTask) => task.id != taskId)
      dispatch({
        type: ActionTypes.DELETE,
        payload: deleteList
      })
  }

  function seeDetailsTask(taskName:string, taskResume:string, taskIsComplete:boolean, taskId: string) {
    navigate(`/DetailsTask?nameTask=${taskName}&resume=${taskResume}&isComplete=${taskIsComplete}&id=${taskId}`)
  }
  return (
    <div id={task.isComplete ? "taskBodyComplete" : "taskBody"}>
      <div onClick={():void => completeTask(task.id)}>
        {task.name.length === 0 ? <h1>nome não definido</h1> : <h1>{task.name}</h1>}
        {task.resume.length === 0 ? <p>descrição não definida</p> : <p>{task.resume}</p>}
        <p style={{opacity: "30%"}}>Clique para completar</p>
      </div>
      <section id="navigationArea">
        <button onClick={() => seeDetailsTask(task.name, task.resume, task.isComplete, task.id)} className="buttonTask">
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
