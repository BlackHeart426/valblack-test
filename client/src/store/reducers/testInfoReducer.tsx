import {EReduxActionTypes} from "../types";

const initialState = {
    data: {
        list: null
    },
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
    payload: boolean
}

interface IListTestsInfo {
    name: string,
    questions: number,
    durationOfTime: null,
    imageSrc: string,
    category: string,
    rating: number
}

export interface ITestInfoState {
    data: {
        list: IListTestsInfo | null
    },
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
export const authReducer = (state: ITestInfoState = initialState, action: IAction) => {
    // switch (action.type) {
    //     case EReduxActionTypes.IS_AUTHENTICATED:
    //         return Object.assign({}, state, {isAuthenticated: action.payload})
    //     default:
    //         return state
    // }
}
