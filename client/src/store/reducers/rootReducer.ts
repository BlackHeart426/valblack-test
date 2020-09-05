import {EReduxActionTypes} from "../types";
import {combineReducers} from "redux";
import {currentUserReducer, ICurrentUserState} from "./currentUserReducer";
import {ITestInfoState, testInfoReducer} from "./testInfoReducer";
import {categoriesReducer, ICategoriesState} from "./categoriesReducer";
import {testResultReducer} from "./testResultReducer";
import {testResultShortInfoReducer} from "./testResultShortInfoReducer";

export interface RootState {
    currentUser: ICurrentUserState,
    testInfo: ITestInfoState,
    categories: ICategoriesState
}

const rootReduce = combineReducers({
    currentUser: currentUserReducer,
    testInfo: testInfoReducer,
    categories: categoriesReducer,
    testResult: testResultReducer,
    testResultShortInfo: testResultShortInfoReducer
})

export type AppState = ReturnType<typeof rootReduce>

export default rootReduce

export const netWorkStatusStarted = () => {
    return {
        isFetching: true,
        isFetched: false,
        error: null
    }
}

export const netWorkStatusError = (error: any) => {
    return {
        isFetching: false,
        isFetched: true,
        error: error
    }
}

export const netWorkStatusDone = (lastUpdate: any = '') => {
    return {
        isFetching: false,
        isFetched: true,
        error: null,
        lastUpdate
    }
}

