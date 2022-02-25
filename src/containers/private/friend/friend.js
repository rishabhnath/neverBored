import React, { useEffect, useState } from 'react';
import search1 from '../../../assets/icons/search1.svg';
import swipedelete from '../../../assets/icons/swipedelete.svg';
import Groups from './group';
import Friends from './friends';
const Friend = (datas) => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([ { id: 1, activity_title: "Activity Title Name1", star: 3.3, review: 20, price: 2000, distance: 4 }, { id: 2, activity_title: "Activity Title Name2", star: 2.3, review: 25, price: 2000, distance: 1 }, { id: 3, activity_title: "Activity Title Name3", star: 3.5, review: 15, price: 2000, distance: 2 }, { id: 4, activity_title: "Activity Title Name4", star: 4.5, review: 2, price: 2000, distance: 3 }, { id: 5, activity_title: "Activity Title Name5", star: 1.5, review: 2.5, price: 2000, distance: 3 }, { id: 6, activity_title: "Activity Title Name1", star: 3.3, review: 20, price: 2000, distance: 4 }, { id: 7, activity_title: "Activity Title Name2", star: 2.3, review: 25, price: 2000, distance: 1 }, { id: 8, activity_title: "Activity Title Name3", star: 3.5, review: 15, price: 2000, distance: 2 }, { id: 9, activity_title: "Activity Title Name4", star: 4.5, review: 2, price: 2000, distance: 3 }, { id: 10, activity_title: "Activity Title Name5", star: 1.5, review: 2.5, price: 2000, distance: 3 } ]);
    const [swipe_list, setSwipe_list] = useState([]);
    const [tab, settab] = useState(0);
    const { nextStep, user_data } = datas;
    const leadingActions = (i) => <LeadingActions>
        <SwipeAction destructive={true} onClick={() => onDelete(i)}>
            <div className="swipe-remove">
                <img style={{ width: "40px", height: "40px" }} src={swipedelete}/>
            </div>
        </SwipeAction>
    </LeadingActions>
  ;
    const onDelete = (index) => {
        const tempSliceList = [...data];
        tempSliceList.splice(index, 1);
        setData(tempSliceList);
    };


    return (
        <>
            <div >
                <div className="row ml-0 mr-0"

                    style={{
                        background: "#2D9B63",
                        // background: "#2D9B63",
                        borderRadius: "0",

                        height: "150px"
                    }}
                >

                    <div className="col-12" >

                        <div className="input-group" style={{
                        }}>
                            <div style={{ marginTop: "60px", color: "#FFFFFF" }}className="input-group-prepend">
                                <div className="input-group-text "><img src={search1}/>
                                </div>
                            </div>
                            <input style={{ marginTop: "60px", Width: "327px", Height: "40px", color: "#A4A4A4" }}type="text" className="form-control h-auto border-left-0" id="inlineFormInputGroup" placeholder="Enter friends name " onChange={(e) => setSearch(e.target.value)}/>
                        </div>
                    </div>


                </div>
                <div className="row mr-0 ml-0">
                    <div className="col-6 pr-0 pl-0">
                        <button onClick={() => settab(0)}style={{ borderRadius: "8px", border: "1px", padding: "9px", backgroundColor: tab === 0 ? "#ffffff" : "#F0F0F0", color: "#2D9B63", borderRadius: "8px", fontSize: "12px", width: "100%", marginTop: "-30px" }}>Friend</button>
                    </div>
                    <div className="col-6 pr-0 pl-0">
                        <button onClick={() => settab(1)} style={{ borderRadius: "8px", border: "1px", padding: "9px", backgroundColor: tab === 1 ? "#ffffff" : "#F0F0F0", borderRadius: "8px", fontSize: "12px", width: "100%", marginTop: "-30px" }}>groups</button>

                    </div>
                </div>
                {/* <ul class="nav nav-tabs row"> */}

                {/* <li class="nav-item col-6" style={tab === 0 ? { color: 'green' } : { color: "#fffff" }}>
                        <p class="nav-link" data-toggle="tab" >Friends</p>
                    </li>
                    <li class="nav-item col-6" style={tab === 1 ? { color: 'green', background: "#fffff" } : { color: "#fffff", background: "#F0F0F0" }}>
                        <p class="nav-link" data-toggle="tab" >
                            Groups
                        </p>
                    </li> */}

                {/* </ul> */}


                <div class="tab-content">
                    {tab === 0 ? <Friends/> : <Groups/>}
                </div>


            </div>
        </>
    );
};
export default Friend;
