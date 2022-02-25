import React, { useEffect, useState } from 'react';
import location from '../../../assets/icons/location.svg';
import info from '../../../assets/icons/info.svg';
import distanceRange from '../../../assets/icons/distanceRange.svg';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { Range, getTrackBackground } from 'react-range';
import useAlert from "../../../hooks/use-alert";
import APIServices from '../../../core/services/data/api-services';
import { serverUrl } from '../../../configs/api-endpoints';

const apiServices = new APIServices();

const STEP = 0.1;
const MIN = 0;
const MAX = 100;
function Onboarding2(datas) {
    const { nextStep, user_data } = datas;
    const { openAlert } = useAlert();
    const [distance, setDistance] = useState([60]);
    const [loc, setLoc] = useState("");

    useEffect(() => {
        if (user_data.length > 0) {
            setDistance([user_data[0].search_distance]);
            setLoc(user_data[0].location_city);
        }
    }, []);


    // const {
    //     ready,
    //     value,
    //     suggestions: { status, data },
    //     setValue,
    //     clearSuggestions
    // } = usePlacesAutocomplete({
    //     requestOptions: {
    //         /* Define search scope here */
    //     },
    //     debounce: 300
    // });
    // const ref = useOnclickOutside(() => {
    //     /*
    //      * When user clicks outside of the component, we can dismiss
    //      * the searched suggestions by calling this method
    //      */
    //     clearSuggestions();
    // });

    /*
     * const handleInput = (e) => {
     *     // Update the keyword of the input element
     *     setValue(e.target.value);
     * };
     */

    // const handleSelect =
    //     ({ description }) => () => {
    //         /*
    //          * When user selects a place, we can replace the keyword without request data from API
    //          * by setting the second parameter to "false"
    //          */
    //         setValue(description, false);
    //         clearSuggestions();

    /*
     *         // Get latitude and longitude via utility functions
     *         getGeocode({ address: description })
     *             .then((results) => getLatLng(results[0]))
     *             .then(({ lat, lng }) => {
     *                 console.log("📍 Coordinates: ", { lat, lng });
     *             })
     *             .catch((error) => {
     *                 console.log("😱 Error: ", error);
     *             });
     *     };
     */

    /*
     * const renderSuggestions = () => data.map((suggestion) => {
     *     const {
     *         place_id,
     *         structured_formatting: { main_text, secondary_text }
     *     } = suggestion;
     */

    /*
     *     return (
     *         <li key={place_id} onClick={handleSelect(suggestion)}>
     *             <strong>{main_text}</strong> <small>{secondary_text}</small>
     *         </li>
     *     );updateGroup
     */

    /*
     * const getLiveLocation = () => {
     *     navigator.geolocation.getCurrentPosition((position) => {
     *         console.log("Latitude is :", position.coords.latitude);
     *         console.log("Longitude is :", position.coords.longitude);
     *         const geocoder = new google.maps.Geocoder();
     *         const latLng = new google.maps.LatLng(location.latitude, location.longitude);
     *         if (geocoder) {
     *             geocoder.geocode({ latLng }, (results, status) => {
     *                 if (status == google.maps.GeocoderStatus.OK) {
     *                     console.log(results[0].formatted_address);
     *                 } else {
     *                     console.log(`Geocoding failed: ${status}`);
     *                 }
     *             }); // geocoder.geocode()
     *         }updateGroup
     * };
     */


    const submit = async () => {
        const location = "Indore";
        const url = `${serverUrl}/updateOngoingStep2`;
        const data = { location, distance };
        const type = "put";
        const user = await apiServices.put(url, data, type);

        if (user.results && !user.results.success) {
            openAlert("error", "Something went wrong", "error");
        } else {
            nextStep();
        }
    };

    return (
        <>
            <div className="fade-animation">

                <header>
                    <label className="font-weight-bold" style={{ fontSize: "22px" }}>Discover new activities</label>
                    <p style={{ fontSize: "14px" }}>Tell us your preferences, so we can best help you discover your next activities.</p>
                </header>
                <br />
                <form onSubmit={(e) => e.preventDefault()} >
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1 font-weight-bold">Location <img src={info} /></label>
                        {/* <div ref={ref}> */}
                        <div className="row">
                            <div className="col-10">
                                <input
                                    value={loc}
                                    /*
                                     * value={value}
                                     * onChange={handleInput}
                                     */
                                    onChange={(e) => setLoc(e.target.value)}
                                    // disabled={!ready}
                                    placeholder="e.g. Amsterdam"
                                    className="form-control" id="exampleFormControlInput1"
                                />
                                {/* <div style={{ marginLeft: "100%",
                                    marginTop: "-34px" }} className="col">
                                    <span><img src={onboardlocation} /></span></div> */}
                            </div>
                            <div className="col-2 pl-0">
                                <button className="btn btn-success btn-sm"
                                //  onClick={getLiveLocation}
                                ><img src={location} /></button>
                            </div>
                        </div>
                        {/* {status === "OK" && <ul>{renderSuggestions()}</ul>} */}
                    </div>
                    {/* </div> */}

                    <div className="row">
                        <div className="col" >
                            <p className="font-weight-bold" style={{ fontSize: "small" }}>Search distance</p>                    </div>
                        <div className="col">
                            <span className="badge badge-light text-success float-right" style={{ background: "#f2f2f2" }}>{`${distance}`} KM <img src={distanceRange} />
                            </span>
                        </div>
                    </div>
                    <br />
                    <div>


                        <Range
                            values={distance}
                            step={STEP}
                            min={MIN}
                            max={MAX}
                            onChange={(values) => setDistance(values)}
                            renderTrack={({ props, children }) => <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: "36px",
                                    display: "flex",
                                    width: "100%"
                                }}
                            >
                                <div
                                    ref={props.ref}
                                    style={{
                                        height: "5px",
                                        width: "100%",
                                        borderRadius: "4px",
                                        background: getTrackBackground({
                                            values: distance,
                                            colors: ["#2d9c64", "#ccc"],
                                            min: MIN,
                                            max: MAX
                                        }),
                                        alignSelf: "center"
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                            }
                            renderThumb={({ props, isDragged }) => <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: "25px",
                                    width: "25px",
                                    borderRadius: "50%",
                                    backgroundColor: "#FFF",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0px 2px 6px #AAA",
                                    border: "2.67px solid #2d9c64"
                                }}
                            >

                            </div>
                            }
                        />
                    </div>
                    <br />            <br />

                    <center>
                        <p style={{ fontSize: "85%" }} > This can always be changed later in your settings</p>
                        {/* <button className="next-btn btn-sm " onClick={nextStep}>Next</button> */}

                    </center>
                    <div className="row ml-0 mr-0 mt-5 pt-3" style={{ borderTop: "1px solid", borderColor: "#E5E5E5" }}>
                        <div className="col-6  ml-0 mr-0">
                            <button style={{ background: "#ffffff", border: "0px solid", padding: "8px", width: "100%", borderRadius: "16px", height: "64px" }} className=" btn-sm " onClick={submit}>Back</button>
                        </div>
                        <div className="col-6 ml-0 mr-0">
                            <button style={{ background: "#2d9b63", border: "0px solid", padding: "8px", color: "#ffffff", width: "100%", borderRadius: "16px", height: "64px" }} className="btn-sm " onClick={submit}>Next</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
}
export default Onboarding2;
