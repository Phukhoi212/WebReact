import * as ACTION from "../constants/ActionTypes";

const user = JSON.parse(global.localStorage.getItem("user")) || null;
const userId = JSON.parse(global.localStorage.getItem("userId")) || null;
const token = global.localStorage.getItem("token") || null;
const isLogged = user != null && token != null;

const initialState = {
  user,
  token,
  isLogged,
  userId,
};

export default function sessionUserReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.USER_SESSION_UPDATE:
      return {
        ...state,
        isLogged: true,
      };

    case ACTION.USER_SESSION_DELETE:
      return {
        ...state,
        isLogged: false,
        token: "",
        user: null,
        userId: null,
      };

    default:
      return state;
  }
}
