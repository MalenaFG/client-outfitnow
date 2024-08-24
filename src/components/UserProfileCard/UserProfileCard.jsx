import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import userServices from "../../services/user.services"
import './UserProfileCard.css'
import UserMap from "../UserMap/UserMap"

const UserProfileCard = () => {

    const { userId } = useParams()

    const [userData, setUserData] = useState()
    console.log(userData)
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
                <Card style={{ marginTop: '80px' }}>
                    <div className="d-flex">
                        <Card.Img variant="top" src={userData.avatar} />
                        <Card.Body>
                            <ul>
                                <li>{userData.userName} </li>
                                <li>{userData.email} </li>
                                <li>{userData.phone} </li>

                            </ul>
                        </Card.Body>

                    </div>
                    <UserMap location={userData.location.coordinates} />
                    <Button variant="dark">Edit profile</Button>
                </Card>
            }

        </div>
    )
}

export default UserProfileCard