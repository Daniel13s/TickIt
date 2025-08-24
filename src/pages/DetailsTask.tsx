import { Check, X } from "lucide-react"
import { useSearchParams } from "react-router-dom"

const DetailsTask = () => {
    const [searchParams] = useSearchParams()
    const taskName: string = searchParams.get("nameTask")
    const taskResume: string = searchParams.get("resume")
    const taskIsComplete: string = searchParams.get("isComplete")
    return (
        <div>
            <h1>{taskName}</h1>
            <p>{taskResume}</p>

            {taskIsComplete === "true"? <Check /> : <X />}
        </div>
    )
}

export default DetailsTask