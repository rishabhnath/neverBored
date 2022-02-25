import React, { useState, useEffect } from 'react';
import backArrow from '../../../assets/icons/backArrowWhite.svg';
import dorpdown from '../../../assets/icons/dropdown_right_arrow.svg';
import APIServices from '../../../core/services/data/api-services';
import { serverUrl } from '../../../configs/api-endpoints';
import useAlert from "../../../hooks/use-alert";

const UserSettings = (props) => {
    const apiServices = new APIServices();
    const { openAlert } = useAlert();
    const [user_data, setUser_data] = useState([]);
    const back = () => {
        props.history.push("/");
    };


    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        const url = `${serverUrl}/userInfo`;
        const userInfo = await apiServices.get(url);

        if (userInfo.results && !userInfo.results.success) {
            openAlert("error", "Invalid user!", "Please login again.");
        } else {
            console.log("userInfo.results", userInfo.results.data[0]);
            setUser_data(userInfo.results.data);
        }
    };
    return (
        <>
            <div className="card" style={{ height: "103px", background: "#2D9B63", borderRadius: "0" }}>
                <div className="row mr-0">
                    <div className="col-5">
                        <a className="caret-hide" onClick={back} >
                            <img src={backArrow} alt="back" className="ml-4 pt-4 back-button-user-login" />
                        </a>
                    </div>
                    <div className="col pt-4 font-weight-bold text-white">
                        <span className="caret-hide" style={{ fontSize: "18px" }}>Settings</span>

                    </div>

                </div>

            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <div className="font-weight-bold pt-3 pl-3 caret-hide" style={{ fontSize: "14px" }}>Swiping & Matching</div>
                        <div className="pl-3 caret-hide" style={{ fontSize: "11px" }}> Update settings for Budget, Location, Distance, Group size, Age range and Categories</div>

                    </div>
                    <div className="col">
                        <a onClick={() => props.history.push("/swipingAndMatchingSetting", user_data)}><img className=" caret-hide pt-2 mt-4" src={dorpdown} /></a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <div className="font-weight-bold pt-3 pl-3 caret-hide" style={{ fontSize: "14px" }}>Preferences</div>
                        <div className="pl-3 caret-hide" style={{ fontSize: "11px" }}>Change application language</div>

                    </div>
                    <div className="col">
                        <a onClick={() => props.history.push("/preferenceSetting", user_data)}><img className="pt-2 caret-hide mt-4" src={dorpdown} /></a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <div className="font-weight-bold pt-3 pl-3 caret-hide" style={{ fontSize: "14px" }}>Notifications</div>
                        <div className="pl-3" style={{ fontSize: "11px" }}>Set what notifications you do or do not want to receive</div>

                    </div>
                    <div className="col">
                        <a onClick={() => props.history.push("/notificationSetting")}><img className="pt-2 caret-hide mt-4" src={dorpdown} /></a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <div className="font-weight-bold pt-3 pl-3 text-danger caret-hide" style={{ fontSize: "14px" }}>Reset judgements</div>
                        <div className="pl-3 caret-hide" style={{ fontSize: "11px" }}>Reset likes, dislikes, bucketlist or all judgements</div>

                    </div>
                    <div className="col">
                        <a onClick={() => props.history.push("/muted")}><img className="pt-2 caret-hide mt-4" src={dorpdown} /></a>
                    </div>
                </div>
                <br />
            </div>
            <hr />

        </>
    );
};

export default UserSettings;
