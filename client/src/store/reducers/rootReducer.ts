import {EReduxActionTypes} from "../types";
import {combineReducers} from "redux";
import {authReducer} from "./authReducer";

export interface IReduxBaseAction {
    type: EReduxActionTypes
}

const rootReduce = combineReducers({
    auth: authReducer,
})

export type AppState = ReturnType<typeof rootReduce>

export default rootReduce
