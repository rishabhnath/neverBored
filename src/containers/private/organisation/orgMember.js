import React, { useState } from 'react';
import backArrow from '../../../assets/icons/backArrowWhite.svg';
import useAlert from '../../../hooks/use-alert';
import lizabell from '../../../assets/images/default/lizabell.jpg';
import remove from '../../../assets/icons/remove.svg';
import search1 from '../../../assets/icons/search1.svg';
// import addmember from '../../../assets/icons/addmember';
const OrgMember = (props) => {
    const { openAlert } = useAlert();
    const [remember, setRemember] = useState(false);

    const back = () => {
        props.history.push("/settings");
    };

    return (
        <>
            <div className="container-fluid">
                <div className="fade-animation">
                    <div className="card" style={{ height: "103px", background: "#2D9B63", borderRadius: "0" }}>
                        <div className="row mr-0">
                            <div className="col-3">
                                <a onClick={back}>
                                    <img src={backArrow} alt="back" className="ml-4 caret-hide pt-5 back-button-user-login" />
                                </a>
                            </div>
                            <div className="col pt-5 font-weight-bold text-white caret-hide">
                                <span className="pl-3 caret-hide" style={{ fontSize: "18px", margin: "2%", marginTop: "17px" }}> Organisation members</span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="input-group mb-2" style={{ padding: "4%", marginLeft: "7px",
                        marginTop: "-20%"
                    }}>
                        <div style={{ marginTop: "60px", color: "#FFFFFF" }}className="input-group-prepend">
                            <div className="input-group-text "><img src={search1}/>
                            </div>
                        </div>
                        <input style={{ marginTop: "60px", Width: "327px", Height: "40px", color: "#A4A4A4" }}type="text" className="form-control h-auto border-left-0" id="inlineFormInputGroup" placeholder="Try “Paintball”" placeholder="Search for member" onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                    <div className="row ml-1">
                        <a className="col font-weight-bold " style={{ fontSize: "15px", color: "black" }}>
                       Member &nbsp;(4)
                        </a>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-2 ml-3">
                            <img style={{ width: "56px", height: "56px" }}src={lizabell} className=" caret-hide rounded-circle" />
                        </div>

                        <div className="col-6">
                            <p className="ml-2 caret-hide" style={{ marginLeft: "0%", fontWeight: "700", marginTop: "9%", width: "130" }}> Me</p>
                        </div>

                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-2 ml-3 caret-hide">
                            <img style={{ width: "56px", height: "56px" }}src={lizabell} className="rounded-circle" />
                        </div>

                        <div className="col-6">
                            <p className="ml-2 caret-hide" style={{ marginLeft: "0%", fontWeight: "700", marginTop: "9%", width: "130" }}>Organisation name</p>
                        </div>
                        <div className="col-2 ">
                            <a onClick={() => props.history.push("/")} ><img className=" caret-hide float-right" style={{ marginTop: "29%" }}src={remove} /></a>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-2 ml-3">
                            <img style={{ width: "56px", height: "56px" }}src={lizabell} className=" caret-hide rounded-circle" />
                        </div>

                        <div className="col-6">
                            <p className="ml-2 caret-hide" style={{ fontWeight: "700", marginTop: "9%", width: "130" }}>Organisation name</p>
                        </div>
                        <div className="col-2 ">
                            <a onClick={() => props.history.push("/")} ><img className="float-right caret-hide" style={{ marginTop: "29%" }}src={remove} /></a>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-2 ml-3">
                            <img style={{ width: "56px", height: "56px" }}src={lizabell} className=" caret-hide rounded-circle" />
                        </div>

                        <div className="col-6">
                            <p className="ml-2 caret-hide" style={{ marginLeft: "0%", fontWeight: "700", marginTop: "9%", width: "130" }}>Organisation name</p>
                        </div>
                        <div className="col-2 ">
                            <a onClick={() => props.history.push("/")} ><img className=" caret-hide float-right" style={{ marginTop: "29%" }}src={remove} /></a>

                        </div>
                    </div>
                    <div className="row">
                        <div style={{ marginTop: "35%" }} className="col">
                            <button className="border-button" >Add members</button>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
};
export default OrgMember;
