import { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { OPTIONS_SELECT_SIZES } from "../../consts/booking.costs"
import bookingsServices from "../../services/bookings.services"


const EditBookingForm = ({ closeModal, bookingId, loadBookingsByUser }) => {

    const [bookingData, setBookingData] = useState({
        deadline: '',
        comment: '',
        service: '',
        pack: '',
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
        console.log(`Updating measurement ${name}: ${value}`)
        setMeasurementsData({ ...measurementsData, [name]: value })
    }

    useEffect(() => {
        fetchBookingData()
    }, [])

    const fetchBookingData = () => {

        bookingsServices
            .getOneBooking(bookingId)
            .then((response) => {
                setBookingData(response.data)
                setMeasurementsData(response.data.measurements)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        const requestBody = {
            ...bookingData,
            measurements: measurementsData,
        }
        console.log("Submitting data:", requestBody)

        bookingsServices
            .editOneBooking(bookingId, requestBody)
            .then(() => {
                closeModal()
                loadBookingsByUser()
                // TODO: NO CONSIGO QUE SE ACTUALICEN LOS DATOS DESPUES DEL SUBMIT DEL FORMULARIO
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="EditBookingForm">
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
                            <Form.Select
                                type="string"
                                value={measurementsData.topSize}
                                name='topSize'
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
                        <Form.Label>Comments</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Add your suggestions"
                            onChange={handleBookingChange}
                            value={bookingData.comment}
                            name='comment'
                            type="text"
                        />
                    </Form.Group>

                    <Form.Group controlId="deadline" className="mb-3">
                        <Form.Label>Deadline</Form.Label>
                        <Form.Control
                            type="date"
                            value={bookingData.deadline.split('T')[0]}
                            name='deadline'
                            required
                            onChange={handleBookingChange} />
                    </Form.Group>

                </Row>

                <Button variant="dark" type="submit">
                    Save
                </Button>
            </Form>
        </div>
    )
}

export default EditBookingForm
