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
                            <Col md={{ span: 3 }} className="stylistInfo">
                                <h1>{userName}</h1>
                                <Image src={avatar} />
                                <p>{aboutMe}</p>
                            </Col>

                            <Col md={{ span: 4 }}>
                                <section className="servicesSection">
                                    <h2 className="mb-0">My services:</h2>
                                    <hr />
                                    {services.map(e => {
                                        return (
                                            <article key={e._id}>
                                                <h4>{e.title}</h4>
                                                <ul>
                                                    <li>Basic: {e.packs.basic.price}€</li>
                                                    <li>Premium: {e.packs.premium.price}€</li>
                                                    <li>Glam: {e.packs.glam.price}€</li>
                                                </ul>
                                            </article>
                                        )
                                    })
                                    }
                                </section>
                                <br />
                                <section className="stylesSection">
                                    <h3>My favorite styles:</h3>
                                    {styles.map(e => {
                                        const { style } = e
                                        return (
                                            ` ${style}`
                                        )
                                    }).toString()
                                    }
                                </section>
                            </Col>
                            <Col>
                                <StylistImagesCarousel {...userData} />
                            </Col>
                        </Row>
                    </section>

            }
        </Container>

    )
}

export default StylistDetailsPage