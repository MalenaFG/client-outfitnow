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
            <Carousel className='ServiceImgCarousel' activeIndex={index} onSelect={handleSelect} interval={5000}>

                {
                    images.map((elm) => {
                        return (

                            <Carousel.Item>
                                {/* <Carousel.Caption>
                                    <h1>{title}</h1>
                                </Carousel.Caption> */}
                                <img src={elm.images} alt="" />
                            </Carousel.Item>

                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default ServiceImgCarousel