import ReactPlayer from 'react-player'
import './HomePage.css'

const HomePage = () => {

    return (
        <div className="HomePage">
            <div className="videoContainer">
                <ReactPlayer className='home_video' muted={true} playing={true} loop={true}
                    url="https://res.cloudinary.com/dkgviq5dh/video/upload/v1724160119/Moschino_q2tuuo.mp4"
                />
            </div>
        </div>
    )
}

export default HomePage