import { useEffect, useState } from "react"
import userServices from "../../services/user.services"
import { Row } from "react-bootstrap"
import './StylistsCompleteList.css'
import StylistCardWithoutButton from "../StylistCardWithoutButton/StylistCardWithoutButton"
import Loader from "../Loader/Loader"

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
            {isLoading ? <Loader /> : stylistsList.map(e => <StylistCardWithoutButton{...e} key={e._id} />)}
        </Row>
    )
}

export default StylistsCompleteList