import { useEffect, useState } from "react"
import userServices from "../../services/user.services"
import { Row, Spinner } from "react-bootstrap"
import './StylistsCompleteList.css'
import StylistCardWithoutButton from "../StylistCardWithoutButton/StylistCardWithoutButton"

const StylistsCompleteList = () => {

    const [stylistsList, setStylistsList] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const loadStylistsList = () => {

        userServices
            .getUsersByRol('stylist')
            .then(({ data }) => {
                setStylistsList(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => loadStylistsList(), [])

    return (
        <Row className="StylistsCompleteList">
            {isLoading ? <Spinner /> : stylistsList.map(e => <StylistCardWithoutButton{...e} key={e._id} />)}
        </Row>
    )
}

export default StylistsCompleteList