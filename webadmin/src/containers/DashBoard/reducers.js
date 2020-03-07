import { actions } from "./enums";

const initialState = {
    userList: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_USER:
      return { ...state, userList: action.payload || [] };
    default:
      return state;
  }
};
