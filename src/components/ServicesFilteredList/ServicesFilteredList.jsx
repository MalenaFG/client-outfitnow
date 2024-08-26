import ServiceFilteredCard from "../ServiceFilteredCard/ServiceFilteredCard"

const ServicesFilteredList = ({ servicesFiltered }) => {

    return (
        <div className="ServicesFilteredList d-flex flex-row flex-wrap">
            {
                servicesFiltered.map(elm => {
                    return (
                        <ServiceFilteredCard {...elm} key={elm._id} />
                    )
                })
            }
        </div>
    )
}

export default ServicesFilteredList