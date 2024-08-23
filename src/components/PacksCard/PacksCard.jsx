import { Button, Card, CardGroup, Modal } from "react-bootstrap"
import CreateBookingForm from "../CreateBookingForm/CreateBookingForm"
import { useState } from "react"
import './PacksCard.css'



const PacksCard = ({ packs }) => {

    const titles = Object.keys(packs)

    const { basic, premium, glam } = packs


    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(true)
    }

    return (
        <div className="PackCard">

            <CardGroup >

                <Card>
                    <Card.Body>
                        <Card.Title className="mb-4" >{titles[0].toUpperCase()}</Card.Title>
                        <Button variant="dark" onClick={handleShowModal}>Make your reservation</Button>
                        <hr />
                        <ul className="packDetailsList" >
                            <li>{basic.price}€</li>
                            <li>Outfits included: {basic.outfitsIncluded} </li>
                            {basic.homeService ?
                                <li>Provides stylist home service</li>
                                :
                                <li>Delivery service</li>}
                        </ul>
                        <hr />
                        <Card.Text>
                            {basic.description}
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title className="mb-4">{titles[1].toUpperCase()}</Card.Title>
                        <Button variant="dark">Make your reservation</Button>
                        <hr />
                        <ul className="packDetailsList">
                            <li>{premium.price}€</li>
                            <li>Outfits included: {premium.outfitsIncluded} </li>
                            {premium.homeService ?
                                <li>Provides stylist home service</li>
                                :
                                <li>Delivery service</li>}
                        </ul>
                        <hr />
                        <Card.Text>
                            {premium.description}
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title className="mb-4">{titles[2].toUpperCase()}</Card.Title>
                        <Button variant="dark">Make your reservation</Button>
                        <hr />
                        <ul className="packDetailsList" >
                            <li>{glam.price}€</li>
                            <li>Outfits included: {glam.outfitsIncluded} </li>
                            {glam.homeService ?
                                <li>Provides stylist home service</li>
                                :
                                <li>Delivery service</li>}
                        </ul>
                        <hr />
                        <Card.Text>
                            {glam.description}
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Modal show={showModal} onHide={() => setShowModal(false)} className='bookingModal'>
                    <Modal.Header closeButton className='flex-column'>
                        <Modal.Title> Booking Form </Modal.Title>
                        <Modal.Body className='modalBodyContainer flex-column mb-3'>
                            <CreateBookingForm />
                        </Modal.Body>
                    </Modal.Header>
                </Modal>

            </CardGroup>

        </div>
    )
}

export default PacksCard