import { useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './SideBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Nav, Tab, Tabs } from 'react-bootstrap';
import LoginForm from '../LoginForm/LoginForm';
import TabsSignupForms from '../TabsSignupForms/TabsSignupForms';
import { AuthContext } from '../../contexts/auth.context';

const SideBar = () => {

    const { loggedUser } = useContext(AuthContext)

    const [showOffset, setShowOffset] = useState(false)

    const handleCloseOffset = () => { setShowOffset(false) }

    const handleShowOffset = () => { setShowOffset(true) }

    const [accessModal, setAccessModal] = useState({
        show: false,
        content: 'login'
    })

    const showAccessModal = content => {
        setAccessModal({ show: true, content })
    }

    return (
        <div className="SideBar">
            <div className='sidebar_container'>

                <img onClick={handleShowOffset} className="launch_offset_btn me-2" src='https://res.cloudinary.com/dshhkzxwr/image/upload/v1724250405/icon_jxlzxw.svg' />
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


                    <div className="login" >
                        <img src="https://res.cloudinary.com/dshhkzxwr/image/upload/v1724249037/pngwing.com_1_o7fzee.png" alt="" />

                        <div>
                            {
                                loggedUser
                                    ?
                                    <div className='userAdnLogout'>

                                        <h5>{`${loggedUser.userName}`}</h5>
                                        <h5>Logout</h5>

                                    </div>

                                    : <h5 onClick={() => showAccessModal('login')}>Login</h5>
                            }
                        </div>

                    </div>

                    <Modal className='accessModal' show={accessModal.show} onHide={() => setAccessModal({ show: false })}>
                        <Modal.Header closeButton className='flex-column'>
                            <Modal.Title>
                                {accessModal.content === 'login' && 'Login now'}
                                {accessModal.content === 'signup' && 'Signup now'}
                            </Modal.Title>
                            <Modal.Body className='modalBodyContainer flex-column mb-3'>
                                {accessModal.content === 'login' && <LoginForm showAccessModal={showAccessModal} closeModal={() => setAccessModal({ show: false })} />}
                                {accessModal.content === 'signup' && <TabsSignupForms setAccessModal={setAccessModal} />}

                            </Modal.Body>
                        </Modal.Header>

                    </Modal>

                </Offcanvas>
            </div >
        </div >
    )
}

export default SideBar