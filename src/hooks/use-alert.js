import React, { useContext } from "react";
import { Store } from "../providers/Store";

/**
 * custom form handle along with validation
 * @returns {{ openAlert: Function }}
 */
const useAlert = () => {
    const { setAlertDetail } = useContext(Store);
    const openAlert = (type, title, body) => {
        setAlertDetail({ showAlert: true, type, title, body });
    };

    return {
        openAlert
    };
};
export default useAlert;
