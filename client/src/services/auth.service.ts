const storageName = 'userData'
export function saveLocalStorage(json: any) {
    json = {...json, isAuth: true}
    Object.keys(json).forEach((item: any) =>
        localStorage.setItem(item, json[item]))
}

export function saveItemLocalStorage(name: string, data: any) {

    localStorage.setItem(name, data)
}

export function removeLocalStorage(name: string) {
    localStorage.removeItem(name)
}

export function clearLocalStorage() {
    localStorage.clear()
}

export function getLocalStorage(name: string | null) {
    return localStorage.getItem(<string>name)
}

export function getAllLocalStorage() {
    let dataUser = {}
    for (let i=0, len=localStorage.length; i<len; i++) {
        let item = localStorage.key(i)
        if ( localStorage.key(i) !== null) {
            dataUser = Object.assign({}, dataUser, {
                [item as string]: getLocalStorage(item)
            })
        }
    }
    return dataUser
}

export function isAuth() {
    return getLocalStorage('token') ? true : false
}
