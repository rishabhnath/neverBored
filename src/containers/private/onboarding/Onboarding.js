import React, { useState, useEffect } from 'react';
import Stepper from './onboardingStepper';

function Onboarding(props) {
    const [step, setStep] = useState(0);
    const [phone, setphone] = useState("");
    const [SR, setSR] = useState();
    const initStep = props.location && props.location.state || [];
    console.log(initStep);
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
        setTimeout(() => {
            if (initStep && initStep.initStep) {
                updateStep(initStep.initStep);
            }
        }, 100);
    }, []);


    const updateStep = (value) => {
        setStep(value);
        console.log(value);
    };
    const nextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    const backStep = () => {
        if (step > 0) setStep(step - 1);
    };
    return (
        <>
            <div style={{ padding: "10%" }} className="onboarding-main">
                <Stepper step={step} updateStep={updateStep}/>
                <br/><br/>


            </div>
            {/* {step != 0 && step != 4 ?

                <div className="row  pt-3 ml-0 mr-0"style={{ width: "100%", background: "#ffff", marginTop: phone === "ios" ? `${window.screen.height - 850}px ` : `${window.screen.height - 800}px `, borderTop: "solid 1px", borderColor: "#E0E0E0", borderTop: "1px solid", borderColor: "#E5E5E5" }} >

                    <div className="col-6  ml-0 mr-0">
                        <button style={{ background: "#ffffff", border: "0px solid", padding: "8px", width: "100%", borderRadius: "16px", height: "64px" }} className=" btn-sm " onClick={backStep}>Back</button>
                    </div>
                    <div className="col-6 ml-0 mr-0">
                        <button style={{ background: "#2d9b63", border: "0px solid", padding: "8px", color: "#ffffff", width: "100%", borderRadius: "16px", height: "64px" }} className="btn-sm " onClick={nextStep}>Next</button>
                    </div>
                </div> : "" } */}
        </>
    );
}
export default Onboarding;
