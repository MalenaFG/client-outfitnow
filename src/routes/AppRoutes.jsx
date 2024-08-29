import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import MyProfilePage from '../pages/MyProfilePage/MyProfilePage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import ServicesListPage from '../pages/ServicesListPage/ServicesListPage'
import StylistsListPage from '../pages/StylistsListPage/StylistsListPage'
import StylistDetailsPage from '../pages/StylistDetailsPage/StylistDetailsPage'
import ServiceDetailsPage from '../pages/ServiceDetailsPage/ServiceDetailsPage'
import PrivateRoutes from './PrivateRoutes'
import DashboardPage from '../pages/DashboardPage/DashboardPage'

const AppRoutes = () => {
    return (
        <div className="AppRoutes">
            <Routes>
                <Route path={`/`} element={<HomePage />} />
                <Route path={'/services'} element={<ServicesListPage />} />
                <Route path={'/services/:serviceId'} element={<ServiceDetailsPage />} />
                <Route path={'/stylists'} element={<StylistsListPage />} />
                <Route path={'/stylists/:stylistId'} element={<StylistDetailsPage />} />
                {/* TODO:REVISAR LO QUE QUEDA */}
                <Route path={'/aboutus'} element={<AboutUsPage />} />
                <Route path={'*'} element={<h1>404</h1>} />
                {/* TODO: HACER PGE 404 */}

                <Route element={<PrivateRoutes />}>
                    <Route path={'/profile/:userId'} element={<MyProfilePage />} />
                    <Route path={'/dashboard'} element={<DashboardPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default AppRoutes