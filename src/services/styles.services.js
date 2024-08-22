import axios from "axios";

class StylesServices {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api`
        })
    }

    getAllStyles() {
        return this.axiosApp.get('/styles')
    }
}

export default new StylesServices()