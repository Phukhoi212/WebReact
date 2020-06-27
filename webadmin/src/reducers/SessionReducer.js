import * as ACTION from "../constants/ActionTypes";

const admin = JSON.parse(global.localStorage.getItem("admin")) || null;
const adminId = JSON.parse(global.localStorage.getItem("adminId")) || null;
const token = global.localStorage.getItem("token") || null;
const isLogged = admin != null && token != null;

const initialState = {
  token,
  isLogged,
  admin,
  adminId,
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.SESSION_UPDATE:
      return {
        ...state,
        isLogged: true,
      };

    case ACTION.SESSION_DELETE:
      return {
        ...state,
        isLogged: false,
        token: "",
        admin: null,
        adminId: null,
      };

    default:
      return state;
  }
}
