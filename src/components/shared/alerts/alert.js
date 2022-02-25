import React, { useContext, useEffect } from 'react';
import "../../../assets/css/alert.css";
import { Store } from '../../../providers/Store';

const Alert = () => {
    const { alertDetail } = useContext(Store);
    const alertRef = React.createRef();

    useEffect(() => {
        if (alertDetail && alertDetail.showAlert) {
            alertRef.current.click();
        }
    }, [alertDetail]);

    return (
        <>
            <a href="#myModal" data-toggle="modal" ref={alertRef}></a>
            <div id="myModal" className="modal fade">
                <div className="modal-dialog modal-confirm">
                    { alertDetail && alertDetail.type === "error" && <center><div className="modal-content w-75 alert-model-content" >
                        <div className=" flex-column">
                            {/* <div className="icon-box" style={{ border: "3px solid #EB5757" }}>
                                <i className="material-icons mt-0 axia-text-reject">&#x274C;</i>
                            </div> */}
                            {/* <h4 className="modal-title w-100 axia-text-reject">{alertDetail.title}</h4> */}
                            <button type="button" className="close mr-3 mt-3" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="p-0 mt-n2 text-white">
                            <p>{alertDetail.body}</p>
                        </div>
                        {/* <div class="modal-footer justify-content-center">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </div> */}
                    </div></center>
                    }

                    { alertDetail && alertDetail.type === "success" && <center><div className="modal-content w-75">
                        <div className="modal-header flex-column">
                            {/* <div className="icon-box" style={{ border: "3px solid #4c8208" }}>
                                <i className="material-icons mt-0 axia-text-approved">&#10003;</i>
                            </div> */}
                            <h4 className="modal-title w-100 axia-text-approved">{alertDetail.title}</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <p>{alertDetail.body}</p>
                        </div>
                        {/* <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div> */}
                    </div></center>
                    }

                </div>
            </div>
        </>
    );
};

export default Alert;
