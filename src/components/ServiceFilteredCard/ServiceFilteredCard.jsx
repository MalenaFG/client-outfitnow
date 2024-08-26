import { Card, Col, Row } from "react-bootstrap"


const ServiceFilteredCard = ({ title, images }) => {

    return (
        <div className="ServiceCard">
            <Card bg="dark" data-bs-theme='dark' style={{ width: '150px', margin: '10px' }}>
                <Row className="g-0">
                    <Col>
                        <Card.Img style={{ height: '200px' }} variant="top" src={images[0]} />
                    </Col>
                </Row>
                <Row className="g-0">
                    <Col>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ServiceFilteredCard