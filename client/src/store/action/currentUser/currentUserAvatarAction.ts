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

export function uploadAvatarActionCreator(imageFile: any, clientId: string) {
    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestCurrentUserAvatar())
        const fd = new FormData()
        if (imageFile) {
            fd.append('image', imageFile, imageFile.name)
        }
        return requestService(`/api/client/avatar/${clientId}`, "PATCH", fd)
            .then(
                response => response.json(),
                error =>  dispatch(errorCurrentUserAvatar(error))
            )
            .then(
                json => dispatch(receiveCurrentUserAvatar(json)),

            )
    }
}
