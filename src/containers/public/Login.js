import React, { useState, useEffect, useContext } from "react";
import useForm from "../../hooks/use-form";
import { validateLogin } from "../../core/validations/login-validations";
import { loginUser, googleLogin } from "../../core/services/api/user-details";
import logo from "../../assets/images/logoRound.svg";
import carouselImage1 from "../../assets/images/login/1.svg";
import carouselImage2 from "../../assets/images/login/2.svg";
import carouselImage3 from "../../assets/images/login/3.svg";
import carouselImage4 from "../../assets/images/login/4.svg";
import googleIcon from "../../assets/icons/google-color.svg";
import infowhite from "../../assets/icons/infowhite.svg";
import "../../assets/css/custom.css";
import useAlert from "../../hooks/use-alert";
import leftIcon from "../../assets/icons/coroselleft.svg";
import RightIcon from "../../assets/icons/coroselright.svg";
import GoogleLogin from 'react-google-login';
import { serverUrl } from '../../configs/api-endpoints';
import APIServices from '../../../src/core/services/data/api-services';
function Login(props) {
    // Check Url, if SSO logged in

    const apiServices = new APIServices();
    const submitLogin = async () => {
        const payload = {
            email: values.email,
            password: values.password
        };
        const user = await loginUser(payload);
        if (user.error) {
            openAlert("error", "Invalid user!", "Please check email and password.");
        }
        // props.history.push("/dashboard");
    };
    const responseSuccessGoogle = async (res) => {
        const url1 = `https://people.googleapis.com/v1/people/${res.googleId}?personFields=birthdays,genders&access_token=${res.accessToken}`;
        const user1 = await apiServices.get(url1, "get");

        console.log("asdfgff", user1);
        if (user1 && user1.results.birthdays != undefined) {
            const data = {
                dob: `${user1.results.birthdays[0].date.year}-${user1.results.birthdays[0].date.month}-${user1.results.birthdays[0].date.day}`,
                email: res.profileObj.email,
                fullName: res.profileObj.name
            };

            const url = `${serverUrl}/googleLogin`;
            const type = "post";
            const user = await apiServices.post(url, data, type);
            console.log(user);
            if (user.results && !user.results.success) {

            } else {
                const token = user.results.accessToken;
                localStorage.setItem("authToken", token);
                checkFirstLogin();
            }
        } else {
            openAlert("error", "Invalid user!", "Make Sure your Birthday must be private.");
        }
    };

    const responseFalseGoogle = (res) => {
        console.log(res.profileObj);
    };
    const { values, errors, handleSubmit, handleChange } = useForm(
        submitLogin,
        validateLogin
    );
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
    const { openAlert } = useAlert();

    return (
        <>

            <section className="login-section ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 pl-0 pr-0">
                            <div >

                                <div id="carouselExampleIndicators" className="carousel slide caret-hide" data-ride="carousel">
                                    <center style={{ marginLeft: "-35px" }}>
                                        <img src={logo} className="carousel-logo ml-n5" ></img>
                                    </center>

                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={carouselImage1} alt="First slide" />

                                            <div className="carousel-caption  d-md-block">
                                                <p style={{ color: "green" }}>Neverbored spotlight
                                                    {"      "}
                                                </p>
                                                <div className="row">
                                                    <div className="col-10">   <p className="font-weight-bold carousel-caption-size caret-hide" style={{ fontSize: "25px" }} >Scenic offroad buggy  cross

                                                    </p></div>
                                                    <div className="col-1" style={{ paddingTop: "3%" }}>  <img src={infowhite}/></div>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={carouselImage2} alt="Second slide" />
                                            <div style={{ right: "0% !important;", left: "0% !important;" }} className="carousel-caption  d-md-block">
                                                <p style={{ color: "green" }}>Neverbored spotlight
                                                    {"      "}
                                                </p>
                                                <div className="row">
                                                    <div className="col-10"> <p className="font-weight-bold  caret-hide" style={{ fontSize: "25px" }} >Extreme bungee jumping over Amazing India

                                                    </p></div>
                                                    <div className="col-1" style={{ paddingTop: "9%" }}>  <img src={infowhite}/></div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={carouselImage3} alt="Third slide" />
                                            <div className="carousel-caption  d-md-block">
                                                <p style={{ color: "green" }}>Neverbored spotlight
                                                    {"      "}
                                                </p>
                                                <div className="row">
                                                    <div className="col-9">     <p className="font-weight-bold carousel-caption-size caret-hide" style={{ fontSize: "25px" }}>Top yoga class

                                                    </p></div>
                                                    <div className="col-1" style={{ paddingTop: "3%" }}>  <img src={infowhite}/></div>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={carouselImage4} alt="Fourth slide" />
                                            <div className="carousel-caption  d-md-block">
                                                <p style={{ color: "green" }}>Neverbored spotlight
                                                    {"      "}
                                                </p>
                                                <p className="font-weight-bold carousel-caption-size caret-hide" style={{ fontSize: "25px" }}>Climbwall frenzy
                                                    {"        "}   <img src={infowhite}/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span aria-hidden="true"><img src={leftIcon}></img></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span aria-hidden="true"><img src={RightIcon}></img></span>
                                <span class="sr-only">Next</span>
                            </a>


                        </div>
                        <div className="col-12 login-bg mt-4">
                            <center><button type="button" className="btn button-lg text-white" style={{ background: "#2D9B63" }} onClick={() => props.history.push("/userLogin")}><h5>Log in</h5></button></center>
                            <center>


                                <GoogleLogin
                                    render={(renderProps) => <button type="button" style={{ fontSize: "20px" }}className="btn btn-light button-lg text-dark mt-3" onClick={renderProps.onClick} disabled={renderProps.disabled}><img style={{ height: "30px", marginRight: "7px" }} src={googleIcon}></img>Log in with Google</button>
                                    }
                                    style={{ border: "0px", background: 'red' }}
                                    clientId="1018298994272-nntbk1ohockuiasgdt95btmuf0h8lhi4.apps.googleusercontent.com"
                                    buttonText="Log in with Google"
                                    onSuccess={responseSuccessGoogle}
                                    onFailure={responseFalseGoogle}
                                    cookiePolicy={'single_host_origin'}

                                />

                            </center>
                            <div className="col-12 mt-4">
                                <center>
                                    <p>Don’t have an account? <button onClick={() => props.history.push("/signup")} type="button" className="btn btn-link text-success caret-hide">Sign up</button></p>
                                </center>
                            </div>

                            <div className="col-12 mb-5">
                                {/* {/ <center> /} */}
                                <span className="float-left login-footer caret-hide">Continue without an account </span>
                                <span className="font-weight-bold float-right login-footer1 text-muted caret-hide" >   More info</span>
                                {/* {/ </center> /} */}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
