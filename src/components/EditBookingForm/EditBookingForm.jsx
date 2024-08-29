import { Button, Col, Form, Row } from "react-bootstrap"
import { OPTIONS_SELECT_SIZES } from "../../consts/booking.costs"
import bookingsServices from "../../services/bookings.services"


const EditBookingForm = ({ closeModal, loadBookingsByUser, handleBookingChange, handleMeasurementsChange, bookingData }) => {

    const handleFormSubmit = e => {
        e.preventDefault()

        const requestBody = {
            ...bookingData
        }

        bookingsServices
            .editOneBooking(bookingData._id, requestBody)
            .then(() => {
                loadBookingsByUser()
                closeModal()
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
                                value={bookingData.measurements.bottomSize}
                                name='bottomSize'
                                required
                                onChange={e => handleMeasurementsChange(e, bookingData._id)} >

                                <option>Select your size</option>
                                {
                                    OPTIONS_SELECT_SIZES.map(size => <option key={size} value={size}>{size}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="topSize" className="mb-3">
                            <Form.Label>Top Size</Form.Label>
                            <Form.Select
                                type="string"
                                value={bookingData.measurements.topSize}
                                name='topSize'
                                required
                                onChange={e => handleMeasurementsChange(e, bookingData._id)} >
                                <option>Select your size</option>
                                {
                                    OPTIONS_SELECT_SIZES.map(size => <option key={size} value={size}>{size}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={{ span: 6, offset: 0 }}>
                        <Form.Group controlId="shoeSize" className="mb-3">
                            <Form.Label>Shoe Size</Form.Label>
                            <Form.Control
                                type="number"
                                value={bookingData.measurements.shoeSize}
                                name='shoeSize'
                                required
                                onChange={e => handleMeasurementsChange(e, bookingData._id)} />
                        </Form.Group>

                        <Form.Group controlId="height" className="mb-3 ">
                            <Form.Label>Height</Form.Label>
                            <Form.Control
                                type="number"
                                value={bookingData.measurements.height}
                                name='height'
                                required
                                onChange={e => handleMeasurementsChange(e, bookingData._id)} />
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
                            value={bookingData.comment}
                            onChange={e => handleBookingChange(e, bookingData._id)}
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
                            onChange={e => handleBookingChange(e, bookingData._id)} />
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
