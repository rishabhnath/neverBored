import React, { useState } from "react";
import discovery from "../../../assets/icons/discovery.svg";
import useAlert from "../../../hooks/use-alert";
import dis1 from "../../../assets/icons/dis1.svg";
import dis2 from "../../../assets/icons/dis2.svg";
import dis3 from "../../../assets/icons/dis3.svg";
import DiscoverFooter from "./discoverFooter";
import Swiperdeck from '../../../components/shared/deckswiper';


const Discovery = (data) => {
    const { openAlert } = useAlert();
    const { nextStep } = data;
    return (
        <>
            <div className="fade-animation mr-0">
                <div
                    className="card header-1"
                    style={{
                        marginBottom: "1%",
                        height: "130px",
                        background: "#2D9B63",
                        borderRadius: "0",
                        width: "108%"
                    }}
                >
                    <div className="row mr-3 ml-3" style={{ marginTop: "13%" }}>
                        <div className="caret-hide">
                            <img className="mt-1" src={discovery} />
                        </div>
                        <div className="col-6 text-white mt-2">
                            <span className="caret-hide" style={{ fontSize: "18px" }}>
                Neverbored
                            </span>
                        </div>
                        <div className="caret-hide"></div>

                        <div className="col-1 caret-hide mt-2 ml-2">
                            <img src={dis1} />
                        </div>
                        <div className="col-1 text-white mt-2 ml-1">
                            <img src={dis2} />
                        </div>
                        <div className="col-1 text-white mt-2 ml-1">
                            <img src={dis3} />
                        </div>
                    </div>
                </div>

                <div className="row mr-0">
                    <div className="col">
                        <Swiperdeck />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Discovery;
