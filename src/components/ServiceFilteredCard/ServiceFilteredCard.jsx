import { Card, Col, Row } from "react-bootstrap"
import './ServiceFilteredCard.css'

const ServiceFilteredCard = ({ title, coverImage }) => {

    return (
        <div className="ServiceFilteredCard">
            <Card bg="dark" data-bs-theme='dark' className="cardService" >
                <Row >
                    <Col>
                        <Card.Img className="cardServiceImg" variant="top" src={coverImage} />
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <Card.Body>
                            <Card.Title className="cardServiceTitle">{title}</Card.Title>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ServiceFilteredCard