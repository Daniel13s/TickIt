import { ActionTypes } from "./action-types";

type Action = {
  type: string;
  payload?: any;
};

const saved = localStorage.getItem("tasks");
const initialState = {
  tasks: saved ? JSON.parse(saved) : [],
};


const taskReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.CREATE:
      const newTask = action.payload!;
      const fullList = state.tasks.concat(newTask);
      localStorage.setItem("tasks", JSON.stringify(fullList));
      const savedUp = localStorage.getItem("tasks");
      const list = savedUp ? JSON.parse(savedUp) : [];

      return { ...state, tasks: list };

    case ActionTypes.UPDATE:
      const taskCompleted = action.payload!;
      taskCompleted.isComplete = taskCompleted.isComplete ? false : true;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));

      const fds = localStorage.getItem("tasks")
      const fdsmais = fds ? JSON.parse(fds) : []

      return { ...state, tasks: fdsmais };

    case ActionTypes.DELETE:
      const listDeleted = action.payload!
      localStorage.setItem('tasks', JSON.stringify(listDeleted))

      const listUpDelete = localStorage.getItem('tasks')
      const confListUpDelete = listUpDelete ? JSON.parse(listUpDelete) : []

      return {...state, tasks: confListUpDelete}
    default:
      return state;
  }
};

export default taskReducer;
