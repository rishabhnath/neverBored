import React, { Fragment } from "react";
import Sidebar from "../components/shared/sidebar";

const ThemeContainer = ({ type = 'public', children }) => {
    return (

        <Fragment>
            {type === 'public' &&
                <Fragment>
                    <div className="container-fluid h-100">
                        {children}
                    </div>
                </Fragment>
            }
            {type === 'private' &&
                <Fragment>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-1">
                                <Sidebar />
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-11 mt-md-5">
                                {children}
                            </div>
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>

    );
};

export default ThemeContainer;
