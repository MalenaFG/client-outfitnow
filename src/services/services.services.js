import axios from "axios"

class ServicesServices {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api`
        })

        this.axiosApp.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('userToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllServices() {
        return this.axiosApp.get(`/services`)
    }

    getOneService(serviceId) {
        return this.axiosApp.get(`/services/${serviceId}`)
    }

    getFilteredServices(value) {
        return this.axiosApp.get(`/services/search?title=${value}`)
    }

    createService(serviceData) {
        return this.axiosApp.post(`/services`, serviceData)
    }

    editService(serviceId, serviceData) {
        return this.axiosApp.put(`/services/${serviceId}`, serviceData)
    }

    deleteService(serviceId) {
        return this.axiosApp.delete(`/services/${serviceId}`)
    }
}

export default new ServicesServices()