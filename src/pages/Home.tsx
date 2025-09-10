import { Plus } from "lucide-react";
import "./Home.css"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ActionTypes } from "../redux/task/action-types";
import TaskArea from "../components/TaskArea";
import { v4 } from "uuid";
import BallMotion from "../components/animation/BallMotion";
import Loading from "../components/animation/Loading";

const Home = () => {
    const [nameTask, setNameTask] = useState('')
    const [resumeTask, setResumeTask] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    function addNewTask() {
        setLoading(true)
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
        setTimeout(() => {
            setLoading(false)
        }, 200);
        setNameTask('')
        setResumeTask('')
    }

    return(
        <div>
            <h1>TickIt</h1>
            <form>
                <input onChange={(e) => setNameTask(e.target.value)} type="text" placeholder="Nome da tarefa" value={nameTask} />
                <input onChange={(e) => setResumeTask(e.target.value)} id="description" type="text" placeholder="Resumo da tarefa" value={resumeTask} />
            </form>
            <button onClick={addNewTask}><Plus /></button>
            {loading ? <Loading /> : <TaskArea />}
            
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