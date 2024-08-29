import { useParams } from "react-router-dom"
import userServices from "../../services/user.services"
import { useEffect, useState } from "react"
import { Col, Container, Image, Row, Spinner } from "react-bootstrap"
import './StylistDetailsPage.css'
import ServiceImgCarousel from "../../components/ServiceImgCarousel/ServiceImgCarousel"
import StylistImagesCarousel from "../../components/StylistImagesCarousel/StylistImagesCarousel"
import Loader from "../../components/Loader/Loader"


const StylistDetailsPage = () => {
    const [userData, setUserData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { stylistId } = useParams()

    useEffect(() => loadUserData(), [])

    const loadUserData = () => {

        userServices
            .getOneStylist(stylistId)
            .then(({ data }) => {
                setUserData(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container className="StylistDetailsPage">
            {
                isLoading ?
                    <Loader />
                    :
                    <section >
                        <Row>
                            <Col md={{ span: 4 }} className="stylistInfo">
                                <div className="sectionTitle">
                                    <h1>{userData.userName}</h1>
                                </div>
                                <hr />
                                <Image className='avatar mb-3' src={userData.avatar} />
                                <p>{userData.aboutMe}</p>
                            </Col>

                            <Col md={{ span: 4 }}>
                                <section className="stylistInfo servicesInfo">
                                    <div className="sectionTitle">
                                        <h2>My services</h2>
                                    </div>
                                    <hr />
                                    <Row>
                                        {userData.services.map(e => {
                                            return (
                                                <Col md={{ span: 6 }} key={e._id}>

                                                    <h5><u>{e.title}</u></h5>

                                                    <ul>
                                                        <li>Basic: {e.packs.basic.price}€</li>
                                                        <li>Premium: {e.packs.premium.price}€</li>
                                                        <li>Glam: {e.packs.glam.price}€</li>
                                                    </ul>
                                                </Col>)
                                        })}
                                    </Row>
                                </section>
                                <br />
                                <section className="stylistInfo">
                                    <div className="sectionTitle">
                                        <h4>My favorite styles</h4>
                                    </div>
                                    <hr />
                                    <div className="sectionTitle">
                                        {userData.styles.map(e => {

                                            const { style } = e

                                            return ` ${style}`
                                        }).toString()
                                        }</div>
                                </section>
                            </Col>

                            <Col>
                                <div className="stylistInfo carouselGallery">
                                    <StylistImagesCarousel {...userData} />
                                </div>
                            </Col>
                        </Row>
                    </section>

            }
        </Container>

    )
}

export default StylistDetailsPage