import { Spinner as BootstrapSpinner } from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'

const Spinner = () => {

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            {/* TODO: NO ME HACE CASO CON RESPECTO AL CSS */}
            <BootstrapSpinner animation="border" role="status" style={{ width: '500px', height: '100px' }}>
                <span className="visually-hidden">Loading...</span>
            </BootstrapSpinner>
        </div>
    )

}

export default Spinner