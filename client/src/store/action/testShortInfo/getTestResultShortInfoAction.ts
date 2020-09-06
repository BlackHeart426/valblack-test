import {EReduxActionTypes} from "../../types";
import {requestService} from "../../../services/request.service";
import {netWorkStatusDone, netWorkStatusError, netWorkStatusStarted} from "../../reducers/rootReducer";

function requestResultTestShortInfo(uuidTest: string) {
    const data = {[uuidTest]: {
            meta: {
                netWorkStatus: netWorkStatusDone()
            }
        }
    }
    return {
        type: EReduxActionTypes.FETCH_TEST_RESULT_SHORT_INFO_STARTED,
        data
    }
}

function receiveResultTestShortInfo(json: any) {
    return {
        type: EReduxActionTypes.FETCH_TEST_RESULT_SHORT_INFO_DONE,
        data: json,
        receivedAt: Date.now()
    }
}

function errorResultTestShortInfo(error: string) {
    return {
        type: EReduxActionTypes.FETCH_TEST_RESULT_SHORT_INFO_ERROR,
        error
    }
}

function shouldFetchResultTestShortInfo(state: any) {
    const data = state.testResultShortInfo.data
    if (!data) {
        return true
    } else if (data.isFetching) {
        return false
    } else {
        return data.error
    }
}

function fetchResultTestShortInfo(userId: string) {
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestResultTestShortInfo(userId))

        return requestService(`/api/test-result-short-info/${userId}`, "GET")
            .then(
                response => response.json(),
                error =>  dispatch(errorResultTestShortInfo(error)) //вызов toast
            )
            .then(
                json => dispatch(receiveResultTestShortInfo(json))
            )
    }
}

export function getResultTestShortInfoByUserActionCreator(userId: string) {
    return (dispatch: (arg0: (dispatch: (arg0: { type: EReduxActionTypes; }) => void) => Promise<void>) => any, getState: () => any) => {
        if (shouldFetchResultTestShortInfo(getState())) {
            // return setTimeout(() => {dispatch(fetchResultTestShortInfo())}, 3000)
            return dispatch(fetchResultTestShortInfo(userId))
        } else {
            return Promise.resolve()
        }
    }
}

