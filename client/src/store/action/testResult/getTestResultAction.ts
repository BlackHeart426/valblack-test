import {EReduxActionTypes} from "../../types";
import {requestService} from "../../../services/request.service";

function requestResultTest(uuidTest: string) {
    const data = {[uuidTest]: {
            meta: {
                netWorkStatus: {
                    isFetching: true,
                    isFetched: false,
                    error: null
                }
            }
        }
    }
    return {
        type: EReduxActionTypes.FETCH_TESTS_RESULT_STARTED,
        data
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
    console.log(data)
    return {
        type: EReduxActionTypes.FETCH_TESTS_RESULT_DONE,
        data: data,
        receivedAt: Date.now()
    }
}

function errorResultTest(error: string, uuidTest: string) {
    const data = {[uuidTest]: {
            meta: {
                netWorkStatus: {
                    isFetching: false,
                    isFetched: true,
                    error: error
                }
            }
        }
    }
    return {
        type: EReduxActionTypes.FETCH_TESTS_RESULT_ERROR,
        data
    }
}

function shouldFetchResultTest(state: any, uuidTest: string) {
    const data = state.testResult.data[uuidTest]
    if (!data) {
        return true
    } else if (data.isFetching) {
        return false
    } else {
        return data.error
    }
}

function fetchResultTest(uuidTest: string) {
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestResultTest(uuidTest))

        return requestService(`/api/test-result/${uuidTest}`, "GET")
            .then(
                response => response.json(),
                error =>  dispatch(errorResultTest(error, uuidTest)) //вызов toast
            )
            .then(
                json => dispatch(receiveResultTest(json))
            )
    }
}

export function getResultTestActionCreator(uuidTest: string) {
    return (dispatch: (arg0: (dispatch: (arg0: { type: EReduxActionTypes; }) => void) => Promise<void>) => any, getState: () => any) => {
        if (shouldFetchResultTest(getState(), uuidTest)) {
            // return setTimeout(() => {dispatch(fetchResultTest())}, 3000)
            return dispatch(fetchResultTest(uuidTest))
        } else {
            return Promise.resolve()
        }
    }
}

