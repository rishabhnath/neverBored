import React from 'react';
import backArrow from '../../../assets/icons/back_arrow.svg';
import profile from '../../../assets/icons/profile.svg';
import edit from '../../../assets/icons/edit.svg';
import dorpdown from '../../../assets/icons/dropdown_right_arrow.svg';
import delete1 from '../../../assets/icons/delete1.svg';
import mail from '../../../assets/icons/mail.svg';
import cake from '../../../assets/icons/cake.svg';
import defaultProfilePic from '../../../assets/images/default/lizabell.jpg';
import setting from '../../../assets/icons/setting.svg';
import completion from '../../../assets/icons/completion.svg';
import profileStar from "../../../assets/icons/profilestart.svg";
import about from "../../../assets/icons/about.svg";
import help from "../../../assets/icons/help.svg";
import { useHistory } from "react-router-dom";
function Profile(props) {
    const history = useHistory();
    return (
        <>


            <div className="card" style={{ backgroundColor: "#2D9B63", height: "58px", width: "100%" }}>

            </div>

            <div className="mt-4">
                <div className="row mr-0 ml-0">
                    <div className="col-2">
                        <img src={defaultProfilePic} alt="profilePic" className=" caret-hide rounded-circle small_rounded_img" />
                    </div>
                    <div className="col-8">
                        <div className="col-12">
                            <p className="font-weight-bold  caret-hide pt-1 h5 mb-0 font-open-sans-regular">Johanna Doe</p>
                        </div>
                        <div className="col-12">
                            <p className="text-muted  caret-hide pt-1 font-open-sans-regular"><img src={cake}></img>1 January 2022</p>

                        </div>
                    </div>


                </div>
                <section className="mt-5">
                    <div className="row  mr-0 ml-0" style={{ marginBottom: "-22px" }} onClick={() => history.push("/editprofile")}>
                        <div className="col-1" >
                            <img src={profile} alt="edit" className="p-3" />

                        </div>
                        <div className="col-8">
                            <p className="font-open-sans-regular font-weight-bold caret-hide p-3" >My Profile</p>
                        </div>
                        <div className="col-2" >
                            <img src={dorpdown} alt="back" className="p-3 caret-hide mt-2" />

                        </div>
                    </div>
                    <hr />
                    <div className="row  mr-0 ml-0" style={{ marginBottom: "-22px" }} onClick={() => props.history.push("/editprofile")}>
                        <div className="col-1" >
                            <img src={setting} alt="edit" className="p-3 caret-hide " />

                        </div>
                        <div className="col-8" >
                            <p className="font-open-sans-regular font-weight-bold p-3 caret-hide ">Setting</p>
                        </div>
                        <div className="col-2" >
                            <img src={dorpdown} alt="back" className=" caret-hide p-3 mt-2" />

                        </div>
                    </div>
                    <hr />
                    <div className="row  mr-0 ml-0" style={{ marginBottom: "-22px" }}>
                        <div className="col-1" >
                            <img src={completion} alt="edit" className="p-3 caret-hide " />

                        </div>
                        <div className="col-8" >
                            <p className="font-open-sans-regular font-weight-bold caret-hide  p-3">Completions</p>
                        </div>
                        <div className="col-2" >
                            <a onClick={() => props.history.push("/resetpass")}><img src={dorpdown} alt="back" className="p-3 caret-hide mt-2" /></a>

                        </div>
                    </div>
                    <hr />
                    <div className="row  mr-0 ml-0" style={{ marginBottom: "-22px" }}>
                        <div className="col-1" >
                            <img src={profileStar} alt="edit" className="p-3 caret-hide " />

                        </div>
                        <div className="col-8" >
                            <p className="font-open-sans-regular font-weight-bold caret-hide  p-3">Reviews</p>
                        </div>
                        <div className="col-2" >
                            <a onClick={() => props.history.push("/resetpass")}><img src={dorpdown} alt="back" className="p-3 caret-hide mt-2" /></a>

                        </div>
                    </div>
                    <hr />
                    <div className="row  mr-0 ml-0" style={{ marginBottom: "-22px" }}>
                        <div className="col-1" >
                            <img src={about} alt="edit" className="p-3 caret-hide " />

                        </div>
                        <div className="col-8" >
                            <p className="font-open-sans-regular font-weight-bold caret-hide  p-3">About Neverbored</p>
                        </div>
                        <div className="col-2" >
                            <a onClick={() => props.history.push("/resetpass")}><img src={dorpdown} alt="back" className="p-3 caret-hide mt-2" /></a>

                        </div>
                    </div>
                    <hr />
                    <div className="row  mr-0 ml-0" style={{ marginBottom: "-22px" }}>
                        <div className="col-1" >
                            <img src={help} alt="edit" className="p-3 caret-hide " />

                        </div>
                        <div className="col-8" >
                            <p className="font-open-sans-regular font-weight-bold caret-hide  p-3">Help & feedback</p>
                        </div>
                        <div className="col-2" >
                            <a onClick={() => props.history.push("/resetpass")}><img src={dorpdown} alt="back" className="p-3 caret-hide mt-2" /></a>

                        </div>
                    </div>
                    <hr />
                    <br/><br/><br/>

                    <div className="row  mr-0 ml-0" style={{ marginBottom: "-22px", marginTop: "60%" }}>
                        <div className="col-1" >
                            <img src={ delete1 } alt="edit" className="p-3 caret-hide" />

                        </div>

                        <div className="col-7" >
                            <p className="font-open-sans-regular caret-hide font-weight-bold p-3 text-muted" style={{ color: "#E5E5E5" }}>Remove Account</p>
                        </div>

                        <div className="col-3 mt-2" >
                            <button className="log-out caret-hide " onClick={() => props.history.push("/login")
                            } >Log Out</button>
                        </div>
                    </div>
                </section>

            </div>


        </>
    );
}

export default Profile;
