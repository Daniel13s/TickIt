import { ActionTypes } from "./action-types";

type Action = {
  type: string;
  payload: any;
};

const saved = localStorage.getItem("tasks");
const initialState = {
  tasks: saved ? JSON.parse(saved) : [],
};

const taskReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.CREATE:
      const listTasks = localStorage.getItem("tasks");
      state.tasks = listTasks ? JSON.parse(listTasks) : [];
      const newTask = action.payload;
      const fullList = state.tasks.concat(newTask);
      localStorage.setItem("tasks", JSON.stringify(fullList));
      const savedUp = localStorage.getItem("tasks");
      const list = savedUp ? JSON.parse(savedUp) : [];

      return { ...state, tasks: list };

    case ActionTypes.UPDATE:
      const taskCompleted = action.payload;
      taskCompleted.isComplete = taskCompleted.isComplete ? false : true;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      const listTasksUpdate = localStorage.getItem("tasks");
      const uploadTasks = listTasksUpdate ? JSON.parse(listTasksUpdate) : [];
      return { ...state, tasks: uploadTasks };

    case ActionTypes.COMPLETE:
      const listComplete = action.payload;

      return { ...state, tasks: listComplete };

    case ActionTypes.PENDENT:
      const listPendent = action.payload;

      return { ...state, tasks: listPendent };
    default:
      return state;
  }
};

export default taskReducer;
