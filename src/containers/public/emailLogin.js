import React, { useEffect, useState } from 'react';
import backArrow from '../../assets/icons/back_arrow.svg';
import emailIco from '../../assets/icons/emailIco.svg';
import passwordIco from '../../assets/icons/passwordIco.svg';
import eye from '../../assets/icons/eye.svg';
import APIServices from '../../../src/core/services/data/api-services';
import useAlert from "../../hooks/use-alert";
import { serverUrl } from '../../configs/api-endpoints';
import key from '../../assets/icons/key.svg';
const apiServices = new APIServices();

function emailLogin(props) {
    const { openAlert } = useAlert();
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const back = () => {
        props.history.push("/");
    };

    const submit = async () => {
        const url = `${serverUrl}/login`;
        const data = { email, password, remember };
        const type = "post";
        const user = await apiServices.post(url, data, type);

        if (user.results && !user.results.success) {
            openAlert("error", "Invalid user!", "Please check email and password.");
        } else {
            const token = user.results.accessToken;
            localStorage.setItem("authToken", token);
            checkFirstLogin();
        }
    };

    const checkFirstLogin = async () => {
        const url = `${serverUrl}/userInfo`;
        const userInfo = await apiServices.get(url);

        if (userInfo.results && !userInfo.results.success) {
            openAlert("error", "Invalid user!", "Please login again.");
        } else {
            console.log("userInfo.results", userInfo.results.data[0]);
            if (userInfo.results && userInfo.results.data) {
                if (userInfo.results.data[0].location_city === null || userInfo.results.data[0].search_distance === null || userInfo.results.data[0].budget_min === null || userInfo.results.data[0].budget_max === null || userInfo.results.data[0].group_max_size === null || userInfo.results.data[0].group_min_size === null || userInfo.results.data[0].age_max_preferences === null || userInfo.results.data[0].age_min_preferences === null || userInfo.results.data[0].categories === null) {
                    props.history.push("/onboarding");
                } else {
                    props.history.push("/main");
                }
            }
        }
    };

    return (
        <>
            <div style={{ padding: "10%" }} className="fade-animation">
                <div className="row">
                    <a onClick={back}>
                        <img src={backArrow} alt="back" className="pl-0 pt-4 back-button-user-login" />
                    </a>
                </div>
                <br /> <br />
                <div className="row">
                    <div className="col">
                        <label className="font-weight-bold" style={{ fontSize: "22px" }}>Welcome to Neverbored</label>

                    </div>
                </div>
                <div className="row">
                    <div className="col" >
                        <p className="font-weight-bold" style={{ fontSize: "small" }}>because boredom is a choice.</p>
                    </div>
                </div>

                {/* <div className="row">
                    <div className="col">
                        <label className="sr-only" for="inlineFormInputGroup">example@mail.com</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-transparent login-input-left"><img src={emailIco} alt="" /></div>
                            </div>
                            <input type="text" className="form-control h-auto border-left-0 login-input-right" id="inlineFormInputGroup" placeholder="example@mail.com" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>

                </div> */}
                <div className="row" style={{ border: "1px solid", width: "100%",
                    marginLeft: "1%", padding: "0%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600", marginLeft: "-1%" }} className="row ">
                         Email
                        </div>
                        <div className="row">
                            <div className="col-1 mb-1 mt-2 ">
                                <img src={emailIco} />
                            </div><br />
                            <div className="col-1"></div>
                            <input style={{ fontSize: "12px", border: "1.5px solid #AEAEAE", border: "none", borderTopRightRadius: "1px", borderBottomRightRadius: "1px", width: "56%", marginTop: "-5px" }} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control h-auto border-left-0 login-input-right " id="inlineFormInputGroup" placeholder="example@mail.com" />

                        </div>
                    </div>
                </div>
                <br />
                {/* <div className="row">

                    <div className="col">
                        <label className="sr-only" for="inlineFormInputGroup">Password</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-transparent login-input-left"><img src={passwordIco} alt="" /></div>
                            </div>
                            <input type={showPassword ? "text" : "password"} id="userPassword" className="form-control1 h-auto border-left-0 " id="inlineFormInputGroup" style={{ border: "1.5px solid #AEAEAE", borderRight: "none", borderTopRightRadius: "1px", borderBottomRightRadius: "1px" }} placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" onChange={(e) => setPassword(e.target.value)} />
                            <div class="input-group-append">
                                <a onClick={() => setShowPassword(!showPassword)} className="input-group-text bg-transparent login-input-right" style={{ borderLeft: "none" }}> <img src={eye} /></a>

                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row" style={{ border: "1px solid", width: "100%",
                    marginLeft: "1%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600", marginTop: "-3%", marginLeft: "-3%" }} className="row">
                         Password
                        </div>
                        <div className="row">
                            <div style={{ marginTop: "4px" }} className="col-1 ml-n2">
                                <img src={key} />
                            </div><br />
                            <div className="col-1"></div>
                            <input placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} id="userPassword" className="form-control1 border-left-0 " id="inlineFormInputGroup" style={{ fontSize: "12px", border: "1.5px solid #AEAEAE", border: "none", borderTopRightRadius: "1px", borderBottomRightRadius: "1px", width: "56%", marginTop: "-5px" }} />
                            <div className3="input-group-append signup-password-view ml-5 mt-1">
                                <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"} onClick={() => setShowPassword(!showPassword)} ></i>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-2"></div>

                    <div className="col">
                        <label className="font-weight-bold float-right mt-1" style={{ fontSize: "18px" }}>Save login info &ensp; &ensp;</label>
                    </div>
                    <div className="col-2">

                        <label className="switch float-right">
                            <input type="checkbox" onChange={() => setRemember(!remember)} />
                            <span className="slider1 round"></span>
                        </label>
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <button className="next-btn btn-sm" onClick={submit} >Log in</button>
                </div>

            </div>
        </>
    );
}
export default emailLogin;
