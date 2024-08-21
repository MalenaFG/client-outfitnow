import { Card } from "react-bootstrap"


const ServiceCard = ({ title, images }) => {

    return (
        <div className="ServiceCard">
            <Card bg="dark" data-bs-theme='dark' style={{ width: '350px' }}>
                <Card.Img style={{ height: '500px' }} variant="top" src={images[0]} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ServiceCard