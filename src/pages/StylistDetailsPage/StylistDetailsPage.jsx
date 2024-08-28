import { useParams } from "react-router-dom"
import userServices from "../../services/user.services"
import { useEffect, useState } from "react"
import { Col, Container, Image, Row, Spinner } from "react-bootstrap"
import './StylistDetailsPage.css'
import ServiceImgCarousel from "../../components/ServiceImgCarousel/ServiceImgCarousel"
import StylistImagesCarousel from "../../components/StylistImagesCarousel/StylistImagesCarousel"


const StylistDetailsPage = () => {
    const [userData, setUserData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { stylistId } = useParams()

    const loadUserData = () => {
        userServices
            .getOneStylist(stylistId)
            .then(({ data }) => {
                setUserData(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadUserData()
    }, [])

    const { userName, avatar, styles, services, gallery, aboutMe, location } = userData || {}

    return (
        <Container className="StylistDetailsPage">
            {
                isLoading ?
                    <Spinner />
                    :
                    <section >
                        <Row>
                            <Col md={{ span: 4 }} className="stylistInfo">
                                <div className="sectionTitle">
                                    <h1>{userName}</h1>
                                </div>
                                <hr />
                                <Image className='avatar mb-3' src={avatar} />
                                <p>{aboutMe}</p>
                            </Col>

                            <Col md={{ span: 4 }}>
                                <section className="stylistInfo servicesInfo">
                                    <div className="sectionTitle">
                                        <h2>My services</h2>
                                    </div>
                                    <hr />
                                    <Row>
                                        {services.map(e => {
                                            return (
                                                <Col md={{ span: 6 }} key={e._id}>
                                                    <h5><u>{e.title}</u></h5>
                                                    <ul>
                                                        <li>Basic: {e.packs.basic.price}€</li>
                                                        <li>Premium: {e.packs.premium.price}€</li>
                                                        <li>Glam: {e.packs.glam.price}€</li>
                                                    </ul>
                                                </Col>
                                            )
                                        })
                                        }
                                    </Row>
                                </section>
                                <br />
                                <section className="stylistInfo">
                                    <div className="sectionTitle">
                                        <h4>My favorite styles</h4>
                                    </div>
                                    <hr />
                                    <div className="sectionTitle">
                                        {styles.map(e => {
                                            const { style } = e
                                            return (
                                                ` ${style}`
                                            )
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