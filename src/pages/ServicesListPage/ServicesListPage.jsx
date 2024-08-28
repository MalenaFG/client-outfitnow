import { useState } from "react"
import ServiceFilter from "../../components/ServiceFilter/ServiceFilter"
import ServicesSlider from "../../components/ServicesSlider/ServicesSlider"
import './ServicesListPage.css'
import { Container } from "react-bootstrap"

const ServicesListPage = () => {

    const [showSlider, setShowSlider] = useState(true)

    return (
        <div className="ServicesListPage">

            {
                showSlider && <ServicesSlider setShowSlider={setShowSlider} />
            }

            <ServiceFilter setShowSlider={setShowSlider} />
            <Container className="outfitNowInfo">
                <h1 className="slogan mb-4"><i>Your perfect look, anytime, anywhere.</i></h1>
                <p className="description">Discover effortless elegance with OutfitNow.<br />Our platform offers a curated selection of style packs tailored to a range of sophisticated events,<br />from elegant dinners to high-profile red carpet appearances. Explore detailed pack options, connect with top-tier stylists, and effortlessly book your ideal service.<br />OutfitNow ensures that you look impeccable and poised for every occasion.</p>
            </Container>
        </div>
    )
}

export default ServicesListPage