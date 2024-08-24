import './MyProfilePage.css'
import { Row, Col, Container } from "react-bootstrap"
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard'
import BookingsAccordion from '../../components/BookingsAccordion/BookingsAccordion'
import CreateServiceForm from '../../components/CreateServiceForm/CreateServiceForm'

const MyProfilePage = () => {


    return (
        <div className="MyProfilePage">
            <Container>
                <Row>
                    <Col>
                        <UserProfileCard />
                    </Col>
                    <Col style={{ marginTop: '80px' }}>
                        <BookingsAccordion />
                        <CreateServiceForm />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default MyProfilePage