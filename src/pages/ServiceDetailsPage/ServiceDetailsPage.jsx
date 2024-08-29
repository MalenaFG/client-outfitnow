import { useContext, useEffect, useState } from "react"
import servicesServices from "../../services/services.services"
import { useNavigate, useParams } from "react-router-dom"
import ServiceImgCarousel from "../../components/ServiceImgCarousel/ServiceImgCarousel"
import PacksCard from "../../components/PacksCard/PacksCard"
import StylistsList from "../../components/StylistListByService/StylistsListByService"
import { Container, Modal, Spinner } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import './ServiceDetailsPage.css'
import EditServiceForm from "../../components/EditServiceForm/EditServiceForm"

const ServiceDetailsPage = () => {

    const { serviceId } = useParams()

    const { loggedUser } = useContext(AuthContext)

    const [service, setService] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [accessModal, setAccessModal] = useState(false)
    const [selectedStylist, setSelectedStylist] = useState(null)

    const navigate = useNavigate()

    useEffect(() => loadServiceDetails(), [])

    const showAccessModal = () => setAccessModal({ show: true })

    const updateServiceData = updatedService => setService(updatedService)

    const loadServiceDetails = () => {

        servicesServices
            .getOneService(serviceId)
            .then(({ data }) => {
                setService(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const deleteService = () => {

        if (confirm('Are you sure you want to delete this service? This action cannot be undone.')) {
            servicesServices
                .deleteService(serviceId)
                .then(() => navigate('/services'))
                .catch(err => console.log(err))
        }
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
                        {(loggedUser && loggedUser.role === 'ADMIN') &&
                            <div className="iconsContainer">
                                <img
                                    className="icon me-3"
                                    onClick={showAccessModal}
                                    src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724839563/edit_blanco_glb23x.svg"
                                    style={{ cursor: 'pointer' }}
                                    alt="edit icon" />

                                <img
                                    className="icon"
                                    onClick={deleteService}
                                    src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724839563/delete_blanco_bacvtw.svg"
                                    style={{ cursor: 'pointer' }}
                                    alt="delete icon" />
                            </div>
                        }

                        <Modal size="xl" show={accessModal.show} onHide={() => setAccessModal({ show: false })}>
                            <Modal.Body className='modalBodyContainer flex-column' >
                                <EditServiceForm setAccessModal={setAccessModal} updateServiceData={updateServiceData} />
                            </Modal.Body>
                        </Modal>

                        <section className="mb-5">
                            <StylistsList selectedStylist={selectedStylist} setSelectedStylist={setSelectedStylist} />
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