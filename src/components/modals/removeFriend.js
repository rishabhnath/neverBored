import React, { useState } from 'react';


const RemoveFriend = (props) => {
    const { value } = props;
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content mr-3" style={{ borderRadius: "16px" }}>
                        <div className="modal-header pt-4 border-0">
                            <h5 className="modal-title h6 font-weight-bold" id="exampleModalLabel">Remove friend</h5>
                            <button type="button" style={{ color: "#200E32", opacity: "1" }} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div style={{ fontSize: "14px" }} className=" p-2">Are you sure you want to remove <b>Johanna</b> as a friend on Neverbored?</div>
                        </div>
                        <div className="modal-footer border-0 d-block">
                            {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button> */}
                            <div className="row">
                                <div className="col-4">
                                    <button type="button" className="btn  font-weight-bold" style={{ height: "50px", borderRadius: "16px" }}>Cancel</button>
                                </div>

                                <div className="col-8">
                                    <button type="button" className="btn font-weight-bold text-white" style={{ height: "50px", borderRadius: "16px", width: "100%", background: "#F05757" }}>Remove </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RemoveFriend;
