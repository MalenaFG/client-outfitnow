import { useEffect, useState } from "react"
import userServices from "../../services/user.services"
import StylistCard from "../StylistCard/StylistCard"
import { Container, Row, Spinner } from "react-bootstrap"
import './StylistsCompleteList.css'

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

    useEffect(() => {
        loadStylistsList()
    }, [])

    return (
        <Row className="StylistsCompleteList">
            {isLoading ?
                <Spinner />
                :
                stylistsList.map(e => <StylistCard {...e} key={e._id} />)}
        </Row>
    )
}

export default StylistsCompleteList