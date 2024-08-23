import ServicesSlider from "../../components/ServicesSlider/ServicesSlider"
import './ServicesListPage.css'

const ServicesListPage = () => {

    return (
        <div className="ServicesListPage">
            <h1>Listadod e servicios</h1>
            <ServicesSlider />
            {/* TODO: filtro para filtrar por servicio */}
        </div>
    )
}

export default ServicesListPage