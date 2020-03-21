import { actions } from "./enums";

const initialState = {
    employeeList: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_EMPLOYEE:
      return { ...state, employeeList: action.payload || [] };
    default:
      return state;
  }
};
