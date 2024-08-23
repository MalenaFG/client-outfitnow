import { Button, Card, CardGroup, Container, Modal } from "react-bootstrap"
import CreateBookingForm from "../CreateBookingForm/CreateBookingForm"
import { useState } from "react"



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
            <Container>
                <CardGroup className="mb-4">

                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-4" >{titles[0].toUpperCase()}</Card.Title>
                            <Button variant="dark" onClick={() => { handleShowModal(titles[0]) }}>Make your reservation</Button>
                            {/* TODO: la ventana modal para hacer la booking solo puede salir si estas logeado si no te tiene que mandar hacer el login */}
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
            </Container>
        </div>
    )
}

export default PacksCard