import { HOUR } from '../../../utils/constants/time';

let intervalId = null;

const startRefreshTokenService = () => {
    if (intervalId !== null) return;
    intervalId = setInterval(() => {
        refreshToken();
    }, HOUR);
};

const stopRefreshTokenService = () => {
    clearInterval(intervalId);
    intervalId = null;
};

export { startRefreshTokenService, stopRefreshTokenService };
