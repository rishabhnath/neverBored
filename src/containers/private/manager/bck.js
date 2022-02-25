import React, { useState } from 'react';
// import defaultProfilePic from '../../assets/images/default/lizabell.jpg';
import defaultProfilePic from '../../../assets/images/default/lizabell.jpg';
import dis2black from '../../../assets/icons/dis2black.svg';
import message from '../../../assets/icons/message.svg';
import org from '../../../assets/images/org.svg';
import whiteCheckedGreenBackground from '../../../assets/icons/whiteCheckedGreenBackground.svg';
import goldCoinRank1 from '../../../assets/icons/goldCoinRank1.svg';
import member from "../../../assets/icons/membericon.svg";
import pen from "../../../assets/icons/pen1.svg";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction

} from 'react-swipeable-list';

import 'react-swipeable-list/dist/styles.css';
import swipedelete from '../../../assets/icons/swipedelete.svg';
import silverCoinRank2 from '../../../assets/icons/silverCoinRank2.svg';
import coinBrozeRank3 from '../../../assets/icons/coinBrozeRank3.svg';
import org1 from '../../../assets/icons/org1.svg';
import bucketListGreen from '../../../assets/icons/bucketListgreen.svg';
import locationGrey from '../../../assets/icons/locationGrey.svg';
import running from '../../../assets/icons/running.svg';
import star1 from '../../../assets/icons/star1.svg';
import Eye from '../../../assets/icons/eye1.svg';
import bucket from '../../../assets/icons/buket1.svg';
import dropdown from '../../../assets/icons/dropdown.svg';
function CreateActivity(props) {
    const back = () => {
        props.history.push("/userprofile");
    };


    const [activity, setactivity] = useState([ { id: 1, activity_title: "Activity title name long title on two lines is the max", star: 3.3, review: 20, price: 2000, distance: 4 }, { id: 2, activity_title: "Activity title name long title on two lines is the max", star: 2.3, review: 25, price: 2000, distance: 1 }, { id: 3, activity_title: "Activity title name long title on two lines is the max", star: 3.5, review: 15, price: 2000, distance: 2 }, { id: 4, activity_title: "Activity title name long title on two lines is the max", star: 4.5, review: 2, price: 2000, distance: 3 }, { id: 5, activity_title: "Activity title name long title on two lines is the max", star: 1.5, review: 2.5, price: 2000, distance: 3 } ]);


    const leadingActions = (i) => <LeadingActions>
        <SwipeAction destructive={true} onClick={() => onDelete(i)}>
            <div className="swipe-remove">
                <img style={{ width: "40px", height: "40px" }} src={swipedelete}/>
            </div>
        </SwipeAction>
    </LeadingActions>;


    const onDelete = (index) => {
        const tempSliceList = [...data];
        tempSliceList.splice(index, 1);
        setactivity(tempSliceList);
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
                        <img style={{ borderRadius: "50%", height: "56px" }} src={defaultProfilePic} className="ml-4 caret-hide" />
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "bold", marginTop: "5%" }} className="col-4 caret-hide">
                        <span className=" caret-hide " >user's name</span>
                    </div>
                    <div className="col-2">
                        <img src={dis2black} className="ml-4 caret-hide" />
                    </div>
                    <div className="col-1">
                        <img src={message} className="ml-4 caret-hide" />
                    </div>

                </div>
                <div style={{ padding: "7%" }}>
                    <div className="row" style={{ border: "1px solid #2D9B63", borderRadius: "8px", height: "78px" }}>
                        <div className="col-3">
                            <img src={org} style={{ paddingTop: "8px", height: "62%" }}/>
                        </div>
                        <div className="col-7" >
                            <div className="row" >
                                <div className="col-12" style={{ height: "36px" }}>
                                    <p style={{ paddingTop: "6px", marginLeft: "-11%", fontSize: "95%" }}>Organisation name</p>
                                </div>
                                <div className="col-12" >
                                    <div className="row" >
                                        <div className="col-3 p-0">
                                            <p><img src={member}></img> 2</p>
                                        </div>
                                        <div className="col-3 p-0">
                                            <p><i class="fas fa-running"></i> 2</p>
                                        </div>
                                        <div className="col-3 p-0">
                                            <p><img src={star1}></img> 2</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <img src={dropdown} style={{ paddingTop: "27px",
                                paddingLeft: "27%" }}></img>
                        </div>
                    </div>
                    <div className="row mt-3" style={{ fontSize: "24px" }}>
                        <div className="col-6" style={{ fontSize: "14px" }}>
                            <p><img src={pen}></img>Edit organisation</p>
                        </div>
                        <div className="col-6" style={{ fontSize: "14px" }}>
                            <p> <i class="fa fa-plus-circle"></i> New organisation</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <button style={{ border: "0px", fontSize: "13px", width: "100%", padding: "12px", backgroundColor: "#F6F6F6", color: "#2D9B63", borderRadius: "16px" }}>Create an organisation</button>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <p>Activities</p>
                        </div>
                    </div>
                    {activity && activity.map((item, i) => {
                        return <div key={item.id}>

                            <SwipeableList >
                                <SwipeableListItem
                                    leadingActions={leadingActions(i)}
                                >
                                    <div className="row" style={{ borderRadius: "8px" }}>
                                        <div className="col-4" style={{ borderRadius: "20px", height: "100%" }}>
                                            <img src={org1} style={{ paddingTop: "8px", height: "98%" }}/>
                                        </div>
                                        <div className="col-8" >
                                            <div className="row">
                                                <div className="col-12" style={{ height: "47px" }}>
                                                    <p style={{ paddingTop: "6px", fontSize: "80%" }}>Activity title name long title on two lines is the max</p>
                                                </div>
                                                <div className="col-12" >
                                                    <div className="row" >
                                                        <div className="col-3 " >
                                                            <div className="row">
                                                                <div className="col-6 p-0 " >
                                                                    <img src={star1} />
                                                                </div>
                                                                <div className="col-6" >
                                                                    <div>12</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 " >
                                                            <div className="row">
                                                                <div className="co-6 " >
                                                                    <img src={Eye} />
                                                                </div>
                                                                <div className="col-3" >
                                                                    <div>12</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 " >
                                                            <div className="row">
                                                                <div className="co-6 " >
                                                                    <img src={bucket} />
                                                                </div>
                                                                <div className="col-3" >
                                                                    <div>12</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-3 ">
                                                            <button style={{ backgroundColor: "#2D9B63", borderRadius: "50px", color: "#fff" }}>Online</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    {/* <div >
                                        <div className="row mr-0">
                                            <div className="col-3 card bucket-list-profile ml-4 border-0" style={{ backgroundImage: `url(${org1})` }}>

                                            </div>

                                            <div style={{ heightL: "10px" }} className="col-8 font-weight-bold">

                                                <div className="pt-2 h6 font-weight-bold"> {item.activity_title} </div>
                                                <div className="pt-1" style={{ fontSize: "12px" }}><img src={star1}></img>{item.star} &nbsp;
                                                    &nbsp;  <img src={Eye}></img>{item.review}   &nbsp; <img src={bucket}></img>{item.review} &nbsp; <button style={{ backgroundColor: "#2D9B63", borderRadius: "50px", color: "#fff" }}>Online</button></div>

                                            </div>

                                        </div>
                                    </div> */}
                                </SwipeableListItem>
                            </SwipeableList><br />
                        </div>;
                    })}
                    <div className="row" style={{ marginTop: "226px" }}>
                        <button style={{ border: "0px", justifyContent: "center", padding: "9px", backgroundColor: "#2D9B63", color: "#fff", borderRadius: "8px", fontSize: "12px", marginLeft: "27%" }}>Switch to user mode</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CreateActivity;
