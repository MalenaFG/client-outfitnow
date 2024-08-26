import { useState } from "react"
import { Form } from "react-bootstrap"
import ServicesFilteredList from "../ServicesFilteredList/ServicesFilteredList"
import servicesServices from "../../services/services.services"

const ServiceFilter = () => {

    const [servicesFiltered, setServicesFiltered] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const handleInputChange = (e) => {

        const { value } = e.target
        setSearchInput(value)

        servicesServices
            .getFilteredServices(value)
            .then(({ data }) => setServicesFiltered(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="ServiceFilter">

            <Form className="d-flex" >
                <Form.Control
                    type="search"
                    placeholder="Search by service"
                    aria-label="Search"
                    value={searchInput}
                    onChange={handleInputChange}
                />
            </Form>

            <ServicesFilteredList servicesFiltered={servicesFiltered} />

        </div>
    )
}
export default ServiceFilter