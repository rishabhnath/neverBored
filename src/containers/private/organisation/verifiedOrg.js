import React, { useState } from 'react';
import backArrow from '../../../assets/icons/backArrowWhite.svg';
import useAlert from '../../../hooks/use-alert';
import organisation from '../../../assets/icons/organisation.svg';
import pen from '../../../assets/icons/pencilWhiteOutline.svg';
import share from '../../../assets/icons/share.svg';
import dotMenuButtonWhite from '../../../assets/icons/dotMenuButtonWhite.svg';
import org from '../../../assets/images/org.svg';
import delete1 from '../../../assets/icons/delete1.svg';
import linkWhite from '../../../assets/icons/linkWhite.svg';
import org1 from '../../../assets/icons/org1.svg';
import whiteCheckedGreenBackground from '../../../assets/icons/whiteCheckedGreenBackground.svg';
import Star from '../../../components/shared/5star';
import locationGrey from '../../../assets/icons/locationGrey.svg';

const VerifiedOrg = (props) => {
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
                        <div className="col-3">
                        </div>
                        <div className="col-2">
                            <img src={pen} className="ml-4 caret-hide pt-5" />
                        </div>
                        <div className="col-2">
                            <img src={share} className="ml-4 caret-hide pt-5 " />
                        </div>
                        <div className="col-2">
                            <img src={dotMenuButtonWhite} className="ml-4 caret-hide pt-5 " />
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ marginLeft: "38%" }} className="row">
                    <div className="col-3  caret-hide">
                        <img src={organisation} className="rounded-circle" />
                    </div>
                </div>
                <br/>
                <div style={{ fontWeight: "bold", fontSize: "22px", color: "#333333", marginLeft: "25%"
                }} className="row">
                    <p>Organisation name</p>
                </div>
                <div style={{ marginLeft: "37%", color: "#A8A8A8", fontWeight: "600", fontSize: "16px"
                }} className="row">
                    <p>Organisation</p>
                </div>
                <div className="container-fluid">
                    <div className="row mr-0">
                        <div className="col-2"></div>
                        <div className="col-3 p-0 ml-5" >
                            <img src={org} />
                            <span style={{ fontWeight: "bold", fontSize: "18px", color: "#000000" }} className="ml-2">14</span>
                            <p style={{ color: "#9C9C9C" }}>Activity</p>
                        </div>
                        <div className="col-3 p-0 ml-auto" >
                            <img src={org} />
                            <span style={{ fontWeight: "bold", fontSize: "18px", color: "#000000" }} className="ml-2">4.8</span>
                            <p className="ml-n2" style={{ color: "#9C9C9C" }}>Overall rating</p>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <hr />
                    <p style={{ fontWeight: "bold", fontSize: "16px", color: "#000000" }}>About us</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <div className="row  caret-hide">
                        <div className="col-3">
                            <img src={org} />
                            <p>Email</p>
                        </div>
                        <div className="col-3">
                            <img src={org} />
                            <p>Phone</p>
                        </div>
                        <div className="col-3">
                            <img src={org} />
                            <p>Website</p>
                        </div>
                    </div>
                    <hr />
                    <br/>
                    <div >
                        <div className="row mr-0">
                            <div className="col-3 card bucket-list-profile ml-4 border-0" style={{ backgroundImage: `url(${org1})` }}>
                                <div className="col mt-2" >
                                    <button className="user-bucketList-card-bucket font-weight-bold text-success ml-n4" >
                                        <img src={org} />{""}
                                    </button>
                                    <span>
                                        <img className="mr-n4 float-right mt-1" src={whiteCheckedGreenBackground} />
                                    </span>
                                </div>

                            </div>

                            <div style={{ heightL: "10px" }} className="col-8 font-weight-bold">

                                <div className="pt-2 h6 font-weight-bold"> activity title name </div>
                                <div className="pt-1" style={{ fontSize: "12px" }}>4.8&nbsp;
                                    <Star value={4.5} /> &nbsp; 23 Reviews</div>
                                <div className="row text-secondary pt-1 mr-0">
                                    <div className="col-7" style={{ fontSize: "14px" }}>Price:$000</div>
                                    <div className="col" >
                                        <img src={locationGrey} />
                                        <span style={{ fontSize: "12px" }}>{" "}7.2km</span>

                                    </div>
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
                            <img src={delete1} /> &nbsp;Remove Organisation
                        </div>
                    </div>

                    <hr />
                    <div className="row">
                        <div className="col">
                            <button className="next-btn" > <img src={org} />  Chat now</button>
                        </div>
                        <br />
                        <br />
                    </div>

                </div>
            </div>

        </>
    );
};
export default VerifiedOrg;
