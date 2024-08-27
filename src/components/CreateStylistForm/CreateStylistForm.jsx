import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap"
import stylesServices from './../../services/styles.services'
import authServices from "../../services/auth.services"
import servicesServices from "../../services/services.services"
import { useEffect, useState } from "react"
import NewItemForm from "../GooglePlacesAutocomplete/GooglePlacesAutocomplete"
import uploadServices from "../../services/upload.services"

const CreateStylistForm = ({ setAccessModal }) => {

    const [userData, setUserData] = useState({
        userName: '',
        avatar: '',
        email: '',
        password: '',
        phone: '',
        latitude: '',
        longitude: '',
        gallery: [],
        styles: [],
        services: [],
        aboutMe: '',
        role: 'STYLIST'
    })

    const [loadingImage, setLoadingImage] = useState(false)

    const [styles, setStyles] = useState()
    const [services, setServices] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const loadStylesServices = () => {

        const promises = [
            stylesServices.getAllStyles(),
            servicesServices.getAllServices()
        ]

        Promise
            .all(promises)
            .then(([styles, services]) => {
                setServices(services.data)
                setStyles(styles.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadStylesServices()
    }, [])

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleFileUpload = e => {
        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadOneImage(formData)
            .then(res => {
                setUserData({ ...userData, avatar: res.data.cloudinary_url })
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
                setUserData({ ...userData, gallery: data.cloudinary_urls })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    const handleStyleCheckboxChange = (e) => {
        const { value, checked } = e.target
        let stylesCopy = [...userData.styles]

        if (checked) {

            stylesCopy.push(value)

        } else {

            stylesCopy = stylesCopy.filter(style => style != value)
        }

        setUserData({ ...userData, styles: stylesCopy })
    }

    const handleServiceCheckboxChange = (e) => {
        const { value, checked } = e.target
        let servicesCopy = [...userData.services]

        if (checked) {

            servicesCopy.push(value)

        } else {

            servicesCopy = servicesCopy.filter(service => service != value)
        }

        setUserData({ ...userData, services: servicesCopy })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        authServices
            .signupUser(userData)
            .then(() => {
                setAccessModal(oldModalState => { return { ...oldModalState, content: 'login' } })
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="CreateStylistForm">
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control required type="string" value={userData.userName} name="userName" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control required type="file" name="avatar" onChange={handleFileUpload} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={userData.email} name="email" onChange={handleInputChange} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required value={userData.password} name="password" onChange={handleInputChange} />
                    <Form.Text className="text-muted">Password must be at least 6 characters.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="string" value={userData.phone} name="phone" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Adress</Form.Label>
                    <NewItemForm required setUserData={setUserData} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Previous work</Form.Label>
                    <Form.Control type="file" required name='gallery' onChange={handleImagesUpload} multiple />
                </Form.Group>

                <Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Select the styles you work with</Form.Label>
                        <Col>
                            {isLoading ?
                                <option>Loading options</option>

                                :

                                styles.map(e => {
                                    return (
                                        <Form.Check inline
                                            label={e.style}
                                            checked={userData.styles.includes(e._id)}
                                            value={e._id}
                                            name="styles"
                                            type="checkbox"
                                            id={e._id}
                                            key={e._id}
                                            onChange={handleStyleCheckboxChange}

                                        />)

                                })
                            }


                        </Col>
                    </Form.Group>

                </Row>

                <Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Choose your services</Form.Label>
                        <Col>
                            {isLoading ?
                                <option>Loading options</option>

                                :

                                services.map(e => {
                                    return (
                                        <Form.Check inline
                                            label={e.title}
                                            checked={userData.services.includes(e._id)}
                                            value={e._id}
                                            name="services"
                                            type="checkbox"
                                            id={e._id}
                                            key={e._id}
                                            onChange={handleServiceCheckboxChange}

                                        />)

                                })
                            }

                        </Col>
                    </Form.Group>

                </Row>

                <Form.Group className="mb-5" controlId="comments">
                    <Form.Label>About me</Form.Label>
                    <Form.Control
                        style={{ height: '100px' }}
                        as="textarea"
                        rows={3}
                        required
                        onChange={handleInputChange}
                        value={userData.aboutMe}
                        name="aboutMe"
                        type="text"
                    />
                </Form.Group>

                <Button variant="dark" type="submit" disabled={loadingImage} >
                    {loadingImage ? 'Loading Image...' : 'Sign Up'}
                </Button>

            </Form>
        </div >
    )
}

export default CreateStylistForm
