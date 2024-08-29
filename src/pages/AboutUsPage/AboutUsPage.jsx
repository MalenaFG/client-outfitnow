import { Container, Row, Col } from "react-bootstrap"
import './AboutUsPage.css'

const AboutUsPage = () => {
    return (
        <Container className="AboutUsPage d-flex flex-column align-items-center text-center">
            <p className="description">
                Welcome to our About Us page! We are passionate about technology and love to create amazing projects together.
            </p>
            <img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724935529/28082024-IMG_1385_fframm.jpg" alt="Team Picture" />
            <Row className="mt-4">
                <Col xs={6} className="d-flex flex-column align-items-center">
                    <h5>John Doe</h5>
                    <div className="social-icons">
                        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </Col>
                <Col xs={6} className="d-flex flex-column align-items-center">
                    <h5>Jane Smith</h5>
                    <div className="social-icons">
                        <a href="https://github.com/janesmith" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/janesmith" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUsPage
