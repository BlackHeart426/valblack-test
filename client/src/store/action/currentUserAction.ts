import {EReduxActionTypes} from "../types";
import {requestService} from "../../services/request.service";
import {saveLocalStorage, removeLocalStorage} from "../../services/auth.service";

function requestCurrentUser() {
    return {
        type: EReduxActionTypes.SET_CURRENT_USERS_STARTED
    }
}

//interface for json
function receiveCurrentUser(json: { token: string, email: string }) {
    saveLocalStorage(json)
    return {
        type: EReduxActionTypes.SET_CURRENT_USERS_DONE,
        data: json,
        receivedAt: Date.now()
    }
}

function errorCurrentUser(error: string) {
    return {
        type: EReduxActionTypes.SET_CURRENT_USERS_ERROR,
        error
    }
}

interface IForm {
    email: string,
    password: string
}

export function loginActionCreator(form: IForm) {
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestCurrentUser())

        return requestService('/api/auth/login', "POST", form)
            .then(
                response => response.json(),
                error =>  dispatch(errorCurrentUser(error))
            )
            .then(
                json => dispatch(receiveCurrentUser(json)),

            )
    }
}

export function logoutActionCreate() {
    removeLocalStorage()
    return {
        type: EReduxActionTypes.SET_CURRENT_USERS_STORE
    }
}

//AutoLogin session
