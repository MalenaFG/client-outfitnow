import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap"
import stylesServices from './../../services/styles.services'
import authServices from "../../services/auth.services"
import servicesServices from "../../services/services.services"
import { useEffect, useState } from "react"
import NewItemForm from "../GooglePlacesAutocomplete/GooglePlacesAutocomplete"

const CreateStylistForm = ({ setAccessModal }) => {

    const [userData, setUserData] = useState({
        userName: '',
        avatar: '',
        email: '',
        password: '',
        phone: '',
        latitude: '',
        longitude: '',
        styles: [],
        services: [],
        aboutMe: '',
        role: 'STYLIST'
    })



    const [styles, setStyles] = useState()
    const [services, setServices] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const loadStyles = () => {
        stylesServices
            .getAllStyles()
            .then(({ data }) => {
                setStyles(data)
                services && setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const loadServices = () => {
        servicesServices
            .getAllServices()
            .then(({ data }) => {
                setServices(data)
                styles && setIsLoading(false)
            })
    }

    useEffect(() => {
        loadStyles()
        loadServices()
    }, [])

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
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
                    <Form.Control type="string" value={userData.userName} name="userName" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="string" value={userData.avatar} name="avatar" onChange={handleInputChange} />
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
                    <NewItemForm setUserData={setUserData} />
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


                <FloatingLabel className="mb-5" controlId="floatingTextarea2" label="Comments">
                    <Form.Label>About me</Form.Label>
                    <Form.Control
                        type="string"
                        value={userData.aboutMe}
                        name="aboutMe"
                        onChange={handleInputChange}
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>





                <Button variant="dark" type="submit">
                    Sign Up
                </Button>


            </Form>
        </div >
    )
}

export default CreateStylistForm
