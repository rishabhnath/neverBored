import React, { createContext, useReducer } from 'react';

export const Store = createContext();

export const AppProvider = ({ children }) => {
    /*
     * const [userDetail, setUserDetail] = useReducer((state, action = {}) => {
     *     return action;
     * }, {});
     */

    /*
     * const [tokenDetail, setTokenDetail] = useReducer((state, action = {}) => {
     *     return action;
     * }, {});
     */

    const [alertDetail, setAlertDetail] = useReducer((state, action = {}) => {
        return action;
    }, {});

    /*
     * const [isSSOLoggedIn, setIsSSOLoggedIn] = useReducer((state, action = {}) => {
     *     return action;
     * }, false);
     */

    const rootReducer = {
        alertDetail,
        setAlertDetail
    };

    return <Store.Provider value={rootReducer}>{children}</Store.Provider>;
};
