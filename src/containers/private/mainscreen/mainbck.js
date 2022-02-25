import React, { useState } from 'react';
import Discovery from '../discovery/discovery';
import BucketList1 from '../bucketlist/bucketlist1';
import DiscoverFooter from '../discovery/discoverFooter';

function Main() {
    const [step, setStep] = useState(0);
    const [user_data, setUser_data] = useState([]);

    const updateStep = (value) => {
        console.log(value);
        setStep(value);
    };


    return (
        <>
            <div className="row mr-0" >
                { step === 0 ? <Discovery /> : <BucketList1 /> }
                {/* { step === 1 && <BucketList1 /> } */}
            </div>
            {/* <div className="row fixed-bottom mr-0"> */}
            <DiscoverFooter step={step} updateStep={updateStep}/>
            {/* </div> */}
        </>
    );
}
export default Main;
