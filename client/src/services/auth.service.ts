const storageName = 'userData'
export function saveLocalStorage(json: {token: string, email: string}) {
    localStorage.setItem(storageName, JSON.stringify({...json}))
}

export function removeLocalStorage() {
    localStorage.removeItem(storageName)
}
