import { Card, Col, Row } from "react-bootstrap"


const ServiceFilteredCard = ({ title, coverImage }) => {

    return (
        <div className="ServiceCard">
            <Card bg="dark" data-bs-theme='dark' style={{ width: '200px', margin: '10px', height: '350px' }}>
                <Row >
                    <Col>
                        <Card.Img style={{ height: '280px', objectFit: 'cover', overflow: 'hidden' }} variant="top" src={coverImage} />
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{title}</Card.Title>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ServiceFilteredCard