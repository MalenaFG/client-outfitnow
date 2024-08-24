import React, { useEffect, useState } from "react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete"

const NewItemForm = ({ setUserData }) => {

    const [addressData, setAddressData] = useState({
        address: undefined,
        latitude: 0,
        longitude: 0
    })

    const [addressValue, setAddressValue] = useState()

    useEffect(() => handleAutocomplete(), [addressValue])

    const handleAutocomplete = () => {
        addressValue && geocodeByAddress(addressValue?.label)
            .then(([addressDetails]) => getLatLng(addressDetails))
            .then((coordinates) => {

                setUserData(oldUserData => {
                    return { ...oldUserData, latitude: coordinates.lat, longitude: coordinates.lng }
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="NewItemForm">
            <GooglePlacesAutocomplete
                apiKey='process.env.REACT_APP_GOOGLE_MAPS_API_KEY'
                selectProps={{
                    addressValue,
                    onChange: setAddressValue
                }} />
        </div>
    )
}

export default NewItemForm