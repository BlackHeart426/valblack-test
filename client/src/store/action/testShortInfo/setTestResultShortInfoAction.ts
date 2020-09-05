import {EReduxActionTypes} from "../../types";
import {requestService} from "../../../services/request.service";

function requestResultTestShortInfo() {
    return {
        type: EReduxActionTypes.SET_TEST_RESULT_SHORT_INFO_STARTED
    }
}

function receiveResultTestShortInfo(json: string) {
    return {
        type: EReduxActionTypes.SET_TEST_RESULT_SHORT_INFO_DONE,
        data: json,
        receivedAt: Date.now()
    }
}

function errorResultTestShortInfo(error: string) {
    return {
        type: EReduxActionTypes.SET_TEST_RESULT_SHORT_INFO_ERROR,
        error
    }
}

export function setTestResultShortInfoActionCreator(json: any) {
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestResultTestShortInfo())

        return requestService('/api/test-result-short-info/', "POST", json)
            .then(
                response => response.json(),
                error =>  dispatch(errorResultTestShortInfo(error)) //вызов toast
            )
            .then(
                // json => dispatch(receiveResultTestShortInfo(json))
            )
    }
}


