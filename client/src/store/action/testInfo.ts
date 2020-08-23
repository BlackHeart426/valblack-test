import {EReduxActionTypes} from "../types";
import {useApiAuth} from "../../services/auth/api.service";
import {useHttp} from "../../services/http.service";

function requestTestInfo(uuidTest: string) {
    return {
        type: EReduxActionTypes.FETCH_TESTS_INFO_STARTED,
    }
}

function receiveTestInfo(uuidTest: string, json: string) {
    return {
        type: EReduxActionTypes.FETCH_TESTS_INFO_DONE,
    }
}

function errorTestInfo(uuidTest: string) {
    return {
        type: EReduxActionTypes.FETCH_TESTS_INFO_ERROR,
    }
}

// testData
// function shouldFetchTestInfo(state: any, uuidTest: string) {
//     const test = state.testsInfo.data[uuidTest].meta //interface isFetching isFetched, error
//     if (!test) {
//         return true
//     } else if (test.isFetching) {
//         return false
//     } else {
//         return test.error
//     }
// }

function fetchTestInfo(uuidTest: string) {
    const {request} = useHttp()
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestTestInfo(uuidTest))

        return request('/api/tests-info/', 'POST')
            .then(
                response => response.json(),
                error => console.log('Error', error) //вызов toast
            )
            .then(
                json => dispatch(receiveTestInfo(uuidTest, json))
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
