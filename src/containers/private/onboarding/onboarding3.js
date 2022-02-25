import React, { useState, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { serverUrl } from '../../../configs/api-endpoints';
import APIServices from '../../../core/services/data/api-services';
import useAlert from "../../../hooks/use-alert";


const apiService = new APIServices();

const STEP = 0.1;
const MIN = 0;
const MAX = 300;

function Onboarding3(data) {
    const { nextStep, user_data } = data;
    const [values, setValues] = useState([0, 300]);
    const { openAlert } = useAlert();

    useEffect(() => {
        if (user_data.length > 0) {
            setValues([user_data[0].budget_min, user_data[0].budget_max]);
        }
    }, []);

    const submit = async () => {
        const budget_min = values[0];
        const budget_max = values[1];
        const url = `${serverUrl}/updateOngoingStep3`;
        const data = { budget_min, budget_max };
        const type = "put";
        const user = await apiService.put(url, data, type);

        if (user.results && !user.results.success) {
            openAlert("error", "error", "Something went wrong");
        } else {
            nextStep();
        }
    };

    return (
        <>
            <div className="fade-animation">

                <header>
                    <label className="font-weight-bold" style={{ fontSize: "22px" }}>Set your budget</label>
                    <p style={{ fontSize: "14px" }}>Tell us your preferences, so we can best help you discover your next activities.</p>
                </header>
                <div className="row">
                    <div className="col" >
                        <p className="font-weight-bold" style={{ fontSize: "small" }}>Budget</p>
                    </div>
                    <div className="col">
                        {/* <a href="#" class="badge badge-light">Light</a> */}
                        <span className="badge badge-light text-success float-right">{values[1]}$+ </span>
                        <span className="badge badge-light text-success float-right">- </span>
                        <span className="badge badge-light text-success float-right"> {values[0]}$</span>

                    </div>
                </div>
                <div>
                    <br />
                    <div >
                        <Range
                            values={values}
                            step={STEP}
                            min={MIN}
                            max={MAX}
                            // rtl={rtl}
                            onChange={(values) => setValues(values)}
                            renderTrack={({ props, children }) => <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: '36px',
                                    display: 'flex',
                                    width: '100%'
                                }}
                            >
                                <div
                                    ref={props.ref}
                                    style={{
                                        height: '5px',
                                        width: '100%',
                                        borderRadius: '4px',
                                        background: getTrackBackground({
                                            values,
                                            colors: ['#ccc', '#2d9c64', '#ccc'],
                                            min: MIN,
                                            max: MAX
                                        // rtl
                                        }),
                                        alignSelf: 'center'
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                            }
                            renderThumb={({ index, props, isDragged }) => <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '25px',
                                    width: '25px',
                                    borderRadius: '50%',
                                    backgroundColor: '#FFF',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // boxShadow: '0px 2px 6px #AAA'
                                    border: "2.67px solid #2d9c64"

                                }}
                            >
                                {/* <div
                                style={{
                                    position: 'absolute',
                                    top: '-28px',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                                    padding: '4px',
                                    borderRadius: '50%',
                                    backgroundColor: '#548BF4'
                                }}
                            >
                                {values[index].toFixed(1)}
                            </div> */}

                            </div>
                            }
                        />                </div>

                    <br />
                    <center>
                        <p style={{ fontSize: "85%" }} className="mt-5"> This can always be changed later in your settings</p>
                        {/* <button className="next-btn btn-sm " onClick={submit}>Next</button> */}

                    </center>
                    <div className="row ml-0 mr-0 mt-5 pt-3" style={{ borderTop: "1px solid", borderColor: "#E5E5E5" }}>
                        <div className="col-6  ml-0 mr-0">
                            <button style={{ background: "#ffffff", border: "0px solid", padding: "8px", width: "100%", borderRadius: "16px", height: "64px" }} className=" btn-sm " onClick={submit}>Back</button>
                        </div>
                        <div className="col-6 ml-0 mr-0">
                            <button style={{ background: "#2d9b63", border: "0px solid", padding: "8px", color: "#ffffff", width: "100%", borderRadius: "16px", height: "64px" }} className="btn-sm " onClick={submit}>Next</button>
                        </div>
                    </div>
                </div>
            </div>

        </>


    );
}

export default Onboarding3;
