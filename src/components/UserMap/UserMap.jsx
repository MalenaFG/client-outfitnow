import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const UserMap = ({ location }) => {

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey,

    })

    const [map, setMap] = useState(null)

    const onLoad = (map) => console.log('Aquí haz lo que necesites tras la carga del mapa')
    const onUnmount = () => setMap(null)


    if (!isLoaded) {
        return <div>Loading...</div>
    }

    return (
        <GoogleMap
            mapContainerStyle={{ height: '200px' }}
            zoom={15}
            onLoad={onLoad}
            center={{
                lat: Number(location[1]),
                lng: Number(location[0])
            }}
            onUnmount={onUnmount}

        >
            <Marker
                position={{
                    lat: Number(location[1]),
                    lng: Number(location[0])
                }}
            />

        </GoogleMap>
    )
}

export default UserMap
