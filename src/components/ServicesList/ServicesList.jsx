import { useState } from "react"
import ServiceCard from "../ServiceCard/ServiceCard"
import { useEffect } from "react"

import ServicesSlider from "../ServicesSlider/ServicesSlider"
import servicesServices from "../../services/services.services"

const ServicesList = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetchServices()
    }, [])


    const fetchServices = () => {

        servicesServices
            .getAllServices()
            .then(({ data }) => setServices(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="ServicesList">
            {
                services.map(elm => {
                    return (
                        <ServiceCard {...elm} key={elm._id} />
                    )
                })
            }
        </div>
    )
}

export default ServicesList