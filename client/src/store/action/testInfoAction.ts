import {EReduxActionTypes} from "../types";
import {useHttp} from "../../services/http.service";

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
    const data = state.testsInfo.data.meta //interface isFetching isFetched, error
    if (!data) {
        return true
    } else if (data.isFetching) {
        return false
    } else {
        return data.error
    }
}

function fetchTestInfo() {
    const {request} = useHttp()
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestTestInfo())

        return request('/api/tests-info/', 'POST', {}, true)
            .then(
                response => response.json(),
                error =>  dispatch(errorTestInfo(error)) //вызов toast
            )
            .then(
                json => dispatch(receiveTestInfo(json))
            )
    }
}
// testData
// export function getTestInfoActionCreator(uuidTest: string) {
//     // if (shouldFetchTestInfo(getState(), uuidTest)) {
//     //     return dispatch(fetchTestInfo(uuidTest))
//     // } else {
//     //     return Promise.resolve()
//     // }
// }

//getState(), interface  isFetching isFetched, error
