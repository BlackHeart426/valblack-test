import {useState , useCallback, useEffect} from 'react'
import {useHttp} from "./http.service";

const storageName = 'userData'

export interface Data {
    token: string | null,
    userId: string | null
}

export const useAuth = () => {
    const {loading, error, request, clearError} = useHttp()
    const [token, setToken] = useState<string | null>(null)
    const [userId, setUserId] = useState<string | null>(null)

    const isAuthenticated = () => {
        return !!token
    }

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)
        localStorage.setItem(storageName, JSON.stringify({userId: id, token: jwtToken}))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)

        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data: Data = JSON.parse(<string>localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId)
        }
    }, [login])
    // поэтому login обернут в useCallback, иначе отследить login не было бы возможно (создавался бы новый)

    return {login, logout, token, userId, isAuthenticated}
}
