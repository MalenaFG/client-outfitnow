import './StylistCardWithoutButton.css'
import { Card, Col, Row } from "react-bootstrap"
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const StylistCardWithoutButton = ({ userName, avatar, styles, _id: stylistId, selectedStylist, setSelectedStylist }) => {

    const handleSelectStylist = (stylistId) => {
        setSelectedStylist(stylistId)
    }

    const isSelected = selectedStylist === stylistId

    return (
        <Col md={{ span: 3 }} className="StylistCard">
            <Link to={`/stylists/${stylistId}`}>
                <Card className='transformCard'>
                    <div className={`${isSelected ? 'selectedCard' : 'cardContent'}`}>

                        <Card.Title className=' mb-0 '>
                            <b className='stylistName'>{userName.toUpperCase()}</b>
                        </Card.Title>

                        <Card.Body>
                            <div className='avatarImage'>
                                <img src={avatar} />
                            </div>

                            <div className="list-group-flush">

                                <b> Favorite styles:</b>
                                <div className='favoriteStyles '>
                                    {
                                        styles.map(e => {
                                            const { style } = e
                                            return ` ${style}`
                                        }).toString()
                                    }
                                </div>

                            </div>

                        </Card.Body >
                    </div >
                </Card >
            </Link>
        </Col >
    )
}

export default StylistCardWithoutButton