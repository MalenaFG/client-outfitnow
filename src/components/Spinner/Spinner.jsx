import { Spinner as BootstrapSpinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <BootstrapSpinner animation="border" role="status" style={{ width: '100px', height: '100px' }}>
                <span className="visually-hidden">Loading...</span>
            </BootstrapSpinner>
        </div>
    );
}

export default Spinner;
