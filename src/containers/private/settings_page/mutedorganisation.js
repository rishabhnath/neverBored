import React, { useState } from 'react';
import backArrow from '../../../assets/icons/backArrowWhite.svg';
import useAlert from '../../../hooks/use-alert';
import lizabell from '../../../assets/images/default/lizabell.jpg';
import remove from '../../../assets/icons/remove.svg';

const Muted = (props) => {
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
                                <img src={backArrow} alt="back" className="ml-4 caret-hide pt-4 back-button-user-login" />
                            </a>
                        </div>
                        <div className="col pt-4 font-weight-bold text-white caret-hide">
                            <span className="pl-3 caret-hide" style={{ fontSize: "18px", margin: "2%" }}>Muted Organisation</span>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-2 ml-3 caret-hide">
                        <img style={{ width: "56px", height: "56px" }}src={lizabell} className="rounded-circle" />
                    </div>

                    <div className="col-6">
                        <p className="ml-2 caret-hide" style={{ marginLeft: "0%", fontWeight: "700", marginTop: "9%", width: "130" }}>Organisation name</p>
                    </div>
                    <div className="col-2 ">
                        <a onClick={() => props.history.push("/resetJudgement")} ><img className=" caret-hide float-right" style={{ marginTop: "29%" }}src={remove} /></a>
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
                        <a onClick={() => props.history.push("/resetJudgement")} ><img className="float-right caret-hide" style={{ marginTop: "29%" }}src={remove} /></a>
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
                        <a onClick={() => props.history.push("/resetJudgement")} ><img className=" caret-hide float-right" style={{ marginTop: "29%" }}src={remove} /></a>

                    </div>
                </div>

            </div>

        </>
    );
};
export default Muted;
