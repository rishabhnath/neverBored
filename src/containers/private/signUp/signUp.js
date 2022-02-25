import React, { useEffect, useState } from 'react';
import circle from '../../../assets/icons/circle.svg';
import backArrow from '../../../assets/icons/back_arrow.svg';
// import Onboarding1 from './onboarding1';
import APIServices from '../../../core/services/data/api-services';
import { serverUrl } from '../../../configs/api-endpoints';
import useAlert from "../../../hooks/use-alert";
import SignupEmail from "./signupEmail";
import SignupPassword from "./signUpPassword";
import SignUpProfile from "./signUpProfile";
import { registerUser } from "../../../core/services/api/user-details";
import Loader from "react-loader-spinner";
const Signup = (props) => {
    const [step, updateStep] = useState(0);
    const apiServices = new APIServices();
    const { openAlert } = useAlert();
    const [user_data, setUser_data] = useState([]);
    const [email1, setemail] = useState("");

    const [password1, setpassword] = useState("");
    const [passwordValdation, setpasswordValidation] = useState(false);
    const [dob1, setdob] = useState("");
    const [fullname1, setfullname] = useState("");
    const [language1, setLanguge] = useState("");
    const [loader, setloader] = useState(false);
    const Activity = { setdob, setLanguge, email1, setemail, setfullname, fullname1, language1, dob1 };

    const getUserInfo = async () => {
        const url = `${serverUrl}/userInfo`;
        const userInfo = await apiServices.get(url);

        if (userInfo.results && !userInfo.results.success) {
            openAlert("error", "Invalid user!", "Please login again.");
        } else {
            console.log("userInfo.results", userInfo.results.data[0]);
            setUser_data(userInfo.results.data);
            if (userInfo.results && userInfo.results.data) {
                if (userInfo.results.data[0].location_city === null || userInfo.results.data[0].search_distance === null) updateStep(1);
                else if (userInfo.results.data[0].budget_min === null || userInfo.results.data[0].budget_max === null) updateStep(2);
                else if (userInfo.results.data[0].group_max_size === null || userInfo.results.data[0].group_min_size === null || userInfo.results.data[0].age_max_preferences === null || userInfo.results.data[0].age_min_preferences === null || userInfo.results.data[0].categories === null) updateStep(3);
            }
        }
    };

    const nextStep = async () => {
        // if (step < 4) updateStep(step + 1);
    };

    const Submit = async () => {
        if (step == 0 && email1 != "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email1) && password1 != "" && dob1 != "" && language1 != "") {
            openAlert("error", "Invalid user!", "Please insert all the fields.");
        } else {
            const url = `${serverUrl}/register`;
            const type = "post";
            const payload = {
                email: email1,
                password: password1,
                dob: dob1,
                language: language1,
                fullname: fullname1
            };
            const user = await apiServices.post(url, payload, type);
            setloader(true);
            if (user.results.success == true) {
                const token = user.results.accessToken;
                localStorage.setItem("authToken", token);

                openAlert("success", "Succesfully", "User Registor Succesfully.");
                props.history.push("/onboarding", { initStep: 0 });
                return;
            }
            if (user.error) {
                setloader(false);
                console.log(user.error, user);
                openAlert("error", "Invalid user!", user.results.msg);
            }
        }
    };
    const backStep = () => {
        if (step == 0 && email1 != "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email1)) {
            updateStep(step + 1);
        } else if (step == 0) {
            openAlert("error", "Invalid user!", "email not valid.");
        }
        console.log(password1, passwordValdation);
        if (step == 1 && password1 != "" && passwordValdation == true) {
            updateStep(step + 1);
        } else if (step == 1) {
            openAlert("error", "Invalid user!", "password not valid.");
        }
    };

    const backStep1 = () => {
        if (step != 0) {
            updateStep(step - 1);
        }
    };
    return (
        <>
            <div className="row mr-0">
                <div className="col-2">
                    <a onClick={backStep1}>
                        <img src={backArrow} alt="back" className="pl-1 pt-4 ml-5" />
                    </a>


                </div>
                <div className="col-8">
                    <p className="pl-5 pt-4 ml-5" style={{ fontWeight: "bold", fontSize: "22px" }}>Sign Up</p>
                </div>
            </div>
            <header>
                <ol className="stepper-indicators1 mt-3">
                    <li className={step >= 0 ? "active" : ""}></li>
                    <li className={step >= 1 ? "active" : ""}></li>
                    <li className={step >= 2 ? "active" : ""}></li>
                    <li className={step >= 3 ? "active" : ""}></li>
                </ol>
            </header>
            <section>
                <br />
                <br />
                {step == 0 && <SignupEmail email={setemail} email1={email1}/> }
                {step === 1 && <SignupPassword setpassword={setpassword} passwordValue={password1} validation={setpasswordValidation} validationvalue={passwordValdation}/>}
                {step === 2 ? <SignUpProfile Activity={Activity} /> : <></>}
                {step === 2 ? <>
                    <div className="row mr-0">
                        <div className="col-6">
                            <button style={{ textColor: "black" }} className="next-btn1 btn-xs" onClick={() => { updateStep(step - 1); }}>back</button>
                        </div>
                        {loader == false ?
                            <div className="col-6">
                                <button className="next-btn2 btn-xs" onClick={Submit} >Create Account</button>
                            </div> : <div className="col-6">
                                <button className="next-btn2 btn-xs" ><div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div></button>
                            </div> }
                    </div>
                </> : <button className="next-btn btn-xs" onClick={backStep}>Next</button>
                }
                <br/>

            </section>


        </>
    );
};

export default Signup;
