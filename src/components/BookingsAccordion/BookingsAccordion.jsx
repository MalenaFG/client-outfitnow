import { useEffect, useState } from "react"
import { Accordion, Col, Row, Modal } from "react-bootstrap"
import EditBookingForm from "../EditBookingForm/EditBookingForm";
import bookingsServices from './../../services/bookings.services'
import { useParams } from "react-router-dom"
import './BookingsAccordion.css'

const BookingsAccordion = () => {

    const { userId } = useParams()

    const [bookingData, setBookingData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedBookingId, setSelectedBookingId] = useState(null)

    const handleShowModal = (bookingId) => {
        setShowModal(true)
        setSelectedBookingId(bookingId)
    }

    const loadBookingsByUser = () => {

        bookingsServices

            .getBookingsByUser(userId)
            .then(({ data }) => {
                setBookingData(data)

            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBookingsByUser()
    }, [])

    return (

        <div className="BookingsAccordion">
            {
                bookingData.map((elm, idx) => {

                    return (
                        <Accordion key={elm._id} >
                            <Accordion.Item eventKey={idx + 1}>
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
                                                elm.comment !== "" && (<>
                                                    <h6>Comment:</h6>
                                                    <p>{elm.comment}</p>
                                                </>)
                                            }
                                        </Col>
                                        <Col className="text-end">

                                            <img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724515088/eliminar_kt0l8l.png" alt="deleteIcon" />

                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    )
                })
            }

            <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} className='bookingEditModal'>
                <Modal.Header closeButton className='flex-column'>
                    <Modal.Title>Edit Booking Form </Modal.Title>
                    <Modal.Body className='modalBodyContainer flex-column mb-3'>
                        <EditBookingForm bookingId={selectedBookingId} closeModal={setShowModal} />
                    </Modal.Body>
                </Modal.Header>
            </Modal>

        </div>
    )
}
export default BookingsAccordion