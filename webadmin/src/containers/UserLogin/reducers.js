import { actions } from "./enums";

const initialState = {
  status: "",
  err: false,
  username: "",
  password: "",
  isLogin: false,
};

export default (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case actions.USER_LOGIN_UPDATE: {
      return { ...state, ...data };
    }
    case actions.USER_LOGIN_SUCCESS:
      const { token, user, userId } = action.payload;
      global.localStorage.setItem("user_token", token);
      global.localStorage.setItem("user", JSON.stringify(user));
      global.localStorage.setItem("userId", JSON.stringify(userId));
      return { ...state, isLogin: true };
    case actions.USER_LOGIN_FAILURE:
      return { ...state, ...data };
    case actions.USER_LOGIN_SUBMITTING: {
      return { ...state, ...data };
    }
    case actions.RESET_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};