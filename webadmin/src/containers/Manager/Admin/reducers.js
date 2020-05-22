import { actions } from "./enums";

const initialState = {
  adminList: [],
  admin: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_ADMIN:
      return { ...state, adminList: action.payload || [] };
    case actions.GET_ADMIN_BY_ID:
      return { ...state, admin: action.payload || {} };
    default:
      return state;
  }
};
