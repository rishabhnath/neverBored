import React, { useState } from 'react';
import backArrow from '../../../assets/icons/backArrowWhite.svg';
import useAlert from '../../../hooks/use-alert';
import dorpdown from '../../../assets/icons/dropdown_right_arrow.svg';
// import Muted from "./containers/private/settings_page/mutedorganisation";

const Notification1 = (props) => {
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
                        <div className="col-3 caret-hide">
                            <a onClick={back}>
                                <img src={backArrow} alt="back" className="ml-4 pt-4 back-button-user-login" />
                            </a>
                        </div>
                        <div className="col pt-4 font-weight-bold text-white">
                            <span className="pl-3 caret-hide" style={{ fontSize: "18px", margin: "2%" }}>Notification settings</span>
                        </div>
                    </div>
                </div>
                <div className="row pl-3 pr-3 mr-0 caret-hide" style={{ backgroundColor: "#ECFCF4" }}>
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ color: " #174F32", fontSize: "16px", marginTop: "4%", Height: "48px", top: "213px", padding: "16px 24px", marginBottom: "0 rem" }}>GENERAL</p>
                    </div>
                </div>
                <div className="row pl-3 pr-3 mr-0">
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ color: " #174F32", fontSize: "16px", marginTop: "4%", Height: "48px" }}>Activity Updates</p>
                        <p className="caret-hide">Notifies when an activity in your bucketlist is updated</p>
                    </div>
                    <div className="col-2">

                        <label className="switch float-right mt-5 caret-hide mr-n3">
                            <input type="checkbox" onChange={() => setRemember(!remember)} />
                            <span className="slider1 round"></span>
                        </label>
                    </div>
                </div>
                <hr />
                <div className="row pl-3 pr-3 mr-0" style={{ marginTop: "-3.5%" }}>
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ color: " #174F32", fontSize: "16px", marginTop: "4%", Height: "45px" }}>Chat messages</p>
                        <p className="caret-hide">Notifies when new messages come in</p>
                    </div>
                    <div className="col-2">

                        <label className="switch float-right mt-5 caret-hide mr-n3">
                            <input type="checkbox" onChange={() => setRemember(!remember)} />
                            <span className="slider1 round"></span>
                        </label>
                    </div>
                </div>
                <hr />
                <div className="row pl-3 pr-3 mr-0" style={{ backgroundColor: "#ECFCF4", marginTop: "-3.5%" }}>
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ color: " #174F32", fontSize: "16px", marginTop: "4%", Height: "48px", top: "213px", padding: "16px 24px", marginBottom: "0 rem" }}>COMMUNITY</p>
                    </div>
                </div>
                <div className="row pl-3 pr-3 mr-0">
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ color: " #174F32", fontSize: "16px", marginTop: "4%", Height: "48px" }}>Friend Request</p>
                        <p className="caret-hide">Notifies when receving new- and accepted requestss</p>
                    </div>
                    <div className="col-2">

                        <label className="switch float-right mt-5 caret-hide mr-n3">
                            <input type="checkbox" onChange={() => setRemember(!remember)} />
                            <span className="slider1 round"></span>
                        </label>
                    </div>
                </div>
                <hr />
                <div className="row pl-3 pr-3 mr-0" style={{ marginTop: "-3.5%" }}>
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ color: " #174F32", fontSize: "16px", marginTop: "4%", Height: "48px" }}>Friend Updates</p>
                        <p className="caret-hide">Friend bucketlists, writes a review or adds a completion for one of the activities in your bucketlist</p>
                    </div>
                    <div className="col-2">

                        <label className="switch caret-hide float-right mt-5 mr-n3">
                            <input type="checkbox" onChange={() => setRemember(!remember)} />
                            <span className="slider1 round"></span>
                        </label>
                    </div>
                </div>
                <hr />
                <div className="row pl-3 pr-3 mr-0" style={{ backgroundColor: "#ECFCF4", marginTop: "-3.5%" }}>
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ color: " #174F32", fontSize: "16px", marginTop: "4%", Height: "48px", top: "213px", padding: "16px 24px", marginBottom: "0 rem" }}>HIDDEN NOTIFICATIONS</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row pl-3 pr-3 mr-0">
                        <div className="col" >
                            <p className="font-weight-bold caret-hide" style={{ color: " #174F32", fontSize: "16px", marginTop: "4%", Height: "48px" }}>Muted organisations</p>
                            <p className="caret-hide">Notifications from these organisations will be muted. This was set on the organisations page</p>
                        </div>

                        <a onClick={() => props.history.push("/muted")} ><img className="pt-2  caret-hide mt-4" src={dorpdown} /></a>
                    </div>
                </div>

            </div>
        </>
    );
};
export default Notification1;
