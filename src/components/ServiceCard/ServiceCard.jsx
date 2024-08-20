import { Card } from "react-bootstrap"


const ServiceCard = ({ title, images }) => {

    return (
        <div className="ServiceCard">
            <Card bg="dark" data-bs-theme='dark'>
                <Card.Img variant="top" src={images[0]} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ServiceCard