import { Button, Card, CardGroup, Modal } from "react-bootstrap"
import CreateBookingForm from "../CreateBookingForm/CreateBookingForm"
import { useContext, useState } from "react"
import './PacksCard.css'
import { AuthContext } from '../../contexts/auth.context'

const PacksCard = ({ packs, selectedStylist }) => {

    const [basicPackTitle, premiumPackTitle, glamPackTitle] = Object.keys(packs)


    const { basic, premium, glam } = packs

    const { loggedUser, logoutUser } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false)
    const [packsData, setPacksData] = useState(null)

    const handleShowModal = (pack) => {
        setPacksData(pack)
        setShowModal(true)
    }

    return (
        <div className="PackCard">
            {loggedUser && <h1 className="choosePack mb-5">Choose your pack:</h1>}
            <CardGroup >
                <Card>
                    <Card.Body>
                        <Card.Title className="mb-4" ><b>{basicPackTitle.toUpperCase()}</b></Card.Title>
                        {
                            loggedUser && <Button variant="dark" onClick={() => { handleShowModal(basicPackTitle) }}>
                                Make your reservation
                            </Button>
                        }
                        {/* TODO: si no has elegido un estilista no debería poder hacer la reserva */}
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
                        <Card.Title className="mb-4"><b>{premiumPackTitle.toUpperCase()}</b></Card.Title>
                        {
                            loggedUser && <Button variant="dark" onClick={() => { handleShowModal(premiumPackTitle) }} >
                                Make your reservation
                            </Button>}
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
                        <Card.Title className="mb-4"><b>{glamPackTitle.toUpperCase()}</b></Card.Title>
                        {
                            loggedUser && <Button variant="dark" onClick={() => { handleShowModal(glamPackTitle) }}>
                                Make your reservation
                            </Button>}

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
                            <CreateBookingForm closeModal={setShowModal} packsData={packsData} selectedStylist={selectedStylist} />
                        </Modal.Body>
                    </Modal.Header>
                </Modal>

            </CardGroup>

        </div >
    )
}

export default PacksCard