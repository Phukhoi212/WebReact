import { actions } from "./enums";
import * as apis from "../../apis";
import { setLocalStorage, STORE_KEYS } from "../../utils/tool";
//import history from "../../history";

const USER_LOGIN_URL = "/customers/login";

export const userLogin = (userName, password) => async dispatch => {

  const response = await apis.post(USER_LOGIN_URL, {
    userName,
    password,
  });

  const { status = 0, data: { token = "" } } = response;
  if (status === 200) {
    setLocalStorage(STORE_KEYS.ACCESS_TOKEN, token);
    dispatch({
      type: actions.USER_LOGIN_SUCCESS,
      payload: response.data,
    });
    dispatch({
      type: actions.USER_LOGIN_SUBMITTING
    })
    //history.push("/");
  } else {
    dispatch({ type: actions.USER_LOGIN_FAILURE, data: { err: true, status: "" } });
  }
}