import './StylistCard.css'
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap"
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
            <Card className='cardContent'>
                <Card.Title className=' mb-0 '>
                    <b className='stylistName'>{userName.toUpperCase()}</b>
                </Card.Title>

                <Card.Body>
                    <div className='imgContainer'>
                        <Card.Img src={avatar} className="avatarImage " />
                    </div>

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
                                <br />
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
                        <Button onClick={() => handleSelectStylist(stylistId)} variant='dark'>Choose <b>{userName}</b></Button>
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default StylistCard