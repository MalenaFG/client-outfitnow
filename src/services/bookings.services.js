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

    editOneBooking(bookingId, requestBody) {
        return this.axiosApp.put(`/bookings/${bookingId}`, requestBody)
    }

    deleteOneBooking(bookingId) {
        return this.axiosApp.delete(`/bookings/${bookingId}`)
    }

    getBookingsByUser(userId) {
        return this.axiosApp.get(`/bookings/users/${userId}`)
    }

    getBookingsByStylist(userId) {
        return this.axiosApp.get(`/bookings/stylist/${userId}`)
    }

    getCountBookingsByService() {
        return this.axiosApp.get(`/bookings/services/bookingsData`)
    }
}

export default new BookingsServices()