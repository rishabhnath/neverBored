import React, { useEffect, useState } from 'react';
import org1 from '../../../assets/icons/org1.svg';
import bucketListGreen from '../../../assets/icons/bucketListgreen.svg';
import whiteCheckedGreenBackground from '../../../assets/icons/whiteCheckedGreenBackground.svg';
import goldCoinRank1 from '../../../assets/icons/goldCoinRank1.svg';
import Star from '../../../components/shared/5star';
import locationGrey from '../../../assets/icons/locationGrey.svg';
import updown from '../../../assets/icons/updown.svg';
import DiscoverFooter from '../discovery/discoverFooter';
import search1 from '../../../assets/icons/search1.svg';
import SortBy from './Sortby';
import swipedelete from '../../../assets/icons/swipedelete.svg';
import silverCoinRank2 from '../../../assets/icons/silverCoinRank2.svg';
import coinBrozeRank3 from '../../../assets/icons/coinBrozeRank3.svg';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction

} from 'react-swipeable-list';

import 'react-swipeable-list/dist/styles.css';


const BucketList1 = (datas) => {
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


    useEffect(() => {
        /*
         * setSwipe_list(
         *     data.map((item, i) => {
         *         return <div key={item.id}>
         */

        //             <SwipeableList >
        //                 <SwipeableListItem
        //                     leadingActions={leadingActions(i)}
        //                 >
        //                     {/* {i === 0 && <img src={goldCoinRank1} style={{ marginTop: "1.8rem" }} />}
        //                     {i === 1 && <img src={silverCoinRank2} style={{ marginTop: "1.8rem" }} />}
        //                     {i === 2 && <img src={coinBrozeRank3} style={{ marginTop: "1.8rem" }} />} */}
        //                     <div >
        //                         <div className="row mr-0">
        //                             <div className="col-3 card bucket-list-profile ml-4 border-0" style={{ backgroundImage: `url(${org1})` }}>
        //                                 <div className="col mt-2" >
        //                                     <button className="user-bucketList-card-bucket font-weight-bold text-success ml-n4" >
        //                                         <img src={bucketListGreen} />{"12"}
        //                                     </button>
        //                                     <span>
        //                                         <img className="mr-n4 float-right mt-1" src={whiteCheckedGreenBackground} />
        //                                     </span>
        //                                     {i === 0 && <img src={goldCoinRank1} style={{ marginTop: "1.8rem" }} />}
        //                                     {i === 1 && <img src={silverCoinRank2} style={{ marginTop: "1.8rem" }} />}
        //                                     {i === 2 && <img src={coinBrozeRank3} style={{ marginTop: "1.8rem" }} />}
        //                                 </div>

        //                             </div>

        //                             <div style={{ heightL: "10px" }} className="col-8 font-weight-bold">

        /*
         *                                 <div className="pt-2 h6 font-weight-bold"> {item.activity_title} </div>
         *                                 <div className="pt-1" style={{ fontSize: "12px" }}>{item.star} &nbsp;
         *                                     <Star value={item.star} /> &nbsp;   {item.review} Reviews</div>
         *                                 <div className="row text-secondary pt-1 mr-0">
         *                                     <div className="col-7" style={{ fontSize: "14px" }}>Price: ${item.price}</div>
         *                                     <div className="col" >
         *                                         <img src={locationGrey} />
         *                                         <span style={{ fontSize: "12px" }}>{" "}{item.distance}km</span>
         */

        /*
         *                                     </div>
         *                                 </div>
         *                             </div>
         */

        /*
         *                         </div>
         *                     </div>
         *                 </SwipeableListItem>
         *             </SwipeableList><br /></div>;
         *     })
         * );
         */
    }, [data]);

    return (
        <>
            <div >
                <div

                    style={{
                        marginBottom: "1%",
                        width: "90%",
                        // background: "#2D9B63",
                        borderRadius: "0"
                    }}
                >

                    <div className="col" >
                        <label className="sr-only" htmlFor="inlineFormInputGroup"> </label>
                        <div className="input-group mb-2" style={{ background: "#2D9B63", padding: "4%", marginLeft: "-16px",
                            marginTop: "-5px", width: "413px"
                        }}>
                            <div style={{ marginTop: "60px", color: "#FFFFFF" }}className="input-group-prepend">
                                <div className="input-group-text "><img src={search1}/>
                                </div>
                            </div>
                            <input style={{ marginTop: "60px", Width: "327px", Height: "40px", color: "#A4A4A4" }}type="text" className="form-control h-auto border-left-0" id="inlineFormInputGroup" placeholder="Try “Paintball”" placeholder="Try “Paintball”" onChange={(e) => setSearch(e.target.value)}/>
                        </div>
                    </div>


                    <div className="container-fluid">
                        <div className="row mr-0 mt-4 mb-4 ml-0">
                            <div className="col">
                                <a data-toggle="modal" data-target="#sortingBucketList">
                          Sort By<b> Personal Ranking</b>
                                </a>
                            </div>
                            <div className="col-2">
                                <a data-toggle="modal" data-target="#sortingBucketList">
                                    <img src={updown}/>
                                </a>
                            </div>
                        </div>
                        <div>
                            { data.map((item, i) => {
                                return <div key={item.id}>

                                    <SwipeableList >
                                        <SwipeableListItem
                                            leadingActions={leadingActions(i)}
                                        >
                                            <div >
                                                <div className="row mr-0">
                                                    <div className="col-3 card bucket-list-profile ml-4 border-0" style={{ backgroundImage: `url(${org1})` }}>
                                                        <div className="col mt-2" >
                                                            <button className="user-bucketList-card-bucket font-weight-bold text-success ml-n4" >
                                                                <img src={bucketListGreen} />{"12"}
                                                            </button>
                                                            <span>
                                                                <img className="mr-n4 float-right mt-1" src={whiteCheckedGreenBackground} />
                                                            </span>
                                                            {i === 0 && <img src={goldCoinRank1} style={{ marginTop: "1.8rem" }} />}
                                                            {i === 1 && <img src={silverCoinRank2} style={{ marginTop: "1.8rem" }} />}
                                                            {i === 2 && <img src={coinBrozeRank3} style={{ marginTop: "1.8rem" }} />}
                                                        </div>

                                                    </div>

                                                    <div style={{ heightL: "10px" }} className="col-8 font-weight-bold">

                                                        <div className="pt-2 h6 font-weight-bold"> {item.activity_title} </div>
                                                        <div className="pt-1" style={{ fontSize: "12px" }}>{item.star} &nbsp;
                                                            <Star value={item.star} /> &nbsp;   {item.review} Reviews</div>
                                                        <div className="row text-secondary pt-1 mr-0">
                                                            <div className="col-7" style={{ fontSize: "14px" }}>Price: ${item.price}</div>
                                                            <div className="col" >
                                                                <img src={locationGrey} />
                                                                <span style={{ fontSize: "12px" }}>{" "}{item.distance}km</span>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </SwipeableListItem>
                                    </SwipeableList><br />
                                </div>;
                            })}
                        </div>
                    </div>
                </div>
                {/* <div className="row footer-1 mr-0">
                    <div className="col">
                        <DiscoverFooter />

                    </div>
                </div> */}
                <div className="row mr-0">
                    <SortBy />
                </div>
            </div>
        </>
    );
};
export default BucketList1;
