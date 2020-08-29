
export type Method = 'GET' | 'POST' | 'PATCH'

export async function requestService(
    url: string,
    method: Method,
    body: any = null,
    protect: boolean = false,
    headers: any = {}) {
    try {
        if (body) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }
        if (protect) {
            const token = JSON.parse(localStorage.getItem('userData') as string) // Замена на Redux
            headers['Authorization'] = token.token
            console.log('token', token.token)
        }
        return await fetch(url, { method, body, headers})

    } catch (e) {
        throw e
    }
}
