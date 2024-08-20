import axios from "axios"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import ServiceCard from "../ServiceCard/ServiceCard"
import servicesServices from "../../services/services.services"

const ServicesSlider = () => {

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

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        accessibility: true
    }

    return (
        <div className="ServicesSlider">

            <Slider {...settings}>
                {
                    services.map(elm => {
                        return (
                            <ServiceCard {...elm} key={elm._id} />
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default ServicesSlider