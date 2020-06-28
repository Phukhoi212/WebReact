import { actions } from "./enums";
import * as apis from "../../apis";
//import history from "../../history";

const USER_LOGIN_URL = "/customers/login";

export const userLogin = (userName, password) => async dispatch => {

  const response = await apis.post(USER_LOGIN_URL, {
    userName,
    password,
  });

  const { status = 0 } = response;

  if (status === 200) {
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