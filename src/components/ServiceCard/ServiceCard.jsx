import { Card } from "react-bootstrap"
import './ServiceCard.css'


const ServiceCard = ({ title, coverImage }) => {

    return (
        <Card className="ServiceCard" bg="dark" data-bs-theme='dark' style={{ width: '350px' }}>
            <div className="imageContainer">
                <Card.Img className="coverImage" style={{ height: '500px' }} variant="top" src={coverImage} />
                <div className="overlay">
                    <Card.Title>{title}</Card.Title>
                </div>
            </div>
        </Card>
    )
}

export default ServiceCard