import ServiceFilter from "../../components/ServiceFilter/ServiceFilter"
import ServicesSlider from "../../components/ServicesSlider/ServicesSlider"
import './ServicesListPage.css'

const ServicesListPage = () => {

    return (
        <div className="ServicesListPage">

            <ServicesSlider />
            <ServiceFilter />

            {/* TODO: filtro para filtrar por servicio */}
        </div>
    )
}

export default ServicesListPage