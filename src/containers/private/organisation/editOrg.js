import React, { useState } from 'react';
import backArrow from '../../../assets/icons/backArrowWhite.svg';
import useAlert from '../../../hooks/use-alert';
import organisation from '../../../assets/icons/organisation.svg';
import imageinfo from '../../../assets/icons/imageinfo.svg';
import dropdown_right_arrow from '../../../assets/icons/dropdown_right_arrow.svg';
import friend from '../../../assets/icons/friend.svg';
import starN from '../../../assets/icons/starN.svg';
import org1 from '../../../assets/icons/org1.svg';
import orgstar from '../../../assets/icons/orgstar.svg';
import eye from '../../../assets/icons/eye.svg';
import orgbucket from '../../../assets/icons/orgbucket.svg';
import delete1 from '../../../assets/icons/delete1.svg';
import linkWhite from '../../../assets/icons/linkWhite.svg';


const EditOrganisation = (props) => {
    const { openAlert } = useAlert();
    const [remember, setRemember] = useState(false);

    const back = () => {
        props.history.push("/settings");
    };

    return (
        <>
            <div className="fade-animation">
                <div className="card" style={{ height: "103px", background: "#2D9B63", borderRadius: "0" }}>
                    <div className="row mr-0">
                        <div className="col-3">
                            <a onClick={back}>
                                <img src={backArrow} alt="back" className="ml-4 caret-hide pt-5 back-button-user-login" />
                            </a>
                        </div>
                        <div className="col pt-5 font-weight-bold text-white caret-hide">
                            <span className="pl-3 caret-hide" style={{ fontSize: "18px", margin: "2%", marginTop: "17px" }}>Edit Organisation</span>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3  caret-hide">
                            <img style={{ width: "64px", height: "64px" }}src={organisation} className="rounded-circle" />
                        </div>

                        <div className="col mt-3">
                            <p style={{ fontWeight: "bold", fontSize: "22px", lineHeight: "30px", letterSpacing: "-0.3px", color: "#000000" }}className="caret-hide" >Organisation name</p>
                        </div>

                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-2 ml-3">
                            <img src={imageinfo} className=" caret-hide " />
                        </div>

                        <div className="col-6"><p>image and info</p>
                        </div>
                        <div className="col mr-2">
                            <img src={dropdown_right_arrow} className=" caret-hide float-right" />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-2 ml-3">
                            <img src={friend} className=" caret-hide" />
                        </div>

                        <div className="col-6"><p>Member</p>
                        </div>
                        <div className="col  mr-2">
                            <img src={dropdown_right_arrow} className=" caret-hide float-right" />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-2 ml-3">
                            <img src={starN} className=" caret-hide " />
                        </div>

                        <div className="col-6"><p>Official verification</p>
                        </div>
                        <div className="col  mr-2">
                            <img src={dropdown_right_arrow} className=" caret-hide float-right" />
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col font-weight-bold ml-1">
                       Activities &nbsp; (21)
                        </div>
                    </div>

                    <div className="row">
                        <div style={{ marginTop: "12px" }} className="col-2" >
                            <img src={org1} />
                        </div>
                        <div style={{ marginLeft: "62px", marginTop: "12px" }} className="col-8">
                            <div className="row">
                                <p className="pr-5 font-weight-bold">Activity title name long title on two lines is the max</p>
                            </div>
                            <div style={{ marginTop: "-8px" }} className="row">
                                <div className="col-3 p-0" >
                                    <span><img src={orgstar} /> <span>4.8</span></span>
                                </div>
                                <div className="col-3 p-0" >
                                    <img style={{ width: "15px" }}src={eye} /><span>122</span>
                                </div>
                                <div className="col-3 p-0" >
                                    <img src={orgbucket} /><span>16</span>
                                </div>
                                <div style={{
                                    marginLeft: "-18px"
                                }}className="col-3 p-0" >
                                    <button type="button" class="btn btn-success rounded-pill h-75">Online</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div style={{ marginTop: "12px" }} className="col-2" >
                            <img src={org1} />
                        </div>
                        <div style={{ marginLeft: "62px", marginTop: "12px" }} className="col-8">
                            <div className="row">
                                <p className="pr-5 font-weight-bold">Activity title name long title on two lines is the max</p>
                            </div>
                            <div style={{ marginTop: "-8px" }} className="row">
                                <div className="col-3 p-0" >
                                    <span><img src={orgstar} /> <span>4.8</span></span>
                                </div>
                                <div className="col-3 p-0" >
                                    <img style={{ width: "15px" }}src={eye} /><span>122</span>
                                </div>
                                <div className="col-3 p-0" >
                                    <img src={orgbucket} /><span>16</span>
                                </div>
                                <div style={{
                                    marginLeft: "-18px"
                                }}className="col-3 p-0" >
                                    <button type="button" class="btn btn-success rounded-pill h-75">Online</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">

                        <div style={{ marginTop: "12px" }} className="col-2" >
                            <img src={org1} />
                        </div>
                        <div style={{ marginLeft: "62px", marginTop: "12px" }} className="col-8">
                            <div className="row">
                                <p className="pr-5 font-weight-bold">Activity title name long title on two lines is the max</p>
                            </div>
                            <div style={{ marginTop: "-8px" }} className="row ">
                                <div className="col-3 p-0" >
                                    <span><img src={orgstar} /> <span>4.8</span></span>
                                </div>
                                <div className="col-3 p-0" >
                                    <img style={{ width: "15px" }}src={eye} /><span>122</span>
                                </div>
                                <div className="col-3 p-0" >
                                    <img src={orgbucket} /><span>16</span>
                                </div>
                                <div style={{
                                    marginLeft: "-18px"
                                }} className="col-3 p-0" >
                                    <button type="button" class="btn btn-success rounded-pill h-75">Online</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-4">
                        <a className="col text-muted font-weight-bold text-center" style={{ fontSize: "15px" }}>
                        SHOW All &nbsp;
                        </a>
                    </div>

                    <br />
                    <hr />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <div className="col h6 font-weight-bold text-muted ml-4">
                            <img src={delete1} /> &nbsp;Remove Organization
                        </div>
                    </div>

                    <hr />
                    <div className="row">
                        <div className="col">
                            <button className="border-button">Create new activity</button>
                        </div>
                        <br />
                        <br />
                    </div>


                </div>
            </div>

        </>
    );
};
export default EditOrganisation;
