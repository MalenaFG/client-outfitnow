import { useEffect, useState } from "react"
import { Accordion, Col, Row } from "react-bootstrap"
import bookingsServices from './../../services/bookings.services'
import { useParams } from "react-router-dom"
import './BookingsAccordion.css'

const BookingsAccordion = () => {

    const { userId } = useParams()

    const [bookingData, setBookingData] = useState([])

    const loadBookingsByUser = () => {

        bookingsServices

            .getBookingsByUser(userId)
            .then(({ data }) => setBookingData(data))
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
                        <Accordion >
                            <Accordion.Item eventKey={idx + 1}>
                                <Accordion.Header>{idx + 1}º Booking - {elm.pack}</Accordion.Header>
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
                                            <h6>Service:</h6>
                                            <p>{elm.service.title}</p>

                                            <h6>Deadline:</h6>
                                            <p>{new Date(elm.deadline).toLocaleDateString()}</p>
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
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })
            }

        </div>
    )
}
export default BookingsAccordion