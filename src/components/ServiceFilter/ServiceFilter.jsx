import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import ServicesFilteredList from "../ServicesFilteredList/ServicesFilteredList"
import servicesServices from "../../services/services.services"
import './ServiceFilter.css'

const ServiceFilter = ({ setShowSlider }) => {

    const [servicesFiltered, setServicesFiltered] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const handleInputChange = (e) => {

        const { value } = e.target
        setSearchInput(value)

        value === ''
            ? (setShowSlider(true),
                setServicesFiltered([]))

            : servicesServices
                .getFilteredServices(value)
                .then(({ data }) => {
                    setServicesFiltered(data)
                    setShowSlider(false)
                })

                .catch(err => console.log(err))
    }

    return (
        <div className="ServiceFilterWrapper">
            <Form className="ServiceFilterForm d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search by service"
                    aria-label="Search"
                    value={searchInput}
                    onChange={handleInputChange}
                />
            </Form>

            {
                searchInput != '' && <Container> <ServicesFilteredList servicesFiltered={servicesFiltered} /></Container>
            }
        </div>
    )
}

export default ServiceFilter

