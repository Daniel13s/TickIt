import { Check, MoveLeft, X } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"
import "./DetailsTask.css"
import { RootState } from "../redux/rootReducer"
import { useDispatch, useSelector } from "react-redux"
import { ActionTypes } from "../redux/task/action-types"
import { InTask } from "../components/Task"
import { useState } from "react"
import BallMotion from "../components/animation/BallMotion"

const DetailsTask = () => {
    const [searchParams] = useSearchParams()
    const taskName:string = searchParams.get("nameTask")!
    const taskResume:string = searchParams.get("resume")!
    const [taskIsComplete, setTaskIsComplete] = useState(searchParams.get("isComplete") || '')
    const taskId:string = searchParams.get("id")!

    const {tasks} = useSelector((rootReducer: RootState) => rootReducer.taskReducer)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    function completeTask(taskId: string) {
        const taskComplete = tasks.find((task: InTask) => task.id === taskId)

        setTaskIsComplete(taskIsComplete === "true" ? "false" : "true")

        dispatch({
            type: ActionTypes.UPDATE,
            payload: taskComplete
        })
    }

    return (
        <div id="detailsbody">
            <div id="headDetailsTask">
                <button onClick={() => navigate(-1)}><MoveLeft /></button>
                <h1>{taskName}</h1>
                <div></div>
            </div>
            <p id="taskResume">{taskResume}</p>

            <div id="taskStatus" onClick={() => completeTask(taskId)}>{taskIsComplete === "true"? <Check /> : <X />}</div>
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

export default DetailsTask