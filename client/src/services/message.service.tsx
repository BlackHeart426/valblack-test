import {useCallback} from 'react'
import {MaterialService} from "./material.service";

export const useMessage = () => {
    return useCallback((text: string) => {
        if(text) {
            MaterialService.toastMaterial(text)
        }
    }, [])
}
