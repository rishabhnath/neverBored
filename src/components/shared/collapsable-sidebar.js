import React from 'react';
import { NavLink } from "react-router-dom";
import axiaLogo from '../../assets/images/axia-logo.png';


class CollapsableSidebar extends React.Component {
    render() {
        return (
            <div className="mt-4">
                <nav className="navbar navbar-expand-lg navbar-light pl-0">
                    <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02" style={{ position: 'relative', zIndex: '1' }}>
                        <div className="side-bar" style={{ width: "170%" }}>
                            <div className="axia-logo">
                                <img src={axiaLogo} alt="AXIA logo" />
                            </div>
                            <div className="mt-4">
                                <nav className=" nav-section navbar navbar-inverse fixed-left">
                                    <ul className="nav-li nav navbar-nav">
                                        <NavLink activeClassName="active" to="dashboard">
                                            <li className="navbar-item">
                                                <i className="mr-2 i-icon fa fa-database"></i>
                                                <span> Dashboard</span>
                                            </li>
                                        </NavLink>
                                        <NavLink activeClassName="active" to="kyc_verification">
                                            <li className="navbar-item">
                                                <i className="mr-2 i-icon far fa-check-square"></i>
                                                <span> KYC Verification </span>
                                            </li>
                                        </NavLink>

                                        <li className="navbar-item font-w-600" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                            <i className="mr-2 i-icon fal fa-user-cog"></i>
                                            <span> Manage Asset </span>
                                            <i className="fas fa-angle-down float-right mt-3 mr-3"></i>
                                        </li>

                                        <div className="ml-4 collapse mt-0" id="collapseExample">
                                            <ul className="nav-li nav navbar-nav">
                                                <NavLink activeClassName="active" to="issue_and_manage_tokens"><li className="navbar-item"><i className="mr-2 i-icon fal fa-database"></i>
                                                    Create Token</li></NavLink>
                                                <NavLink activeClassName="active" to="compliance_rules"><li className="navbar-item "><i className="mr-2 i-icon fas fa-industry-alt"></i>
                                                    Compliance</li></NavLink>

                                                <NavLink activeClassName="active" to="distribution"><li className="navbar-item "><i className="mr-2 i-icon fas fa-exchange-alt"></i> Distribution</li></NavLink>
                                            </ul>
                                        </div>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
};
export default CollapsableSidebar;
