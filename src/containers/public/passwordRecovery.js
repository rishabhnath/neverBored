import React, { useState } from 'react';
/*
 * import greenlogo from '../../../assets/icons/greenlogo.svg';
 * import emailIco from '../../assets/icons/emailIco.svg';
 */
import backArrow from '../../assets/icons/back_arrow.svg';
import greenline1 from '../../assets/icons/greenline1.svg';
import greenline2 from '../../assets/icons/greenline2.svg';

import eye from '../../assets/icons/eye.svg';
import passwordIco from '../../assets/icons/passwordIco.svg';


function OtpRecovery(props) {
    const { setpassword, passwordValue, validation } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [con1, setcon1] = useState(false);
    const [con2, setcon2] = useState(false);
    // const [password, setpassword] = useState("");
    const [otp, setotp] = React.useState();
    const [seconds, setSeconds] = React.useState(60);
    const [emailotp, setemailotp] = React.useState();
    const [userInputOtp, setUserInputOtp] = React.useState({});
    const [show, setshow] = React.useState(false);
    const [Refresh, setRefresh] = React.useState(0);
    const number = /\d/;


    const submitOtp = (str) => {
        e.preventDefault();
        e.stopPropagation();

        const otp = Object.values(userInputOtp).join("");

        console.log(otp.length);
        if (otp.length >= 12) {
            const data = {
                email_otp: str
            };
            // alert(JSON.stringify(data)); return false
        };
    };

    const ResendOtp = async () => {
        const url = `${serverUrl}/twofactorauth`;
        const type = "post";
        const payload = {
        };
        const user = await apiServices.post(url, payload, type);
    };

    const tabChange = function (val, e) {
        e.preventDefault();
        const ele = document.querySelectorAll("input");
        console.log(ele);
        if (ele[val - 1].value != "") {
            if (typeof ele[val] != "undefined") {
                ele[val].focus();
            }
        } else if (ele[val - 1].value == "") {
            if (typeof ele[val - 2] != "undefined") {
                ele[val - 2].focus();
            }
        }

        setUserInputOtp({ ...userInputOtp, [e.target.name]: e.target.value });
    };


    const condition1 = (str) => {
        if (number.test(str)) {
            setcon1(true);
        } else { setcon1(false); }
        if (passwordValue.length >= 8) {
            setcon2(true);
        } else {
            setcon2(false);
        }
        if (con1 == true && con2 == true) {
            validation(true);
        }
        setpassword(str);
    };
    const back = () => {
        props.history.push("/");
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <a onClick={back}>
                        <img style={{ marginLeft: "36px", marginBottom: "-120px"
                        }} src={backArrow} alt="back" className="pl-0 back-button-user-login" />
                    </a>
                </div>
            </div>
            <div>
                <center><img src={greenline1} /></center>
            </div>
            <div>
                <center><p style={{ fontSize: "18px", fontWeight: "600" }}>Password recovery
                </p> </center>
            </div>
            <div>
                <center><img style={{ align: "Center", Width: "327px ", marginTop: "-22px" }} src={greenline2} /></center>
            </div>
            <div className="fade-animation">
                <div style={{ marginLeft: "56px" }}>
                    <p>
                        <b>Enter your verification code</b>
                    </p>
                    <p>Code sent to m*****@g***.com
                    </p>
                </div>
                <div>
                    <div style={{ marginTop: "10%" }} id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                        <input onKeyUp={(e) => { tabChange(1, e); }} class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                        <input onKeyUp={(e) => { tabChange(2, e); }} class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                        <input onKeyUp={(e) => { tabChange(3, e); }} class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                        <input onKeyUp={(e) => { tabChange(4, e); }} class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                        <input onKeyUp={(e) => { tabChange(5, e); }} class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" />
                        <input onKeyUp={(e) => { tabChange(6, e); }} class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> </div>
                </div>

            </div>
            <br/>
            <div>
                <p style={{ marginLeft: "56px" }}>Code not received? <span style={{ color: "#2D9B63" }} onClick={ResendOtp}>Send again</span></p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <button className="next-btn1 btn-sm" >Verify</button>

        </>
    );
}
export default OtpRecovery;
