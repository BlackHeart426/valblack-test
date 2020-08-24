import {EReduxActionTypes} from "../types";
import {combineReducers} from "redux";
import {currentUserReducer} from "./currentUserReducer";

export interface IReduxBaseAction {
    type: EReduxActionTypes
}

const rootReduce = combineReducers({
    currentUser: currentUserReducer,
})

export type AppState = ReturnType<typeof rootReduce>

export default rootReduce
