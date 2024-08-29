import { Container, Row, Col } from "react-bootstrap"
import './AboutUsPage.css'

const AboutUsPage = () => {
    return (
        <Container className="AboutUsPage d-flex flex-column align-items-center text-center">
            <Row>
                <Col md={{ span: 6 }}>
                    <article className="descriptionCol">
                        <p>We are a team of <strong>full-stack web developers</strong> dedicated to creating complete digital solutions, from backend architecture to the user experience on the frontend. We are passionate about building applications that provide an <strong>optimized and high-quality user experience</strong>.</p>
                        <p>We have led the entire development process of this application, integrating key technologies to ensure its <strong>efficiency</strong> and <strong>performance</strong>:</p>
                        <p>Frontend: We use <strong>React</strong> to create a dynamic interface and <strong>Bootstrap</strong> for a modern, adaptable design. We also integrated several additional dependencies to enhance functionality.</p>
                        <p>Backend: We use <strong>Node.js</strong> for fast performance, along with <strong>Express</strong> to organize routes and controllers. For data management, we use <strong>MongoDB</strong> and <strong>Mongoose</strong> to ensure data integrity.</p>
                        <p>As full-stack developers, we take responsibility for every aspect of development, ensuring that the application operates <strong>efficiently</strong>, <strong>securely</strong>, and is prepared to scale.</p>
                    </article>
                </Col>
                <Col className="imageAndLinksCol" md={{ span: 6 }}>
                    <img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724935529/28082024-IMG_1385_fframm.jpg" alt="Team Picture" />
                    <Row className="mt-4">
                        <Col md={{ span: 6 }} className="d-flex flex-column align-items-center">
                            <h5>Malena Fernández</h5>
                            <div className="social-icons d-flex">
                                <a href="https://github.com/MalenaFG" target="_blank" rel="noopener noreferrer">
                                    <img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724951738/pngwing.com_1_mevskk.png" alt="" />
                                </a>
                                <a href="https://www.linkedin.com/in/malena-fern%C3%A1ndez-giusti-b612652a8/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724951384/pngwing.com_6_n6vlwh.png" alt="" />
                                </a>
                            </div>
                        </Col>
                        <Col md={{ span: 6 }} className="d-flex flex-column align-items-center">
                            <h5>Marta Merchán</h5>

                            <div className="social-icons d-flex">
                                <a href="https://github.com/martamerchan16" target="_blank" rel="noopener noreferrer">
                                    <img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724951738/pngwing.com_1_mevskk.png" alt="" />

                                </a>
                                <a href="https://www.linkedin.com/in/marta-merchan-dos-santos-550b51156/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724950724/pngwing.com_3_m0j0un.png" alt="" />

                                </a>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUsPage
