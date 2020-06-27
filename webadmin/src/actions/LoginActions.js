// // Constants
// import * as ACTION from "../constants/ActionTypes";

// // Utils
// const PROTOCOL = process.env.REACT_APP_PROTOCOL;
// const HOST = process.env.REACT_APP_HOST;
// const PORT = process.env.REACT_APP_PORT;

// /**
//  *
//  * Login
//  *
//  * @returns {function(*, *): Promise<any>}
//  *
//  */
// export function login() {
//   return (dispatch, getState) => {
//     dispatch({ type: ACTION.LOGIN_START });

//     const username = getState().LoginReducer.username;
//     const password = getState().LoginReducer.password;

//     return fetch(`${PROTOCOL}://${HOST}:${PORT}/admins/login`, {
//       body: JSON.stringify({ username, password }),
//       method: "POST",
//     })
//       .then(response => response.json())
//       .then(json => {
//         if (!json.user) {
//           dispatch({
//             type: ACTION.LOGIN_ERROR,
//             message: json.message,
//           });
//           return Promise.reject(json);
//         }
//         dispatch({
//           type: ACTION.LOGIN_SUCCESS,
//           credentials: json,
//         });
//         dispatch({
//           type: ACTION.SESSION_UPDATE,
//           payload: json,
//         });
//         dispatch({ type: ACTION.LOGIN_COMPLETE });
//         return Promise.resolve(json);
//       })
//       .catch(error => {
//         dispatch({
//           type: ACTION.LOGIN_ERROR,
//           message: error.message,
//         });
//         return Promise.reject(error);
//       });
//   };
// }

// /**
//  *
//  * Update Password
//  *
//  * @param password
//  * @returns Object
//  *
//  */
// export function updatePassword(password) {
//   return dispatch => {
//     dispatch({
//       type: ACTION.UPDATE_PASSWORD,
//       payload: password,
//     });
//   };
// }
