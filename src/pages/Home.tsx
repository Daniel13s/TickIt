import { Plus } from "lucide-react";
import "./Home.css"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ActionTypes } from "../redux/task/action-types";
import TaskArea from "../components/TaskArea";
import { v4 } from "uuid";
import BallMotion from "../components/animation/BallMotion";

const Home = () => {
    const [nameTask, setNameTask] = useState('')
    const [resumeTask, setResumeTask] = useState('')
    const dispatch = useDispatch()
    function addNewTask() {
        //função para criar tarefas.
        const newTask = {
            id: v4(),
            name: nameTask,
            resume: resumeTask,
            isComplete: false
        }
        //action despachada para o reducer.
        dispatch({
            type: ActionTypes.CREATE,
            payload: newTask
        })
    }

    return(
        <div>
            <h1>TickIt</h1>
            <form>
                <input onChange={(e) => setNameTask(e.target.value)} type="text" placeholder="Nome da tarefa" />
                <input onChange={(e) => setResumeTask(e.target.value)} id="description" type="text" placeholder="Resumo da tarefa" />
            </form>
            <button onClick={addNewTask}><Plus /></button>
            <TaskArea />
            
            {
                //animações
            }
            <BallMotion />
            <BallMotion />
            <BallMotion />
            <BallMotion />
            <BallMotion />
            <BallMotion />
            <BallMotion />
            <BallMotion />
        </div>
    )
}

export default Home;