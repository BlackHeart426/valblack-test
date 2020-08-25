import {useState , useCallback, useEffect} from 'react'
const storageName = 'userData'

export interface Data {
    token: string | null,
    userId: string | null
}

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(null)
    const [userId, setUserId] = useState<string | null>(null)

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

    return {login, logout, token, userId}
}
