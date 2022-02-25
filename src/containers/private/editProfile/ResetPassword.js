import React, { useState } from 'react';
import backArrowWhite from '../../../assets/icons/backArrowWhite.svg';
import key from '../../../assets/icons/key.svg';


function ResetPassword(props) {
    const [email, setEmail] = useState("");
    const back = () => {
        props.history.push("/userprofile");
    };
    return (
        <>
            <div className="fade-animation">
                <div className="card" style={{ height: "103px", background: "#2D9B63", borderRadius: "0" }}>
                    <div className="row mr-0">
                        <div className="col-3">
                            <a onClick={back}>
                                <img src={backArrowWhite} alt="back" className="ml-4 caret-hide pt-4 back-button-user-login" />
                            </a>
                        </div>

                        <div className="col pt-4 font-weight-bold text-white caret-hide">
                            <span className="pl-3 caret-hide " style={{ fontSize: "18px", marginLeft: "13%" }}>Reset password</span>
                        </div>
                    </div>
                </div>
                <div style={{ padding: "9%" }}>
                    <div className="row" >
                        <p style={{ color: "#000000", fontWeight: "600", fontSize: "14px" }}>Resetting your password</p>
                    </div>
                    <div className="row ">
                        <p style={{ fontSize: "14px" }}>You can request a new password by clicking the button below. You will receive an email containing a verification code, which is required to reset your password in the following step.</p>
                    </div>
                    <br />
                </div>
                <div className="row" style={{ border: "1px solid", width: "80%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                         Password
                        </div>
                        <div className="row">
                            <div style={{ marginTop: "4px" }} className="col-1">
                                <img src={key} />
                            </div><br />
                            <div className="col-1"></div>
                            <input style={{ width: "217px",
                                marginTop: "-20px", border: "none"
                            }} type="text" className="form-control h-auto border-left-0 login-input-right" id="inlineFormInputGroup" placeholder="info@neverbored.app" />

                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "75%" }} className="row mr-0">
                    <div className="col-6">
                        <button style={{ textColor: "black" }} className="next-btn1 btn-xs" >back</button>
                    </div>
                    <div className="col-6">
                        <button className="next-btn2 btn-xs">Create Account</button>
                    </div></div>

            </div>
        </>
    );
}
export default ResetPassword;
