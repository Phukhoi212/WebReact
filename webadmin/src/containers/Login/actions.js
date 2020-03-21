// import { actions } from "./enums";
// import * as apis from "../../apis";
//import { setLocalStorage, STORE_KEYS } from "../../utils/tools";
//import history from "../../history";

//const AUTHENTICATE_URL = "authenticate";

// export const submitLogin = () => async (dispatch, getState) => {
//   const { LoginReducer: { username, password } = {} } = getState();

//   dispatch({
//     type: actions.LOGIN_SUBMITTING,
//     data: { err: false, status: actions.LOGIN_SUBMITTING },
//   });

//   const response = await apis.post(AUTHENTICATE_URL, {
//     username,
//     password,
//   });

//   const { data: { token = "" } = {}, status = 0 } = response;

//   if (status === 200) {
//     setLocalStorage(STORE_KEYS.ACCESS_TOKEN, token);
//     dispatch({
//       type: actions.RESET_STATE,
//     });
//     history.push("/");
//   } else {
//     dispatch({ type: actions.LOGIN_FAILURE, data: { err: true, status: "" } });
//   }
// };

// export const updateState = value => dispatch => {
//   const data = { ...value, ...{ err: false } };
//   dispatch({
//     type: actions.LOGIN_UPDATE,
//     data,
//   });
// };