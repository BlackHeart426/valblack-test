
export type Method = 'GET' | 'POST' | 'PATCH'

export async function requestService(
    url: string,
    method: Method,
    body: any = null,
    protect: boolean = false,
    headers: any = {}) {
    console.log('request')
    try {
        if (body) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }
        if (protect) {
            const token = JSON.parse(localStorage.getItem('userData') as string) // Замена на Redux
            headers['Authorization'] = token.token
        }
        return await fetch(url, { method, body, headers})

    } catch (e) {
        throw e
    }
}
