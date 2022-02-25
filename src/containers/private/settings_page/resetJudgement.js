import React, { useState } from 'react';
import backArrow from '../../../assets/icons/backArrowWhite.svg';
import useAlert from '../../../hooks/use-alert';
import reset from '../../../assets/icons/reset.svg';

const resetJudgement = (props) => {
    const { openAlert } = useAlert();
    const [remember, setRemember] = useState(false);

    const back = () => {
        props.history.push("/muted");
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
                        <div className="col pt-4 font-weight-bold text-white">
                            <span className="pl-3 caret-hide" style={{ fontSize: "18px", margin: "2%" }}>Reset judgements</span>
                        </div>
                    </div>
                </div>
                <div className="row pl-3 pr-3 mr-0">
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ fontweight: "700", fontSize: "16px", marginTop: "4%" }}>About resetting</p>
                    </div>
                </div>

                <div className="container fluid">
                    <div className="row mr-0">
                        <div className="col">
                            <p className="pl-2 pr-5 caret-hide">Feel like starting over, or getting rid of some judgements? Well, you’ve come to the right place.</p>

                            <p className="pl-2 pr-5 caret-hide" > With a reset, your judgements (e.g. dislikes) will be removed, meaning you can judge them all over again when they re-appear on the discovery page over time.</p>
                        </div>
                    </div>
                </div>
                <div className="row mr-0">
                    <div className="col-1">
                        <img className="ml-4 caret-hide" src={reset} />
                    </div>

                    <div className="col ml-4 caret-hide">
                        <p style={{ fontWeight: "bold", color: "#A30E06" }}>A reset is irreversible</p>

                    </div>
                </div>
                <br /> <br/><br /> <br />
                <div className="row mr-0">
                    <div className="col-12">
                        <button className="buttonWhiteWithRedColor1 m-auto caret-hide" onClick={() => console.log("Send friend request")}> Reset dislikes</button>
                    </div>
                    <br /> <br/><br /> <br />
                    <div className="col-12">
                        <button className="buttonWhiteWithRedColor1 m-auto caret-hide" onClick={() => console.log("Send friend request")}>Reset likes</button>
                    </div>
                    <br /> <br/><br /> <br />
                    <div className="col-12">
                        <button className="buttonWhiteWithRedColor1 m-auto caret-hide" onClick={() => console.log("Send friend request")}>Reset bucketlist
                        </button>
                    </div>
                    <br /> <br/><br /> <br />
                    <div className="col-12">
                        <button className="buttonWhiteWithRedColor1 m-auto caret-hide" onClick={() => console.log("Send friend request")}>Reset all </button>
                    </div>
                </div>
            </div>
        </>
    );
};


export default resetJudgement;
