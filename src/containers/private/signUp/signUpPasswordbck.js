import React, { useState, useEffect } from 'react';
import greenlogo from '../../../assets/icons/greenlogo.svg';
import emailIco from '../../../assets/icons/emailIco.svg';
import eye from '../../../assets/icons/eye.svg';
import key from '../../../assets/icons/key.svg';
function SignupPassword({ setpassword, passwordValue, validation, validvalue }) {
    const [showPassword, setShowPassword] = useState(false);
    const [con1, setcon1] = useState(false);
    const [con2, setcon2] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);
    // const [password, setpassword] = useState("");
    const number = /\d/;

    useEffect(() => {
        condition1(passwordValue);
    });

    const condition1 = (str) => {
        if (number.test(str)) {
            setcon1(true);
        } else { setcon1(false); }

        if (str.length >= 8) {
            setcon2(true);
        } else {
            setcon2(false);
        }
        if (number.test(str) && str.length >= 8) {
            validation(true);
        }
        setpassword(str);
    };

    return (
        <>
            <div>
                <p style={{ paddingLeft: "30px", fontSize: "18px", fontWeight: "bold" }}>Create password</p>
            </div>
            <div className="fade-animation">
                <div className="row" style={{ border: "1px solid", width: "80%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                          New password
                        </div>
                        <div className="row">
                            <div style={{ marginTop: "4px" }} className="col-1">
                                <img src={key} />
                            </div><br />
                            <div className="col-1"></div>
                            <input value={passwordValue} onChange={(e) => { condition1(e.target.value); } } type={viewPassword ? "text" : "password"} id="userPassword" className="form-control1 h-auto border-left-0 custom-caret " id="inlineFormInputGroup" style={{ fontSize: "15px", border: "1.5px solid #AEAEAE", border: "none", borderTopRightRadius: "1px", borderBottomRightRadius: "1px", width: "56%", marginTop: "-8px" }} />
                            <div class="input-group-append signup-password-view">
                                <i className={viewPassword ? "fas fa-eye-slash ml-4" : "fas fa-eye ml-4"} onClick={() => setViewPassword(!viewPassword)}></i>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10" style={{ lineHeight: "8px" }}>
                        {con1 === false ? <p> &#x2715; has atleast 1 number</p> : <p style={{ color: " green " } }> &#10003; has atleast 1 number</p> }
                        {con2 === false ? <p>&#x2715; needs be at least 8 characters</p> : <p style={{ color: " green " } }> &#10003;  needs be at least 8 characters</p> }
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <button onClick={() => props.history.push("/onboarding")} className="next-btn btn-sm" >Next</button>
            </div>


        </>
    );
}
export default SignupPassword;
