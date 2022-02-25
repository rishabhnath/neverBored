import React, { useState } from 'react';
import greenlogo from '../../../assets/icons/greenlogo.svg';
function Onboarding1(data) {
    const { nextStep } = data;
    return (
        <>
            <div className="fade-animation">
                <div>
                    <p style={{ fontSize: "18px", textAlign: "center", weight:
"600" }}><b>Welcome to</b></p>
                </div>
                <br/>

                <div>
                    <center>
                        <img src={greenlogo} alt="Logo"/>
                    </center>
                    <p style={{
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "39px",
                        lineHeight: "46px",
                        textAlign: "center",
                        letterSpacing: "-0.3px",
                        color: " #2D9B63",
                        marginLeft: "9px",
                        marginTop: "25px"
                    }}>Neverbored</p>

                    <h className="text1">Tell us more about yourself, so we can best</h>
                    <p style={{ marginLeft: "55px" }} className="text1">find the right activity for you.</p>


                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <button className="next-btn btn-sm" onClick={nextStep}>Next</button>
            </div>


        </>
    );
}
export default Onboarding1;
