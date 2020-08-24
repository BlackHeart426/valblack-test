import {EReduxActionTypes} from "../types";
import {combineReducers} from "redux";
import {currentUserReducer} from "./currentUserReducer";
import {testInfoReducer} from "./testInfoReducer";
import {categoriesReducer} from "./categoriesReducer";

export interface IReduxBaseAction {
    type: EReduxActionTypes
}

const rootReduce = combineReducers({
    currentUser: currentUserReducer,
    testInfo: testInfoReducer,
    categories: categoriesReducer
})

export type AppState = ReturnType<typeof rootReduce>

export default rootReduce
