import { useEffect, useState } from 'react'
import userServices from './../../services/user.services'
import StylistCard from '../StylistCard/StylistCard'
import { useParams } from 'react-router-dom'
import { Row } from 'react-bootstrap'

const StylistsList = () => {

    const [stylistsList, setStylistsList] = useState([])
    const { serviceId } = useParams()



    const loadStylistsByService = () => {
        userServices
            .getStylistsByService(serviceId)
            .then(({ data }) => setStylistsList(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadStylistsByService()
    }, [])

    return (
        <div className="StylistsList">
            <Row>
                {
                    stylistsList.map(e =>
                        <StylistCard {...e} key={e._id} />
                    )
                }
            </Row>
        </div>
    )
}

export default StylistsList