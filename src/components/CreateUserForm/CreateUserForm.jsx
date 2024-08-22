import { Form } from 'react-bootstrap'

const CreateUserForm = () => {

    const [userData, setUserData] = useState({
        userName: '',
        avatar: '',
        email: '',
        password: '',
        phone: '',
        latitude: '',
        longitude: '',
    })
    const [isLoading, setIsLoading] = useState(true)

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        authServices
            .signupUser(userData)
            .then(() => Navigate('./services'))
            .catch(err => console.log(err))
    }

    return (
        <div className="CreateUserForm">
            <Form onSubmit={handleFormSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="string" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="string" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required onChange={handleInputChange} />
                    <Form.Text className="text-muted">Password must be at least 6 characters.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="string" onChange={handleInputChange} />
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