import {EReduxActionTypes} from "../types";

const initialState = {
    data: null,
    meta: {
        netWorkStatus: {
            isFetching: false,
            isFetched: true,
            error: null
        }
    }
}

interface IAction {
    type: string,
    data: IListTestsInfo[],
    error: string | null,
    receivedAt: string | null
}

export interface IListTestsInfo {
    _id?: string,
    name: string,
    questions: number,
    durationOfTime: null,
    imageSrc: string,
    category: string,
    rating: number
}

export interface ITestInfoState {
    data: IListTestsInfo | null,
    meta: {
        netWorkStatus: {
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
export const testInfoReducer = (state: ITestInfoState = initialState, action: IAction) => {
    switch (action.type) {
        case EReduxActionTypes.FETCH_TESTS_INFO_STARTED:
            return Object.assign({}, state, {
                meta: {
                    netWorkStatus: {
                        isFetching: true,
                        isFetched: false,
                        error: null
                    }
                }
            })
        case EReduxActionTypes.FETCH_TESTS_INFO_ERROR:
            return Object.assign({}, state, {
                meta: {
                    netWorkStatus: {
                        isFetching: false,
                        isFetched: true,
                        error: action.error
                    }
                }
            })
        case EReduxActionTypes.FETCH_TESTS_INFO_DONE:
            return Object.assign({}, state, {
                data: action.data,
                meta: {
                    netWorkStatus: {
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
