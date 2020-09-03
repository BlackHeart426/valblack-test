import {EReduxActionTypes} from "../../types";
import {requestService} from "../../../services/request.service";

function requestResultTest() {
    return {
        type: EReduxActionTypes.FETCH_TESTS_RESULT_STARTED
    }
}

function receiveResultTest(json: string) {
    return {
        type: EReduxActionTypes.FETCH_TESTS_RESULT_DONE,
        data: json,
        receivedAt: Date.now()
    }
}

function errorResultTest(error: string) {
    return {
        type: EReduxActionTypes.FETCH_TESTS_RESULT_ERROR,
        error
    }
}

function shouldFetchResultTest(state: any) {
    const data = state.testResult.data
    if (!data) {
        return true
    } else if (data.isFetching) {
        return false
    } else {
        return data.error
    }
}

function fetchResultTest() {
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestResultTest())

        return requestService('/api/test-result/', "GET")
            .then(
                response => response.json(),
                error =>  dispatch(errorResultTest(error)) //вызов toast
            )
            .then(
                json => dispatch(receiveResultTest(json))
            )
    }
}

export function getResultTestActionCreator() {
    return (dispatch: (arg0: (dispatch: (arg0: { type: EReduxActionTypes; }) => void) => Promise<void>) => any, getState: () => any) => {
        if (shouldFetchResultTest(getState())) {
            // return setTimeout(() => {dispatch(fetchResultTest())}, 3000)
            return dispatch(fetchResultTest())
        } else {
            return Promise.resolve()
        }
    }
}

