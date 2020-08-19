import {useCallback} from 'react'
import {MaterialService} from "./material.service";
import { useHttp } from './http.service';
import {useAuth} from "./auth.service";

export const useApi = () => {
    const {loading, error, request, clearError} = useHttp()
    const {login, logout} = useAuth()

    const loginUser = async (form: any) => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            await login(data.token, '')

        } catch (e) {

        }
    }

    return {loginUser}
}
