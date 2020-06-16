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
    case actions.LOGIN_UPDATE: {
      return { ...state, ...data };
    }
    case actions.LOGIN_SUCCESS:
      return { ...state, isLogin: true };
    case actions.LOGIN_FAILURE:
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