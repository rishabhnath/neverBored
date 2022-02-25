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
    useEffect(() => {
        const width = window.screen.width;
        const height = window.screen.height;
        const tempSR = { w: width, h: height };
        setSR(tempSR);
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
        <div className={value === 0 ? "row fixed-bottom p-4 mt-5" : "row fixed-bottom p-4"} style={{ top: `${SR && SR.h - 200}px` }} >
            {/* <div className='col-1'></div> */}

            <div onClick={() => setValue(0)} className="col" style={ value === 0 ? { maxWidth: "20%" } : { background: "#ffff", maxWidth: "20%" } }>
                <div className="row" >
                    <center><div className="col" >
                        { value === 0 ? <img src={greenback} /> : <img className='mt-2' src={discover} />}
                    </div></center>

                </div>
            </div>

            <div onClick={() => setValue(1)} className="col" style={ value === 1 ? { maxWidth: "20%" } : { background: "#ffff", maxWidth: "20%" } }>
                <div className="row" >
                    <center><div className="col " >
                        {/* <img className='mt-2' src={search} /> */}
                        { value === 1 ? <img className='ml-n2' src={searchgreen} /> : <img className='mt-2' src={search} />}
                    </div></center>

                </div>
            </div>
            <div onClick={() => setValue(2)} className="col" style={ value === 2 ? { maxWidth: "20%" } : { background: "#ffff", maxWidth: "20%" } }>

                <div className="row " >
                    <center>  <div className="col" >
                        {/* <img src={bucket} /> */}
                        { value === 2 ? <img className='ml-n2' src={bucketgreen} /> : <img className='mt-2' src={bucket} />}
                    </div></center>

                </div>
            </div>
            <div onClick={() => setValue(3)} className="col" style={ value === 3 ? { maxWidth: "20%" } : { background: "#ffff", maxWidth: "20%" } }>
                <div className="row mt-1" >
                    <center><div className="col" >
                        {/* <img src={friend} /> */}
                        { value === 3 ? <img className='ml-n2' src={friendgreen} /> : <img className='mt-2' src={friend} />}
                    </div></center>

                </div>
            </div>

            <div onClick={() => setValue(4)} className="col " style={ value === 4 ? { maxWidth: "20%" } : { background: "#ffff", maxWidth: "20%" } }>
                <div className="row" >
                    <center>
                        <div className="col" >
                            {/* <img className='mt-2' src={menu} /> */}
                            { value === 4 ? <img className='ml-n2' src={menugreen} /> : <img className='mt-2' src={menu} />}
                        </div></center>

                </div>
            </div>
            {/* <div className='col-1'></div> */}

        </div>
    );
}
export default DiscoverFooter;
