import { Form } from 'react-bootstrap'

const CreateUserForm = () => {

    return (
        <div className="CreateUserForm">
            <Form>

                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="string" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="string" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required />
                    <Form.Text className="text-muted">Password must be at least 6 characters.</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="string" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Direction</Form.Label>
                    <Form.Control type="string" />
                </Form.Group>

            </Form>
        </div>
    )
}

export default CreateUserForm