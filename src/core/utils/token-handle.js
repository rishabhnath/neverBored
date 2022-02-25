import { decode } from 'jsonwebtoken';

const getAccessToken = () => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) return authToken;
};

const decodeToken = (authToken) => {
    const decodedToken = decode(authToken); // decode your token here
    return decodedToken;
};

export { getAccessToken, decodeToken };
