import { Button, Col, Form, Row } from "react-bootstrap"
import stylesServices from './../../services/styles.services'
import authServices from "../../services/auth.services"
import { useEffect, useState } from "react"
import NewItemForm from "../GooglePlacesAutocomplete/GooglePlacesAutocomplete"
import { Navigate } from "react-router-dom"

const CreateStylistForm = () => {

    const [styles, setStyles] = useState()
    const [userData, setUserData] = useState({
        userName: '',
        avatar: '',
        email: '',
        password: '',
        phone: '',
        latitude: '',
        longitude: '',
        styles: [],
        aboutMe: '',
        role: 'STYLIST'

    })
    const [isLoading, setIsLoading] = useState(true)

    const loadStyles = () => {
        stylesServices
            .getAllStyles()
            .then(({ data }) => {
                setStyles(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handlecheckboxChange = (e) => {
        const { value, checked } = e.target
        let stylesCopy = [...userData.styles]

        if (checked) {

            stylesCopy.push(value)

        } else {

            stylesCopy = stylesCopy.filter(style => style != value)
        }


        setUserData({ ...userData, styles: stylesCopy })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        authServices
            .signupUser(userData)
            .then(() => Navigate('./services'))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadStyles()
    }, [])


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

                <Row className="mb-3">
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
                                            onChange={handlecheckboxChange}
                                        />)

                                })
                            }


                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-5">
                        <Form.Label>About me</Form.Label>
                        <Form.Control type="string" value={userData.aboutMe} name="aboutMe" onChange={handleInputChange} />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Sign Up
                    </Button>
                </Row>

            </Form>
        </div>
    )
}

export default CreateStylistForm
