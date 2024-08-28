import React, { useEffect, useState } from "react"
import ServiceCard from "../ServiceCard/ServiceCard"
import servicesServices from "../../services/services.services"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from "react-router-dom"
import { RESPONSIVE_SIZES } from "../../consts/slider.consts"
import './ServicesSlider.css'

const ServicesSlider = ({ setShowSlider }) => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetchServices()
    }, [])

    const fetchServices = () => {

        servicesServices
            .getAllServices()
            .then(({ data }) => {
                setServices(data)
                setShowSlider(true)
            })
            .catch(err => console.log(err))
    }

    return (

        <div className="ServicesSlider">

            <Carousel
                infinite={true}
                keyBoardControl={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                responsive={RESPONSIVE_SIZES}
                containerClass="carousel-container"
            >
                {
                    services.map(elm => (
                        <Link to={`/services/${elm._id}`} key={elm}>
                            <div key={elm._id}>
                                <ServiceCard {...elm} />
                            </div>
                        </Link>
                    ))
                }
            </Carousel>

        </div>
    )
}

export default ServicesSlider