import Notificatios from "./notifications";
import profileImage from '../../assets/images/profile-image.jpg';
import { useContext, useState } from "react";
import { Store } from "../../providers/Store";
import copyText from "../../core/utils/copy";
import { logoutUser } from '../../core/services/api/user-details';
import { withRouter } from "react-router-dom";

const Profile = (props) => {
    const { userDetail, setUserDetail } = useContext(Store);
    const [isCopied, setIsCopied] = useState(false);
    const [copyTitle, setCopyTitle] = useState("Copy to Clipboard");

    const onCopyText = (text) => {
        copyText(text);
        setIsCopied(true);
        setCopyTitle("Copied!");
    };

    const logout = () => {
        setUserDetail({});
        logoutUser();
        props.history.push("/login");
    };

    return (
        <>
            <div className="profile row d-md-initial d-lg-none d-xl-none">
                <div className="col-md-5">
                    <Notificatios />
                </div>
                <div className="col-md-3 d-flex dropleft show">
                    <img type="button" className="profile-image dropdown-toggle dropleft dropdown-toggle-split" src={profileImage} alt="" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Verified" />
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" >
                        <a className="dropdown-item" href="#"><ul className="profile-details">
                            <li className="gmail"><h6>{userDetail.userName}</h6></li>
                            <li className="gmail"><p><i className="far fa-copy mr-2"></i> 0*0551236...</p></li>
                        </ul></a>
                        <a class="dropdown-item" href="#">Logout</a>
                    </div>
                    <i className="fas fa-check-circle d-block mt-4 ml-n3"></i>
                </div>
                <div className="d-md-none">
                    <ul className="profile-details">
                        <li className="gmail"><h6>{userDetail.userName}</h6></li>
                        <li className="gmail"><p><i className="far fa-copy mr-2"></i> 0*0551236...</p></li>
                    </ul>
                    <i className="fas fa-angle-down"></i>
                </div>
            </div>
            <div className="d-sm-none d-md-none d-lg-block d-xl-block ">
                <div className="profile row">
                    <div className="col-xl-2 col-lg-2 col-md-1">
                        <Notificatios />
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-1 d-flex">
                        <img className="profile-image" src={profileImage} alt="" data-toggle="tooltip" data-placement="top" title="Verified" />
                        <i className="fas fa-check-circle d-block mt-4 ml-lg-n2"></i>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-10 d-flex text-right">
                        <ul className="profile-details mr-xl-2 profile_user_name mb-0 font-14px">
                            <br />
                            <li className="gmail"><p className="font-weight-bold mb-2">{userDetail.userName.length > 20 ? `${userDetail.userName.substring(0, 30)}...` : userDetail.userName}</p></li>
                            <li className="gmail"><p className="mb-2">0*0551236...<i className={isCopied ? "far fa-copy ml-2 axia-text-primary" : "far fa-copy ml-2 "} title={copyTitle} onClick={() => onCopyText("0*0551236")} ></i></p></li>
                            <li><p onClick={logout} className="font-weight-bold axia-text-reject mb-2">Logout</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withRouter(Profile);
