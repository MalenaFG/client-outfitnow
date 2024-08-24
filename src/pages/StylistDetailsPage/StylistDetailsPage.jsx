import { useParams } from "react-router-dom"
import userServices from "../../services/user.services"
import { useEffect, useState } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import './StylistDetailsPage.css'


const StylistDetailsPage = () => {
    const [userData, setUserData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { stylistId } = useParams()

    const loadUserData = () => {
        userServices
            .getOneUser(stylistId)
            .then(({ data }) => {
                setUserData(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadUserData()
    }, [])

    //const { userName, avatar, phone, styles, services, gallery, aboutMe, location } = userData
    return (
        <Container className="StylistDetailsPage">
            {
                isLoading ?
                    <p>Loading info</p>
                    :

                    <Row>
                        <Col md={{ span: 6 }}>
                            <h1>{userData.userName}</h1>

                            <Image src={userData.avatar} />
                        </Col>
                    </Row>

            }
        </Container>

    )
}

export default StylistDetailsPage