import { useEffect, useState } from "react"
import bookingsServices from "../../services/bookings.services"
import { Container, Row, Col } from "react-bootstrap"
import './DashboardPage.css'
import BookingsbyServiceChart from "../../components/BookingsbyServiceChart/BookingsbyServiceChart"
import Loader from "../../components/Loader/Loader"

const DashboardPage = () => {

    const [chartData, setChartData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadChartData()
    }, [])

    const loadChartData = () => {

        bookingsServices
            .getCountBookingsByService()
            .then(({ data }) => {
                setChartData(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="DashboardPage">
            {isLoading
                ? <Loader />
                :
                <Container className="DashboardPageContainer">
                    <Row className="justify-content-center">
                        <Col md={{ span: 8 }}>
                            <h1 className="DashboardPageTitle">Bookings by service</h1>
                            <BookingsbyServiceChart data={chartData} />
                        </Col>
                    </Row>
                </Container>}
        </div>
    )
}

export default DashboardPage