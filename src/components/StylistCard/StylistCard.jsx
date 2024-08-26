import './StylistCard.css'
import { Button, Card, Col, Image, ListGroup } from "react-bootstrap"
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const StylistCard = ({ userName, avatar, styles, services, _id: stylistId, selectedStylist, setSelectedStylist }) => {

    const { loggedUser, logoutUser } = useContext(AuthContext)

    const handleSelectStylist = (stylistId) => {
        setSelectedStylist(stylistId)
    }

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



                    <Card.Text as={Link} to={`/stylists/${stylistId}`} className='learnMore'>Learn more</Card.Text>



                    <Card className='mb-3'>

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
                            <ListGroup.Item className='favoriteStyles '>
                                <b> Favorite styles:</b>
                                {
                                    styles.map(e => {
                                        const { style } = e
                                        return ` ${style}`
                                    }).toString()
                                }
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>


                    {
                        loggedUser &&
                        <Button onClick={() => handleSelectStylist(stylistId)} variant='dark'>Choose <b>{userName}</b> as your stylist</Button>

                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default StylistCard