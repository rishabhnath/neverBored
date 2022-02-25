import React, { useState } from 'react';
import greenlogo from '../../../assets/icons/greenlogo.svg';
import emailIco from '../../../assets/icons/emailIco.svg';
function SignupEmail({ email, email1 }) {
    return (
        <>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-11">
                    <p style={{ fontSize: "18px", color: "#000000", fontWeight: "bold"
                    }}>What’s your email address?</p>
                </div>
            </div>
            <div className="fade-animation">

                <div className="row" style={{ border: "1px solid", width: "80%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                         Email
                        </div>
                        <div className="row">
                            <div style={{ marginTop: "4px" }} className="col-1">
                                <img src={emailIco} />
                            </div><br />
                            <div className="col-1"></div>
                            <input value={email1}style={{ width: "217px",
                                marginTop: "-36px", border: "none"
                            }} onChange={(e) => email(e.target.value) } type="text" className="form-control h-auto border-left-0 login-input-right custom-caret ml-5" id="inlineFormInputGroup" placeholder="example@mail.com" />

                        </div>
                    </div>
                </div>

                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button className="next-btn btn-sm" >Next</button>
            </div>


        </>
    );
}
export default SignupEmail;
