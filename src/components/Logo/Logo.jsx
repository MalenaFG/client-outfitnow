import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {

    return (
        <div className="Logo">
            <Link to={'/'}>
                <img className='outfitnow_logo' src="https://res.cloudinary.com/dkgviq5dh/image/upload/v1724170143/Black_White_Minimalist_Elegant_Letter_Initial_Name_Monogram_Logo-removebg-preview_rqaz3r.png" alt="OutfitNow Logo" />
            </Link>
        </div>
    )
}

export default Logo