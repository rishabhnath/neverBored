import React, { useState } from 'react';
import Discovery from '../discovery/discovery1';
import BucketList1 from '../bucketlist/bucketlist1';
import DiscoverFooter from '../discovery/discoverFooter';
import Friend from '../friend/friend';
import Profile from '../editProfile/profile';
function Main() {
    const [step, setStep] = useState(0);
    const [user_data, setUser_data] = useState([]);

    const updateStep = (value) => {
        console.log(value);
        setStep(value);
    };


    return (
        <>
            <div >
                {step === 0 && <Discovery /> }
                {step === 1 && <BucketList1 /> }
                {step === 2 && <BucketList1 /> }
                {step === 3 && <Friend /> }
                {step === 4 && <Profile /> }
                {/* { step === 0 ? <Discovery /> : <BucketList1 /> } */}
                {/* { step === 1 && <BucketList1 /> } */}
            </div>
            {/* <div className="row fixed-bottom mr-0"> */}
            <hr/>
            <div>
                <DiscoverFooter step={step} updateStep={updateStep}/>
            </div>

            {/* </div> */}
        </>
    );
}
export default Main;
