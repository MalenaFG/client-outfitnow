import './StylistCard.css'
import { Card, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'

const StylistCard = ({ userName, avatar, styles, _id: stylistId, selectedStylist, setSelectedStylist }) => {

    const handleSelectStylist = stylistId => setSelectedStylist(stylistId)

    const isSelected = selectedStylist === stylistId

    return (
        <Col md={{ span: 3 }} className="StylistCard">
            <Card onClick={() => handleSelectStylist(stylistId)} className='transformCard '>

                <div className={`${isSelected ? 'selectedCard' : 'cardContent'}`}>

                    <Card.Title className=' mb-0 '>
                        <b className='stylistName'>{userName.toUpperCase()}</b>
                    </Card.Title>

                    <Card.Body >
                        <div className='avatarImage'>
                            <img src={avatar} />
                        </div>

                        <div className="learnMoreContainer">
                            <Card.Text as={Link} to={`/stylists/${stylistId}`} className='learnMore'>Learn more</Card.Text>
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
        </Col >
    )
}

export default StylistCard