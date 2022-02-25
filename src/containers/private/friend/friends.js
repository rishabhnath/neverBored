import React, { useEffect, useState } from 'react';
import defaultProfilePic from '../../../assets/images/default/lizabell.jpg';
import wrong from "../../../assets/icons/wrong.svg";
import right from "../../../assets/icons/right.svg";
import SortBy1 from './SortBy1';
import updown from '../../../assets/icons/updown.svg';
const Friends = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([ { id: 1, activity_title: "User name", star: 3.3, review: 20, price: 2000, distance: 4 }, { id: 2, activity_title: "User name", star: 2.3, review: 25, price: 2000, distance: 1 } ]);
    const [data1, setData1] = useState([ { id: 1, activity_title: "Friend's name", star: 3.3, review: 20, price: 2000, distance: 4 }, { id: 2, activity_title: "Friend's name", star: 2.3, review: 25, price: 2000, distance: 1 }, { id: 3, activity_title: "Friend's name", star: 3.5, review: 15, price: 2000, distance: 2 }, { id: 3, activity_title: "Friend's name", star: 3.5, review: 15, price: 2000, distance: 2 } ]);
    const [swipe_list, setSwipe_list] = useState([]);
    const [sort, setsort] = useState("");
    const Activity = { setsort };

    return (
        <><div className="row ml-2 mt-2 mr-0">  <p>Pending</p></div>

            { data.map((item, i) => {
                return <div key={item.id}>

                    <div className="row mr-0 mt-2">
                        <div className="col-2">
                            <a>
                                <img style={{ marginLeft: "30%", borderRadius: "50%", height: "50px" }} src={defaultProfilePic} />
                            </a>
                        </div>
                        <div className="col-7">
                            <span className="pl-3 caret-hide" style={{ fontSize: "14px", margin: "2%" }}>{item.activity_title}</span>
                        </div>
                        <div className="col-1">
                            <img src={wrong}></img>
                        </div>
                        <div className="col-1 ml-2">
                            <img src={right}></img>
                        </div>
                    </div>
                </div>;
            })}
            <hr style={{ borderColor: "#2D9B63" }} ></hr>
            {/* <div className="row ml-3 mt-3 mr-0 ">  <p>Sort By Match Frequency</p></div> */}
            <div className="row mr-0 mt-3 mb-4 ml-3">
                <div className="col">
                    <a data-toggle="modal" data-target="#sortingBucketList">
                        {" "}Sort By<b>{sort}</b>
                    </a>
                </div>
                <div className="col-2">
                    <a data-toggle="modal" data-target="#sortingBucketList">
                        <img src={updown}/>
                    </a>
                </div>
            </div>
            { data1.map((item, i) => {
                return <div key={item.id}>

                    <div className="row mr-0 mt-2">
                        <div className="col-3">
                            <a>
                                <img style={{ marginLeft: "30%", borderRadius: "50%", height: "50px" }} src={defaultProfilePic} />
                            </a>
                        </div>
                        <div className="col-6 pt-1" style={{ paddingTop: "13px" }}>
                            <span className="pl-3 caret-hide" style={{ fontSize: "14px", margin: "2%", marginTop: "17px" }}><b>User name</b></span>
                        </div>
                        <div className="col-3">
                            <button style={{ width: "100%", color: "#2D9B63", borderColor: "#2D9B63", border: "solid 1px", borderRadius: "6px", background: "white"
                            }}>Match</button>
                        </div>
                    </div>
                </div>;
            })}
            <div>

                <div className="row mr-0 mt-2">
                    <div className="col-3">
                        <a>
                            <img style={{ marginLeft: "30%", borderRadius: "50%", height: "50px" }} src={defaultProfilePic} />
                        </a>
                    </div>
                    <div className="col-6" style={{ paddingTop: "13px" }}>
                        <span className="pl-3 caret-hide" style={{ fontSize: "14px", margin: "2%", marginTop: "17px" }}><b>Friend Name</b></span>
                    </div>
                    <div className="col-3  " >
                        <button className=" pt-1 pb-2" style={{ fontSize: "80%", width: "100%", background: "#2D9B63", color: "#ffffff", borderColor: "#2D9B63", border: "solid 1px", borderRadius: "6px" }}>Match X</button>
                    </div>
                </div>
            </div>
            <div className=" mt-2 mb-5" >
                <center> <button style={{ padding: "3%", width: "39%", color: "#ffffff", borderColor: "#2D9B63", border: "solid 0px", borderRadius: "6px", background: "#2D9B63" }}>Add friends</button></center>
            </div>
            <br>
            </br>
            <br>
            </br>
            <div className="row mr-0">
                <SortBy1 Activity={Activity}/>
            </div>
        </>
    );
};
export default Friends;
