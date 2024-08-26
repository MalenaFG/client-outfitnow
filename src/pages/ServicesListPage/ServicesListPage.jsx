import ServiceFilter from "../../components/ServiceFilter/ServiceFilter"
import ServicesSlider from "../../components/ServicesSlider/ServicesSlider"
import './ServicesListPage.css'

const ServicesListPage = () => {

    return (
        <div className="ServicesListPage">

            <ServicesSlider />
            <ServiceFilter />
            {/* TODO: MOSTRAR LA SERVICE LIST FILTERED CUANDO SE USE EL FILTRO Y SI NO EL SLIDER */}
        </div>
    )
}

export default ServicesListPage