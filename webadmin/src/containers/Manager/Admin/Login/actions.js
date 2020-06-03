import { actions } from "./enums";
import * as apis from "../../../../apis";
import { setLocalStorage, STORE_KEYS } from "../../../../utils/tool";
import history from "../../../../history";

//const AUTHENTICATE_URL = "authenticate";
const LOGIN_URL = "admins/login"

export const submitLogin = (username, password) => async dispatch => {

  dispatch({
    type: actions.LOGIN_SUBMITTING,
    data: { err: false, status: actions.LOGIN_SUBMITTING },
  });

  const response = await apis.post(LOGIN_URL, {
    userName: username,
    password: password,
  });

  const { data: { token = "" } = {}, status = 0 } = response;

  if (status === 200) {
    setLocalStorage(STORE_KEYS.ACCESS_TOKEN, token);
    dispatch({
      type: actions.RESET_STATE,
    });
    history.push("/manager/admins");
  } else {
    dispatch({ type: actions.LOGIN_FAILURE, data: { err: true, status: "" } });
  }
};

export const updateState = value => dispatch => {
  const data = { ...value, ...{ err: false } };
  dispatch({
    type: actions.LOGIN_UPDATE,
    data,
  });
};