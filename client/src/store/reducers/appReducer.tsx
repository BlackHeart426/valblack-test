import {EReduxActionTypes} from "../types";
import {netWorkStatusDone, netWorkStatusError, netWorkStatusStarted} from "./rootReducer";

const initialState = {
    openDrawer: false
}

interface IAction {
    type: string,
}

export interface IApp {
    openDrawer: boolean
}

export const appReducer = (state: IApp = initialState, action: IAction) => {
    switch (action.type) {
        case EReduxActionTypes.OPEN_DRAWER:
            return Object.assign({}, state, {
                openDrawer: !state.openDrawer
            })
        default:
            return state
    }
}
