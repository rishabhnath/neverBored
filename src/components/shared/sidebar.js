import axiaLogo from '../../assets/images/axia-logo.png';
import { NavLink } from "react-router-dom";
import React from 'react';

const Sidebar = () => {
    return (
        <div className="side-bar ml-xl-n3">
            <div className="axia-logo d-xl-block d-lg-block d-sm-none d-md-block pt-4">
                <img src={axiaLogo} alt="AXIA logo" />
            </div>
            <div className="mt-xl-4 mt-lg-4 mt-md-4 mt-sm-0 mt-0">
                <nav className=" nav-section navbar navbar-inverse fixed-left">
                    <ul className="nav-li nav navbar-nav d-sm-none d-md-block d-lg-block d-xl-block">
                        <NavLink activeClassName="active" to="dashboard">
                            <li className="navbar-item pl-md-2 pl-lg-3 pl-xl-3 sidebar_li">
                                <i className="mr-2 i-icon fa fa-database pr-xl-2"></i>
                                     Dashboard
                            </li>
                        </NavLink>
                        <NavLink activeClassName="active" to="kyc_verification">
                            <li className="navbar-item pl-md-2 pl-lg-3 pl-xl-3 sidebar_li">
                                <i className="mr-2 i-icon far fa-check-square pr-xl-2"></i>
                                     KYC
                                Verification</li></NavLink>

                        <li className="navbar-item font-w-600 pl-md-2 pl-lg-3 pl-xl-3" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="mr-2 i-icon fal fa-user-cog"></i>Manage Asset
                            <i className="fas fa-angle-down float-right mt-3 d-md-none d-lg-block mr-3"></i>
                        </li>

                        <div className="ml-4 collapse mt-0" id="collapseExample">
                            <ul className="nav-li nav navbar-nav">
                                <NavLink activeClassName="active" to="issue_and_manage_tokens"><li className="navbar-item pl-xl-3"><i className="mr-2 i-icon fal fa-database pr-xl-2"></i>
                                Create Token</li></NavLink>
                                <NavLink activeClassName="active" to="compliance_rules"><li className="navbar-item pl-xl-3"><i className="mr-2 i-icon fas fa-industry-alt pr-xl-2"></i>
                                Compliance</li></NavLink>

                                <NavLink activeClassName="active" to="distribution"><li className="navbar-item pl-xl-3"><i className="mr-2 i-icon fas fa-exchange-alt pr-xl-2"></i> Distribution</li></NavLink>
                            </ul>
                        </div>
                        {/* <NavLink activeClassName="active" to="login" onClick={logout}>
                            <li className="navbar-item pl-md-2 pl-lg-3 pl-xl-3 sidebar_li">
                                <i className="mr-2 i-icon fad fa-sign-out pr-xl-2"></i>
                                     Logout</li></NavLink> */}
                    </ul>
                </nav>
            </div>
        </div>
    );
};
export default Sidebar;
