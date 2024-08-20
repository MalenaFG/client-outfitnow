import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './SideBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Nav, Container, Col } from 'react-bootstrap';

const SideBar = () => {

    const [showOffset, setShowOffset] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleCloseOffset = () => { setShowOffset(false) }

    const handleShowOffset = () => { setShowOffset(true) }

    const handleCloseModal = () => { handleCloseModal(false) }

    return (
        <div className="SideBar">
            <div className='sidebar_container'>

                <Button variant='light' onClick={handleShowOffset} className="launch_offset_btn me-2">WHOPER</Button>

                <Offcanvas show={showOffset} onHide={handleCloseOffset} scroll={true} backdrop={true}>


                    <Offcanvas.Header closeButton>
                        <Nav.Link href={'/'}>
                            <Offcanvas.Title className='ofcanvas_title'>OutfitNow</Offcanvas.Title>
                        </Nav.Link>
                    </Offcanvas.Header>


                    <Offcanvas.Body>
                        <Nav.Link href={'/services'}>Services</Nav.Link>
                        <Nav.Link href={'/profile/:userId'}>My profile</Nav.Link>
                    </Offcanvas.Body>

                    <Button className={'launch_modal_btn'} variant="light" onClick={() => setShowModal(true)}>
                        SignUp
                    </Button>

                    <Modal show={showModal} onHide={handleCloseModal}>

                        <Modal.Header closeButton>
                            <Modal.Title>Sign Up</Modal.Title>

                            <Modal.Body>
                                Are you a User or an STYLIST?
                                <Button>USER</Button>
                                <Button>STYLIST</Button>
                            </Modal.Body>

                        </Modal.Header>


                    </Modal>

                </Offcanvas>
            </div>
        </div >
    )
}

export default SideBar