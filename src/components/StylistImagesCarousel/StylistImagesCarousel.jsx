import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './StylistImagesCarousel.css'

const StylistImagesCarousel = ({ gallery }) => {

    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    // TODO MALENA: COMPORIBAR SI ESTO FUNCIONA
    return (
        <div className="carouselContainer">
            <Carousel className='StylistImagesCarousel' activeIndex={index} onSelect={handleSelect} interval={5000}>

                {
                    gallery.map((elm) => {
                        return (

                            <Carousel.Item>
                                <img src={elm} alt="" />
                            </Carousel.Item>

                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default StylistImagesCarousel