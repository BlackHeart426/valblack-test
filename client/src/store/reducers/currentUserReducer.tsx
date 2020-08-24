import {EReduxActionTypes} from "../types";

const initialState = {
    data: {
        auth: {
            token: null
        },
        email: null,
        hasAvatar: false,
        name: null,
        avatarUrl: null,
        uuid: null,
        isAdmin: false,
        isAuthorized: false,
        authSource: { //google, vk
            type: null,
            id: null
        }
    },
    meta: {
        netWorkStatus: {
            isFetching: false,
            isFetched: true,
            error: null,
            lastUpdated: null
        }
    }
}

interface IAction {
    type: string,
    error: string | null,
    data: {
        email: string | null,
        token: string | null
    }
    receivedAt: string | null
}

export interface ICurrentUserState {
    data: {
        auth: {
            token: string | null
        },
        email: string | null,
        hasAvatar: boolean,
        name: string | null,
        avatarUrl: string | null,
        uuid: string | null,
        isAdmin: boolean,
        isAuthorized: boolean,
        authSource: {
            type: string | null,
            id: string | null
        }
    },
    meta: {
        netWorkStatus: {
            isFetching: boolean,
            isFetched: boolean,
            error: string | null,
            lastUpdated: string | null
        }
    }
}

// const headers = [
//     []
// ]
// оптимизировать
export const currentUserReducer = (state: ICurrentUserState = initialState, action: IAction) => {
    switch (action.type) {
        case EReduxActionTypes.SET_CURRENT_USERS_STARTED:
            return Object.assign({}, state, {
                meta: {
                    netWorkStatus: {
                        isFetching: true,
                        isFetched: false,
                        error: null
                    }
                }
            })
        case EReduxActionTypes.SET_CURRENT_USERS_ERROR:
            return Object.assign({}, state, {
                meta: {
                    netWorkStatus: {
                        isFetching: false,
                        isFetched: true,
                        error: action.error
                    }
                }
            })
        case EReduxActionTypes.SET_CURRENT_USERS_STORE:
            return Object.assign({}, state, {
                data: {
                    auth: {
                        token: null
                    },
                    email: null
                }
            })
        case EReduxActionTypes.SET_CURRENT_USERS_DONE:
            return Object.assign({}, state, {
                data: {
                    auth: {
                        token: action.data.token
                    },
                    email: action.data.email
                },
                meta: {
                    netWorkStatus: {
                        isFetching: false,
                        isFetched: true,
                        error: null,
                        lastUpdated: action.receivedAt
                    }
                }
            })
        default:
            return state
    }
}
