import {EReduxActionTypes} from "../types";
import {netWorkStatusDone, netWorkStatusError, netWorkStatusStarted} from "./rootReducer";

const initialState = {
    data: {
        selected: null,
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
    data: {
        list: ICategories[] | null,
        selected: string | null
    },
    error: string | null,
    receivedAt: string | null
}

interface ICategories {
    name: string,
    id: number,
}

export interface ICategoriesState {
    data: {
        selected: string | null,
        list: ICategories | null
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
export const categoriesReducer = (state: ICategoriesState = initialState, action: IAction) => {
    switch (action.type) {
        case EReduxActionTypes.FETCH_CATEGORIES_STARTED:
            return Object.assign({}, state, {
                meta: {
                    netWorkStatus: netWorkStatusStarted()
                }
            })
        case EReduxActionTypes.SET_CATEGORIES_STORE:
            return Object.assign({}, state, {
                data: Object.assign({}, state.data, {selected: action.data.selected})
            })
        case EReduxActionTypes.FETCH_CATEGORIES_ERROR:
            return Object.assign({}, state, {
                meta: {
                    netWorkStatus: netWorkStatusError(action.error)
                }
            })
        case EReduxActionTypes.FETCH_CATEGORIES_DONE:
            return Object.assign({}, state, {
                data: Object.assign({}, state.data, {list: action.data}),
                meta: {
                    netWorkStatus: netWorkStatusDone(action.receivedAt)
                }
            })
        default:
            return state
    }
}
