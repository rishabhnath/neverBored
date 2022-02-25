import React, { useState } from 'react';
import backArrow from '../../assets/icons/back_arrow.svg';
import greenline1 from '../../assets/icons/greenline1.svg';
import greenline2 from '../../assets/icons/greenline2.svg';
import eye from '../../assets/icons/eye.svg';
import password from '../../assets/icons/password.svg';


function ResetPass({ setpassword, passwordValue, validation }) {
    const [showPassword, setShowPassword] = useState(false);
    const [con1, setcon1] = useState(false);
    const [con2, setcon2] = useState(false);
    // const [password, setpassword] = useState("");

    const number = /\d/;
    /*
     * const condition1 = (str) => {
     * };
     */
    const back = () => {
        props.history.push("/userprofile");
    };

    return (
        <>
            <div className="container-fluid">
                <div className="col-3">
                    <a onClick={back}>
                        <img src={backArrow} alt="back" className="ml-4 caret-hide pt-4 back-button-user-login" />
                    </a>
                </div>
            </div>
            <div>
                <center><img src={greenline1} /></center>
            </div>
            <div>
                <center><p style={{ fontSize: "18px", fontWeight: "600" }}>Reset password</p> </center>
            </div>
            <div>
                <center><img style={{ align: "Center", Width: "327px ", marginTop: "-22px" }} src={greenline2} /></center>
            </div>
            <div className="fade-animation">
                {/* <div className="row">
                    <div className="col-1"></div>
                    <div className="col-11" >
                        <label className="sr-only" for="inlineFormInputGroup">Password</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-transparent login-input-left"><img src={passwordIco} alt="" /></div>
                            </div>
                            <input onChange={(e) => { condition1(e.target.value); } } type={showPassword ? "text" : "password"} id="userPassword" className="form-control1 h-auto border-left-0 " id="inlineFormInputGroup" style={{ fontSize: "12px", border: "1.5px solid #AEAEAE", borderRight: "none", borderTopRightRadius: "1px", borderBottomRightRadius: "1px", width: "56%" }} />
                            <div class="input-group-append">
                                <a className="input-group-text bg-transparent login-input-right" style={{ borderLeft: "none" }}> <img src={eye} /></a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row" style={{ border: "1px solid", width: "80%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                        New password
                        </div>
                        <div className="row">
                            <div style={{ marginTop: "4px" }} className="col-1">
                                <img src={password} />
                            </div><br />
                            <div className="col-1"></div>
                            <input type={showPassword ? "text" : "password"} id="userPassword" className="form-control1 h-auto border-left-0 " id="inlineFormInputGroup" style={{ fontSize: "12px", border: "1.5px solid #AEAEAE", border: "none", borderTopRightRadius: "1px", borderBottomRightRadius: "1px", width: "56%" }} />
                            <div class="input-group-append">
                                <a className="input-group-text bg-transparent login-input-right" style={{ border: "none" }}> <img src={eye} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10" style={{ lineHeight: "8px", marginLeft: "32px" }}>
                        {con1 === false ? <p style={{ color: "#2D9B63" }}> &#x2715; has atleast 1 number</p> : <p style={{ color: " #2D9B63 " } }> &#10003; has atleast 1 number</p> }
                        {con2 === false ? <p>&#x2715; needs be at least 8 characters</p> : <p style={{ color: " green " } }> &#10003;  needs be at least 8 characters</p> }
                    </div>
                </div>
                <br/>
                <br/>

                <div className="row" style={{ border: "1px solid", width: "80%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                        Re-enter password
                        </div>
                        <div className="row">
                            <div style={{ marginTop: "4px" }} className="col-1">
                                <img src={password} />
                            </div><br />
                            <div className="col-1"></div>
                            <input type={showPassword ? "text" : "password"} id="userPassword" className="form-control1 h-auto border-left-0 " id="inlineFormInputGroup" style={{ fontSize: "12px", border: "1.5px solid #AEAEAE", border: "none", borderTopRightRadius: "1px", borderBottomRightRadius: "1px", width: "56%" }} />
                            <div class="input-group-append">
                                <a className="input-group-text bg-transparent login-input-right" style={{ border: "none" }}> <img src={eye} /></a>
                            </div>
                        </div>
                    </div>
                </div>


                <br/>
                <br/>
                <br/>
                <br/>
                <button className="next-btn btn-sm" >Confirm</button>
            </div>
        </>
    );
}
export default ResetPass;
