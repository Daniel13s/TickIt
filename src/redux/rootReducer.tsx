import {combineReducers} from "redux"
import taskReducer from "./task/reducer";

const rootReducer = combineReducers({taskReducer})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;