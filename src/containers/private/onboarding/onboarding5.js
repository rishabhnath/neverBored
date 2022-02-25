import React, { useState } from 'react';
import Onboarding5Img from '../../../assets/images/onboarding/onbaording5Img.svg';
import { useHistory } from "react-router-dom";
function Onboarding5(props) {
    const history = useHistory();
    const finishButton = () => {
        history.push('/main');
    };
    return (
        <>
            <div className="fade-animation">

                <div className="row">
                    <label className="font-weight-bold" style={{ fontSize: "22px" }}>Final word</label>
                    <p style={{ fontSize: "14px" }}>Thanks for creating an account on Neverbored!
                        <br />
                        <br />
for any questions, feedback or missing activities, feel free to reach out to us in the Help and info section.  feel free to reach out to us in the Help and info section. Fel free to reach out to us in the Help and info section.</p>

                </div>
                <br/>
                <br/>
                <div className="row">
                    <img className="w-100" style={{ borderRadius: "30px" }} src={Onboarding5Img} alt="" />

                </div>
                <br/>
                <br/>
                <br/>
                <button style={{ background: "#2d9b63", padding: "8px", color: "#ffffff", width: "100%", borderRadius: "16px", height: "64px" }} className=" btn-sm" onClick={finishButton}>Go</button>
            </div>
        </>
    );
}
export default Onboarding5;
