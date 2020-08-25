const storageName = 'userData'
export function saveLocalStorage(json: {token: string, email: string}) {
    localStorage.setItem(storageName, JSON.stringify({...json, isAuth: true}))
}

export function removeLocalStorage() {
    localStorage.removeItem(storageName)
}

export function getLocalStorage() {

    return localStorage.getItem(storageName)
}

export function isAuth() {
    return localStorage.getItem(storageName) ? true : false
}
