//import * as ACTION from "../constants/ActionTypes";
// import { removeLocalStorage, STORE_KEYS } from "../utils/tools";

// /**
//  *
//  * Update Session
//  *
//  * @param token
//  * @param user
//  * @returns Object
//  *
//  */
// export const updateSession = (token, user) => {
//   return dispatch => {
//     global.localStorage.setItem("token", token);
//     global.localStorage.setItem("user", JSON.stringify(user));
//     dispatch({
//       type: ACTION.SESSION_UPDATE,
//       payload: { token, user },
//     });
//   };
// };

// /**
//  *
//  * Delete Session
//  *
//  * @param token
//  * @param user
//  * @returns Object
//  *
//  */
// export const deleteSession = () => {
//   return dispatch => {
//     removeLocalStorage(STORE_KEYS.ACCESS_TOKEN);
//     dispatch({
//       type: ACTION.SESSION_DELETE,
//     });
//   };
// };
