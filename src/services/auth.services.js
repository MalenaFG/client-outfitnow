import axios from "axios"

class authServices {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api`
        })
    }

    signupUser(userData) {
        return this.axiosApp.post('/auth/signup', userData)
    }
    loginUser(userData) {
        return this.axiosApp.post('/auth/login', userData)
    }
    verifyToken(authToken) {
        return this.axiosApp.get('/auth/verify', {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
    }

}

export default new authServices()