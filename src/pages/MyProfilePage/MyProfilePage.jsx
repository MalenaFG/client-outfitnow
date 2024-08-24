import './MyProfilePage.css'
import { Row, Col, Container } from "react-bootstrap"
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard'
import BookingsAccordion from '../../components/BookingsAccordion/BookingsAccordion'

const MyProfilePage = () => {


    return (
        <div className="MyProfilePage">
            {
                <Container>
                    <Row>
                        <Col>
                            <UserProfileCard />
                        </Col>
                        <Col style={{ marginTop: '80px' }}>
                            <BookingsAccordion />
                        </Col>
                    </Row>
                </Container>}

        </div>
    )
}

export default MyProfilePage