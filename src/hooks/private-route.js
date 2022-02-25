import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { getAccessToken, decodeToken } from "../core/utils/token-handle";
import { Store } from "../providers/Store";
import { fetchUserDetails } from "../core/services/api/user-details";
import Loader from "../components/shared/loader";

const PrivateRoute = ({
    path,
    component: Component,
    ...props
}) => {
    const { setUserDetail } = useContext(Store);
    const [isAuthenticated, setAuthenticationStatus] = React.useState(true);
    const [loading, setLoading] = React.useState(true);
    /**
     * function to validate the user type
     */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = getAccessToken();
                console.log(authToken);
                const decodedAccessTokenData = decodeToken(authToken);
                console.log(decodedAccessTokenData);

                if (decodedAccessTokenData) {
                    const userId = decodedAccessTokenData.user.user_id;
                    const latestUserData = await fetchUserDetails(userId);
                    setUserDetail(latestUserData.results.data);
                    setAuthenticationStatus(true);
                    // setLoading(false);
                } else {
                    setAuthenticationStatus(false);
                    // setLoading(false);
                }
            } catch (error) {
                console.log('privateRoute : ', error);
            }
        };
        fetchData();
    }, [path]);


    /**
     * to disable the right click and mouse click with control key
     */

    /*
     *  if it is in loading state
     * if (loading) return <Loader />;
     */

    const getComponent = (innerProps) => {
        if (Component) {
            return <Component {...innerProps} />;
        }
        return <Redirect to="/404" />;
    };
    // return a route
    return (
        <Route
            {...props}
            render={(innerProps) => isAuthenticated ? getComponent(innerProps) : <Redirect to="/login" />
            }
        />
    );
};

export default PrivateRoute;
