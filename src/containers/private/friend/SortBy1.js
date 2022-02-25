import React, { useState, useEffect } from 'react';
import useAlert from '../../../hooks/use-alert';
import bucketListSort from '../../../assets/images/bucketListSort.svg';

const SortBy1 = ({ Activity }) => {
    const { openAlert } = useAlert();

    const [lang, setLang] = useState("");


    const onSort = (val) => {
        console.log(val);
        Activity.setsort(val);
        console.log(val, typeof val);
        if (lang === val) setLang("");
        else setLang(val);
    };


    useEffect(() => {
        // console.log(setsort);
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
                                        fontSize: "16px" }}>Match Frequency</p>
                                    <input className="caret-hide" style={{ borderColor: "#626262" }} type="checkbox" checked={lang === "Match Frequency"} id="checkbox1" onClick={() => onSort("Match Frequency")} />
                                    <label style={{ marginLeft: "87%" }} for="checkbox1"></label>
                                </div>
                                <div className="round1 label caret-hide">
                                    <p style={{ fontWeight: "600",
                                        fontSize: "16px" }}>Personal Ranking</p>
                                    <input type="checkbox" checked={lang === "Personal Ranking"} id="checkbox2" onClick={() => onSort("Personal Ranking")} />
                                    <label style={{ marginLeft: "87%" }} for="checkbox2"></label>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};
export default SortBy1;
