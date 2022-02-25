import React, { useState } from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng
} from "use-places-autocomplete";
import location from '../../assets/icons/location.svg';
import info from '../../assets/icons/info.svg';


import useOnclickOutside from "react-cool-onclickoutside";
const LocationInput = () => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
        },
        debounce: 300
    });


    const getLiveLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            const geocoder = new google.maps.Geocoder();
            const latLng = new google.maps.LatLng(location.latitude, location.longitude);
            if (geocoder) {
                geocoder.geocode({ latLng }, (results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                        console.log(results[0].formatted_address);
                    } else {
                        console.log(`Geocoding failed: ${status}`);
                    }
                }); // geocoder.geocode()
            }
        });
    };


    const handleSelect =
        ({ description }) => () => {
            /*
             * When user selects a place, we can replace the keyword without request data from API
             * by setting the second parameter to "false"
             */
            setValue(description, false);
            clearSuggestions();

            // Get latitude and longitude via utility functions
            getGeocode({ address: description })
                .then((results) => getLatLng(results[0]))
                .then(({ lat, lng }) => {
                    console.log("📍 Coordinates: ", { lat, lng });
                })
                .catch((error) => {
                    console.log("😱 Error: ", error);
                });
        };

    const renderSuggestions = () => data.map((suggestion) => {
        const {
            place_id,
            structured_formatting: { main_text, secondary_text }
        } = suggestion;

        return (
            <li key={place_id} onClick={handleSelect(suggestion)}>
                <strong>{main_text}</strong> <small>{secondary_text}</small>
            </li>
        );
    });

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };
    const ref = useOnclickOutside(() => {
        /*
         * When user clicks outside of the component, we can dismiss
         * the searched suggestions by calling this method
         */
        clearSuggestions();
    });
    return (
        <>
            <form className="container-fluid">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1" className="font-weight-bold" style={{ fontSize: "16px" }}>Location <img src={info} /></label>
                    <div ref={ref}>
                        <div className="row mr-0">
                            <div className="col-10">
                                <input
                                    value={value}
                                    onChange={handleInput}
                                    disabled={!ready}
                                    placeholder="e.g. Amsterdam"
                                    className="form-control" id="exampleFormControlInput1"
                                />
                            </div>
                            <div className="col-2 pl-0">
                                <button className="btn btn-success btn-sm" onClick={getLiveLocation}><img src={location} /></button>
                            </div>
                        </div>
                        {status === "OK" && <ul>{renderSuggestions()}</ul>}
                    </div>

                </div>

            </form></>
    );
};
export default LocationInput;
