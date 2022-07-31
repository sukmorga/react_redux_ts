import { combineReducers } from "redux";
import { userReduser } from "./userReduser";


export const rootReduser = combineReducers({
    user: userReduser,
})

export type RootSate = ReturnType<typeof rootReduser>
