import { Button, Col, Form, Row } from "react-bootstrap"
import stylesServices from './../../services/styles.services'
import authServices from "../../services/auth.services"
import servicesServices from "../../services/services.services"
import { useEffect, useState } from "react"
import NewItemForm from "../GooglePlacesAutocomplete/GooglePlacesAutocomplete"
import uploadServices from "../../services/upload.services"
import './CreateStylistForm.css'

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

    const handleGalleryImages = index => {
        const imagesCopy = [...userData.gallery]
        imagesCopy.splice(index, 1)

        setUserData({ ...userData, gallery: imagesCopy })
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
            <Form className="form" onSubmit={handleFormSubmit}>
                <Row>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Avatar</Form.Label>
                            <Form.Control className="mb-3" required type="file" name="avatar" onChange={handleFileUpload} />
                            {userData.avatar.length > 0 &&
                                <img className='avatarImage' src={userData.avatar} alt="user avatar" />}
                        </Form.Group>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Previous work</Form.Label>
                            <Form.Control className="mb-3" type="file" required name='gallery' onChange={handleImagesUpload} multiple />
                            <div className="galleryPreview">
                                {
                                    userData.gallery.map((e, index) => {
                                        return (
                                            <div className="imagesContainer" key={e}>
                                                <img className="galleryImage mb-2" onClick={() => handleGalleryImages(index)} src={e} />
                                                <img
                                                    className="deleteIcon"
                                                    src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724515088/eliminar_kt0l8l.png"
                                                    alt="deleteIcon" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control required type="string" value={userData.userName} name="userName" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={userData.email} name="email" onChange={handleInputChange} required />
                        </Form.Group>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required value={userData.password} name="password" onChange={handleInputChange} />
                            <Form.Text className="text-muted">Password must be at least 6 characters.</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="string" value={userData.phone} name="phone" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Adress</Form.Label>
                            <NewItemForm required setUserData={setUserData} />
                        </Form.Group>
                    </Col>
                    <Col md={{ span: 6 }}>
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
                    </Col>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Select the styles you work with</Form.Label>
                            <br />

                            {isLoading ?
                                <option>Loading options</option>

                                :

                                <Row>
                                    {
                                        styles.map(e => {
                                            return (
                                                <Col md={{ span: 6 }}>
                                                    <Form.Check inline
                                                        label={e.style}
                                                        checked={userData.styles.includes(e._id)}
                                                        value={e._id}
                                                        name="styles"
                                                        type="checkbox"
                                                        id={e._id}
                                                        key={e._id}
                                                        onChange={handleStyleCheckboxChange}

                                                    />
                                                </Col>
                                            )

                                        })
                                    }
                                </Row>
                            }
                        </Form.Group>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Choose your services</Form.Label>
                            <br />
                            {isLoading ?
                                <option>Loading options</option>

                                :
                                <Row>

                                    {
                                        services.map(e => {
                                            return (
                                                <Col md={{ span: 6 }}>
                                                    <Form.Check inline
                                                        label={e.title}
                                                        checked={userData.services.includes(e._id)}
                                                        value={e._id}
                                                        name="services"
                                                        type="checkbox"
                                                        id={e._id}
                                                        key={e._id}
                                                        onChange={handleServiceCheckboxChange}
                                                    />
                                                </Col>
                                            )

                                        })}
                                </Row>
                            }

                        </Form.Group>
                    </Col>
                    <div className="submitButtonContainer">
                        <Button className='submitButton' size="sm" variant="dark" type="submit" disabled={loadingImage} >
                            {loadingImage ? 'Loading Image...' : 'Sign Up'}
                        </Button>
                    </div>

                </Row>



            </Form>
        </div >
    )
}

export default CreateStylistForm
