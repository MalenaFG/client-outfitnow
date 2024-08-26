import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap"
import './EditServiceForm.css'
import { useParams } from "react-router-dom";
import servicesServices from "../../services/services.services"
import uploadServices from "../../services/upload.services";

const EditServiceForm = ({ setAccessModal, updateServiceData }) => {

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

    const [isLoading, setIsLoading] = useState(true)
    const [loadingImage, setLoadingImage] = useState(false)


    const { serviceId } = useParams()

    useEffect(() => {
        fetchServiceData()
    }, [])

    const fetchServiceData = () => {

        servicesServices
            .getOneService(serviceId)
            .then(res => {
                setServiceData(res.data)
                setBasicPack(res.data.packs.basic)
                setPremiumPack(res.data.packs.premium)
                setGlamPack(res.data.packs.glam)

                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

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

    const handleCoverUpload = e => {
        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadOneImage(formData)
            .then(({ data }) => {
                setServiceData({ ...serviceData, coverImage: data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    const handleImagesUpload = e => {

        setLoadingImage(true)
        const formData = new FormData()

        for (let i = 0; i < e.target.files.length; i++) {
            formData.append('imagesData', e.target.files[i])
        }

        uploadServices
            .uploadSomeImages(formData)
            .then(({ data }) => {
                setServiceData({ ...serviceData, images: [...serviceData.images, ...data.cloudinary_urls] })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    const handleCarouselImages = index => {
        const imagesCopy = [...serviceData.images]
        imagesCopy.splice(index, 1)

        setServiceData({ ...serviceData, images: imagesCopy })
    }

    // TODO MALENA: NO SE ELIMINA LA IMAGEN IGUAL QUE LAS DEL CAROUSEL
    const handleCoverImage = () => {

        setServiceData({ ...serviceData, coverImage: '' })
    }

    const handleSubmit = e => {
        e.preventDefault();

        const finalServiceData = {
            ...serviceData,
            packs: {
                basic: basicPack,
                premium: premiumPack,
                glam: glamPack
            }
        };

        servicesServices
            .editService(serviceId, finalServiceData)
            .then(() => {
                console.log('Servicio editado')
                updateServiceData(finalServiceData)
                setAccessModal(false)
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="EditServiceForm">
            {isLoading ?
                <Spinner />
                :
                <Form onSubmit={handleSubmit}>
                    <h2>Edit Service</h2>
                    <Form.Group className="mb-3">
                        <Form.Label>Service title</Form.Label>
                        <Form.Control type="string" value={serviceData.title} name='title' onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Cover image</Form.Label>
                        <Form.Control className='mb-3' type="file" name='coverImage' onChange={handleCoverUpload} />
                        <div className="imageContainer">
                            <img className="coverImage" src={serviceData.coverImage} />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Images for Carousel</Form.Label>
                        <Form.Control className='mb-3' type="file" name='images' onChange={handleImagesUpload} multiple />
                        <div className="carouselPreview">
                            {
                                serviceData.images.map((e, index) => {
                                    return (
                                        <div className="imageContainer" key={e}>
                                            <img className="carouselImage" onClick={() => handleCarouselImages(index)} src={e} />
                                            <p><i>Click to delete</i></p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Form.Group>

                    <Row className="packsImputs">

                        <Col>
                            <h5>Basic Pack</h5>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" value={basicPack.price} name='price' onChange={e => handlePackChange(e, basicPack, setBasicPack)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="string" value={basicPack.description} name='description' as='textarea' onChange={e => handlePackChange(e, basicPack, setBasicPack)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Number of outfits included</Form.Label>
                                <Form.Control type="number" value={basicPack.outfitsIncluded} name='outfitsIncluded' onChange={e => handlePackChange(e, basicPack, setBasicPack)} />
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
                                <Form.Control type="number" value={basicPack.minimumNotice} name='minimumNotice' onChange={e => handlePackChange(e, basicPack, setBasicPack)} />
                            </Form.Group>
                        </Col>

                        <Col>
                            <h5>Premium Pack</h5>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" value={premiumPack.price} name='price' onChange={e => handlePackChange(e, premiumPack, setPremiumPack)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="string" value={premiumPack.description} name='description' as='textarea' onChange={e => handlePackChange(e, premiumPack, setPremiumPack)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Number of outfits included</Form.Label>
                                <Form.Control type="number" value={premiumPack.outfitsIncluded} name='outfitsIncluded' onChange={e => handlePackChange(e, premiumPack, setPremiumPack)} />
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
                                <Form.Control type="number" value={premiumPack.minimumNotice} name='minimumNotice' onChange={e => handlePackChange(e, premiumPack, setPremiumPack)} />
                            </Form.Group>
                        </Col>

                        <Col>
                            <h5>Glam Pack</h5>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" value={glamPack.price} name='price' onChange={e => handlePackChange(e, glamPack, setGlamPack)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="string" value={glamPack.description} name='description' as='textarea' onChange={e => handlePackChange(e, glamPack, setGlamPack)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Number of outfits included</Form.Label>
                                <Form.Control type="number" value={glamPack.outfitsIncluded} name='outfitsIncluded' onChange={e => handlePackChange(e, glamPack, setGlamPack)} />
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
                                <Form.Control type="number" value={glamPack.minimumNotice} name='minimumNotice' onChange={e => handlePackChange(e, glamPack, setGlamPack)} />
                            </Form.Group>
                        </Col>

                    </Row>

                    <Button variant="dark" type="submit">Upload new service</Button>

                </Form>}
        </div>
    )
}

export default EditServiceForm
