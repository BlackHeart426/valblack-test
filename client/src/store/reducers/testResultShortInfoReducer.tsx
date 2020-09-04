import {EReduxActionTypes} from "../types";

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
                    setNetWorkStatus: {
                        isFetching: true,
                        isFetched: false,
                        error: null
                    }
                }
            })
        case EReduxActionTypes.SET_TEST_RESULT_SHORT_INFO_ERROR:
            return Object.assign({}, state, {
                meta: {
                    setNetWorkStatus: {
                        isFetching: false,
                        isFetched: true,
                        error: action.error
                    }
                }
            })
        case EReduxActionTypes.SET_TEST_RESULT_SHORT_INFO_DONE:
            return Object.assign({}, state, {
                data: action.data,
                meta: {
                    setNetWorkStatus: {
                        isFetching: false,
                        isFetched: true,
                        error: null,
                        lastUpdated: action.receivedAt
                    }
                }
            })
        default:
            return state
    }
}
