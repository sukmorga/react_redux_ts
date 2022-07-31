import { combineReducers } from "redux";
import { todoReduser } from "./todoReduser";
import { userReduser } from "./userReduser";


export const rootReduser = combineReducers({
    user: userReduser,
    todo: todoReduser,
})

export type RootSate = ReturnType<typeof rootReduser>
