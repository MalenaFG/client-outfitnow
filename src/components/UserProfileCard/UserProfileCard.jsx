import { useEffect, useState } from "react"
import { Button, Card, CardText, Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import userServices from "../../services/user.services"
import './UserProfileCard.css'
import UserMap from "../UserMap/UserMap"

const UserProfileCard = () => {

    const { userId } = useParams()

    const [userData, setUserData] = useState()

    const loadUserById = () => {

        userServices
            .getOneUser(userId)
            .then(({ data }) => {
                setUserData(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadUserById()
    }, [])

    return (
        <div className="UserProfileCard">
            {
                userData &&

                <>
                    <Card>
                        <div className="cardUserContainer">
                            <Row>
                                <Col className="d-flex">
                                    <Card.Img src={userData.avatar} />
                                    <CardText className="ms-3">
                                        <div>
                                            <h4>{userData.userName}</h4>
                                            <p>{userData.email} </p>
                                            <p>{userData.phone}</p>
                                        </div>
                                    </CardText>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card.Body>
                                        <Row>

                                            <Col className="d-flex">
                                                {
                                                    userData.services.length !== 0 &&
                                                    <div>
                                                        <h5>Services:</h5>
                                                        <ul>
                                                            {
                                                                userData.services.map(elm => <li key={elm._id}>{elm.title}</li>)
                                                            }
                                                        </ul>
                                                    </div>
                                                }

                                                {userData.styles.length !== 0 &&
                                                    <div className="ms-5">
                                                        <h5>Styles:</h5>
                                                        <ul>
                                                            {userData.styles.map(elm => {
                                                                return (
                                                                    <li key={elm._id}>{elm.style}</li>
                                                                )
                                                            })
                                                            }
                                                        </ul>
                                                    </div>}
                                            </Col>
                                        </Row>

                                        {
                                            userData.aboutMe &&
                                            <div>
                                                <h5>About me:</h5>
                                                <p>
                                                    {userData.aboutMe}
                                                </p>
                                            </div>
                                        }
                                    </Card.Body>

                                </Col>
                            </Row>
                        </div>
                    </Card>

                    <div className="userMapContainer">
                        <UserMap location={userData.location.coordinates} />
                    </div>
                </>


            }


        </div >
    )
}

export default UserProfileCard