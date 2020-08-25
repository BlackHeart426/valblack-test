import { useHttp } from '../services/http.service';
import {useAuth} from "./auth.service";

export const useApiAuth = () => {
    const {loading, error, request, clearError} = useHttp()
    const {login, logout} = useAuth()

    const loginUser = async (form: any) => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            await login(data.token, '')

        } catch (e) {

        }
    }

    const getTestInfo = async (form: any) => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            await login(data.token, '')

        } catch (e) {

        }
    }

    return {loginUser, getTestInfo}
}
