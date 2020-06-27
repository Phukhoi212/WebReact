import * as ACTION from "../constants/ActionTypes";
import { removeLocalStorage, STORE_KEYS } from "../utils/tool";

/**
 *
 * Update Session
 *
 * @param token
 * @param admin
 * @returns Object
 *
 */
export const updateSession = (token, admin) => {
    return dispatch => {
        global.localStorage.setItem("token", token);
        global.localStorage.setItem("admin", JSON.stringify(admin));
        dispatch({
            type: ACTION.SESSION_UPDATE,
            payload: { token, admin },
        });
    };
};

/**
 *
 * Delete Session
 *
 * @param token
 * @param user
 * @returns Object
 *
 */

export const deleteSessionAdmin = () => {
    return dispatch => {
        removeLocalStorage(STORE_KEYS.ACCESS_TOKEN);
        removeLocalStorage(STORE_KEYS.TOKEN);
        removeLocalStorage(STORE_KEYS.ADMIN);
        removeLocalStorage(STORE_KEYS.ADMIN_ID)
        dispatch({
            type: ACTION.SESSION_DELETE,
        });
    };
};

export const deleteSessionUser = () => {
    return dispatch => {
        removeLocalStorage(STORE_KEYS.USER_TOKEN);
        removeLocalStorage(STORE_KEYS.USER);
        removeLocalStorage(STORE_KEYS.USER_ID)
        dispatch({
            type: ACTION.USER_SESSION_DELETE,
        });
    };
};