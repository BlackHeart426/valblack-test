//CustomHook
//useCallback для того чтобы React не уходил в рекурсию
import {useState, useCallback} from "react";
import {strict} from "assert";

export type Method = 'GET' | 'POST'

export const useHttp = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const request = useCallback(async (url: string, method: Method = 'GET', body = null, headers: any = {}) => {
        setLoading(true)
        try {
            if(body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, { method, body, headers})
            const data = await response.json()

            if(!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }
            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    },[])

    const clearError = () => setError(null)

    return {loading, request, error, clearError}
}
