import React, { useEffect, useState } from 'react';
import search1 from '../../../assets/icons/search1.svg';
import swipedelete from '../../../assets/icons/swipedelete.svg';
import updown from '../../../assets/icons/updown.svg';
import SortBy1 from './SortBy1';
import gropImage from '../../../assets/icons/gropImage.svg';
import defaultProfilePic from '../../../assets/images/default/lizabell.jpg';
const Groups = (datas) => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([ { id: 1, activity_title: "Activity Title Name1", star: 3.3, review: 20, price: 2000, distance: 4 }, { id: 2, activity_title: "Activity Title Name2", star: 2.3, review: 25, price: 2000, distance: 1 }, { id: 3, activity_title: "Activity Title Name3", star: 3.5, review: 15, price: 2000, distance: 2 }, { id: 4, activity_title: "Activity Title Name4", star: 4.5, review: 2, price: 2000, distance: 3 }, { id: 5, activity_title: "Activity Title Name5", star: 1.5, review: 2.5, price: 2000, distance: 3 }, { id: 6, activity_title: "Activity Title Name1", star: 3.3, review: 20, price: 2000, distance: 4 }, { id: 7, activity_title: "Activity Title Name2", star: 2.3, review: 25, price: 2000, distance: 1 }, { id: 8, activity_title: "Activity Title Name3", star: 3.5, review: 15, price: 2000, distance: 2 }, { id: 9, activity_title: "Activity Title Name4", star: 4.5, review: 2, price: 2000, distance: 3 }, { id: 10, activity_title: "Activity Title Name5", star: 1.5, review: 2.5, price: 2000, distance: 3 } ]);
    const [swipe_list, setSwipe_list] = useState([]);

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
    const [sort, setsort] = useState("");
    const [data1, setData1] = useState([ { id: 1, activity_title: "Groups's name", star: 3.3, review: 20, price: 2000, distance: 4 }, { id: 2, activity_title: "Groups's name", star: 2.3, review: 25, price: 2000, distance: 1 }, { id: 3, activity_title: "Groups's name", star: 3.5, review: 15, price: 2000, distance: 2 } ]);
    const Activity = { setsort };

    return (
        <>
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
            <div className="row mr-0">
                <SortBy1 Activity={Activity}/>
            </div>
            { data1.map((item, i) => {
                return <div key={item.id}>

                    <div className="row mr-0 mt-2">
                        <div className="col-3">
                            <div>  <img style={{ marginLeft: "30%", borderRadius: "50%", height: "30px" }} src={defaultProfilePic} /></div>
                            <div style={{ marginLeft: "-23px",
                                marginTop: "-23px"
                            }}> <img style={{ marginLeft: "30%", borderRadius: "50%", height: "30px" }} src={gropImage} /></div>


                        </div>
                        <div className="col-6 pt-1" style={{ paddingTop: "13px" }}>
                            <span className="pl-3 caret-hide" style={{ fontSize: "14px", margin: "2%", marginTop: "17px" }}><b>Groups name</b></span>
                        </div>
                        <div className="col-3">
                            <button style={{ width: "100%", color: "#2D9B63", borderColor: "#2D9B63", border: "solid 1px", borderRadius: "6px", background: "white"
                            }}>Match</button>
                        </div>
                    </div>
                </div>;
            })}
        </>
    );
};
export default Groups;
