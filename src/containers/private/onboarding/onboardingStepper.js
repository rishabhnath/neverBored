import React, { useEffect, useState } from 'react';
import circle from '../../../assets/icons/circle.svg';
import backArrow from '../../../assets/icons/back_arrow.svg';
import Onboarding1 from './onboarding1';
import Onboarding2 from './onboarding2';
import Onboarding3 from './onboarding3';
import Onboarding4 from './onboarding4';
import Onboarding5 from './onboarding5';
import APIServices from '../../../core/services/data/api-services';
import { serverUrl } from '../../../configs/api-endpoints';
import useAlert from "../../../hooks/use-alert";


const Stepper = (stepCounter) => {
    const { step, updateStep } = stepCounter;
    const apiServices = new APIServices();
    const { openAlert } = useAlert();
    const [user_data, setUser_data] = useState([]);
    const [popup, setpopup] = useState(true);

    useEffect(() => {
        getUserInfo();
        setTimeout(() => setpopup(false), 3000);
    }, []);

    const getUserInfo = async () => {
        const url = `${serverUrl}/userInfo`;
        const userInfo = await apiServices.get(url);

        if (userInfo.results && !userInfo.results.success) {
            openAlert("error", "Invalid user!", "Please login again.");
        } else {
            console.log("userInfo.results", userInfo.results.data[0]);
            setUser_data(userInfo.results.data);
            if (userInfo.results && userInfo.results.data) {
                if (userInfo.results.data[0].location_city === null || userInfo.results.data[0].search_distance === null) updateStep(0);
                else if (userInfo.results.data[0].budget_min === null || userInfo.results.data[0].budget_max === null) updateStep(2);
                else if (userInfo.results.data[0].group_max_size === null || userInfo.results.data[0].group_min_size === null || userInfo.results.data[0].age_max_preferences === null || userInfo.results.data[0].age_min_preferences === null || userInfo.results.data[0].categories === null) updateStep(3);
            }
        }
    };

    const nextStep = () => {
        if (step < 4) updateStep(step + 1);
    };

    const backStep = () => {
        if (step > 0) updateStep(step - 1);
    };
    return (
        <>

            {step === 0 ? popup === true ? <div className="row onboarding-blue">

                <div className='col-2'>
                    <img src={circle}/>
                </div>
                <div className='col-10'>
                    <p className="text-white mt-2" style={{ fontSize: "10px" }}>Account  created successfully</p>
                </div>

            </div> : <div></div> : <>
                <div className="row">
                    <div className="col-2">
                        <a onClick={backStep}>
                            <img src={backArrow} alt="back" className="pt-4 " />
                        </a>
                        <div className="col-1">


                        </div>


                    </div>
                    <div className="col-8">
                    </div>
                    <div className="col-1">
                        <a onClick={nextStep}>
                            <p className="pt-4 skip-button-onboard">SKIP</p>
                        </a>

                    </div>
                </div>
            </>}
            <header>
                <ol className="stepper-indicators mt-3 mr-3">
                    <li className={stepCounter.step >= 0 ? "active" : ""}></li>
                    <li className={stepCounter.step >= 1 ? "active" : ""}></li>
                    <li className={stepCounter.step >= 2 ? "active" : ""}></li>
                    <li className={stepCounter.step >= 3 ? "active" : ""}></li>
                    <li className={stepCounter.step >= 4 ? "active" : ""}></li>
                </ol>
            </header>
            <section>
                <br />
                <br />
                {step === 0 ? <Onboarding1 nextStep={nextStep} /> : <></>}
                {step === 1 ? <Onboarding2 nextStep={nextStep} user_data={user_data} /> : <></>}
                {step === 2 ? <Onboarding3 nextStep={nextStep} user_data={user_data} /> : <></>}
                {step === 3 ? <Onboarding4 nextStep={nextStep} user_data={user_data} /> : <></>}
                {step === 4 ? <Onboarding5 nextStep={nextStep}/> : <></>}


                {/* <button className="next-btn btn-sm" onClick={nextStep}>Next</button> */}

            </section>


        </>
    );
};

export default Stepper;
