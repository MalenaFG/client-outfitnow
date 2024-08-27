import { useContext, useEffect, useState } from "react"
import { Accordion, Col, Row, Modal } from "react-bootstrap"
import EditBookingForm from "../EditBookingForm/EditBookingForm"
import bookingsServices from './../../services/bookings.services'
import { useParams } from "react-router-dom"
import './BookingsAccordion.css'
import { AuthContext } from "../../contexts/auth.context"
import UserMap from "../UserMap/UserMap"

// TODO: GER
const BookingsAccordion = () => {

    const { userId } = useParams()

    const { loggedUser } = useContext(AuthContext)

    const [bookingData, setBookingData] = useState([])

    const [showModal, setShowModal] = useState(false)
    const [selectedBookingId, setSelectedBookingId] = useState(null)

    const handleShowModal = (bookingId) => {
        setShowModal(true)
        setSelectedBookingId(bookingId)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const loadBookingsByUser = () => {

        bookingsServices
            .getBookingsByUser(userId)
            .then(({ data }) => {
                setBookingData(data)
            })
            .catch(err => console.log(err))
    }

    const loadBookingsByStylist = () => {

        bookingsServices
            .getBookingsByStylist(userId)
            .then(({ data }) => {
                setBookingData(data)
            })
            .catch(err => console.log(err))

    }

    const deleteBooking = (bookingId) => {

        bookingsServices
            .deleteOneBooking(bookingId)
            .then(() => loadBookingsByUser())
            .catch(err => console.log(err))
    }

    const handleBookingChange = (e, bookingId) => {

        const { value, name } = e.target

        let currentBooking = bookingData.find(elm => elm._id == bookingId)
        currentBooking = { ...currentBooking, [name]: value }

        const bookingDataCopy = bookingData.map(elm => {
            if (elm._id === bookingId) {
                return currentBooking
            }
            return elm
        })

        setBookingData(bookingDataCopy)
    }

    const handleMeasurementsChange = (e, bookingId) => {
        const { value, name } = e.target

        let currentBooking = bookingData.find(elm => elm._id == bookingId)

        const currentMeasurements = { ...currentBooking.measurements, [name]: value }
        currentBooking = { ...currentBooking, measurements: currentMeasurements }

        const bookingDataCopy = bookingData.map(elm => {
            if (elm._id === bookingId) {
                return currentBooking
            }
            return elm
        })

        setBookingData(bookingDataCopy)
    }

    useEffect(() => {
        {
            loggedUser.role === "USER"
                ? loadBookingsByUser()
                : loadBookingsByStylist()
        }

    }, [])

    return (

        <div className="BookingsAccordion">
            <Accordion>

                {
                    bookingData.map((elm, idx) => {

                        return (
                            <Accordion.Item eventKey={idx + 1} key={elm._id}>
                                <Accordion.Header>{idx + 1}º Service - {elm.service.title}</Accordion.Header>
                                <Accordion.Body className="accordionBody">
                                    <Row>
                                        <Col>
                                            <h6>Measurements:</h6>
                                            <ul>
                                                <li>Height: {elm.measurements.height} cm</li>
                                                <li>Top Size: {elm.measurements.topSize}</li>
                                                <li>Bottom Size: {elm.measurements.bottomSize}</li>
                                                <li>Shoe Size: {elm.measurements.shoeSize}</li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <h6>Pack:</h6>
                                            <p>{elm.pack.charAt(0).toUpperCase() + elm.pack.slice(1)}</p>

                                            <h6>Deadline:</h6>
                                            <p>{new Date(elm.deadline).toLocaleDateString()}</p>
                                        </Col>
                                        <Col className="text-end">
                                            <img
                                                src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724515088/edit_w7jswo.png"
                                                onClick={() => handleShowModal(elm._id)}
                                                style={{ cursor: 'pointer' }}
                                                alt="editIcon"
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            {
                                                loggedUser.role === "STYLIST" && (<>
                                                    <h6>Cliente</h6>
                                                    <p>{elm.client.email}</p>
                                                    <p>{elm.client.userName}</p>
                                                    <p>{elm.client.phone}</p>
                                                </>)
                                            }
                                        </Col>
                                        <Col>
                                            {
                                                loggedUser.role === "STYLIST" && (

                                                    <UserMap location={elm.client.location.coordinates} />

                                                )
                                            }
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            {
                                                elm.comment !== "" && (<>
                                                    <h6>Comment:</h6>
                                                    <p>{elm.comment}</p>
                                                </>)
                                            }
                                            <div>
                                                <h6>Stylist</h6>
                                                <p>{elm.stylist.userName}</p>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="text-end">

                                            <img onClick={() => deleteBooking(elm._id)} src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724515088/eliminar_kt0l8l.png" alt="deleteIcon" />

                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>

                        )
                    })

                }
            </Accordion>


            <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} className='bookingEditModal'>
                <Modal.Header closeButton className='flex-column'>
                    <Modal.Title>Edit Booking Form </Modal.Title>
                    <Modal.Body className='modalBodyContainer flex-column mb-3'>
                        <EditBookingForm
                            closeModal={handleCloseModal}
                            loadBookingsByUser={loadBookingsByUser}
                            handleBookingChange={handleBookingChange}
                            handleMeasurementsChange={handleMeasurementsChange}
                            bookingData={bookingData.find(elm => elm._id == selectedBookingId)}
                        />
                    </Modal.Body>
                </Modal.Header>
            </Modal>

        </div>
    )
}
export default BookingsAccordion