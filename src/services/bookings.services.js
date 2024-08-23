import axios from "axios"

class BookingsServices {

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

    getAllBookings() {
        return this.axiosApp.get(`/bookings`)
    }

    getOneBooking(bookingId) {
        return this.axiosApp.get(`/bookings/${bookingId}`)
    }

    createBookings(bookingData) {
        return this.axiosApp.post(`/bookings`, bookingData)
    }

    editOneBooking(bookingId) {
        return this.axiosApp.put(`/bookings/${bookingId}`)
    }

    deleteOneBooking(bookingId) {
        return this.axiosApp.delete(`/bookings/${bookingId}`)
    }

    getBookingsByUser(userId) {
        return this.axiosApp.get(`/bookings/users/${userId}`)
    }
}

export default new BookingsServices()