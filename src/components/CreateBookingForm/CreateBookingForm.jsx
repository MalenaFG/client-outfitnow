import { useState } from "react"
import { Button, Form } from "react-bootstrap"


const CreateBookingForm = () => {

    const [bookingData, setBookingData] = useState({
        deadline: '',
        comment: '',
        client: '',
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
        setMeasurementsData({ ...measurementsData, [name]: value })
    }

    return (
        <div className="CreateBookingForm">

            <Form >

                <Form.Group className="mb-3">
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="number" value={measurementsData.height} name='height' onChange={handleMeasurementsChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Top Size</Form.Label>
                    <Form.Select type="string" value={measurementsData.topSize} name='topSize' onChange={handleMeasurementsChange} >
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                    </Form.Select>

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Bottom Size</Form.Label>
                    <Form.Control type="string" value={measurementsData.bottomSize} name='bottomSize' onChange={handleMeasurementsChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Shoe Size</Form.Label>
                    <Form.Control type="number" value={measurementsData.shoeSize} name='shoeSize' onChange={handleMeasurementsChange} />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Confirm reservation
                </Button>

            </Form>
        </div>
    )
}

export default CreateBookingForm