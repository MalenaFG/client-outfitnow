import { Spinner } from 'react-bootstrap'
import './Loader.css'

const Loader = () => {
    return (
        <div className='LoaderContainer'>
            <Spinner className='Loader' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loader
