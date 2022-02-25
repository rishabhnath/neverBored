import React, { useEffect, useState } from 'react';
import backArrow from '../../../assets/icons/back_arrow.svg';
import fullname from '../../../assets/icons/fullname.svg';
import passwordIco from '../../../assets/icons/passwordIco.svg';
import eye from '../../../assets/icons/eye.svg';
import APIServices from '../../../core/services/data/api-services';
import useAlert from "../../../hooks/use-alert";
import { serverUrl } from '../../../configs/api-endpoints';
import calender from '../../../assets/icons/calender.svg';
import info from '../../../assets/icons/info.svg';


const apiServices = new APIServices();

function signUpProfile(props) {
    const { Activity } = props;
    const { openAlert } = useAlert();
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const back = () => {
        props.history.push("/");
    };
    // const { openAlert } = useAlert();
    const userData = props.location && props.location.state || [];
    const [lang, setLang] = useState(true);


    const changeLang = (val) => {
        console.log(val, typeof val);
        if (lang === val) setLang("");
        else {
            setLang(val);
            props.Activity.setLanguge(val);
        }
    };
    useEffect(() => {
        if (userData.length > 0) {
            setLang(userData[0].language);
        }
    }, []);

    const submit = async () => {
        console.log(serverUrl);
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
        console.log(serverUrl);
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
                    props.history.push("/userprofile");
                }
            }
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row" style={{ marginBottom: "3%" }} >
                    <div className="col-1"></div>
                    <div className="col-11">
                        <label className="font-weight-bold" style={{ fontSize: "22px" }}>Personal info & preferences</label>
                    </div>
                </div>
                {/* <div className="row" style={{ border: "1px solid", width: "80%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                            fullname
                        </div>
                        <div className="row">
                            <div style={{ marginTop: "4px" }} className="col-1">
                                <img src={fullname} /><span> <input onChange={(e) => { Activity.setfullname(e.target.value); }} type="text" className="form-control h-auto border-left-0 login-input-right" id="inlineFormInputGroup" placeholder="Jhon due"/></span>

                            </div>

                        </div>
                    </div>
                </div>
                <br /> */}
                <div className="row" style={{ border: "1.5px solid #AEAEAE", width: "80%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                          Full Name
                        </div>
                        <div className="row">
                            <div style={{ marginTop: "4px" }} className="col-1">
                                <img src={fullname} />
                            </div><br />
                            <div className="col-1"></div>
                            <input value={Activity.fullname1} onChange={(e) => { Activity.setfullname(e.target.value); } } type= "text"id="userPassword" className="form-control1 h-auto border-left-0 custom-caret  " id="inlineFormInputGroup" style={{ fontSize: "19px", border: "1.5px solid #AEAEAE", border: "none", borderTopRightRadius: "1px", marginTop: "-3%", borderBottomRightRadius: "1px", width: "56%" }} />

                        </div>
                    </div>
                </div>
                <br />
                <div className="row" style={{ border: "1.5px solid #AEAEAE", width: "80%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%" }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                       Date of birth

                            <img src={info} style={{ marginLeft: "56%" }} data-toggle="tooltip" data-placement="bottom" title="Why do we ask this?
                             We use it to offer a more personal experience" />

                        </div>
                        <div className="row">

                            <div className="col-12">
                                <input value={Activity.dob1} onChange={(e) => { Activity.setdob(e.target.value); }} type="date" id="userPassword" className="form-control1 h-auto border-left-0 custom-caret " id="inlineFormInputGroup" style={{ border: "1.5px solid #AEAEAE", border: "none", borderTopRightRadius: "1px", borderBottomRightRadius: "1px", background: "white", width: "62%" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div style={{ border: "1.5px solid #AEAEAE", borderRadius: "11px", marginLeft: "15px" }}>
                    <div sty className="row pl-3 pr-3 mr-0">
                        <div className="col" >
                            <p className="font-weight-bold caret-hide" style={{ fontSize: "16px", marginTop: "4%" }}>Language</p>
                        </div>
                    </div>
                    <div class="container">
                        <div class="round1 caret-hide">
                            <input className="caret-hide" style={{ borderColor: "#626262" }} type="checkbox" checked={Activity.language1 === "Nederlands"} id="checkbox1" onClick={() => changeLang("Nederlands")} />
                            <label for="checkbox1"></label>
                            <p className="caret-hide" style={{ marginLeft: "13%", fontWeight: "bold", marginTop: "-5%" }}>Nederlands</p>

                        </div>
                        <br />
                        <div class="round1 caret-hide" style={{ marginTop: "-7%" }}>
                            <input type="checkbox" checked={Activity.language1 === "English"} id="checkbox2" onClick={() => changeLang("English")} />
                            <label for="checkbox2"></label>
                            <p style={{ marginLeft: "13%", fontWeight: "bold", marginTop: "-6%" }}>English</p>

                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "40px" }}>
                    <div className="col-1"></div>
                    <div className="col-9" >
                        <p>By creating an account you confirm you have read and agreed with our <b>Terms and Conditions </b>  and <b> Privacy Policy </b> </p>
                    </div>
                </div>


                <br />
                <span>

                </span>
            </div>
        </>
    );
}
export default signUpProfile;
