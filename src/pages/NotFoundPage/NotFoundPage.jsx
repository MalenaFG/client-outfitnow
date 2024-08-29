import { Button, Container } from 'react-bootstrap'
import './NotFoundPage.css'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {

    return (
        <div className="NotFoundPage d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <Container className="text-center">
                <h1 className="Error">Error 404</h1>
                <p className="Text">Not Found Page</p>
                <Link to="/"><Button variant="dark">Back to Home</Button></Link>
            </Container>
        </div>
    )
}

export default NotFoundPage