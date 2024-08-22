import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './SideBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Nav } from 'react-bootstrap';
import CreateUserForm from '../CreateUserForm/CreateUserForm';
import CreateStylistForm from '../CreateStylistForm/CreateStylistForm';

const SideBar = () => {

    const [showOffset, setShowOffset] = useState(false)
    const [showModalRoles, setShowModalRoles] = useState(false)
    const [showModalUserForm, setShowModalUserForm] = useState(false)
    const [showModalStylistForm, setShowModalStylistForm] = useState(false)

    const handleCloseOffset = () => { setShowOffset(false) }

    const handleShowOffset = () => { setShowOffset(true) }

    const handleCloseModal = () => { setShowModalRoles(false) }



    return (
        <div className="SideBar">
            <div className='sidebar_container'>

                <Button variant='light' onClick={handleShowOffset} className="launch_offset_btn me-2">WHOPER</Button>

                <Offcanvas show={showOffset} onHide={handleCloseOffset} scroll={true} backdrop={true} >


                    <Offcanvas.Header closeButton>
                        <Nav.Link href={'/'}>
                            <Offcanvas.Title className='ofcanvas_title'>OutfitNow</Offcanvas.Title>
                        </Nav.Link>
                    </Offcanvas.Header>


                    <Offcanvas.Body>
                        <Nav.Link href={'/services'}>Services</Nav.Link>
                        <Nav.Link href={'/profile/:userId'}>My profile</Nav.Link>
                    </Offcanvas.Body>

                    <Button className={'launch_modal_btn'} variant="light" onClick={() => { setShowModalRoles(true) }}>
                        SignUp
                    </Button>
                    <div className='modalContainer d-flex flex-column'>

                        <Modal show={showModalRoles} onHide={handleCloseModal} >

                            <Modal.Header closeButton className='flex-column'>
                                <Modal.Title>Sign Up</Modal.Title>
                                <Modal.Body className='modalBodyContainer flex-column mb-3'>
                                    Are you a User or an STYLIST?
                                    <div className='buttonsContainer d-flex'>

                                        <Button onClick={() => { setShowModalUserForm(true) }}>USER</Button>

                                        <Button onClick={() => { setShowModalStylistForm(true) }}>STYLIST</Button>

                                    </div>
                                </Modal.Body>
                            </Modal.Header>

                            <Modal className='modalUserForm' show={showModalUserForm} onHide={handleCloseModal}>
                                <Modal.Header closeButton className='flex-column'>
                                    <Modal.Title>USER</Modal.Title>
                                    <Modal.Body className='modalBodyContainer flex-column mb-3'>
                                        <CreateUserForm />
                                    </Modal.Body>
                                </Modal.Header>

                            </Modal>

                            <Modal className='modalstylistForm' show={showModalStylistForm} onHide={handleCloseModal}>
                                <Modal.Header closeButton className='flex-column'>
                                    <Modal.Title>STYLIST</Modal.Title>
                                    <Modal.Body className='modalBodyContainer flex-column mb-3'>
                                        <CreateStylistForm />
                                    </Modal.Body>
                                </Modal.Header>
                            </Modal>

                        </Modal>
                    </div>

                </Offcanvas>
            </div>
        </div >
    )
}

export default SideBar