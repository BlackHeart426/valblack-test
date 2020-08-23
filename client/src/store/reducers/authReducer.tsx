import {EReduxActionTypes} from "../types";


const initialState = {
    isAuthenticated: null
}

interface IAction {
    type: string,
    payload: boolean
}

export interface IAuthState {
    isAuthenticated: boolean | null
}

// const headers = [
//     []
// ]
// оптимизировать
export const authReducer = (state: IAuthState = initialState, action: IAction) => {
    switch (action.type) {
        case EReduxActionTypes.IS_AUTHENTICATED:
            return Object.assign({}, state, {isAuthenticated: action.payload})
        default:
            return state
    }
}
