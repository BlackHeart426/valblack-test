import {EReduxActionTypes} from "../types";
import {IReduxBaseAction} from "../reducers/rootReducer";

export interface IReduxOpenDrawerAction extends IReduxBaseAction{
    type: EReduxActionTypes.OPEN_DRAWER
}

export function openDrawerActionCreator() {
    return {
        type: EReduxActionTypes.OPEN_DRAWER,
    }
}
