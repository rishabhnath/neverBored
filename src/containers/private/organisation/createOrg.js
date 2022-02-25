import React, { useState } from 'react';
import backArrow from '../../../assets/icons/backArrowWhite.svg';
import useAlert from '../../../hooks/use-alert';
import chooseimg from '../../../assets/icons/chooseimg.svg';
import emailIco from '../../../assets/icons/emailIco.svg';
import dropdown_right_arrow from '../../../assets/icons/dropdown_right_arrow.svg';
import phone from '../../../assets/icons/phone.svg';
import web from '../../../assets/icons/web.svg';
import org1 from '../../../assets/icons/org1.svg';
import orgstar from '../../../assets/icons/orgstar.svg';
import eye from '../../../assets/icons/eye.svg';
import orgbucket from '../../../assets/icons/orgbucket.svg';
import delete1 from '../../../assets/icons/delete1.svg';
import linkWhite from '../../../assets/icons/linkWhite.svg';


const CreateOrganisation = (props) => {
    const { openAlert } = useAlert();
    const [remember, setRemember] = useState(false);

    const back = () => {
        props.history.push("/settings");
    };

    return (
        <>
            <div className="fade-animation">
                <div className="card" style={{ height: "103px", background: "#2D9B63", borderRadius: "0" }}>
                    <div className="row mr-0">
                        <div className="col-3">
                            <a onClick={back}>
                                <img src={backArrow} alt="back" className="ml-4 caret-hide pt-5 back-button-user-login" />
                            </a>
                        </div>
                        <div className="col pt-5 font-weight-bold text-white caret-hide">
                            <span className="pl-3 caret-hide" style={{ fontSize: "18px", margin: "2%", marginTop: "17px" }}>Create Organisation</span>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: "30%",
                    marginTop: "7%" }} className="row">
                    <img src={chooseimg} className="rounded-circle" />


                </div>

                <br />
                <div className="row" style={{ border: "1px solid", width: "80%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                }}>
                    <div className="col ">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row ml-0">
                   Name
                        </div>

                        <div className="col-1"></div>
                        <input style={{ width: "234px",
                            marginTop: "-11px", border: "none", marginLeft: "-17px"
                        }}type="text" className="form-control h-auto border-left-0 login-input-right" id="inlineFormInputGroup" placeholder="example@mail.com" />
                    </div>
                </div>
                <br />
                <br />
                <div style={{ fontWeight: "bold",
                    fontSize: "20px", marginLeft: "32px" }} className="row mr-0">
                Contact details
                </div>
                <br />
                <div className="row" style={{ border: "1px solid", width: "80%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                         Email
                        </div>
                        <div className="row">
                            <div style={{ marginTop: "4px" }} className="col-1">
                                <img src={emailIco} />
                            </div><br />
                            <div className="col-1"></div>
                            <input style={{ width: "272px",
                                marginTop: "-34px",
                                border: "none",
                                marginLeft: "43px"
                            }} onChange={(e) => email(e.target.value) } type="text" className="form-control h-auto border-left-0 login-input-right" id="inlineFormInputGroup" placeholder="example@mail.com" />

                        </div>
                    </div>
                </div>
                <br />
                <div className="row" style={{ border: "1px solid", width: "80%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                         Phone
                        </div>
                        <div className="row">
                            <div style={{ marginTop: "4px" }} className="col-1">
                                <img src={phone} />
                            </div><br />
                            <div className="col-1"></div>
                            <input style={{ width: "272px",
                                marginTop: "-34px",
                                border: "none",
                                marginLeft: "43px"
                            }} // onChange={(e) => email(e.target.value) }
                            type="text" className="form-control h-auto border-left-0 login-input-right" id="inlineFormInputGroup" placeholder="+972-55-655-5412" />

                        </div>
                    </div>
                </div>
                <br />
                <div className="row" style={{ border: "1px solid", width: "80%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                }}>
                    <div className="col">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row">
                      Website
                        </div>
                        <div className="row">
                            <div style={{ marginTop: "4px" }} className="col-1">
                                <img src={web} />
                            </div><br />
                            <div className="col-1"></div>
                            <input style={{ width: "272px",
                                marginTop: "-34px",
                                border: "none",
                                marginLeft: "43px"
                            }} // ={(e) => email(e.target.value) }
                            type="text" className="form-control h-auto border-left-0 login-input-right" id="inlineFormInputGroup" placeholder="activity.com" />

                        </div>
                    </div>
                </div>
                <br />
                <div style={{ fontWeight: "bold",
                    fontSize: "16px", marginLeft: "32px" }} className="row mr-0">
               Address
                </div>
                <div style={{ marginTop: "10px" }} className="row">
                    <div className="row" style={{ border: "1px solid", width: "50%",
                        marginLeft: "11%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                    }}>
                        <div className="col ">
                            <div style={{ fontSize: "16px", fontWeight: "600" }} className="row ml-0">
                   Street
                            </div>

                            <div className="col-1"></div>
                            <input style={{ width: "160px",
                                marginTop: "-11px", border: "none", marginLeft: "-17px"
                            }}type="text" className="form-control h-auto border-left-0 login-input-right" id="inlineFormInputGroup" placeholder="example@mail.com" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row" style={{ border: "1px solid", width: "70%",
                            marginLeft: "5%", padding: "8%", borderRadius: "4%", border: "1.5px solid #AEAEAE", marginTop: "1px"
                        }}>
                            <div className="col ">
                                <div style={{ fontSize: "16px", fontWeight: "600" }} className="row ml-0">
                 Number
                                </div>

                                <div className="col-1"></div>
                                <input style={{ width: "60px",
                                    marginTop: "-11px", border: "none", marginLeft: "-17px"
                                }}type="text" className="form-control h-auto border-left-0 login-input-right" id="inlineFormInputGroup" placeholder="example@mail.com" />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "10px" }} className="row">
                    <div className="row" style={{ border: "1px solid", width: "30%",
                        marginLeft: "11%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                    }}>
                        <div className="col ">
                            <div style={{ fontSize: "16px", fontWeight: "600", marginTop: "4px" }} className="row ml-0">
                 Zip Code
                            </div>

                            <div className="col-1"></div>
                            <input style={{ width: "112px",
                                marginTop: "-11px", border: "none", marginLeft: "-17px"
                            }}type="text" className="form-control h-auto border-left-0 login-input-right" id="inlineFormInputGroup" placeholder="example@mail.com" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row" style={{ border: "1px solid", width: "80%",
                            marginLeft: "4%", padding: "8%", borderRadius: "4%", border: "1.5px solid #AEAEAE", marginTop: "1px"
                        }}>
                            <div className="col ">
                                <div style={{ fontSize: "16px", fontWeight: "600" }} className="row ml-0">
                City
                                </div>

                                <div className="col-1"></div>
                                <input style={{ width: "155px",
                                    marginTop: "-11px", border: "none", marginLeft: "-17px"
                                }}type="text" className="form-control h-auto border-left-0 login-input-right" id="inlineFormInputGroup" placeholder="example@mail.com" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "10px", border: "1px solid", width: "82%",
                    marginLeft: "8%", padding: "2%", borderRadius: "4%", border: "1.5px solid #AEAEAE"
                }}>
                    <div className="col ">
                        <div style={{ fontSize: "16px", fontWeight: "600" }} className="row ml-0">
                  Country
                        </div>

                        <div className="col-1"></div>
                        <input style={{ width: "234px",
                            marginTop: "-11px", border: "none", marginLeft: "-17px"
                        }}type="text" className="form-control h-auto border-left-0 login-input-right" id="inlineFormInputGroup" placeholder="example@mail.com" />
                    </div>
                </div>
                <br />
                <br />
                <hr />
                <div className="col-6">
                    <button className="next-btn2" >Create Account</button>
                </div>

            </div>
        </>
    );
};
export default CreateOrganisation;
