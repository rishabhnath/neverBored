import React, { useState } from 'react';
import userPic from '../../../assets/images/default/lizabell.jpg';
import backArrow from '../../../assets/icons/backArrowWhite.svg';
import share from '../../../assets/icons/shareWhite.svg';
import checked from '../../../assets/icons/checkedGrey.svg';
import discoverOutline from '../../../assets/icons/discoverOutline.svg';
import bucketOutline from '../../../assets/icons/bucketOutline.svg';
import checkedWithBox from '../../../assets/icons/checkedWithBox.svg';
import bucketListGreen from '../../../assets/icons/bucketListgreen.svg';
import whiteCheckedGreenBackground from '../../../assets/icons/whiteCheckedGreenBackground.svg';
import goldCoinRank1 from '../../../assets/icons/goldCoinRank1.svg';
import silverCoinRank2 from '../../../assets/icons/silverCoinRank2.svg';
import coinBrozeRank3 from '../../../assets/icons/coinBrozeRank3.svg';
import locationGrey from '../../../assets/icons/locationGrey.svg';
import Star from '../../../components/shared/5star';
import cationOutline from '../../../assets/icons/cationOutline.svg';
import linkWhite from '../../../assets/icons/linkWhite.svg';
import pencilWhiteOutline from '../../../assets/icons/pencilWhiteOutline.svg';
import dotMenuButtonWhite from '../../../assets/icons/dotMenuButtonWhite.svg';
import RemoveFriend from '../../../components/modals/removeFriend';

function Onboarding(props) {
    const [counter, setCounter] = useState(1);
    const back = () => {
        props.history.push("/");
    };
    return (
        <>
            <RemoveFriend />

            <section className="font-open-sans-regular">
                <div className="card" style={{ height: "150px", background: "#2D9B63", borderRadius: "0" }}>
                    <div className="row mr-0">
                        <div className="col">
                            <a onClick={back}>
                                <img src={backArrow} alt="back" className="ml-4 pt-4 back-button-user-login" />
                            </a>

                            <span className="float-right">
                                <a onClick={() => alert("share")}>
                                    <img src={pencilWhiteOutline} alt="back" className="mr-4  pt-4 back-button-user-login" style={{ marginTop: "1%" }} />
                                </a>

                                <a onClick={() => alert("share")}>
                                    <img src={share} alt="back" className="mr-4  pt-4 back-button-user-login" />
                                </a>
                                <a data-toggle="modal" data-target="#exampleModal">
                                    <img src={dotMenuButtonWhite} alt="back" className="mr-5  pt-4 back-button-user-login" style={{ marginTop: "1%" }} />
                                </a>
                            </span>
                        </div>

                    </div>
                    <br />
                    <center><img className="rounded-circle user-center-rounded-image" style={{ border: "2px solid white" }} src={userPic} /></center>
                </div>
                <div className="container-fluid mb-5">
                    <br/>

                    <div className="onboarding-main mt-5" >
                        <center>
                            <div className="h3 font-weight-bold" style={{ fontFamily: " Open Sans" }}>Johanna Doe</div></center>
                        <div className="row mr-0">
                            <div className="col">
                                <center>
                                    <p className="text-muted font-weight-bold"><img src={checked} />  &ensp; Friends</p>
                                </center>
                            </div>
                        </div>
                        <div >
                            <div className="row p-1 pl-2 mr-0">
                                <div className="col-4 h6 font-weight-bold pl-3">
                                    <img className="img-compass" src={discoverOutline} /><span className="pl-1 align-middle"> 217</span>
                                </div>
                                <div className="col-4 h6 font-weight-bold pl-3">
                                    <img className="img-bucket" src={bucketOutline} />
                                    <span className="pl-1 align-middle"> 12</span>

                                </div>
                                <div className="col-4 h6 font-weight-bold pl-4">
                                    <img className="img-compass" src={checkedWithBox} />
                                    <span className="pl-1 align-middle"> 12</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4 h5 font-weight-bold ">

                                    <div className="col h6 font-weight-bold text-muted mt-2" style={{ fontSize: "12px" }}>
                        Discovered
                                    </div>

                                </div>
                                <div className="col-4 h5 font-weight-bold">

                                    <div className="col h6 font-weight-bold text-muted mt-2" style={{ fontSize: "12px", padding: "0px" }}>
                        In Bucketlist
                                    </div>
                                </div>
                                <div className="col-4 h5 font-weight-bold">

                                    <div className="col h6 font-weight-bold text-muted mt-2" style={{ fontSize: "12px", padding: "0px" }}>
                        Completed
                                    </div>

                                </div>


                            </div>
                        </div>


                    </div>
                    <hr />

                    { counter === 1 ? <><div className="row">

                        <div className="col font-weight-bold ml-1">
                    Bucketlist &nbsp; (12)
                        </div>

                    </div>
                    <br></br>
                    <div>
                        <div className="row">
                            <div className="col-3 card bucket-list-profile ml-4 border-0" style={{ backgroundImage: `url(${userPic})` }}>
                                <div className="col mt-2" >
                                    <button className="user-bucketList-card-bucket font-weight-bold text-success ml-n2" >
                                        <img src={bucketListGreen} />{"12"}
                                    </button>
                                    <span>
                                        <img className="mr-n2 float-right mt-1" src={whiteCheckedGreenBackground} />
                                    </span>

                                </div>
                                <img src={goldCoinRank1} style={{ marginTop: "2.3rem" }} />

                            </div>

                            <div className="col-8 font-weight-bold">

                                <div className="pt-2 h6 font-weight-bold"> Activity Title Name </div>
                                <div className="pt-1" style={{ fontSize: "12px" }}>4.8 &nbsp;
                                    <Star value={3} />  &nbsp; 23 Reviews</div>
                                <div className="row text-secondary pt-1">
                                    <div className="col-7" style={{ fontSize: "14px" }}>Price: $000</div>
                                    <div className="col" >
                                        <img src={locationGrey} />
                                        <span style={{ fontSize: "12px" }}>{" "}7.2km</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <br></br>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-3 card bucket-list-profile ml-4 border-0" style={{ backgroundImage: `url(${userPic})` }}>
                                <div className="col mt-2" >
                                    <button className="user-bucketList-card-bucket font-weight-bold text-success ml-n4" >
                                        <img src={bucketListGreen} />{"12"}
                                    </button>
                                    <span>
                                        <img className="mr-n4 float-right mt-1" src={whiteCheckedGreenBackground} />
                                    </span>

                                </div>
                                <img src={silverCoinRank2} style={{ marginTop: "1.8rem" }} />

                            </div>

                            <div className="col-8 font-weight-bold">

                                <div className="pt-2 h6 font-weight-bold"> Activity Title Name </div>
                                <div className="pt-1" style={{ fontSize: "12px" }}>4.8 &nbsp;
                                    <Star value={4.5}/> &nbsp;   23 Reviews</div>
                                <div className="row text-secondary pt-1">
                                    <div className="col-7" style={{ fontSize: "14px" }}>Price: $000</div>
                                    <div className="col" >
                                        <img src={locationGrey} />
                                        <span style={{ fontSize: "12px" }}>{" "}7.2km</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <br></br>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-3 card bucket-list-profile ml-4 border-0" style={{ backgroundImage: `url(${userPic})` }}>
                                <div className="col mt-2" >
                                    <button className="user-bucketList-card-bucket font-weight-bold text-success ml-n4" >
                                        <img src={bucketListGreen} />{"12"}
                                    </button>
                                    <span>
                                        <img className="mcationOutliner-n4 float-right mt-1 mr-n4" src={whiteCheckedGreenBackground} />
                                    </span>

                                </div>
                                <img src={coinBrozeRank3} style={{ marginTop: "1.8rem" }} />

                            </div>

                            <div className="col-8 font-weight-bold">

                                <div className="pt-2 h6 font-weight-bold"> Activity Title Name </div>
                                <div className="pt-1" style={{ fontSize: "12px" }}>4.8 &nbsp;
                                    <Star value={3.5} /> &nbsp;   23 Reviews</div>
                                <div className="row text-secondary pt-1">
                                    <div className="col-7" style={{ fontSize: "14px" }}>Price: $000</div>
                                    <div className="col" >
                                        <img src={locationGrey} />
                                        <span style={{ fontSize: "12px" }}>{" "}7.2km</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <a className="col text-muted font-weight-bold text-center" style={{ fontSize: "12px" }}>
                        SHOW MORE &nbsp; (9)
                        </a>
                    </div>

                    <hr />

                    <div className="row">

                        <div className="col font-weight-bold ml-1">
                        Completions &nbsp; (17)
                        </div>

                    </div>
                    <div>
                        <div className="row">
                            <div className="col-3 card bucket-list-profile ml-4 border-0" style={{ backgroundImage: `url(${userPic})` }}>
                                <div className="col mt-2" >
                                    <button className="user-bucketList-card-bucket font-weight-bold text-success ml-n4" >
                                        <img src={bucketListGreen} />{"12"}
                                    </button>
                                    <span>
                                        <img className="mr-n4 float-right mt-1" src={whiteCheckedGreenBackground} />
                                    </span>

                                </div>

                            </div>

                            <div className="col-8 font-weight-bold">

                                <div className="pt-2 h6 font-weight-bold"> Activity Title Name </div>
                                <div className="pt-1" style={{ fontSize: "12px" }}>4.8 &nbsp;
                                    <Star value={3.5} /> &nbsp;   23 Reviews</div>
                                <div className="row text-secondary pt-1">
                                    <div className="col-7" style={{ fontSize: "14px" }}>Price: $000</div>
                                    <div className="col" >
                                        <img src={locationGrey} />
                                        <span style={{ fontSize: "12px" }}>{" "}7.2km</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div>
                        <div className="row">
                            <div className="col-3 card bucket-list-profile ml-4 border-0" style={{ backgroundImage: `url(${userPic})` }}>
                                <div className="col mt-2" >
                                    <button className="user-bucketList-card-bucket font-weight-bold text-success ml-n4" >
                                        <img src={bucketListGreen} />{"12"}
                                    </button>
                                    <span>
                                        <img className="mr-n4 float-right mt-1" src={whiteCheckedGreenBackground} />
                                    </span>

                                </div>

                            </div>

                            <div className="col-8 font-weight-bold">

                                <div className="pt-2 h6 font-weight-bold"> Activity Title Name </div>
                                <div className="pt-1" style={{ fontSize: "12px" }}>4.8 &nbsp;
                                    <Star value={3.5} /> &nbsp;   23 Reviews</div>
                                <div className="row text-secondary pt-1">
                                    <div className="col-7" style={{ fontSize: "14px" }}>Price: $000</div>
                                    <div className="col" >
                                        <img src={locationGrey} />
                                        <span style={{ fontSize: "12px" }}>{" "}7.2km</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div>
                        <div className="row">
                            <div className="col-3 card bucket-list-profile ml-4 border-0" style={{ backgroundImage: `url(${userPic})` }}>
                                <div className="col mt-2" >
                                    <button className="user-bucketList-card-bucket font-weight-bold text-success ml-n4" >
                                        <img src={bucketListGreen} />{"12"}
                                    </button>
                                    <span>
                                        <img className="mr-n4 float-right mt-1" src={whiteCheckedGreenBackground} />
                                    </span>

                                </div>

                            </div>

                            <div className="col-8 font-weight-bold">

                                <div className="pt-2 h6 font-weight-bold"> Activity Title Name </div>
                                <div className="pt-1" style={{ fontSize: "12px" }}>4.8 &nbsp;
                                    <Star value={3.5} /> &nbsp;   23 Reviews</div>
                                <div className="row text-secondary pt-1">
                                    <div className="col-7" style={{ fontSize: "14px" }}>Price: $000</div>
                                    <div className="col" >
                                        <img src={locationGrey} />
                                        <span style={{ fontSize: "12px" }}>{" "}7.2km</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <a className="col text-muted font-weight-bold text-center" style={{ fontSize: "12px" }}>
                        SHOW MORE &nbsp; (14)
                        </a>
                    </div>
                    {/* <br /> */}
                    {/* <br /> */}
                    <hr />
                    <br />
                    <div className="row">
                        <div className="col h6 font-weight-bold text-muted ml-4">
                            <img src={cationOutline} /> &nbsp; Report User
                        </div>
                    </div>
                    {/* <br /> */}
                    <hr />
                    <div className="row">
                        <div className="col">
                            <button className="next-btn btn-sm" onClick={() => alert("Match Johanna")}><img src={linkWhite} />Match Johanna</button>
                        </div>
                        <br />
                        <br />
                    </div></> : <>
                        <br /><br />
                        <div className="h6 text-center text-secondary">Add the user as a friend to see the user’s completions & bucketlist</div>
                        <br /><br />
                        <button className="buttonWhiteWithGreenColor btn-sm" onClick={() => alert("Send friend request")}>Send friend request</button>
                        <br />
                        <br />
                    </>}
                </div>
            </section>
        </>
    );
}
export default Onboarding;
