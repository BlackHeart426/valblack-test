import {EReduxActionTypes} from "../../types";
import {requestService} from "../../../services/request.service";
import {removeLocalStorage, saveLocalStorage} from "../../../services/auth.service";

function requestCurrentUserAvatar() {
    return {
        type: EReduxActionTypes.UPLOAD_AVATAR_CURRENT_USERS_STARTED
    }
}


function receiveCurrentUserAvatar(json: { token: string, email: string }) {
    return {
        type: EReduxActionTypes.UPLOAD_AVATAR_CURRENT_USERS_DONE,
        data: json,
        receivedAt: Date.now()
    }
}

function errorCurrentUserAvatar(error: string) {
    return {
        type: EReduxActionTypes.UPLOAD_AVATAR_CURRENT_USERS_ERROR,
        error
    }
}

export function uploadAvatarActionCreator(imageFile: any) {
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestCurrentUserAvatar())

        return requestService('/api/user/avatar', "POST", imageFile)
            .then(
                response => response.json(),
                error =>  dispatch(errorCurrentUserAvatar(error))
            )
            .then(
                json => dispatch(receiveCurrentUserAvatar(json)),

            )
    }
}
