import {EReduxActionTypes} from "../../types";
import {requestService} from "../../../services/request.service";

function requestResultTest() {
    return {
        type: EReduxActionTypes.SET_TEST_RESULT_STARTED
    }
}

function receiveResultTest(json: any) {
    const data = {[json.uuid]: {
            data: json,
            meta: {
                netWorkStatus: {
                    isFetching: false,
                    isFetched: true,
                    error: null
                }
            }
        }
    }
    return {
        type: EReduxActionTypes.SET_TEST_RESULT_DONE,
        data: data,
        receivedAt: Date.now()
    }
}

function errorResultTest(error: string) {
    return {
        type: EReduxActionTypes.SET_TEST_RESULT_ERROR,
        error
    }
}

export function setTestResultActionCreator(json: any) {
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestResultTest())

        return requestService('/api/test-result/', "POST", json)
            .then(
                response => response.json(),
                error =>  dispatch(errorResultTest(error)) //вызов toast
            )
            .then(
                json => dispatch(receiveResultTest(json))
            )
    }
}


