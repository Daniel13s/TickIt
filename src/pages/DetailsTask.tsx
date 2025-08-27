import { Check, MoveLeft, X } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"
import "./DetailsTask.css"

const DetailsTask = () => {
    const [searchParams] = useSearchParams()
    const taskName = searchParams.get("nameTask")
    const taskResume = searchParams.get("resume")
    const taskIsComplete = searchParams.get("isComplete")

    const navigate = useNavigate()

    return (
        <div id="detailsbody">
            <div id="headDetailsTask">
                <button onClick={() => navigate(-1)}><MoveLeft /></button>
                <h1>{taskName}</h1>
                <div></div>
            </div>
            <p id="taskResume">{taskResume}</p>

            <div id="taskStatus">{taskIsComplete === "true"? <Check /> : <X />}</div>
        </div>
    )
}

export default DetailsTask