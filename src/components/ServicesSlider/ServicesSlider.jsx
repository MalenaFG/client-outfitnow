import React, { useEffect, useState } from "react"
import ServiceCard from "../ServiceCard/ServiceCard"
import servicesServices from "../../services/services.services"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from "react-router-dom"

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

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (

        <div className="ServicesSlider">

            <Carousel infinite={true} keyBoardControl={true} autoPlay={true} autoPlaySpeed={2000} responsive={responsive}>
                {
                    services.map(elm => (
                        <Link to={`/services/${elm._id}`}>
                            <div key={elm._id}><ServiceCard {...elm} /></div>
                        </Link>
                    ))
                }
            </Carousel>

        </div>
    )
}

export default ServicesSlider