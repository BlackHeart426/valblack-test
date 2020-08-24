import {EReduxActionTypes} from "../types";
import {combineReducers} from "redux";
import {currentUserReducer} from "./currentUserReducer";
import {testInfoReducer} from "./testInfoReducer";

export interface IReduxBaseAction {
    type: EReduxActionTypes
}

const rootReduce = combineReducers({
    currentUser: currentUserReducer,
    testInfo: testInfoReducer
})

export type AppState = ReturnType<typeof rootReduce>

export default rootReduce
