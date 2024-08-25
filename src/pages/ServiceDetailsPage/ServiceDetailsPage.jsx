import { useEffect, useState } from "react"
import servicesServices from "../../services/services.services"
import { useParams } from "react-router-dom"
import ServiceImgCarousel from "../../components/ServiceImgCarousel/ServiceImgCarousel"
import PacksCard from "../../components/PacksCard/PacksCard"
import StylistsList from "../../components/StylistList/StylistsList"
import { Col, Container, Row, Spinner } from "react-bootstrap"

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
                ? <Spinner />
                : <div className="ServiceDetailsPage">

                    <section className="mb-5">
                        <ServiceImgCarousel {...service} />
                    </section>
                    <Container>
                        <section className="mb-5">
                            <h1> Choose your stylist</h1>
                            <Row className="d-flex">
                                <StylistsList />
                            </Row>
                        </section>

                        <section className="mb-5">
                            <PacksCard {...service} />
                        </section>
                    </Container>

                </div>

            }
        </>
    )
}

export default ServiceDetailsPage