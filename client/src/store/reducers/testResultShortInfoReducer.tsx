import {EReduxActionTypes} from "../types";
import {netWorkStatusDone, netWorkStatusError, netWorkStatusStarted} from "./rootReducer";

const initialState = {
    data: null,
    meta: {
        netWorkStatus: {
            isFetching: false,
            isFetched: true,
            error: null
        },
        setNetWorkStatus: {
            isFetching: false,
            isFetched: true,
            error: null
        }
    }
}

interface IAction {
    type: string,
    data: IListTestsResult[],
    error: string | null,
    receivedAt: string | null
}

export interface IListTestsResult {
    _id: string,
    rightAnswer: number,
    summaryAnswer: number,
    testPassed: boolean,
    userId: string,
    testId: string,
    datePassed: string,
    // category: string,
    templateWithAnswer: string
}

export interface ITestResultState {
    data: IListTestsResult | null,
    meta: {
        netWorkStatus: {
            isFetching: boolean,
            isFetched: boolean,
            error: string | null
        },
        setNetWorkStatus: {
            isFetching: boolean,
            isFetched: boolean,
            error: string | null
        }
    }
}


// const headers = [
//     []
// ]
// оптимизировать
export const testResultShortInfoReducer = (state: ITestResultState = initialState, action: IAction) => {
    switch (action.type) {
        case EReduxActionTypes.SET_TEST_RESULT_SHORT_INFO_STARTED:
            return Object.assign({}, state, {
                meta: {
                    setNetWorkStatus: netWorkStatusStarted()
                }
            })
        case EReduxActionTypes.SET_TEST_RESULT_SHORT_INFO_ERROR:
            return Object.assign({}, state, {
                meta: {
                    setNetWorkStatus: netWorkStatusError(action.error)
                }
            })
        case EReduxActionTypes.SET_TEST_RESULT_SHORT_INFO_DONE:
            return Object.assign({}, state, {
                data: action.data,
                meta: {
                    setNetWorkStatus: netWorkStatusDone(action.receivedAt)
                }
            })
        case EReduxActionTypes.FETCH_TEST_RESULT_SHORT_INFO_STARTED:
            return Object.assign({}, state, {
                meta: {
                    setNetWorkStatus: netWorkStatusStarted()
                }
            })
        case EReduxActionTypes.FETCH_TEST_RESULT_SHORT_INFO_ERROR:
            return Object.assign({}, state, {
                meta: {
                    setNetWorkStatus: netWorkStatusError(action.error)
                }
            })
        case EReduxActionTypes.FETCH_TEST_RESULT_SHORT_INFO_DONE:
            return Object.assign({}, state, {
                data: action.data,
                meta: {
                    setNetWorkStatus: netWorkStatusDone(action.receivedAt)
                }
            })
        default:
            return state
    }
}
