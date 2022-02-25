import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Suspense, useEffect } from 'react';
import PrivateRoute from "./hooks/private-route";
import Login from "./containers/public/Login";
import Alert from "./components/shared/alerts/alert";
import UserProfile from "./containers/private/UserProfile";
import Onboarding from "./containers/private/onboarding/Onboarding";
import emailLogin from "./containers/public/emailLogin";
import PublicUserProfile from "./containers/private/publicUser/PublicUserProfile";
import UserSettings from "./containers/private/settings_page/userSetting";
import SwipingAndMatchingSetting from "./containers/private/settings_page/swipingAndMatching";
import Preference from "./containers/private/settings_page/preference";
import Notification1 from "./containers/private/settings_page/notification";
import Muted from "./containers/private/settings_page/mutedorganisation";
import resetJudgement from "./containers/private/settings_page/resetJudgement";
import Discovery from "./containers/private/discovery/discovery";
import discoverFooter from "./containers/private/discovery/discoverFooter";
import bucketList from "./containers/private/bucketlist/bucketlist1";
import SignUp from "../src/containers/private/signUp/signUp";
import ResetPass from "./containers/public/resetPass";
import OtpRecovery from "./containers/public/passwordRecovery";
import Menu from "./containers/private/menu/menu";
import EditOrganisation from "./containers/private/organisation/editOrg";
import CreateOrganisation from "./containers/private/organisation/createOrg";
import Main from "./containers/private/mainscreen/main";
import EditProfile from "./containers/private/EditProfile/editprofile";
import EmailAddress from "./containers/private/EditProfile/emailAddress";
import ResetPassword from "./containers/private/EditProfile/ResetPassword";
// import UserMenu from "./src/containers/private/manager/userMenu";
import CreateActivity from "./src/containers/private/manager/createActivity";
function App() {
    useEffect(() => {
        localStorage.getItem("refreshToken") !== null && startRefreshTokenService();
    }, []);

    return (
        <>
            <Alert />

            <BrowserRouter>
                <Suspense>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/onboarding" component={Onboarding}/>
                        <Route exact path="/userLogin" component={emailLogin}/>
                        <Route exact path="/signup" component={SignUp}/>
                        <PrivateRoute exact path="/userprofile" component={UserProfile}/>
                        <PrivateRoute exact path="/" component={Login} />
                        <PrivateRoute exact path="/userPage" component={PublicUserProfile} />
                        <PrivateRoute exact path="/settings" component={UserSettings} />
                        <PrivateRoute exact path="/swipingAndMatchingSetting" component={SwipingAndMatchingSetting} />
                        <PrivateRoute exact path="/preferenceSetting" component={Preference} />
                        <PrivateRoute exact path="/notificationSetting" component={Notification1} />
                        <PrivateRoute exact path="/muted" component={Muted} />
                        <PrivateRoute exact path="/discovery" component={Discovery} />
                        <PrivateRoute exact path="/resetJudgement" component={resetJudgement} />
                        <PrivateRoute exact path="/discoverfooter" component={discoverFooter} />
                        {/* <PrivateRoute exact path="/bucketlist" component={BucketList1} /> */}
                        <PrivateRoute exact path="/resetpass" component={ResetPass} />
                        <PrivateRoute exact path="/otp" component={OtpRecovery} />
                        <PrivateRoute exact path="/editorg" component={EditOrganisation} />
                        <PrivateRoute exact path="/createorg" component={CreateOrganisation} />
                        <PrivateRoute exact path="/bucketList" component={bucketList} />
                        <PrivateRoute exact path="/main" component={Main} />
                        <PrivateRoute exact path="/editprofile" component={EditProfile} />
                        <PrivateRoute exact path="/emailaddress" component={EmailAddress} />
                        <PrivateRoute exact path="/resetpassword" component={ResetPassword} />
                        {/* <PrivateRoute exact path="/usermenu" component={UserMenu} /> */}
                        <PrivateRoute exact path="/usermenu1" component={CreateActivity} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;
