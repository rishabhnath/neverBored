import React, { useState, useEffect } from "react";
import discovery from "../../../assets/icons/discovery.svg";
import useAlert from "../../../hooks/use-alert";
import dis1 from "../../../assets/icons/dis1.svg";
import dis2 from "../../../assets/icons/dis2.svg";
import dis3 from "../../../assets/icons/dis3.svg";
import Swiperdeck from '../../../components/shared/deckswiper';


const Discovery1 = (data) => {
    const { openAlert } = useAlert();
    const { nextStep } = data;
    const [phone, setphone] = useState("");
    useEffect(() => {
        const width = window.screen.width;
        const height = window.screen.height;
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
    return (
        <>

            <div className="card " style={{
                top: "0",
                bottom: "0",
                left: "0",
                position: "fixed",

                background: "#2D9B63",
                borderRadius: "0",
                width: "100%",
                height: "80px"

            }}
            >
                <div className="row mt-4  mr-0" style={{ marginLeft: "0px", marginRight: "0px" }}>
                    <div className="col-2 caret-hide ml-4">
                        <img src={discovery} />
                    </div>
                    <div className="col-4 text-white mr-5 mt-1">
                        <span className="caret-hide ml-n4" >
                                Neverbored
                        </span>
                    </div>
                    <div className="col-1 caret-hide ">
                        <img src={dis1} />
                    </div>
                    <div className="col-1 text-white ">
                        <img src={dis2} />
                    </div>
                    <div className="col-1 text-white1">
                        <img src={dis3} />
                    </div>
                </div>
            </div>
            <div className="row ml-0 mr-0 " style={{ marginTop: phone == "ios" ? "20%" : "22%" }}>
                <div className="col-12">
                    <Swiperdeck />
                </div>
            </div>

        </>
    );
};

export default Discovery1;
