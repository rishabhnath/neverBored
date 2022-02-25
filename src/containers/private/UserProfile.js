import React from 'react';
import backArrow from '../../assets/icons/back_arrow.svg';
import password from '../../assets/icons/password.svg';
import edit from '../../assets/icons/edit.svg';
import dorpdown from '../../assets/icons/dropdown_right_arrow.svg';
import delete1 from '../../assets/icons/delete1.svg';
import mail from '../../assets/icons/mail.svg';
import cake from '../../assets/icons/cake.svg';
import defaultProfilePic from '../../assets/images/default/lizabell.jpg';


function UserProfile(props) {
    return (
        <>


            <div className="card" style={{ backgroundColor: "#2D9B63", height: "58px", width: "100%" }}>
                <div className="row  ml-0">
                    <div className="col-0.8 caret-hide">

                    </div>
                    <div className="col-1 caret-hide">
                        <img src={backArrow} alt="back" className="p-3" />
                    </div>
                    <div className="col-2 caret-hide">

                    </div>
                    <div className="col-6 caret-hide mt-2 pl-5" style={{ fontSize: "25px" }}>
                        <p style={{ color: "white" }}>My Profile</p>
                    </div>
                </div>
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
                    <div className="row " style={{ marginBottom: "-22px" }} >
                        <div className="col-1" >
                            <img src={edit} alt="edit" className="p-3" />

                        </div>
                        <div className="col-8" onClick={() => props.history.push("/editprofile")}>
                            <p className="font-open-sans-regular font-weight-bold caret-hide p-3" >Edit info</p>
                        </div>
                        <div className="col-2" >
                            <img src={dorpdown} alt="back" className="p-3 caret-hide mt-2" />

                        </div>
                    </div>
                    <hr />
                    <div className="row" style={{ marginBottom: "-22px" }} onClick={() => props.history.push("/editprofile")}>
                        <div className="col-1" >
                            <img src={mail} alt="edit" className="p-3 caret-hide " />

                        </div>
                        <div className="col-8" >
                            <p className="font-open-sans-regular font-weight-bold p-3 caret-hide ">Email Address</p>
                        </div>
                        <div className="col-2" >
                            <img src={dorpdown} alt="back" className=" caret-hide p-3 mt-2" />

                        </div>
                    </div>
                    <hr />
                    <div className="row" style={{ marginBottom: "-22px" }}>
                        <div className="col-1" >
                            <img src={password} alt="edit" className="p-3 caret-hide " />

                        </div>
                        <div className="col-8" >
                            <p className="font-open-sans-regular font-weight-bold caret-hide  p-3">Reset Password</p>
                        </div>
                        <div className="col-2" >
                            <a onClick={() => props.history.push("/resetpass")}><img src={dorpdown} alt="back" className="p-3 caret-hide mt-2" /></a>

                        </div>
                    </div>
                    <hr /><br/><br/><br/>

                    <div className="row " style={{ marginBottom: "-22px", marginTop: "60%" }}>
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

export default UserProfile;
