import './MyProfilePage.css'
import bookingsServices from './../../services/bookings.services'
import userServices from './../../services/user.services'

import { Accordion, Row, Col, Card, Button, Container } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MyProfilePage = () => {

    const { userId } = useParams()

    const [userData, setUserData] = useState()
    const [bookingData, setBookingData] = useState([])

    const loadBookingsByUser = () => {

        bookingsServices

            .getBookingsByUser(userId)
            .then(({ data }) => setBookingData(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBookingsByUser()
    }, [])

    return (
        <div className="MyProfilePage">
            <Container>
                <Row>
                    {/* TODO: SACAR LA CARD Y EL ACORDEON A UN COMPONENTE APARTE Y HACER UN MAP COMO EN STYLISTLIST */}
                    <Col>
                        <Card style={{ marginTop: '80px' }}>
                            <Card.Img variant="top" src='' />
                            <Card.Body>
                                <Card.Title>user name</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Edit profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Accordion defaultActiveKey="0" style={{ marginTop: '80px' }}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{bookingData.pack}</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default MyProfilePage