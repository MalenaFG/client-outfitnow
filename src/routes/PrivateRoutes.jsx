import { AuthContext } from "../contexts/auth.context"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import Loader from "../components/Loader/Loader"

const PrivateRoutes = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }


    if (!loggedUser) {
        return <Navigate to="/" />
    }

    return <Outlet />
}

export default PrivateRoutes
