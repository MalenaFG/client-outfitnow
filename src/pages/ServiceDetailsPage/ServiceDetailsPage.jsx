import { useEffect, useState } from "react"
import servicesServices from "../../services/services.services"
import { useParams } from "react-router-dom"
import ServiceImgCarousel from "../../components/ServiceImgCarousel/ServiceImgCarousel"

const ServiceDetailsPage = () => {

    const { serviceId } = useParams()

    const [service, setService] = useState()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        loadServiceDetails()
    }, [])

    const loadServiceDetails = () => {
        servicesServices
            .getOneService(serviceId)
            .then(({ data }) => {
                setService(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <>

            {isLoading
                ? <h1>cargando</h1>
                : <div className="ServiceDetailsPage">
                    <ServiceImgCarousel service={service} />
                    <h1>holiiiii</h1>
                </div>

            }
        </>
    )
}

export default ServiceDetailsPage