import React from 'react';
// import defaultProfilePic from '../../assets/images/default/lizabell.jpg';
import defaultProfilePic from '../../../assets/images/default/lizabell.jpg';
import dis2black from '../../../assets/icons/dis2black.svg';
import message from '../../../assets/icons/message.svg';
function UserMenu(props) {
    const back = () => {
        props.history.push("/userprofile");
    };
    return (
        <>
            <div className="fade-animation">
                <div className="row mr-0" style={{ fontSize: "14px", backgroundColor: "#336ED3" }}>
                    <div className="col-10 ml-4 mt-3" >
                        <p class="text-white text-center">MANAGER MODE</p>
                    </div>

                </div>
                <div className="row mr-0 mt-4">
                    <div className="col-3">
                        <img style={{ borderRadius: "50%", height: "56px", marginTop: "-8%" }} src={defaultProfilePic} className="ml-4 caret-hide" />
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "bold", marginTop: "2%" }} className="col-4 caret-hide">
                        <span className=" caret-hide " >user's name</span>
                    </div>
                    <div className="col-2">
                        <img src={dis2black} className="ml-4 caret-hide" />
                    </div>
                    <div className="col-1">
                        <img src={message} className="ml-4 caret-hide" />
                    </div>

                </div>
                <div className="p-5">
                    <div className="row" style={{ fontSize: "24px" }}>
                        <p>Register your organisation</p>
                    </div>
                    <div className="row" style={{ fontSize: "16px" }}>
                        <p>Organisations can contain countless activities, in order to add a new activity you need to create an organisation first.</p>
                    </div>
                    <div className="row mt-3">
                        <button style={{ border: "0px", fontSize: "13px", width: "100%", padding: "12px", backgroundColor: "#2D9B63", color: "#fff", borderRadius: "16px" }}>Create an organisation</button>
                    </div>
                    <div className="row" style={{ marginTop: "226px" }}>
                        <button style={{ border: "0px", justifyContent: "center", padding: "9px", backgroundColor: "#2D9B63", color: "#fff", borderRadius: "8px", fontSize: "12px", marginLeft: "27%" }}>Switch to user mode</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default UserMenu;
