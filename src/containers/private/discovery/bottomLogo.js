import React, { useState, useEffect } from 'react';
import rate1 from '../../../assets/icons/rate1.svg';
import rate2 from '../../../assets/icons/rate2.svg';
import rate3 from '../../../assets/icons/rate3.svg';
import rate4 from '../../../assets/icons/rate4.svg';
import dislike from '../../../assets/icons/dislike.svg';
import like from '../../../assets/icons/like.svg';


function BottomLogo(props) {
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
            <div className=" bottom spacing" style={{ paddingLeft: phone === "ios" ? "1.5%" : "15px", marginLeft: "9PX" }} >
                <span className="col-2 caret-hide">
                    <a ><img className="swipe-revert-button" src={rate1} /></a>
                </span>
                <span className=" col-2 caret-hide">
                    <a ><img className="swipe-like-button" src={rate2} /></a>
                </span>

                <span className="col-2 caret-hide">
                    <a > <img className="swipe-like-button" src={rate3} /></a>
                </span>

                <span className="col-2 caret-hide">
                    <a> <img className="swipe-revert-button" src={rate4} /></a>
                </span>
            </div>
        </>
    );
};
export default BottomLogo;
