import {EReduxActionTypes} from "../types";
import {useApiAuth} from "../../hooks/api.service";
import {useHttp} from "../../services/http.service";

function requestTestData(uuidTest: string) {
    return {
        type: EReduxActionTypes.FETCH_TESTS_DATA_STARTED,
        uuidTest
    }
}

function receiveTestData(uuidTest: string, json: string) {
    return {
        type: EReduxActionTypes.FETCH_TESTS_DATA_DONE,
        uuidTest,
        data: json,
        receivedAt: Date.now()
    }
}

function errorTestData(uuidTest: string, error: string) {
    return {
        type: EReduxActionTypes.FETCH_TESTS_DATA_ERROR,
        uuidTest,
        error
    }
}

// testData
// function shouldFetchTestData(state: any, uuidTest: string) {
//     const test = state.testsData.data[uuidTest].meta //interface isFetching isFetched, error
//     if (!test) {
//         return true
//     } else if (test.isFetching) {
//         return false
//     } else {
//         return test.error
//     }
// }

function fetchTestData(uuidTest: string) {
    const {request} = useHttp()
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestTestData(uuidTest))

        return request('/api/tests-info/', 'POST')
            .then(
                response => response.json(),
                error => errorTestData(uuidTest, error)
            )
            .then(
                json => dispatch(receiveTestData(uuidTest, json))
            )
    }
}
// testData
// export function getTestDataActionCreator(uuidTest: string) {
//     // if (shouldFetchTestData(getState(), uuidTest)) {
//     //     return dispatch(fetchTestData(uuidTest))
//     // } else {
//     //     return Promise.resolve()
//     // }
// }

//getState(), interface  isFetching isFetched, error
