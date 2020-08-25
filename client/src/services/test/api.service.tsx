import { useHttp } from '../http.service';
import { useAuth } from "../../hooks/auth.service";

export const useApiTests = () => {
    const {loading, error, request, clearError} = useHttp()
    const {login, logout} = useAuth()

    const getById = async (form: any) => {
        try {
            // const data = await requestService('/api/auth/login', 'POST', {...form})
            // await login(data.token, '')

        } catch (e) {

        }
    }

    return {getById}
}
