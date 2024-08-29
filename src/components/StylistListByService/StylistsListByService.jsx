import { useContext, useEffect, useState } from 'react'
import userServices from '../../services/user.services'
import StylistCard from '../StylistCard/StylistCard'
import { useParams } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { AuthContext } from '../../contexts/auth.context'

const
    StylistsList = ({ selectedStylist, setSelectedStylist }) => {

        const [stylistsList, setStylistsList] = useState([])

        const { serviceId } = useParams()

        const { loggedUser } = useContext(AuthContext)

        useEffect(() => {
            loadStylistsByService()
        }, [])

        const loadStylistsByService = () => {

            userServices
                .getStylistsByService(serviceId)
                .then(({ data }) => setStylistsList(data))
                .catch(err => console.log(err))
        }

        return (
            <section className="StylistsList">
                {(loggedUser && stylistsList.length > 0) && <h1 className="chooseStylist mb-5"> Choose your stylist:</h1>}
                {
                    <Row >
                        {stylistsList.map(e => <StylistCard {...e} key={e._id} selectedStylist={selectedStylist} setSelectedStylist={setSelectedStylist} />)}
                    </Row>
                }
            </section>
        )
    }

export default StylistsList