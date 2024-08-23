import { Button, Card, CardGroup, Modal } from "react-bootstrap"
import CreateBookingForm from "../CreateBookingForm/CreateBookingForm"
import { useState } from "react"
import './PacksCard.css'



const PacksCard = ({ packs }) => {

    const titles = Object.keys(packs)

    const { basic, premium, glam } = packs

    const [showModal, setShowModal] = useState(false)
    const [packsData, setPacksData] = useState(null)

    const handleShowModal = (pack) => {
        setPacksData(pack)
        setShowModal(true)
    }

    return (
        <div className="PackCard">

            <CardGroup >
                <Card>
                    <Card.Body>
                        <Card.Title className="mb-4" >{titles[0].toUpperCase()}</Card.Title>
                        <Button variant="dark" onClick={() => { handleShowModal(titles[0]) }}>Make your reservation</Button>
                        {/* TODO: la ventana modal para hacer la booking solo puede salir si estas logeado si no te tiene que mandar hacer el login */}
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
                        <Button variant="dark" onClick={() => { handleShowModal(titles[1]) }} >Make your reservation</Button>
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
                        <Button variant="dark" onClick={() => { handleShowModal(titles[2]) }}>Make your reservation</Button>

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

                <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} className='bookingModal'>
                    <Modal.Header closeButton className='flex-column'>
                        <Modal.Title> Booking Form </Modal.Title>
                        <Modal.Body className='modalBodyContainer flex-column mb-3'>
                            <CreateBookingForm closeModal={setShowModal} packsData={packsData} />
                        </Modal.Body>
                    </Modal.Header>
                </Modal>

            </CardGroup>

        </div >
    )
}

export default PacksCard