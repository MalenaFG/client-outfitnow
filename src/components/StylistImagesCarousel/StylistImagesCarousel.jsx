import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './StylistImagesCarousel.css'

const StylistImagesCarousel = ({ gallery }) => {

    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <div className="carouselContainer">
            <Carousel className='StylistImagesCarousel' activeIndex={index} onSelect={handleSelect} interval={2000}>
                {
                    gallery.map((elm) => {
                        return (
                            <Carousel.Item>
                                <img className='imagesCarousel' src={elm} alt="Previous work image" />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default StylistImagesCarousel