import { useContext, useEffect, useState } from "react"
import servicesServices from "../../services/services.services"
import { useNavigate, useParams } from "react-router-dom"
import ServiceImgCarousel from "../../components/ServiceImgCarousel/ServiceImgCarousel"
import PacksCard from "../../components/PacksCard/PacksCard"
import StylistsList from "../../components/StylistListByService/StylistsListByService"
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
    const [selectedStylist, setSelectedStylist] = useState(null)

    const navigate = useNavigate()

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

    const deleteService = () => {
        servicesServices
            .deleteService(serviceId)
            .then(() => navigate('/services'))
    }

    console.log(service)

    return (
        <>

            {isLoading
                ? <Spinner />
                : <div className="ServiceDetailsPage">

                    <section className="mb-5">
                        <ServiceImgCarousel {...service} />
                    </section>
                    <Container>
                        {(loggedUser && loggedUser.role === 'ADMIN') &&
                            <div>
                                <img
                                    className="icons me-3"
                                    onClick={showAccessModal}
                                    src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724515088/edit_w7jswo.png"
                                    style={{ cursor: 'pointer' }}
                                    alt="edit icon" />
                                <img
                                    className="icons"
                                    onClick={deleteService}
                                    src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724515088/eliminar_kt0l8l.png"
                                    style={{ cursor: 'pointer' }}
                                    alt="delete icon" />
                            </div>
                        }
                        <Modal className='accessModal' size="xl" show={accessModal.show} onHide={() => setAccessModal({ show: false })}>

                            <Modal.Body className='modalBodyContainer flex-column' >
                                <EditServiceForm setAccessModal={setAccessModal} updateServiceData={updateServiceData} />
                            </Modal.Body>

                        </Modal>

                        <section className="mb-5">
                            <h1> Choose your stylist</h1>
                            <Row className="d-flex">
                                <StylistsList
                                    selectedStylist={selectedStylist}
                                    setSelectedStylist={setSelectedStylist} />
                            </Row>
                        </section>

                        <section className="mb-5">
                            <PacksCard {...service} selectedStylist={selectedStylist} />
                        </section>
                    </Container>

                </div>

            }
        </>
    )
}

export default ServiceDetailsPage