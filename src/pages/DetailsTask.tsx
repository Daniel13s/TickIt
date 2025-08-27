import { Check, X } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import "./DetailsTask.css"

const DetailsTask = () => {
    const [searchParams] = useSearchParams()
    const taskName = searchParams.get("nameTask")
    const taskResume = searchParams.get("resume")
    const taskIsComplete = searchParams.get("isComplete")
    return (
        <div id="detailsbody">
            <h1>{taskName}</h1>
            <p id="taskResume">{taskResume}</p>

            <div id="taskStatus">{taskIsComplete === "true"? <Check /> : <X />}</div>
        </div>
    )
}

export default DetailsTask