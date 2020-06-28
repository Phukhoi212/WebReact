import { actions } from "./enums";

const initialState = {
  employList: [],
  employ: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_EMPLOYEES:
      return { ...state, employList: action.payload || [] };
    case actions.GET_EMPLOY_BY_ID:
      return { ...state, employ: action.payload || {} };
    default:
      return state;
  }
};
