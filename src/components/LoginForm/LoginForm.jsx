import { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import authServices from '../../services/auth.services'
import { AuthContext } from '../../contexts/auth.context'

const LoginForm = ({ showAccessModal, closeModal }) => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const { loginUser, authenticateUser } = useContext(AuthContext)

    const handleInputChange = event => {
        const { value, name } = event.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        loginUser(loginData)
        closeModal()
    }

    return (
        <div className="LoginForm">
            <Form className='form' onSubmit={handleSubmit}>


                <Form.Group controlId='email' >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required value={loginData.email} onChange={handleInputChange} name='email' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required value={loginData.password} onChange={handleInputChange} name='password' />
                    <Form.Text className="text-muted">Password must be at least 6 characters.</Form.Text>
                </Form.Group>

                <div className="d-grid">
                    <Button variant='dark' type='submit' className="mt-2" >Submit</Button>
                </div>

                <div className="d-grid">

                    <Form.Text className="pt-4 mb-2">Don't have an account yet?</Form.Text>

                    <Button variant="outline-dark" size="sm" onClick={() => showAccessModal('signup')}>
                        SignUp
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm