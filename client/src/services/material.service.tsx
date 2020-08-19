declare global {
    interface Window {
        M: any
    }
}

export class MaterialService {
    static toastMaterial(message: string) {
        window.M && window.M.toast({html: message})
    }
}
