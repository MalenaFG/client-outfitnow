import { Card } from "react-bootstrap"


const ServiceCard = ({ title, coverImage }) => {

    // TODO DE MALENA: he añadido un campo CoverImage al modelo para que haya una imagen horizontal que sea la portada de la card, 
    // hay que implementarlo aquí cuando podamos editar los servicios que ya tenemos

    return (
        <div className="ServiceCard">
            <Card bg="dark" data-bs-theme='dark' style={{ width: '350px' }}>
                <Card.Img style={{ height: '500px' }} variant="top" src={coverImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ServiceCard