import {EReduxActionTypes} from "../types";
import {useHttp} from "../../services/http.service";
import {requestService} from "../../services/request.service";

function requestCategories() {
    return {
        type: EReduxActionTypes.FETCH_TESTS_INFO_STARTED
    }
}

function receiveCategories(json: string) {
    return {
        type: EReduxActionTypes.FETCH_CATEGORIES_DONE,
        data: json,
        receivedAt: Date.now()
    }
}

function errorCategories(error: string) {
    return {
        type: EReduxActionTypes.FETCH_CATEGORIES_ERROR,
        error
    }
}

export function setCategoriesActionCreator(categories: string | null) {
    return {
        type: EReduxActionTypes.SET_CATEGORIES_STORE,
        data: {
            selected: categories
        }
    }
}

function shouldFetchCategories(state: any) {
    const data = state.categories.data.list
    if (!data) {
        return true
    } else if (data.isFetching) {
        return false
    } else {
        return data.error
    }
}

function fetchCategories() {
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestCategories())

        return requestService('/api/category/', "GET")
            .then(
                response => response.json(),
                error =>  dispatch(errorCategories(error)) //вызов toast
            )
            .then(
                json => dispatch(receiveCategories(json))
            )
    }
}

export function getCategoriesActionCreator() {
    return (dispatch: (arg0: (dispatch: (arg0: { type: EReduxActionTypes; }) => void) => Promise<void>) => any, getState: () => any) => {
        if (shouldFetchCategories(getState())) {
            return dispatch(fetchCategories())
        } else {
            return Promise.resolve()
        }
    }
}

