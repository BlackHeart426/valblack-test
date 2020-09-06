import fetch from 'cross-fetch';
import {getLocalStorage, saveLocalStorage} from "./auth.service";

export type Method = 'GET' | 'POST' | 'PATCH'

export async function requestService(
    url: string,
    method: Method,
    body: any = null,
    protect: boolean = false,
    formData: boolean = false,
    headers: any = {}) {
    try {
        if (body && !formData) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }
        if (protect) {
            // Check token
            const dateCreateToken = getLocalStorage('dateCreateToken') as string // Замена на Redux
            if ((+dateCreateToken + (1 * 60 * 1000)) < Date.now()) {
                await refreshTokenRequest()
            }
            const token = getLocalStorage('token') as string // Замена на Redux
            headers['Authorization'] = token
        }
        return await fetch(url, { method, body, headers})

    } catch (e) {
        throw e
    }
}

export async function refreshTokenRequest() {
    const method = 'POST'
    const headers = {}
    const refreshToken = getLocalStorage('refreshToken') as string // Замена на Redux
    const body = JSON.stringify({"refreshToken": refreshToken})
    const response = await fetch(`/api/auth/token/${refreshToken}`, { method, body, headers}).then(
        response => response.json()
    )
    saveLocalStorage(response)
}
