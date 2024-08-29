import { Col, Row } from "react-bootstrap"
import ServiceFilteredCard from "../ServiceFilteredCard/ServiceFilteredCard"

const ServicesFilteredList = ({ servicesFiltered }) => {

    return (
        <div className="ServicesFilteredList d-flex flex-row flex-wrap mt-5 pt-5">
            <Row>
                {
                    servicesFiltered.map(elm => {
                        return (

                            <Col md={{ span: 3 }} > <ServiceFilteredCard {...elm} key={elm._id} /></Col>

                        )
                    })
                }
            </Row>
        </div>
    )
}

export default ServicesFilteredList