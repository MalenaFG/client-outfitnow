import axios from "axios"

class ServicesServices {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api`
        })
    }

    getAllServices() {
        return this.axiosApp.get(`/services`)
    }

    getOneService(serviceId) {
        return this.axiosApp.get(`/services/${serviceId}`)
    }

    createServices(serviceData) {
        return this.axiosApp.post(`/services`, serviceData)
    }
}

export default new ServicesServices