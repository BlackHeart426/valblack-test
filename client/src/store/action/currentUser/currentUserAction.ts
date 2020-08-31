import {EReduxActionTypes} from "../../types";
import {requestService} from "../../../services/request.service";
import {
    clearLocalStorage,
    removeLocalStorage,
    saveItemLocalStorage,
    saveLocalStorage
} from "../../../services/auth.service";

export interface ILocalStore {
    token: string,
    email: string,
    isAuth: boolean
}

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

export function setCurrentUser(json: any) {
    // saveItemLocalStorage()
    return {
        type: EReduxActionTypes.SET_CURRENT_USERS_STORE,
        data: json,
        receivedAt: Date.now()
    }
}
export function setCurrentAnswerTestUser(json: any) {
    const data = JSON.stringify(json.answersCurrentTest)
    saveItemLocalStorage('answersCurrentTest', data)
    return {
        type: EReduxActionTypes.SET_CURRENT_USERS_ANSWER_TEST_STORE,
        data: data,
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
    clearLocalStorage()
    return {
        type: EReduxActionTypes.SET_CURRENT_USERS_STORE,
        data: {
            token: null,
            email: null,
            isAuth: false
        }
    }
}

//AutoLogin session
