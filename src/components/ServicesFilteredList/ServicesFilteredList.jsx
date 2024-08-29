import ServiceFilteredCard from "../ServiceFilteredCard/ServiceFilteredCard"

const ServicesFilteredList = ({ servicesFiltered }) => {

    return (
        <div className="ServicesFilteredList d-flex flex-row flex-wrap mt-5 pt-5">
            {
                servicesFiltered.map(elm => <ServiceFilteredCard {...elm} key={elm._id} />)
            }
        </div>
    )
}

export default ServicesFilteredList