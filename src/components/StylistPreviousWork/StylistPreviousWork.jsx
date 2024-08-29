import { Col, Image } from "react-bootstrap"
import './StylistPreviousWork.css'

const StylistPreviousWork = ({ avatar, userName, gallery }) => {


    return (
        <Col md={{ span: 6 }} className="StylistPreviousWork mb-4">
            <Image className="previousWork" src={gallery[0]} rounded />
            <Image className="avatar" src={avatar} />
        </Col>
    )
}

export default StylistPreviousWork