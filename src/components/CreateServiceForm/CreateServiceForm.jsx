import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import './CreateServiceForm.css'

import servicesServices from "../../services/services.services"

const CreateServiceForm = () => {

    const [serviceData, setServiceData] = useState({
        title: '',
        coverImage: '',
        images: [],
    })

    const [basicPack, setBasicPack] = useState({
        price: 0,
        description: '',
        outfitsIncluded: 0,
        homeService: false,
        minimumNotice: 0
    });

    const [premiumPack, setPremiumPack] = useState({
        price: 0,
        description: '',
        outfitsIncluded: 0,
        homeService: false,
        minimumNotice: 0
    });

    const [glamPack, setGlamPack] = useState({
        price: 0,
        description: '',
        outfitsIncluded: 0,
        homeService: false,
        minimumNotice: 0
    });

    const handleInputChange = e => {

        const { value, name } = e.target;
        setServiceData({ ...serviceData, [name]: value })
    }

    const handlePackChange = (e, pack, setPack) => {
        const { name, value, type, checked } = e.target;
        const finalValue = type === "checkbox" ? checked : value;

        setPack(prev => ({
            ...prev,
            [name]: finalValue
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();

        const finalServiceData = {
            ...serviceData,
            images: serviceData.images.split(','),
            packs: {
                basic: basicPack,
                premium: premiumPack,
                glam: glamPack
            }
        };

        servicesServices
            .createService(finalServiceData)
            .then(() => console.log('Servicio creado'))
            .catch(err => console.log(err));
    }




    return (

        <Form onSubmit={handleSubmit}>
            <h2>New Service</h2>
            <Form.Group className="mb-3">
                <Form.Label>Service title</Form.Label>
                <Form.Control type="string" required value={serviceData.title} name='title' onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Cover image</Form.Label>
                <Form.Control type="string" required value={serviceData.coverImage} name='coverImage' onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Images for Carousel</Form.Label>
                <Form.Control type="string" required value={serviceData.images} name='images' onChange={handleInputChange} />
            </Form.Group>

            <Row>

                <Col>
                    <h3>Basic Pack</h3>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control required type="number" value={basicPack.price} name='price' onChange={e => handlePackChange(e, basicPack, setBasicPack)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control required type="string" value={basicPack.description} name='description' as='textarea' onChange={e => handlePackChange(e, basicPack, setBasicPack)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Number of outfits included</Form.Label>
                        <Form.Control required type="number" value={basicPack.outfitsIncluded} name='outfitsIncluded' onChange={e => handlePackChange(e, basicPack, setBasicPack)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Home service included</Form.Label>
                        <Form.Check
                            type="checkbox"
                            name='homeService'
                            checked={basicPack.homeService}
                            onChange={e => handlePackChange(e, basicPack, setBasicPack)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Minimum days until the deadline date</Form.Label>
                        <Form.Control required type="number" value={basicPack.minimumNotice} name='minimumNotice' onChange={e => handlePackChange(e, basicPack, setBasicPack)} />
                    </Form.Group>
                </Col>

                <Col>
                    <h3>Premium Pack</h3>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control required type="number" value={premiumPack.price} name='price' onChange={e => handlePackChange(e, premiumPack, setPremiumPack)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control required type="string" value={premiumPack.description} name='description' as='textarea' onChange={e => handlePackChange(e, premiumPack, setPremiumPack)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Number of outfits included</Form.Label>
                        <Form.Control required type="number" value={premiumPack.outfitsIncluded} name='outfitsIncluded' onChange={e => handlePackChange(e, premiumPack, setPremiumPack)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Home service included</Form.Label>
                        <Form.Check
                            type="checkbox"
                            name='homeService'
                            checked={premiumPack.homeService}
                            onChange={e => handlePackChange(e, premiumPack, setPremiumPack)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Minimum days until the deadline date</Form.Label>
                        <Form.Control required type="number" value={premiumPack.minimumNotice} name='minimumNotice' onChange={e => handlePackChange(e, premiumPack, setPremiumPack)} />
                    </Form.Group>
                </Col>

                <Col>
                    <h3>Glam Pack</h3>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control required type="number" value={glamPack.price} name='price' onChange={e => handlePackChange(e, glamPack, setGlamPack)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control required type="string" value={glamPack.description} name='description' as='textarea' onChange={e => handlePackChange(e, glamPack, setGlamPack)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Number of outfits included</Form.Label>
                        <Form.Control required type="number" value={glamPack.outfitsIncluded} name='outfitsIncluded' onChange={e => handlePackChange(e, glamPack, setGlamPack)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Home service included</Form.Label>
                        <Form.Check
                            type="checkbox"
                            name='homeService'
                            checked={glamPack.homeService}
                            onChange={e => handlePackChange(e, glamPack, setGlamPack)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Minimum days until the deadline date</Form.Label>
                        <Form.Control required type="number" value={glamPack.minimumNotice} name='minimumNotice' onChange={e => handlePackChange(e, glamPack, setGlamPack)} />
                    </Form.Group>
                </Col>

            </Row>

            <Button variant="dark" type="submit">Upload new service</Button>

        </Form>

    )
}

export default CreateServiceForm
