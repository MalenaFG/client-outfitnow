import { Spinner } from "react-bootstrap"
import { AuthContext } from "../contexts/auth.context"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Spinner />
    }


    if (!loggedUser) {
        return <Navigate to="/" />
    }

    return <Outlet />
}

export default PrivateRoutes
