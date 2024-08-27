import { Container } from "react-bootstrap"
import StylistsCompleteList from "../../components/StylistsCompleteList/StylistsCompleteList"
import './StylistsListPage.css'


const StylistsListPage = () => {

    // TODO: QUE NO SALGA EL BOTON DE ELEGIR ESTILISTA EN ESTA PAGINA NUNCA Y PONER BONITO DENTRO DE LA CARD EL CUADRO DONDE APARACEN LAS SERVICES

    return (
        <Container className="StylistsListPage">
            <StylistsCompleteList />
        </Container>
    )
}

export default StylistsListPage