import { Container } from "react-bootstrap"
import StylistsCompleteList from "../../components/StylistsCompleteList/StylistsCompleteList"
import './StylistsListPage.css'


const StylistsListPage = () => {

    return (
        <Container className="StylistsListPage">
            <StylistsCompleteList />
        </Container>
    )
}

export default StylistsListPage