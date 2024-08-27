import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
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
            .then(({ data }) => setUserData(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadUserById()
    }, [])

    return (
        <div className="UserProfileCard">
            {
                userData &&

                < Card style={{ marginTop: '80px' }}>
                    <div className="d-flex">
                        <Card.Img variant="top" src={userData.avatar} />
                        <Card.Body>
                            <div>
                                <h6>Contact:</h6>
                                <ul>
                                    <li>{userData.userName} </li>
                                    <li>{userData.email} </li>
                                    <li>{userData.phone} </li>

                                </ul>
                            </div>

                            {userData.services.length !== 0 &&
                                (<div>
                                    <h6>Services:</h6>
                                    <ul>
                                        {userData.services.map(elm => {
                                            return (
                                                <li key={elm._id}>{elm.title}</li>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>)
                            }

                            {userData.styles.length !== 0 &&
                                <div>
                                    <h6>Styles:</h6>
                                    <ul>
                                        {userData.styles.map(elm => {
                                            return (
                                                <li key={elm._id}>{elm.style}</li>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>}

                            {userData.aboutMe &&
                                <div>
                                    <h6>About me:</h6>
                                    <p>
                                        {userData.aboutMe}
                                    </p>
                                </div>
                            }
                        </Card.Body>

                    </div>
                    <UserMap location={userData.location.coordinates} />
                </Card>
            }

        </div >
    )
}

export default UserProfileCard