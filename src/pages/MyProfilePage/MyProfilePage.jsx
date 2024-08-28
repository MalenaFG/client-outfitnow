import './MyProfilePage.css'
import { Row, Col, Container } from "react-bootstrap"
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard'
import BookingsAccordion from '../../components/BookingsAccordion/BookingsAccordion'
import CreateServiceForm from '../../components/CreateServiceForm/CreateServiceForm'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'

const MyProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)

    // TODO: modificar el estilo y estructura de la userCard y del create form services
    // TODO: hay que dejar los formularios mas o menos iguales en cuanto a estilo
    // TODO: filtrar por estilos en la stylistListpage

    return (
        <div className="MyProfilePage">
            <Container>
                <Row>
                    <Col md={loggedUser.role === "ADMIN" ? { span: 4 } : { span: 6 }}  >
                        <UserProfileCard />
                    </Col>
                    <Col style={{ marginTop: '80px' }}>
                        {
                            loggedUser.role === "ADMIN"
                                ? <CreateServiceForm />
                                : <BookingsAccordion />
                        }
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default MyProfilePage