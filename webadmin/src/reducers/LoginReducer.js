import * as ACTION from "../constants/ActionTypes";

const initialState = {
  username: "",
  isFetching: false,
  message: "",
  password: "",
  token: "",
  user: ""
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.LOGIN_START:
      return { ...state, isFetching: true };

    case ACTION.LOGIN_COMPLETE:
      return {
        ...state,
        isFetching: false,
        message: "",
      };

    case ACTION.LOGIN_ERROR:
      return { ...state, message: action.message };

    // case ACTION.LOGIN_SUCCESS: {
    //   const { token, user } = action.payload;
    //   global.localStorage.setItem("token", token);
    //   global.localStorage.setItem("user", JSON.stringify(user));
    //   return state;
    // }

    case ACTION.UPDATE_PASSWORD:
      return { ...state, password: action.payload };

    case ACTION.SESSION_DELETE:
      return initialState;

    default:
      return state;
  }
}
