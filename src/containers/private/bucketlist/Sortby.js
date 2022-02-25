import React, { useState, useEffect } from 'react';
import useAlert from '../../../hooks/use-alert';
import bucketListSort from '../../../assets/images/bucketListSort.svg';

const SortBy = (props) => {
    const { openAlert } = useAlert();
    const userData = props.location && props.location.state || [];
    const [lang, setLang] = useState("");


    const onSort = (val) => {
        console.log(val, typeof val);
        if (lang === val) setLang("");
        else setLang(val);
    };


    useEffect(() => {
        if (userData.length > 0) {
            setLang(userData[0].language);
        }
    }, []);
    return (
        <>

            <div className="modal fade caret-hide" id="sortingBucketList" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog" role="document" style={{ margin: "410px 0 0 0" }}>
                    <div className="modal-content animate-bottom" style={{ height: "810px", borderRadius: "16px", marginLeft: "1px",
                        width: "96%" }}>

                        <div className="row mr-0">
                            <div className="col">
                                <center><img className="mt-3" src={bucketListSort} /></center>
                            </div>
                        </div>

                        <div className="modal-body">

                            <div className="container">
                                <div className="round1 label caret-hide">
                                    <p style={{ fontWeight: "600",
                                        fontSize: "16px" }}>Personal Ranking</p>
                                    <input className="caret-hide" style={{ borderColor: "#626262" }} type="checkbox" checked={lang === "personal"} id="checkbox1" onClick={() => onSort("personal")} />
                                    <label style={{ marginLeft: "87%" }} for="checkbox1"></label>
                                </div>
                                <div className="round1 label caret-hide">
                                    <p style={{ fontWeight: "600",
                                        fontSize: "16px" }}>Price (High to Low)</p>
                                    <input type="checkbox" checked={lang === "Price (High to Low)"} id="checkbox2" onClick={() => onSort("Price (High to Low)")} />
                                    <label style={{ marginLeft: "87%" }} for="checkbox2"></label>
                                </div>
                                <div className="round1 label caret-hide">
                                    <p style={{ fontWeight: "600",
                                        fontSize: "16px" }}>Price (Low to High)</p>
                                    <input className="caret-hide" style={{ borderColor: "#626262" }} type="checkbox" checked={lang === "Price (Low to High)"} id="checkbox3" onClick={() => onSort("Price (Low to High)")} />
                                    <label style={{ marginLeft: "87%" }} for="checkbox3"></label>
                                </div>
                                <div className="round1 label caret-hide">
                                    <p style={{ fontWeight: "600",
                                        fontSize: "16px" }}>Distance (nearest)
                                    </p>
                                    <input type="checkbox" checked={lang === "Distance (nearest)"} id="checkbox4" onClick={() => onSort("Distance (nearest)")} />
                                    <label style={{ marginLeft: "87%" }}for="checkbox4"></label>
                                </div>
                                <div className="round1 label caret-hide">
                                    <p style={{ fontWeight: "600",
                                        fontSize: "16px" }}>Distance (far first)</p>
                                    <input className="caret-hide" style={{ borderColor: "#626262" }} type="checkbox" checked={lang === "Distance (far first)"} id="checkbox5" onClick={() => onSort("Distance (far first)")} />
                                    <label style={{ marginLeft: "87%" }}for="checkbox5"></label>
                                </div>
                                <div className="round1 label caret-hide">
                                    <p style={{ fontWeight: "600",
                                        fontSize: "16px" }}>Score (low first)</p>
                                    <input className="caret-hide" style={{ borderColor: "#626262" }} type="checkbox"
                                        checked={lang === "Score (low first)"} id="checkbox6" onClick={() => onSort("Score (low first)")} />
                                    <label style={{ marginLeft: "87%" }} for="checkbox6"></label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};
export default SortBy;
