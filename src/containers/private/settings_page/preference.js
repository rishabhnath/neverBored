import React, { useState, useEffect } from 'react';
import backArrow from '../../../assets/icons/backArrowWhite.svg';
import useAlert from '../../../hooks/use-alert';

const Preference = (props) => {
    const { openAlert } = useAlert();
    const userData = props.location && props.location.state || [];
    const [lang, setLang] = useState(true);


    const changeLang = (val) => {
        console.log(val, typeof val);
        if (lang === val) setLang("");
        else setLang(val);
    };
    const back = () => {
        props.history.push("/settings");
    };

    useEffect(() => {
        if (userData.length > 0) {
            setLang(userData[0].language);
        }
    }, []);
    return (
        <>
            <div className="fade-animation">
                <div className="card" style={{ height: "103px", background: "#2D9B63", borderRadius: "0" }}>
                    <div className="row mr-0">
                        <div className="col-3">
                            <a onClick={back}>
                                <img src={backArrow} alt="back" className="ml-4 pt-4 back-button-user-login" />
                            </a>
                        </div>
                        <div className="col pt-4 font-weight-bold text-white">
                            <span className="pl-3 caret-hide" style={{ fontSize: "18px", margin: "10%" }}>Preferences</span>
                        </div>
                    </div>
                </div>

                <div className="row pl-3 pr-3 mr-0">
                    <div className="col" >
                        <p className="font-weight-bold caret-hide" style={{ fontSize: "16px", marginTop: "4%" }}>Language</p>
                    </div>
                </div>
                <div class="container">
                    <div class="round1 caret-hide">
                        <input className="caret-hide" style={{ borderColor: "#626262" }} type="checkbox" checked={lang === "du"} id="checkbox1" onClick={() => changeLang("du")} />
                        <label for="checkbox1"></label>
                        <p className="caret-hide" style={{ marginLeft: "13%", fontWeight: "bold", marginTop: "-5%" }}>Nederlands</p>

                    </div>
                    <br />
                    <div class="round1 caret-hide" style={{ marginTop: "-7%" }}>
                        <input type="checkbox" checked={lang === "en"} id="checkbox2" onClick={() => changeLang("en")} />
                        <label for="checkbox2"></label>
                        <p style={{ marginLeft: "13%", fontWeight: "bold", marginTop: "-6%" }}>English</p>

                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Preference;
