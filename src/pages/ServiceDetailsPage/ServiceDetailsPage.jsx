import { useContext, useEffect, useState } from "react"
import servicesServices from "../../services/services.services"
import { useParams } from "react-router-dom"
import ServiceImgCarousel from "../../components/ServiceImgCarousel/ServiceImgCarousel"
import PacksCard from "../../components/PacksCard/PacksCard"
import StylistsList from "../../components/StylistList/StylistsList"
import { Button, Col, Container, Modal, Row, Spinner } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import './ServiceDetailsPage.css'
import EditServiceForm from "../../components/EditServiceForm/EditServiceForm"

const ServiceDetailsPage = () => {

    const { serviceId } = useParams()

    const { loggedUser, logoutUser } = useContext(AuthContext)

    const [service, setService] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [accessModal, setAccessModal] = useState(false)

    const showAccessModal = content => {
        setAccessModal({ show: true })
    }


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

    const updateServiceData = (updatedService) => {
        setService(updatedService)
    }

    return (
        <>

            {isLoading
                ? <Spinner />
                : <div className="ServiceDetailsPage">

                    <section className="mb-5">
                        <ServiceImgCarousel {...service} />
                    </section>
                    {/* TODO MALENA: FALTA LA LÓGICA PARA QUE EL BOTÓN DE EDITAR SOLO APAREZCA SI ERES ESTILISTA */}
                    <Container>
                        {loggedUser && <Button variant="dark" className="editButton" onClick={showAccessModal}>Edit this service</Button>}
                        <Modal className='accessModal' size="lg" show={accessModal.show} onHide={() => setAccessModal({ show: false })}>

                            <Modal.Body className='modalBodyContainer flex-column mb-3' ><EditServiceForm setAccessModal={setAccessModal} updateServiceData={updateServiceData} /></Modal.Body>

                        </Modal>

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