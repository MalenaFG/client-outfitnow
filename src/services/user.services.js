import axios from "axios"

class UserServices {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api`
        })
    }

    getUsersByRol(role) {
        return this.axiosApp.get(`/users/role/${role}`)
    }

    getOneUser(userId) {
        return this.axiosApp.get(`/users/${userId}`)
    }

    getStylistsByService(serviceId) {
        return this.axiosApp(`users/services/${serviceId}`)
    }

}

export default new UserServices()
