import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import UsersListPage from '../pages/UsersListPage/UsersListPage'
import MyProfilePage from '../pages/MyProfilePage/MyProfilePage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import ServicesListPage from '../pages/ServicesListPage/ServicesListPage'
import StylistsListPage from '../pages/StylistsListPage/StylistsListPage'
import StylistDetailsPage from '../pages/StylistDetailsPage/StylistDetailsPage'
import ServiceDetailsPage from '../pages/ServiceDetailsPage/ServiceDetailsPage'
import PrivateRoutes from './PrivateRoutes'

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path={`/`} element={<HomePage />} />
                <Route path={'/services'} element={<ServicesListPage />} />
                <Route path={'/services/:serviceId'} element={<ServiceDetailsPage />} />
                <Route path={'/stylists'} element={<StylistsListPage />} />
                <Route path={'/stylists/:stylistId'} element={<StylistDetailsPage />} />
                <Route path={'/aboutus'} element={<AboutUsPage />} />
                <Route path={'/users'} element={<UsersListPage />} />
                <Route path={'*'} element={<h1>404</h1>} />

                <Route element={<PrivateRoutes />}>
                    <Route path={'/profile/:userId'} element={<MyProfilePage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default AppRoutes