import React, { useState } from "react";
import useAlert from "../../../hooks/use-alert";
import lizabell from '../../../assets/images/default/lizabell.jpg';


const Menu = (props) => {
    const { openAlert } = useAlert();


    return (
        <>
            <div className="fade-animation mr-0"></div>
            <div className="row">
                <div className="col-2 ml-3 caret-hide">
                    <img style={{ width: "56px", height: "56px" }}src={lizabell} className="rounded-circle" />
                </div>

                <div className="col-6">
                    <p className="ml-2 caret-hide" style={{ marginLeft: "0%", fontWeight: "700", marginTop: "9%", width: "130" }}>Organisation name</p>
                </div>

            </div>
        </>
    );
};
export default Menu;
