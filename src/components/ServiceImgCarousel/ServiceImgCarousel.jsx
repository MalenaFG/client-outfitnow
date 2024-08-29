import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './ServiceImgCarousel.css'

const ServiceImgCarousel = ({ images, title }) => {

    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    return (
        <div className="carouselContainer">
            <Carousel className='ServiceImgCarousel' activeIndex={index} onSelect={handleSelect} interval={2000}>

                {
                    images.map((elm) => {
                        return (
                            <Carousel.Item key={elm}>
                                <Carousel.Caption>
                                    <h1 className='serviceTitle'>{title}</h1>
                                </Carousel.Caption>

                                <img src={elm} alt="" />
                            </Carousel.Item>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default ServiceImgCarousel