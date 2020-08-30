import fetch from 'cross-fetch';
import {getLocalStorage} from "./auth.service";

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
            const token = getLocalStorage('token') as string // Замена на Redux
            headers['Authorization'] = token
        }
        return await fetch(url, { method, body, headers})

    } catch (e) {
        throw e
    }
}
