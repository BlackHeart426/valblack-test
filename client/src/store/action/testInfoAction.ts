import {EReduxActionTypes} from "../types";
import {useHttp} from "../../services/http.service";
import {requestService} from "../../services/request.service";
import {ITestInfoState} from "../reducers/testInfoReducer";

function requestTestInfo() {
    return {
        type: EReduxActionTypes.FETCH_TESTS_INFO_STARTED
    }
}

function receiveTestInfo(json: string) {
    return {
        type: EReduxActionTypes.FETCH_TESTS_INFO_DONE,
        data: json,
        receivedAt: Date.now()
    }
}

function errorTestInfo(error: string) {
    return {
        type: EReduxActionTypes.FETCH_TESTS_INFO_ERROR,
        error
    }
}

function shouldFetchTestInfo(state: any) {
    const data = state.testInfo.data
    if (!data) {
        return true
    } else if (data.isFetching) {
        return false
    } else {
        return data.error
    }
}

function fetchTestInfo() {
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestTestInfo())

        return requestService('/api/tests-info/', "GET")
            .then(
                response => response.json(),
                error =>  dispatch(errorTestInfo(error)) //вызов toast
            )
            .then(
                json => dispatch(receiveTestInfo(json))
            )
    }
}

export function getTestInfoActionCreator() {
    return (dispatch: (arg0: (dispatch: (arg0: { type: EReduxActionTypes; }) => void) => Promise<void>) => any, getState: () => any) => {
        if (shouldFetchTestInfo(getState())) {
            return setTimeout(() => {dispatch(fetchTestInfo())}, 3000)
            // return dispatch(fetchTestInfo())
        } else {
            return Promise.resolve()
        }
    }
}

