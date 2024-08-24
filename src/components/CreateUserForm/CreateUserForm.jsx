import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import NewItemForm from '../GooglePlacesAutocomplete/GooglePlacesAutocomplete'
import authServices from '../../services/auth.services'

const CreateUserForm = ({ setAccessModal }) => {

    const [userData, setUserData] = useState({
        userName: '',
        avatar: '',
        email: '',
        password: '',
        phone: '',
        latitude: '',
        longitude: '',
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
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
        <div className="CreateUserForm">
            <Form onSubmit={handleFormSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="string" value={userData.userName} name='userName' onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="string" value={userData.avatar} name='avatar' onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={userData.email} name='email' required onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={userData.password} name='password' required onChange={handleInputChange} />
                    <Form.Text className="text-muted">Password must be at least 6 characters.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="string" value={userData.phone} name='phone' onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <NewItemForm setUserData={setUserData} />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Sign Up
                </Button>

            </Form>
        </div>
    )
}

export default CreateUserForm