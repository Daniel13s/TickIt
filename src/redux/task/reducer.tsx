import { ActionTypes } from "./action-types";

type Action = {
    type: string,
    payload: string
}

const saved = localStorage.getItem("tasks");
const initialState = {
    tasks: saved ? JSON.parse(saved) : []
}


const taskReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case ActionTypes.CREATE:
            const newTask = action.payload
            const fullList = state.tasks.concat(newTask)
            localStorage.setItem('tasks', JSON.stringify(fullList))
            const list = JSON.parse(localStorage.getItem('tasks'))

            return {...state, tasks: list}
        default:
            return state
    }
}

export default taskReducer;