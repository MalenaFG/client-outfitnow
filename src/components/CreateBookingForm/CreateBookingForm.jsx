import { useState } from "react"
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import bookingsServices from "../../services/bookings.services"
import { OPTIONS_SELECT_SIZES } from "../../consts/booking.costs"

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
                closeModal(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="CreateBookingForm">

            <Form onSubmit={handleFormSubmit} >
                <Row>

                    <Col md={{ span: 6, offset: 0 }}>
                        <Form.Group controlId="bottomSize" className="mb-3">
                            <Form.Label>Bottom Size</Form.Label>
                            <Form.Select
                                type="string"
                                value={measurementsData.bottomSize}
                                name='bottomSize'
                                required
                                onChange={handleMeasurementsChange} >

                                <option>Select your size</option>
                                {
                                    OPTIONS_SELECT_SIZES.map(size => (
                                        <option key={size} value={size}>{size}</option>

                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="topSize" className="mb-3">
                            <Form.Label>Top Size</Form.Label>
                            <Form.Select type="string" value={measurementsData.topSize} name='topSize' required onChange={handleMeasurementsChange} >
                                <option>Select your size</option>
                                {
                                    OPTIONS_SELECT_SIZES.map(size => (
                                        <option key={size} value={size}>{size}</option>

                                    ))
                                }
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

                    <Form.Group className="mb-3" controlId="comments">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            required
                            placeholder="Add your suggestions"
                            onChange={handleBookingChange}
                            value={bookingData.comment}
                            name='comment'
                            type="text"
                        />
                    </Form.Group>

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