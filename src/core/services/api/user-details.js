import APIServices from '../data/api-services';
import { serverUrl } from '../../../configs/api-endpoints';
import { TYPE_JSON } from '../../../utils/constants/http_type.js';

const aPIServices = new APIServices({});

const fetchUserDetails = async (userId) => {
    console.log(serverUrl);
    const URL = `${serverUrl}/userInfo?${userId}`;
    const user = await aPIServices.get(URL, TYPE_JSON);
    return user;
};

const loginUser = async (payload) => {
    console.log(payload);
    const URL = `${serverUrl.BASE_URL}${serverUrl.SIGN_IN}`;
    console.log(URL);
    const result = await aPIServices.post(URL, payload, TYPE_JSON);
    if (result && result.status === 200) {
        localStorage.setItem("authToken", result.results.data.accessToken);
        return result.results.data;
    }
    return result;
};

const registerUser = async (payload) => {
    const URL = `${serverUrl.BASE_URL}${serverUrl.SIGN_IN}`;
    const result = await aPIServices.post(URL, payload, TYPE_JSON);
    let message = "";
    if (result && result.status === 200) {
        return result.results;
    } else if (result.error) {
        if (result.status === 409) message = result.results.errors;
        if (result.status === 411) message = result.results.errors.validation.password;
    }
    result.message = message;
    return result;
};


const googleLogin = async (payload) => {
    console.log(serverUrl.BASE_URL);
    const URL = `${serverUrl.BASE_URL}${serverUrl.SIGN_IN}`;
    console.log(URL);
    const result = await aPIServices.post(URL, payload, TYPE_JSON);
    if (result && result.status === 200) {
        localStorage.setItem("authToken", result.results.data.accessToken);
        return result.results.data;
    }
    return result;
};

const logoutUser = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("constants");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("idToken");
};

export { fetchUserDetails, loginUser, logoutUser, registerUser, googleLogin };
