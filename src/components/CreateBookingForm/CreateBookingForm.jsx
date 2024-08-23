import { useState } from "react"
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import bookingsServices from "../../services/bookings.services"

const CreateBookingForm = ({ packsData, closeModal }) => {

    const { serviceId } = useParams()

    const [bookingData, setBookingData] = useState({
        deadline: '',
        comment: '',
        service: serviceId,
        pack: packsData,
    })

    const [measurementsData, setMeasurementsData] = useState({
        height: '',
        topSize: '',
        bottomSize: '',
        shoeSize: '',
    })

    const [isLoading, setIsLoading] = useState(true)

    const handleBookingChange = e => {
        const { value, name } = e.target
        setBookingData({ ...bookingData, [name]: value })
    }
    const handleMeasurementsChange = (e) => {
        const { name, value } = e.target;
        setMeasurementsData({ ...measurementsData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        const requestBody = {
            ...bookingData,
            measurements: measurementsData,
        }

        bookingsServices
            .createBookings(requestBody)
            .then(() => {
                setBookingData(requestBody)
            })
        closeModal(false)
            .catch(err => console.log(err))
    }

    return (
        <div className="CreateBookingForm">

            <Form onSubmit={handleFormSubmit} >
                <Row>

                    <Col md={{ span: 6, offset: 0 }}>
                        <Form.Group controlId="bottomSize" className="mb-3">
                            <Form.Label>Bottom Size</Form.Label>
                            <Form.Select type="string" value={measurementsData.bottomSize} name='bottomSize' required onChange={handleMeasurementsChange} >
                                <option>Select your size</option>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="topSize" className="mb-3">
                            <Form.Label>Top Size</Form.Label>
                            <Form.Select type="string" value={measurementsData.topSize} name='topSize' required onChange={handleMeasurementsChange} >
                                <option>Select your size</option>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 6, offset: 0 }}>
                        <Form.Group controlId="shoeSize" className="mb-3">
                            <Form.Label>Shoe Size</Form.Label>
                            <Form.Control type="number" value={measurementsData.shoeSize} name='shoeSize' required onChange={handleMeasurementsChange} />
                        </Form.Group>

                        <Form.Group controlId="height" className="mb-3 ">
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="number" value={measurementsData.height} name='height' required onChange={handleMeasurementsChange} />
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    <FloatingLabel className="mb-3" controlId="floatingTextareaForComment" label=" Leave a comment here">
                        <Form.Control
                            type="text"
                            value={bookingData.comment}
                            name='comment'
                            required
                            onChange={handleBookingChange}
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                    <Form.Group controlId="deadline" className="mb-3">
                        <Form.Label>Deadline</Form.Label>
                        <Form.Control type="date" value={bookingData.deadline} name='deadline' required onChange={handleBookingChange} />
                    </Form.Group>

                </Row>

                <Button variant="dark" type="submit">
                    Confirm reservation
                </Button>
            </Form>
        </div>
    )
}

export default CreateBookingForm