import {EReduxActionTypes} from "../../types";
import {requestService} from "../../../services/request.service";
import {removeLocalStorage, saveLocalStorage} from "../../../services/auth.service";

function requestCurrentUserAvatar() {
    return {
        type: EReduxActionTypes.UPLOAD_AVATAR_CURRENT_USERS_STARTED
    }
}


function receiveCurrentUserAvatar(json: any) {
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

export function uploadAvatarActionCreator(imageFile: any, clientId: string = '5f4a156716c2cd2040e28717') {

    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestCurrentUserAvatar())
        const fd = new FormData()
        if (imageFile) {
            fd.append('image', imageFile, imageFile.name)
        }
        return requestService(`/api/user/avatar/${clientId}`, "PATCH", fd, true, true)
            .then(
                response => response.json(),
                error =>  dispatch(errorCurrentUserAvatar(error))
            )
            .then(
                json => dispatch(receiveCurrentUserAvatar(json)),

            )
    }
}
