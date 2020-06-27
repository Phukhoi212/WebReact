import { actions } from "./enums";

const initialState = {
  status: "",
  err: false,
  username: "",
  password: "",
};

export default (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case actions.LOGIN_UPDATE: {
      return { ...state, ...data };
    }
    case actions.LOGIN_SUCCESS:
      const { token, admin, adminId } = action.payload;
      global.localStorage.setItem("token", token);
      global.localStorage.setItem("admin", JSON.stringify(admin));
      global.localStorage.setItem("adminId", JSON.stringify(adminId));
      return state;
    case actions.LOGIN_FAILURE:
      return { ...state, ...data };
    case actions.LOGIN_SUBMITTING: {
      return { ...state, ...data };
    }
    case actions.RESET_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};