import './StylistCard.css'
import { Card, Col, Image, ListGroup } from "react-bootstrap"

const StylistCard = ({ userName, avatar, styles, services, _id }) => {

    return (
        <Col md={{ span: 3 }} className="StylistCard">
            <Card>
                <Card.Body>
                    <ListGroup className="mb-3">
                        <ListGroup.Item >
                            <Card.Title className=' mb-0 '>
                                <b>{userName.toUpperCase()}</b>
                            </Card.Title>
                        </ListGroup.Item>
                    </ListGroup>
                    <Image src={avatar} roundedCircle className="mb-3" />
                    <ListGroup className="list-group-flush">

                        <ListGroup.Item className="servicesList" >
                            <b> My services:</b>
                            <ul className='mb-0'>
                                {
                                    services.map(({ title }) => {
                                        return (
                                            <li key={title}>{title}</li>
                                        )
                                    })
                                }
                            </ul>
                        </ListGroup.Item>
                        <ListGroup.Item className='favoriteStyles'>
                            <b> Favorite styles:</b>
                            {
                                styles.map(e => {
                                    const { style } = e
                                    return ` ${style}`
                                }).toString()
                            }
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default StylistCard