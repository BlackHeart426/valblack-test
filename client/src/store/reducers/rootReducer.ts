import {EReduxActionTypes} from "../types";
import {combineReducers} from "redux";
import {currentUserReducer, ICurrentUserState} from "./currentUserReducer";
import {ITestInfoState, testInfoReducer} from "./testInfoReducer";
import {categoriesReducer, ICategoriesState} from "./categoriesReducer";
import {testResultReducer} from "./testResultReducer";

export interface RootState {
    currentUser: ICurrentUserState,
    testInfo: ITestInfoState,
    categories: ICategoriesState
}

const rootReduce = combineReducers({
    currentUser: currentUserReducer,
    testInfo: testInfoReducer,
    categories: categoriesReducer,
    testResult: testResultReducer
})

export type AppState = ReturnType<typeof rootReduce>

export default rootReduce
