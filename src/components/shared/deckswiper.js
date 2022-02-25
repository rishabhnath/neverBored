import React, { useState, useEffect } from 'react';
import main from '../../assets/icons/main.svg';
import { Swipeable, direction } from 'react-deck-swiper';
import img1 from '../../assets/images/test/1.jpg';
import img2 from '../../assets/images/test/2.jpeg';
import img3 from '../../assets/images/test/3.jpg';
import infowhite from "../../assets/icons/infowhite.svg";
import BottomLogo from "../../containers/private/discovery/bottomLogo";
import locationwhite from "../../assets/icons/locationwhite.svg";
import Star from '../../components/shared/5star';
// import dorpdown from '../../../assets/icons/dropdown_right_arrow.svg';
import dorpdown from '../../assets/icons/dropdown_whight_arrow.svg';
import dorpdown1 from '../../assets/icons/dropdown_whight_arrow-left.png';


const Swiperdeck = () => {
    const [images, setImages] = useState([
        img1,
        img1,
        img3,
        img3
    ]);
    const [selected, setSelected] = useState(images[0]);
    const [index, setIndex] = useState(0);

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
    const handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
            // handle right swipe

            if (index > 0) {
                setSelected(images[index - 1]);
                setIndex(index - 1);
            }
            return;
        }

        if (swipeDirection === direction.LEFT) {
            // handle left swipe
            if (index < 3) {
                setSelected(images[index + 1]);
                setIndex(index + 1);
            }
        }
    };
    const handleOnSwipeButton = (swipeDirection) => {
        if (swipeDirection === "RIGHT") {
            // handle right swipe

            if (index > 0) {
                setSelected(images[index - 1]);
                setIndex(index - 1);
            }
            return;
        }

        if (swipeDirection === "LEFT") {
            // handle left swipe
            if (index < 3) {
                setSelected(images[index + 1]);
                setIndex(index + 1);
            }
        }
    };

    return (

        <Swipeable onSwipe={handleOnSwipe}>

            <div className="mainContainer">
                <div className="mainContainer2">
                    <img src={selected} alt="swipe image" className="deSImg" />

                    <div style={{ marginTop: "9%", position: "relative" }}>
                        <ol className="stepper-indicators stepper-indicators-white stepper-1 deck-indicator" >
                            <li className={index === 0 ? "active" : ""} ></li>
                            <li className={index === 1 ? "active" : ""} ></li>
                            <li className={index === 2 ? "active" : ""} ></li>
                            <li className={index === 3 ? "active" : ""} ></li>
                        </ol>
                    </div>
                    <div className="row mr-0 ml-0">
                        <div className="col-7">
                            <p style={{ fontSize: "19px", color: "#ffffff", fontWeight: "700", marginLeft: "8%" }}>Price: $25</p>
                        </div>

                        <div className="col-5">
                            <div className="row mr-0" >
                                {/* <div className="col-1" style={{ paddingLeft: "0px" }}>

                                </div>
                                <div className="col-4 ">
                                    <i class='fas fa-map-marker-alt'></i>
                                </div> */}
                                <div className="col-12" style={{ paddingLeft: "30%" }}>
                                    <p ><i class='fas fa-map-marker-alt'></i>   7.2km</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mr-0 ml-0" style={{ marginTop: "40%" }}>
                        <div className="col-2">
                            <a onClick={() => handleOnSwipeButton("RIGHT")}><img className="caret-hide" style={{ position: "relative" }} src={dorpdown1} /></a>
                        </div>
                        <div className="col-8">

                        </div>
                        <div className="col-2">
                            <a onClick={() => handleOnSwipeButton("LEFT")} ><img className="caret-hide" style={{ position: "relative" }} src={dorpdown} /></a>
                        </div>
                    </div>
                    <div className="row mr-0 ml-0" style={{ marginTop: "28%" }}>

                        <div className="col-12 mr-5 pl-5">
                            <p className="surfingText">Surfing the waves at Sea <img src={infowhite} /></p>
                        </div>
                        {/* <div className="col-1 mt-1 ml-3">
                            <img src={infowhite} />
                        </div> */}
                    </div>
                    <div className="row mr-0 ml-0" >

                        <div className="col-1 ml-5 ">

                        </div>

                        <div className="col-9" style={{ marginLeft: "51px" }}>
                            <center><span > 4.8<Star value={3.5}/> <span >12 reviews</span></span></center>
                        </div>
                        {/* <div className="col-4">
                            <span className="caret-hide " >12reviews</span>
                        </div> */}
                        <div className="row mr-0" style={{ marginTop: phone === "ios" ? "30%" : "36%" }}>
                            <BottomLogo />
                        </div>
                    </div>
                </div>

            </div>
        </Swipeable>
    );
};

export default Swiperdeck;
