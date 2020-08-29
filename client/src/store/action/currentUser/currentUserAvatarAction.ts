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

export function uploadAvatarActionCreator(imageFile: any, clientId: string = '5f42b973b5089744283ed9fc') {

    return function (dispatch: (arg0: { type: EReduxActionTypes; }) => void) {
        dispatch(requestCurrentUserAvatar())
        const fd = new FormData()
        if (imageFile) {
            fd.append('image', imageFile, imageFile.name)
        }
        console.log('123',fd)
        return requestService(`/api/user/avatar/${clientId}`, "PATCH", fd, true)
            .then(
                response => response.json(),
                error =>  dispatch(errorCurrentUserAvatar(error))
            )
            .then(
                json => dispatch(receiveCurrentUserAvatar(json)),

            )
    }
}
