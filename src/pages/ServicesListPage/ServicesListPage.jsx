import { useState } from "react"
import ServiceFilter from "../../components/ServiceFilter/ServiceFilter"
import ServicesSlider from "../../components/ServicesSlider/ServicesSlider"
import './ServicesListPage.css'

const ServicesListPage = () => {

    const [showSlider, setShowSlider] = useState(true)

    return (
        <div className="ServicesListPage">

            {
                showSlider && <ServicesSlider setShowSlider={setShowSlider} />
            }

            <ServiceFilter setShowSlider={setShowSlider} />
        </div>
    )
}

export default ServicesListPage