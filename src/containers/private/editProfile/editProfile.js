import React from 'react';
import backArrowWhite from '../../../assets/icons/backArrowWhite.svg';
import password from '../../../assets/icons/password.svg';
import edit from '../../../assets/icons/edit.svg';
import dorpdown from '../../../assets/icons/dropdown_right_arrow.svg';
import delete1 from '../../../assets/icons/delete1.svg';
import mail from '../../../assets/icons/mail.svg';
import defaultProfilePic from '../../../assets/images/default/lizabell.jpg';
// import editPro1 from '../../../assets/icons/editPro1.svg';

import fullname from '../../../assets/icons/fullname.svg';
import info from '../../../assets/icons/info.svg';


function EditProfile(props) {
    const back = () => {
        props.history.push("/userprofile");
    };
    return (
        <>
            <div className="fade-animation">
                <div className="card" style={{ height: "70px", background: "#2D9B63", borderRadius: "0" }}>
                    <div className="row mr-0">
                        <div className="col-3">
                            <a onClick={back}>
                                <img src={backArrowWhite} alt="back" className="ml-4 caret-hide pt-4 back-button-user-login" />
                            </a>
                        </div>
                        <div className="col pt-4 font-weight-bold text-white caret-hide">
                            <span className="pl-3 caret-hide " style={{ fontSize: "18px", marginLeft: "13%" }}>Edit Info</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img style={{ marginLeft: "30%", borderRadius: "50%" }} src={defaultProfilePic} />
                    <img style={{ position: "absolute",
                        left: "56.67%",
                        top: "27%"
                    }} src={edit} />
                </div>
                <br />
                <div className="row" style={{ border: "1.5px solid #AEAEAE", width: "86%",
                    marginLeft: "7%", padding: "1%", borderRadius: "4%"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                          Full Name
                        </div>
                        <div className="row">
                            <div style={{ marginTop: "3%" }} className="col-1">
                                <img src={fullname} />
                            </div><br />
                            <div className="col-1"></div>
                            <input onChange={(e) => { Activity.setfullname(e.target.value); } } type= "text"id="userPassword" className="form-control1 h-auto border-left-0 " id="inlineFormInputGroup" style={{ fontSize: "17px", border: "1.5px solid #AEAEAE", border: "none", borderTopRightRadius: "1px", borderBottomRightRadius: "1px", width: "56%" }} />

                        </div>
                    </div>
                </div>
                <hr />
                <div className="row" style={{ border: "1.5px solid #AEAEAE", width: "86%",
                    marginLeft: "7%", padding: "1%", borderRadius: "4%" }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                       Date of birth

                            <img src={info} style={{ marginLeft: "8%" }} data-toggle="tooltip" data-placement="bottom" title="Why do we ask this?
                             We use it to offer a more personal experience" />

                        </div>
                        <div className="row">

                            <div className="col-12">
                                <input onChange={(e) => { setdob(e.target.value); }} type="date" id="userPassword" className="form-control1 h-auto border-left-0" id="inlineFormInputGroup" style={{ border: "1.5px solid #AEAEAE", border: "none", borderTopRightRadius: "1px", borderBottomRightRadius: "1px", background: "white", width: "62%" }} />
                            </div>
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
export default EditProfile;
