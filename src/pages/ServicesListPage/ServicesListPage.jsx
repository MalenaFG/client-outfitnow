import { useEffect, useState } from "react"
import ServiceFilter from "../../components/ServiceFilter/ServiceFilter"
import ServicesSlider from "../../components/ServicesSlider/ServicesSlider"
import './ServicesListPage.css'
import { Container, Row } from "react-bootstrap"
import StylistPreviousWorks from "../../components/StylistPreviousWorks/StylistPreviousWorks"
import userServices from "../../services/user.services"
import Loader from "../../components/Loader/Loader"

const ServicesListPage = () => {

    const [showSlider, setShowSlider] = useState(true)
    const [stylistsData, setStylistsData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => loadstylistData, [])

    const loadstylistData = () => {
        userServices
            .getUsersByRol('STYLIST', 4)
            .then(({ data }) => {
                setStylistsData(data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }

    return (
        <div className="ServicesListPage">

            {
                showSlider && <ServicesSlider setShowSlider={setShowSlider} />
            }

            <ServiceFilter setShowSlider={setShowSlider} />

            {isLoading ? <Loader /> :
                <Container >
                    <section className="outfitNowInfo">
                        <h1 className="slogan mb-4"><i>Your perfect look, anytime, anywhere.</i></h1>

                        <p className="description mb-5">Discover effortless elegance with OutfitNow. Our platform offers a curated selection of style packs tailored to a range of sophisticated events, from elegant dinners to high-profile red carpet appearances. Explore detailed pack options, connect with top-tier stylists, and effortlessly book your ideal service. OutfitNow ensures that you look impeccable and poised for every occasion.
                        </p>
                    </section>

                    <section>
                        {/* <h2 className="slogan mb-4">Unveil the city's finest stylists with OutfitNow.</h2> */}
                        <Row>
                            {stylistsData.map(stylist => <StylistPreviousWorks {...stylist} />)}
                        </Row>
                    </section>
                </Container>
            }
        </div>
    )
}

export default ServicesListPage