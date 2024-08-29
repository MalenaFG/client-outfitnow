import { Col, Image } from "react-bootstrap"
import './StylistPreviousWorks.css'

const StylistPreviousWorks = ({ avatar, userName, gallery }) => {


    return (
        <Col md={{ span: 6 }} className="StylistPreviousWorks mb-4">
            <Image className="previousWork" src={gallery[0]} rounded />
            <Image className="avatar" src={avatar} />
        </Col>
    )
}

export default StylistPreviousWorks