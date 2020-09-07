import {EReduxActionTypes} from "../types";
import {netWorkStatusDone, netWorkStatusError, netWorkStatusStarted} from "./rootReducer";

interface testResult {
    data: IListTestsResult | null,
    meta: {
        netWorkStatus: {
            isFetching: boolean,
            isFetched: boolean,
            error: string | null
        }
    }
}

// data: null,
//     meta: {
//     netWorkStatus: {
//         isFetching: false,
//             isFetched: true,
//             error: null
//     },
//     setNetWorkStatus: {
//         isFetching: false,
//             isFetched: true,
//             error: null
//     }
// }

const initialState = {
    data: {},
    meta: {
        setNetWorkStatus: {
            isFetching: false,
            isFetched: true,
            error: null
        }
    }

}

interface IAction {
    type: string,
    data: any,
    error: string | null,
    receivedAt: string | null
}

export interface IListTestsResult {
    _id: string | null,
    rightAnswer: number,
    summaryAnswer: number ,
    testPassed: boolean,
    userId: string | null,
    testId: {
        _id: string | null,
        name: string | null
    },
    // category: string,
    templateWithAnswer: string | null
}

export interface ITestResultState {
    data: any
}


// const headers = [
//     []
// ]
// оптимизировать
export const testResultReducer = (state: ITestResultState = initialState, action: IAction) => {
    switch (action.type) {
        case EReduxActionTypes.FETCH_TESTS_RESULT_DONE:
            return Object.assign({}, state, {
                data: Object.assign({}, state.data, action.data),
            })
        case EReduxActionTypes.FETCH_TESTS_RESULT_STARTED:
            return Object.assign({}, state, {
                data: Object.assign({}, state.data, action.data),
            })
        case EReduxActionTypes.FETCH_TESTS_RESULT_ERROR:
            return Object.assign({}, state, {
                data: Object.assign({}, state.data, action.data),
            })
        case EReduxActionTypes.SET_TEST_RESULT_STARTED:
            return Object.assign({}, state, {
                meta: {
                    setNetWorkStatus: netWorkStatusStarted()
                }
            })
        case EReduxActionTypes.SET_TEST_RESULT_ERROR:
            return Object.assign({}, state, {
                meta: {
                    setNetWorkStatus: netWorkStatusError(action.error)
                }
            })
        case EReduxActionTypes.SET_TEST_RESULT_DONE:
            return Object.assign({}, state, {
                data: Object.assign({}, state.data, action.data),
                meta: {
                    setNetWorkStatus: netWorkStatusDone()
                }
            })
        default:
            return state
    }
}
