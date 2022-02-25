import React, { useState, useEffect } from 'react';
import discover from '../../../assets/icons/discover.svg';
import search from '../../../assets/icons/search.svg';
import bucket from '../../../assets/icons/bucket.svg';
import friend from '../../../assets/icons/friend.svg';
import menu from '../../../assets/icons/menu.svg';
import APIServices from '../../../core/services/data/api-services';
import { serverUrl } from '../../../configs/api-endpoints';
import useAlert from "../../../hooks/use-alert";
import BucketList1 from '../bucketlist/bucketlist1';
import greenback from '../../../assets/icons/greenback.svg';
import searchgreen from '../../../assets/icons/searchgreen.svg';
import bucketgreen from '../../../assets/icons/bucketgreen.svg';
import friendgreen from '../../../assets/icons/friendgreen.svg';
import menugreen from '../../../assets/icons/menugreen.svg';


function DiscoverFooter(stepCounter) {
    const [value, setValue] = useState(0);
    const { step, updateStep } = stepCounter;
    const apiServices = new APIServices();
    const { openAlert } = useAlert();
    const [user_data, setUser_data] = useState([]);
    const [SR, setSR] = useState();
    const [phone, setphone] = useState("");
    useEffect(() => {
        const width = window.screen.width;
        const height = window.screen.height;
        const tempSR = { w: width, h: height };
        setSR(tempSR);
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"

        if (/android/i.test(userAgent)) {
            setphone("android");
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            setphone("ios");;
        }
        console.log(width, height);
    }, []);
    const height = window.screen.height;
    const stepUpdate = () => {
        updateStep(value);
    };
    useEffect(() => {
        stepUpdate();
    }, [value]);


    /*
     * const nextStep = () => {
     *     if (step < 1) updateStep(value);
     * };
     */

    /*
     * const backStep = () => {
     *     if (step > 0) updateStep(step - 1);
     * };
     */
    return (
        <div className={value === 0 ? "row fixed-bottom " : "row fixed-bottom "} style={{ width: "100%", background: "#ffff", top: phone === "ios" ? `${SR && SR.h - 233}px` : `${SR && SR.h - 155}px`, borderTop: "solid 1px", borderColor: "#E0E0E0" }} >
            {/* <div className='col-1'></div> */}

            <div onClick={() => setValue(0)} className="col-2" style={{ marginLeft: "3.6%" }}>

                { value === 0 ? <img src={greenback} /> : <img src={discover} />}

            </div>

            <div onClick={() => setValue(1)} className="col-2" style={{ marginLeft: "3%" }}>

                {/* <img src={search} /> */}
                { value === 1 ? <img src={searchgreen} /> : <img src={search} />}

            </div>
            <div onClick={() => setValue(2)} className="col-2" style={{ marginLeft: "3%" }} >


                {/* <img src={bucket} /> */}
                { value === 2 ? <img src={bucketgreen} /> : <img src={bucket} />}

            </div>
            <div onClick={() => setValue(3)} className="col-2" style={{ marginLeft: "3%" }} >

                {/* <img src={friend} /> */}
                { value === 3 ? <img src={friendgreen} /> : <img src={friend} />}

            </div>

            <div onClick={() => setValue(4)} className="col-2" style={{ marginLeft: "3%" }} >

                {/* <img src={menu} /> */}
                { value === 4 ? <img src={menugreen} /> : <img src={menu} />}

            </div>
            {/* <div className='col-1'></div> */}

        </div>
    );
}
export default DiscoverFooter;
